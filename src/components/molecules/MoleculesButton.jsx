import propTypes from "prop-types";
const Button = ({ label, onclick, href}) => {
  return (
    <button className="bg-blue-600 px-10 py-3 rounded-full text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black" onClick={onclick}>
      <a href={href}>
        {label}
      </a>
    </button>
  )
}

Button.propTypes = {
  label: propTypes.string.isRequired,
  onclick: propTypes.func,
  href: propTypes.string,
}

Button.defaultProps = {
  onclick: () => {},
}
export default Button