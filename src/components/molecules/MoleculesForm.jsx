import propTypes from "prop-types";

const InputFields = ({
  label,
  placeholder,
  className,
  isCurrent = false,
  type,
  onChange
}) => {
  return (
    <div>
      <label htmlFor={label} className="block text-lg font-thin font-mono ">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
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
  type: propTypes.string,
  onChange:propTypes.func,
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
