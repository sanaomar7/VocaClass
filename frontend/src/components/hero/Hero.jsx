// frontend/src/components/hero/Hero.jsx
import { useNavigate } from 'react-router-dom';
import Section from '../ui/Section.jsx';
import Button from '../ui/Button.jsx';
import { KIDEO_CHARACTERS } from '../../lib/kideoCharacters.js';

const Hero = () => {
  const navigate = useNavigate();

  const goToPlanner = () => {
    navigate('/planner');
  };

  const renderCharacterIcon = (character) => {
    const initial = character.name.charAt(0);

    return character.icon ? (
      <img
        src={character.icon}
        alt={character.name}
        className="hero-character-img"
      />
    ) : (
      <div
        className="hero-character-placeholder"
        style={{ backgroundColor: character.color }}
      >
        <span>{initial}</span>
      </div>
    );
  };

  return (
    <Section className="hero">
      <div className="hero-grid">
        
        <div className="hero-text">
          <div className="hero-tagline">
            <span>✨ Kid-powered learning</span>
            <span className="badge-pill">Loved by parents &amp; schools</span>
          </div>

          <h1>Where early learning feels like playtime.</h1>

          <p>
            Kideo helps kids build language, creativity, and problem-solving skills
            through playful apps they actually want to use.
          </p>

          <div className="hero-actions">
            <Button>Download on App Store</Button>
            <Button variant="secondary" onClick={goToPlanner}>
              For parents &amp; schools – Build a plan
            </Button>
          </div>
        </div>

        {/* الشخصيات على اليمين */}
        <div className="hero-visual">
          <div className="hero-characters-stage">
            {KIDEO_CHARACTERS.map((ch, index) => (
              <div
                key={ch.id}
                className={`hero-character-wrapper hero-character-wrapper--${
                  index + 1
                }`}
              >
                {/* فقاعة الكلام فوق الشخصية */}
                <div className="hero-speech-bubble">
                  <p className="hero-speech-title">{ch.name}</p>
                  <p className="hero-speech-body">{ch.focus}</p>
                </div>

                {/* الشخصية نفسها */}
                <button
                  type="button"
                  className={`hero-character hero-character--pos-${index + 1}`}
                >
                  {renderCharacterIcon(ch)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
