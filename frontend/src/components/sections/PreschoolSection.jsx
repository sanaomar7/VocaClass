// frontend/src/components/sections/PreschoolSection.jsx
import Section from '../ui/Section.jsx';

const apps = [
  { id: 1, name: 'Princess Puzzle', downloads: '500K+', tag: 'Top 1%' },
  { id: 2, name: 'Animals World', downloads: '1M+', tag: 'Top 1%' },
  { id: 3, name: 'Preschool Adventure', downloads: '200K+', tag: 'Top 1%' },
  { id: 4, name: 'Pizza Maker', downloads: '300K+', tag: 'Top 1%' },
  { id: 5, name: 'Kids Puzzles', downloads: '800K+', tag: 'Top 1%' },
  { id: 6, name: 'Math Puzzles', downloads: '600K+', tag: 'Top 1%' },
];

const PreschoolSection = () => {
  return (
    <Section id="preschool">
      <div className="preschool-header">
        <p className="section-eyebrow">Preschool Apps</p>
        <h2 className="section-title section-title--handwritten">
          PRESCHOOL APPS.
        </h2>
        <p className="section-lead">
          Our preschool apps offer a wide range of content — with safe,
          delightful experiences that make early learning truly playful.
        </p>
      </div>

      <div className="apps-grid">
        {apps.map((app) => (
          <article key={app.id} className="app-card">
            <div className="app-card-icon" />
            <div className="app-card-body">
              <h3>{app.name}</h3>
              <p>{app.downloads} downloads</p>
            </div>
            <div className="app-card-footer">
              <span className="app-tag">{app.tag}</span>
              <button
                type="button"
                className="btn btn-secondary btn-xs"
              >
                View
              </button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default PreschoolSection;
