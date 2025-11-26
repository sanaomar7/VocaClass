// frontend/src/components/ui/Card.jsx
const Card = ({ children, className = '' }) => (
  <div className={`card ${className}`}>{children}</div>
);

export default Card;
