// frontend/src/components/ui/Section.jsx
const Section = ({ id, children, className = '' }) => (
  <section id={id} className={`section ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default Section;
