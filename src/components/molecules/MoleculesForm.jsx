import propTypes from "prop-types";

const InputFields = ({ label, placeholder, className, isCurrent = false }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-xl">
        {label}
      </label>
      <input
        type="text"
        id={label}
        placeholder={placeholder}
        className={`${className} ${
          isCurrent ? "p-2 mt-2 rounded-md w-full border border-gray-400 " : ""
        }`}
      />
    </div>
  );
};

InputFields.propTypes = {
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  className: propTypes.string,
  isCurrent: propTypes.bool,
};

const TextAreaFields = ({
  label,
  placeholder,
  className,
  isCurrent = false,
}) => {
  return (
    <div>
      <label htmlFor={label} className="block text-xl">
        {label}
      </label>
      <textarea
        type="text"
        id={label}
        rows={10}
        placeholder={placeholder}
        className={`${className} ${
          isCurrent ? "p-2 mt-2 rounded-md w-full border border-gray-400" : ""
        }`}
      />
    </div>
  );
};

TextAreaFields.propTypes = {
  label: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  className: propTypes.string,
  isCurrent: propTypes.bool,
};

export { InputFields, TextAreaFields };
