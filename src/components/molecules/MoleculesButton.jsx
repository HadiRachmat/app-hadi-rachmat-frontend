import propTypes from "prop-types";
const Button = ({
  label,
  onclick = () => {},
  href,
  isCurrent = false,
  className = "",
}) => {
  return (
    <a href={href}>
      <button   
        className={`${className} ${
          isCurrent
            ? "bg-blue-600 px-10 py-3 rounded-full text-white font-medium uppercase tracking-wider hover:bg-orange-500 hover:text-black delay-300 duration-500"
            : "bg-blue-600"
        }`}
        onClick={onclick}
      >
        {label}
      </button>
    </a>
  );
};

Button.propTypes = {
  label: propTypes.string.isRequired,
  onclick: propTypes.func,
  href: propTypes.string,
  isCurrent: propTypes.bool,
  className: propTypes.string,
};
export default Button;
