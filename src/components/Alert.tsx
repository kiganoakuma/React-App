import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  color: "primary" | "secondary" | "dark";
  onClose: () => void;
}

const Alert = ({ children, color = "primary", onClose }: Props) => {
  const [alertVisible, setAlertVisibility] = useState("hide");

  return (
    <div
      role="alert"
      className={"alert alert-" + color + " alert-dismissible  fade show"}
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
