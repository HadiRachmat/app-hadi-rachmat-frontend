import propTypes from "prop-types";

const IconComponent = ({ children, icons: IconBase, className, href }) => {
  return (
    <div>
      <a href={href} className="flex items-center sm:gap-5">
        <IconBase
          className={`text-6xl px-3 my-2 bg-orange-500 rounded-full ${className}`}
        />
        {children}
      </a>
    </div>
  );
};

IconComponent.propTypes = {
  children: propTypes.node.isRequired,
  icons: propTypes.elementType,
  className: propTypes.string,
  href: propTypes.string,
};

export default IconComponent;
