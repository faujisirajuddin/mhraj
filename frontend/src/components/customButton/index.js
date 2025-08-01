import React from "react";
import "./style.css";

const CustomButton = ({
  height,
  width,
  textColor,
  backgroundColor,
  borderColor,
  borderRadius,
  fontWeight,
  fontSize,
  minWidth,
  hoverBackgroundColor,
  hoverTextColor,
  hoverBorderColor,
  loading,
  disabled,
  className = "",
  children,
  ...rest
}) => {
  const styles = {
    height,
    width,
    color: textColor,
    backgroundColor,
    borderColor: borderColor || backgroundColor,
    borderRadius,
    fontWeight,
    fontSize,
    minWidth,
  };

  const hoverStyles = {
    "--hover-bg": hoverBackgroundColor || backgroundColor,
    "--hover-color": hoverTextColor || textColor,
    "--hover-border": hoverBorderColor || borderColor,
  };

  return (
    <button
      className={`custom-button ${disabled || loading ? "disabled" : ""} ${className}`}
      style={{ ...styles, ...hoverStyles }}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? (
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default CustomButton;
