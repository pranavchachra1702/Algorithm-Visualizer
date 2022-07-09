import React from 'react';
import './style.css';
import { CSS_CLASSES } from './constants';

function buildClassNames(rootClass, ClassMappings, userClassName) {
  let classNames = `${rootClass}`;
  Object.keys(ClassMappings).forEach((className) => {
    if (ClassMappings[className]) {
      classNames += ` ${className}`;
    }
  });
  classNames += ` ${userClassName}`;
  return classNames;
}

function renderIcon(icon, iconClass) {
  const ICON = icon;
  return <ICON className={`${CSS_CLASSES.ICON} ${iconClass}`} />;
}

const Button = ({
  className,
  raised,
  unelevated,
  outlined,
  dense,
  notCased,
  disabled,
  icon,
  iconClass,
  href,
  onClick,
  children
}) => {
  const classNames = buildClassNames(
    CSS_CLASSES.ROOT,
    {
      [CSS_CLASSES.DENSE]: dense,
      [CSS_CLASSES.RAISED]: raised,
      [CSS_CLASSES.OUTLINED]: outlined,
      [CSS_CLASSES.UNELEVATED]: unelevated,
      [CSS_CLASSES.UPPERCASE]: !notCased
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classNames} disabled={disabled}>
        {icon ? renderIcon(icon, iconClass) : null}
        <span className="Button__Label">{children}</span>
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={disabled}
    >
      {icon ? renderIcon(icon, iconClass) : null}
      <span className="Button__Label">{children}</span>
    </button>
  );
};


export default Button;
