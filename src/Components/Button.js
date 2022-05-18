import PropTypes from 'prop-types';
import './Button.css';

function Button({
  label,
  backgroundColor = 'red',
  color = 'white',
  fontWeight = 600,
  borderRadius = 0,
  size = 'md',
  handleClick,
}) {
  let scale = 1;
  if (size === 'sm') scale = 0.75;
  if (size === 'lg') scale = 1.5;

  const style = {
    backgroundColor,
    color,
    fontWeight,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: 'none',
    borderRadius: `${borderRadius}px`,
  };

  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  borderRadius: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  handleClick: PropTypes.func,
};

export default Button;
