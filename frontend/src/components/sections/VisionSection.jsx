// frontend/src/components/vision/Vision.jsx
import Section from "../ui/Section.jsx";
import { VISION_STATS } from "../../lib/visionStats.js";

const Vision = () => {
  return (
    <Section id="vision" className="vision">

      <p className="vision-title-text">
        Founded in 2015, a leader in the preschool apps<br />
        market for both Android and IOS.
      </p>

      <div className="vision-stats-cards">
        {VISION_STATS.map((stat, idx) => (
          <div key={idx} className={`vision-card card-${idx + 1}`}>

            <div className="vision-value">{stat.value}</div>
            <div className="vision-label">{stat.label}</div>
            <div className="vision-detail">{stat.detail}</div>

            {/* أيقونة إيموجي */}
            <div className="vision-icon-wrap">
              <span className="vision-emoji">{stat.icon}</span>
            </div>

            <div className="vision-card-badge">
              {stat.badge}
            </div>
          </div>
        ))}
      </div>

    </Section>
  );
};

export default Vision;
