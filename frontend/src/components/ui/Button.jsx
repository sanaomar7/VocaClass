// frontend/src/components/ui/Button.jsx
const Button = ({ variant = 'primary', children, className = '', ...rest }) => {
  const base = 'btn';
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
  };

  const classes = [base, variants[variant], className].join(' ').trim();

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
