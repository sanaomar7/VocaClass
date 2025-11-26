// backend/src/controllers/planner.controller.js
import { APPS } from '../data/apps.js';


export const getRecommendations = (req, res) => {
  const {
    child,
    goals = [],
    language = 'en',

    routine: {
      daysPerWeek = 5,
      minutesPerDay = 20,
      timeOfDay = 'evening',
    } = {},

    themeCharacterId = 'lingo',

    age,
    goal,
  } = req.body || {};

  const ageRange = child?.ageRange || age || null;
  const effectiveGoals =
    goals && goals.length > 0 ? goals : goal ? [goal] : [];

  let candidates = [...APPS];

  if (ageRange) {
    candidates = candidates.filter((app) => app.ageRange === ageRange);
  }

  if (language !== 'both') {
    candidates = candidates.filter((app) => {
      if (!app.languages) return true;
      return app.languages.includes(language);
    });
  }

  const scored = candidates.map((app) => {
    const skillsMatchCount = effectiveGoals.length
      ? app.skills.filter((skill) => effectiveGoals.includes(skill)).length
      : 0;

    const ratingScore = app.rating || 0;
    const downloadsScore = app.downloads
      ? Math.min(app.downloads / 1_000_000, 3)
      : 0;

    const score = skillsMatchCount * 3 + ratingScore + downloadsScore;

    return { ...app, score };
  });

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return b.rating - a.rating;
  });

  const apps = scored.slice(0, Math.max(4, Math.min(6, scored.length)));

  const allDays = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const safeDaysPerWeek = Math.min(
    Math.max(parseInt(daysPerWeek, 10) || 5, 1),
    7
  );

  const selectedDays = allDays.slice(0, safeDaysPerWeek);

  const minutes = Math.max(parseInt(minutesPerDay, 10) || 20, 10);
  const sessionsPerDay = Math.max(1, Math.round(minutes / 10));

  const schedule = selectedDays.map((day, dayIndex) => {
    const sessions = [];

    for (let i = 0; i < sessionsPerDay; i += 1) {
      if (!apps.length) break;

      const appIndex = (dayIndex + i) % apps.length;
      const app = apps[appIndex];

      sessions.push({
        type: 'app',
        appId: app.id,
        label: `10 min with ${app.name}`,
      });
    }

    return {
      day,
      timeOfDay,
      minutes,
      sessions,
    };
  });

  res.json({
    planId: Date.now().toString(),
    summary: {
      childName: child?.nickname || 'Your learner',
      ageRange,
      goals: effectiveGoals,
      language,
      daysPerWeek: safeDaysPerWeek,
      minutesPerDay: minutes,
      themeCharacterId,
    },
    apps: apps.map(({ score, ...rest }) => rest),
    schedule,
  });
};
