// frontend/src/components/planner/PlannerIntroModal.jsx
import Button from '../ui/Button.jsx';
import Card from '../ui/Card.jsx';

const PlannerIntroModal = ({ open, onClose, onStart }) => {
  if (!open) return null;

  return (
    <div className="planner-intro-overlay">
      <div className="planner-intro-backdrop" onClick={onClose} />
      <div className="planner-intro-dialog">
        <Card className="planner-intro-card">
          <button
            type="button"
            className="planner-intro-close"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>

          <div className="planner-intro-hero">
            <div className="planner-intro-hero-icon">
              <span role="img" aria-label="Journey">
                🎒
              </span>
            </div>
            <div>
              <h2 className="planner-intro-title">
                Build a smart learning journey
              </h2>
              <p className="planner-intro-subtitle">
                We&apos;ll guide you through three quick steps to create a
                Kideo-style weekly plan for your class.
              </p>
            </div>
          </div>

          <ol className="planner-intro-steps-list">
            <li className="planner-intro-step">
              <div className="planner-intro-step-icon">
                <span role="img" aria-label="Child">
                  👦
                </span>
              </div>
              <div>
                <div className="planner-intro-step-title">
                  1. Create a learner profile
                </div>
                <div className="planner-intro-step-text">
                  Add a nickname, age range, and learning language so we can
                  pick age-appropriate content.
                </div>
              </div>
            </li>

            <li className="planner-intro-step">
              <div className="planner-intro-step-icon">
                <span role="img" aria-label="Goals">
                  🎯
                </span>
              </div>
              <div>
                <div className="planner-intro-step-title">
                  2. Choose goals & a character guide
                </div>
                <div className="planner-intro-step-text">
                  Select focus areas like vocabulary, reading, or math and pick
                  a Kideo character theme.
                </div>
              </div>
            </li>

            <li className="planner-intro-step">
              <div className="planner-intro-step-icon">
                <span role="img" aria-label="Routine">
                  ⏰
                </span>
              </div>
              <div>
                <div className="planner-intro-step-title">
                  3. Set a simple weekly routine
                </div>
                <div className="planner-intro-step-text">
                  Choose days, minutes per day, and whether you&apos;re using
                  the plan in the morning, afternoon, or evening.
                </div>
              </div>
            </li>
          </ol>

          <div className="planner-intro-footer">
            <Button variant="ghost" onClick={onClose}>
              Skip for now
            </Button>
            <Button
              onClick={() => {
                onStart?.();
                onClose();
              }}
            >
              Let&apos;s start
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PlannerIntroModal;
