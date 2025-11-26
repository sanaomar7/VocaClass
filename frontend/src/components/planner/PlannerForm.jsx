// frontend/src/components/planner/PlannerForm.jsx
import { useState } from 'react';
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';
import { KIDEO_CHARACTERS } from '../../lib/kideoCharacters.js';

const STEPS = ['Learner', 'Goals & character', 'Routine'];

const GOAL_OPTIONS = [
  { id: 'vocabulary', label: 'Vocabulary & speaking', icon: 'chat' },
  { id: 'reading', label: 'Reading & phonics', icon: 'menu_book' },
  { id: 'creativity', label: 'Creativity & art', icon: 'palette' },
  { id: 'math', label: 'Math & logic', icon: 'calculate' },
];

const CHARACTER_OPTIONS = KIDEO_CHARACTERS;

const PlannerForm = ({ onSubmit, loading }) => {
  const [step, setStep] = useState(0);

  // Step 1
  const [childName, setChildName] = useState('');
  const [ageRange, setAgeRange] = useState('3-5');
  const [language, setLanguage] = useState('en');

  // Step 2
  const [goals, setGoals] = useState(['vocabulary', 'reading']);
  const [themeCharacterId, setThemeCharacterId] = useState('pixel');

  // Step 3 — always NUMBER
  const [daysPerWeek, setDaysPerWeek] = useState(5);
  const [minutesPerDay, setMinutesPerDay] = useState(20);
  const [timeOfDay, setTimeOfDay] = useState('evening');

  const toggleGoal = (goalId) => {
    setGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((g) => g !== goalId)
        : [...prev, goalId]
    );
  };

  const canGoNext = () => {
    if (step === 0) return Boolean(ageRange) && Boolean(language);
    if (step === 1) return goals.length > 0 && Boolean(themeCharacterId);
    if (step === 2) return daysPerWeek > 0 && minutesPerDay > 0;
    return true;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    if (step < STEPS.length - 1) {
      if (!canGoNext()) return;
      setStep(step + 1);
      return;
    }

    const payload = {
  child: {
    nickname: childName || '',
    ageRange,
  },
  goals,
  language,
  daysPerWeek: Number(daysPerWeek),
  minutesPerDay: Number(minutesPerDay),
  timeOfDay,
  themeCharacterId,
};


    onSubmit?.(payload);
  };

  return (
    <Card className="planner-card">
      <div className="planner-card-header">
        <h2 className="planner-title">Design a playful weekly journey.</h2>
        <p className="planner-subtitle">
          Tell us about your little learner and we&apos;ll build a one-week plan.
        </p>
      </div>

      {/* STEPS */}
      <div className="planner-steps">
        {STEPS.map((label, index) => {
          const state =
            index === step ? 'active' : index < step ? 'done' : 'idle';

          return (
            <div
              key={label}
              className={`planner-step planner-step--${state}`}
              onClick={() => {
                if (index <= step) setStep(index);
              }}
            >
              <div className="planner-step-circle">{index + 1}</div>
              <div className="planner-step-meta">
                <span className="planner-step-number">Step {index + 1}</span>
                <span className="planner-step-label">{label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FORM */}
      <form className="planner-form-inner" onSubmit={handleSubmit}>
        {/* ========== STEP 1 ========== */}
        {step === 0 && (
          <div className="planner-step-grid">
            <h3 className="planner-step-title">Tell us about your learner</h3>
            <p className="planner-step-text planner-step-text--compact">
              We&apos;ll use this to pick Kideo-style apps.
            </p>

            <div className="form-group">
              <label>Child nickname (optional)</label>
              <div className="field-with-icon">
                <span className="field-icon">🙂</span>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="Lina, Adam..."
                />
              </div>
            </div>

            <div className="form-group">
              <label>Age range</label>
              <div className="field-with-icon">
                <span className="field-icon">🎈</span>
                <select value={ageRange} onChange={(e) => setAgeRange(e.target.value)}>
                  <option value="3-5">3–5 years</option>
                  <option value="6-8">6–8 years</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Learning language</label>
              <div className="chip-row">
                {['en', 'ar', 'en+ar'].map((lng) => (
                  <button
                    key={lng}
                    type="button"
                    className={`chip ${language === lng ? 'chip--active' : ''}`}
                    onClick={() => setLanguage(lng)}
                  >
                    {lng.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========== STEP 2 ========== */}
        {step === 1 && (
          <div className="planner-step-grid">
            <h3 className="planner-step-title">Pick goals & a character</h3>
            <p className="planner-step-text">Choose the focus for this week.</p>

            <div className="form-group">
              <label>Main goals</label>
              <div className="chip-row">
                {GOAL_OPTIONS.map((goal) => (
                  <button
                    key={goal.id}
                    type="button"
                    className={`chip ${goals.includes(goal.id) ? 'chip--active' : ''}`}
                    onClick={() => toggleGoal(goal.id)}
                  >
                    <span className="material-symbols-rounded chip-icon">
                      {goal.icon}
                    </span>
                    {goal.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Character theme</label>
              <div className="character-row">
                {CHARACTER_OPTIONS.map((character) => (
                  <button
                    key={character.id}
                    type="button"
                    className={`character-pill ${
                      themeCharacterId === character.id ? 'character-pill--active' : ''
                    }`}
                    onClick={() => setThemeCharacterId(character.id)}
                  >
                    <div className="character-pill-avatar">
                      <img src={character.icon} alt={character.name} />
                    </div>
                    <span className="character-pill-text">
                      <span className="character-pill-name">{character.name}</span>
                      <span className="character-pill-role">{character.role}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========== STEP 3 ========== */}
        {step === 2 && (
          <div className="planner-step-grid">
            <h3 className="planner-step-title">Set a weekly routine</h3>
            <p className="planner-step-text">Customize your class journey.</p>

            {/* ---------- DAYS PER WEEK ---------- */}
            <div className="form-group">
              <label>Days per week</label>
              <div className="chip-row">
                {[3, 4, 5, 7].map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={`chip ${Number(daysPerWeek) === d ? 'chip--active' : ''}`}
                    onClick={() => {
                      console.log("Days changed:", d);
                      setDaysPerWeek(Number(d));
                    }}
                  >
                    {d} days
                  </button>
                ))}
              </div>
            </div>

            {/* MINUTES */}
            <div className="form-group">
              <label>Minutes per day</label>
              <div className="field-with-icon">
                <span className="field-icon">⏱️</span>
                <input
                  type="number"
                  min={10}
                  max={60}
                  step={5}
                  value={minutesPerDay}
                  onChange={(e) => setMinutesPerDay(Number(e.target.value))}
                />
              </div>
            </div>

            {/* TIME OF DAY */}
            <div className="form-group">
              <label>Best time of day</label>
              <div className="chip-row">
                {['morning', 'afternoon', 'evening'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`chip ${timeOfDay === t ? 'chip--active' : ''}`}
                    onClick={() => setTimeOfDay(t)}
                  >
                    {t === 'morning' && '🌅 Morning'}
                    {t === 'afternoon' && '☀️ Afternoon'}
                    {t === 'evening' && '🕯️ Evening with family'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div className="planner-step-footer">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
          >
            Back
          </Button>

          <Button type="submit" disabled={loading || !canGoNext()}>
            {loading
              ? 'Building plan…'
              : step === STEPS.length - 1
              ? 'Generate plan'
              : 'Next'}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PlannerForm;
