import { FC, ReactNode } from "react";
import companylogo from "../../../assets/images/brand-logos/companyLogo1.png";
import "../login/login.css";



const AuthLayout = ({ title, children }) => {
  return (
    <div className="login-container">
      <img src={companylogo} alt="Company Logo" className="company-logo" />
      <div className="login-card shadow">
        <div className="logo-wrapper">
          <h2 className="title">{title}</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
