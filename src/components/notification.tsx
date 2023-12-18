import React, { ReactElement } from "react";
import PropTypes from "prop-types";

interface NotificationProps {
  icon: ReactElement;
  message: string;
  backgroundColor?: string;
  textColor?: string;
}

const Notification: React.FC<NotificationProps> = ({
  icon,
  message,
  backgroundColor,
  textColor,
}) => {
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
  backgroundColor: "#28a745",
  textColor: "#ffffff",
};

export default Notification;
