import React from "react";
import PropTypes from "prop-types";

const Notification = ({ icon, message, backgroundColor, textColor }) => {
  return (
    <div
      className={`flex items-center gap-2.5 rounded py-[18px] px-4 text-white`}
      style={{ backgroundColor, color: textColor }}
    >
      <span className="flex-auto">{icon}</span>
      {message}
    </div>
  );
};

Notification.propTypes = {
  icon: PropTypes.element.isRequired,
  message: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Notification.defaultProps = {
  backgroundColor: "#51C96D",
  textColor: "#ffffff",
};

export default Notification;
