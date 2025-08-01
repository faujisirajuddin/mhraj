import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { FiEye, FiEyeOff } from "react-icons/fi";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ResetPassword.css";
// import { resetPasswordAPI } from "../../../config/api/auth";
import { STATIC_VALUES } from "../../../constant/common";
import AuthLayout from "../authLayout";



export default function ResetPassword() {
  const { STORED_KEYS, ERROR_MESSAGE, REGEX, ALERTS, BUTTONS, STATUS_CODES } =
    STATIC_VALUES.COMMON;
  const { COMMON, AUTHENTICATION } = STATIC_VALUES;
  const userEmail = localStorage.getItem(COMMON.STORED_KEYS.EMAIL);
  const userOtp = localStorage.getItem(COMMON.STORED_KEYS.OTP);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (!userEmail || !userOtp) {
//       navigate(`admin/login`);
//     }
//   }, [userEmail, userOtp, navigate]);

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
  useEffect(() => {
    return () => {
      localStorage.removeItem(STORED_KEYS.EMAIL);
      localStorage.removeItem(STORED_KEYS.OTP);
    };
  }, []);
  const onSubmit = (data) => {
    // const params = {
    //   email: userEmail,
    //   otp: userOtp,
    //   password: data?.newPassword,
    //   confirmPassword: data?.confirmPassword,
    // };

    // setIsLoading(true);

    // resetPasswordAPI(params)
    //   .then((res) => {
    //     if (res?.statusCode === STATUS_CODES.SUCCESS_201) {
    //       localStorage.removeItem(STORED_KEYS.ACCESS_TOKEN);
    //       localStorage.removeItem(STORED_KEYS.EMAIL);
    //       localStorage.removeItem(STORED_KEYS.OTP);
    //       toast.success(ALERTS.RESET_PASSWORD);
    //       setTimeout(() => {
    //         navigate(`${import.meta.env.BASE_URL}login/`);
    //       }, 1000);
    //     }
    //     if (res?.statusCode === STATUS_CODES.BAD_REQUEST) {
    //       const errorMessage = res?.message;
    //       toast.error(errorMessage, {
    //         position: "top-center",
    //         autoClose: 3000,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     toast.error(err?.data?.message);
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const newPassword = watch("newPassword", "");

  return (
   
                <Fragment>
                      <AuthLayout title={AUTHENTICATION.CREATE_YOUR_NEW_PASSWORD}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="reset-password-form"
            >
               <div className="input-block">
              <label className="password-label">
                {AUTHENTICATION.NEW_PASSWORD_LABEL}
              </label>
              <div className="password-wrapper">
                <input
                  type={showNew ? "text" : "password"}
                  placeholder={AUTHENTICATION.NEW_PASSWORD_PLACEHOLDER}
                  {...register("newPassword", passwordValidation)}
                />
                <button type="button"  onClick={() => setShowNew((prev) => !prev)} className="toggle-visibility">
                  {showNew ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </button>
              </div>
              {errors.newPassword && <p className="error">{errors.newPassword.message}</p>}
            </div>

            <div className="input-block">
              <label className="password-label">
                {AUTHENTICATION.CONFIRM_PASSWORD_LABEL}
              </label>
              <div className="password-wrapper">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder={AUTHENTICATION.CONFIRM_PASSWORD_PLACEHOLDER}
                  {...register("confirmPassword", {
                    required: ERROR_MESSAGE.CONFIRM_PASSWORD_ERROR,
                    validate: (value) =>
                      value === newPassword ||
                      ERROR_MESSAGE.CONFIRM_PASSWORD_ERROR_1,
                  })}
                />
                <button type="button"  onClick={() => setShowConfirm((prev) => !prev)} className="toggle-visibility">
                  {showConfirm ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </button>
              </div>
              {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
            </div>
              <button
                type="submit"
                className="email-button"
                disabled={isLoading}
              >
                 {isLoading ? "Logging in..." : BUTTONS.RESET_PASSWORD}
              </button>
            </form>
            </AuthLayout>
        
      <ToastContainer position="top-center" />
</Fragment>  );
}
