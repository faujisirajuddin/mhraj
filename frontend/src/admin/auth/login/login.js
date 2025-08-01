import { FC, Fragment, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import SpkButton from "../../../@spk/uielements/spk-button";
import companylogo from "../../../assets/images/brand-logos/companyLogo1.png";
import "./login.css";
import { STATIC_VALUES } from "../../../constant/common";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ChangePassword from "./changePassword";
import AuthLayout from "../authLayout";

const { STATUS_CODES, STORED_KEYS, ALERTS, BUTTONS, ERROR_MESSAGE, REGEX } = STATIC_VALUES.COMMON;
const { AUTHENTICATION } = STATIC_VALUES;

const formConfig = { mode: "onChange" };

const passwordValidation = {
  required: "Password is required",
  validate: {
    minLength: (value) => value.length >= 8 || "Password must be at least 8 characters",
    hasUpperCase: (value) => /[A-Z]/.test(value) || "One uppercase required",
    hasLowerCase: (value) => /[a-z]/.test(value) || "One lowercase required",
    hasNumber: (value) => /\d/.test(value) || "One number required",
    hasSpecialChar: (value) => /[@#$%&*!]/.test(value) || "One special char required",
  },
};

const emailValidation = {
  required: ERROR_MESSAGE.EMAIL_ERROR,
  pattern: {
    value: REGEX.EMAIL_REGEX,
    message: ERROR_MESSAGE.EMAIL_ERROR_1,
  },
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [needsPasswordChange, setNeedsPasswordChange] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formConfig);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const onSubmit = (data) => {
    setLoading(true);
    console.log("Submitted Data", data);
    const path = `/admin/dashboard`;
    navigate(path);
  };

  const handlePasswordChanged = () => {
    localStorage.removeItem(STORED_KEYS.ACCESS_TOKEN);
    setNeedsPasswordChange(false);
    setLoading(false);
    setTimeout(() => {
      toast.success("Password changed successfully!");
    }, 500);
  };

  if (needsPasswordChange) {
    return (
      <>
        <ChangePassword onPasswordChanged={handlePasswordChanged} />
        <ToastContainer position="top-center" />
      </>
    );
  }

  return (
    <Fragment>
          <AuthLayout title={AUTHENTICATION.LOIGIN_TITLE}>
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="input-block">
              <label>{AUTHENTICATION.EMAIL_LABEL}</label>
              <input
                type="email"
                placeholder={AUTHENTICATION.EMAIL_PLACEHOLDER}
                // {...register("email", emailValidation)}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="input-block">
              <label className="password-label">
                {AUTHENTICATION.PASSWORD_LABEL}
                <Link to="/admin/emailVerification">{AUTHENTICATION.FORGET_PASSWORD}</Link>
              </label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={AUTHENTICATION.PASSWORD_PLACEHOLDER}
                  // {...register("password", passwordValidation)}
                />
                <button type="button" onClick={togglePasswordVisibility} className="toggle-visibility">
                  {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </button>
              </div>
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <button
                type="submit"
                className="email-button"
                disabled={loading}
              >
                 {loading ? "Logging in..." : BUTTONS.LOGIN_IN}
              </button>
          </form>
           </AuthLayout>
      <ToastContainer position="top-center" />
    </Fragment>
  );
};

export default Login;
