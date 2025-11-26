// frontend/src/components/planner/PlannerResults.jsx
import Card from '../ui/Card.jsx';

const PlannerResults = ({ plan, loading }) => {
  return (
    <Card className="planner-results">
      <h2>Weekly learning journey</h2>

      {loading && <p className="muted">Building your plan…</p>}
{!loading && !plan && (
  <div className="no-content-wrapper">
    <img
      src="/assets/no-content.png"
      alt="No Content"
      className="no-content-img"
    />
    <p className="no-content-text">No plan yet. Start by filling the steps.</p>
  </div>
)}


      {!loading && plan && (
        <div className="plan-layout">
          <section className="plan-summary">
            <h3 className="plan-summary-title">
              {plan.summary.childName}&apos;s weekly plan
            </h3>
            <p className="plan-summary-meta">
              {plan.summary.ageRange ? `${plan.summary.ageRange} years · ` : ''}
              {plan.summary.daysPerWeek} days · {plan.summary.minutesPerDay} min/day
            </p>
            {plan.summary.goals && plan.summary.goals.length > 0 && (
              <p className="plan-summary-goals">
                Goals:{' '}
                {plan.summary.goals
                  .map((g) => goalLabel(g))
                  .join(', ')}
              </p>
            )}
          </section>

          <section className="plan-schedule">
            <h4 className="plan-section-heading">Weekly schedule</h4>
            <div className="schedule-days">
              {plan.schedule.map((day) => (
                <div key={day.day} className="schedule-day-card">
                  <div className="schedule-day-header">
                    <span className="schedule-day-name">{day.day}</span>
                    <span className="schedule-day-meta">
                      {day.minutes} min · {capitalize(day.timeOfDay)}
                    </span>
                  </div>
                  <ul className="schedule-session-list">
                    {day.sessions.map((session, index) => (
                      <li key={`${day.day}-${index}`} className="schedule-session-item">
                        {session.label}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="plan-apps">
            <h4 className="plan-section-heading">Apps in this plan</h4>
            {(!plan.apps || plan.apps.length === 0) && (
              <p className="muted">No matching apps found for this setup.</p>
            )}

            {plan.apps && plan.apps.length > 0 && (
              <ul className="apps-list">
                {plan.apps.map((app) => (
                  <li key={app.id} className="apps-list-item">
                    <div className="apps-list-header">
                      <div>
                        <div className="apps-list-name">{app.name}</div>
                        <div className="apps-list-badge-row">
                          <span className="apps-list-badge">
                            Age {app.ageRange}
                          </span>
                          {app.skills && app.skills.length > 0 && (
                            <span className="apps-list-badge">
                              {app.skills.join(', ')}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="apps-list-rating">
                        <span className="apps-list-rating-value">
                          {app.rating.toFixed(1)}★
                        </span>
                        {app.downloads && (
                          <span className="apps-list-rating-sub">
                            {app.downloads} downloads
                          </span>
                        )}
                      </div>
                    </div>
                    {app.description && (
                      <p className="apps-list-description">
                        {app.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </Card>
  );
};

function capitalize(value) {
  if (!value) return '';
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function goalLabel(id) {
  switch (id) {
    case 'vocabulary':
      return 'Vocabulary & speaking';
    case 'reading':
      return 'Reading & phonics';
    case 'creativity':
      return 'Creativity & art';
    case 'math':
      return 'Math & logic';
    default:
      return id;
  }
}

export default PlannerResults;
