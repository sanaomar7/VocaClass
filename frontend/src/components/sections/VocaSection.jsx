// frontend/src/components/sections/VocaSection.jsx
import Section from '../ui/Section.jsx';

const VocaSection = () => {
  return (
    <Section id="voca">
      <div className="voca-grid">
        <div className="voca-video-card">
          <div className="voca-video-thumb">
            <div className="voca-play-icon">▶</div>
          </div>
          <div className="voca-video-footer">
            <button type="button" className="btn btn-secondary">
              Website
            </button>
            <button type="button" className="btn btn-primary">
              App Store
            </button>
            <button type="button" className="btn btn-secondary">
              Google Play
            </button>
          </div>
        </div>

        <div className="voca-text">
          <p className="section-eyebrow">Voca Tooki</p>
          <h2 className="section-title section-title--handwritten">
            VOCA TOOKI.
          </h2>
          <p className="section-lead">
            In 2021, Kideo introduced Voca Tooki — a leading language learning
            platform for primary schools. It mixes playful storytelling, smart
            AI, and teacher-friendly tools to make language learning feel like
            an adventure.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default VocaSection;
