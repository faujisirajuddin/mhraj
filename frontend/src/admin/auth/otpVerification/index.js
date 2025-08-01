import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { forgetAPI, otpVerifyAPI } from "../../../config/api/auth";
import { STATIC_VALUES } from "../../../constant/common";
import companylogo from "../../../assets/images/brand-logos/companyLogo1.png";
import "./OtpVerification.css";
import AuthLayout from "../authLayout";


export default function OtpVerification() {
  const { COMMON, AUTHENTICATION } = STATIC_VALUES;
  const { STATUS_CODES } = STATIC_VALUES.COMMON;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [otp, setOtp] = useState("");
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Start as disabled
  const [resendTimer, setResendTimer] = useState(60); // Start with 60 seconds
  const [isLoading, setIsLoading] = useState(false); // Add loading state for verify button
  const navigate = useNavigate();
  const userEmail = localStorage.getItem(COMMON.STORED_KEYS.EMAIL);

//   useEffect(() => {
//     if (!userEmail) {
//       window.location.replace("/login");
//     }
//   }, []);

  useEffect(() => {
    let intervalId;

    if (resendTimer > 0) {
      intervalId = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (resendTimer === 0 && isResendDisabled) {
      setIsResendDisabled(false);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [resendTimer, isResendDisabled]);

  const onSubmit = () => {
    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true); // Start loading
    localStorage.setItem(COMMON.STORED_KEYS.OTP, otp);

    // const params = {
    //   email: userEmail,
    //   otp: otp,
    // };

    // otpVerifyAPI(params)
    //   .then((res) => {
    //     if (res?.statusCode === STATUS_CODES.SUCCESS_201) {
    //       toast.success("OTP Verified Successfully!", {
    //         position: "top-center",
    //         autoClose: 3000,
    //       });

    //       setTimeout(() => {
    //         navigate("/forgetpassword", { replace: true });
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
    //   .catch((error) => {
    //     const errorMessage =
    //       error?.response?.data?.message || "Something went wrong!";
    //     toast.error(errorMessage, {
    //       position: "top-center",
    //       autoClose: 3000,
    //     });
    //   })
    //   .finally(() => {
    //     setIsLoading(false); // Stop loading
    //   });
  };

  const handleResend = () => {
    if (isResendDisabled) return;

    setIsResendDisabled(true);
    setResendTimer(60);
    // const params = {
    //   email: userEmail,
    //   resend: true,
    // };

    // forgetAPI(params)
    //   .then((res) => {
    //     if (res?.statusCode === STATUS_CODES.SUCCESS_201) {
    //       toast.info("OTP has been resent to your email.", {
    //         position: "top-center",
    //         autoClose: 2000,
    //       });
    //     }
    //     if (res?.statusCode === STATUS_CODES.BAD_REQUEST) {
    //       const errorMessage = res?.message;
    //       toast.error(errorMessage, {
    //         position: "top-center",
    //         autoClose: 3000,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     const errorMessage =
    //       error?.response?.message || "Something went wrong!";
    //     toast.success(errorMessage, {
    //       position: "top-center",
    //       autoClose: 3000,
    //     });
    //   });
  };

  const handleBack = () => {
    const path = `/admin/emailverification/`;
    navigate(path);
  };

  return (
      <Fragment>
          <AuthLayout title={AUTHENTICATION.VERIFY_CODE}>
            <p className="instruction-text">
              {AUTHENTICATION.VERIFY_CODE_DESC} <b>{userEmail} </b>
              {AUTHENTICATION.VERIFY_CODE_DETAILS}
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="container">
                <label className="otp-label" htmlFor="Enter OTP">
                  {AUTHENTICATION.ENTER_OTP}
                </label>
                <div className="otp-input-wrapper">
                  <OtpInput
                    value={otp}
                    onChange={(value) => {
                      setOtp(value);
                      setValue("otp", value);
                    }}
                    numInputs={6}
                    shouldAutoFocus
                    containerStyle="otp-container"
                    inputStyle="otp-input"
                    renderInput={(props) => (
                      <input
                        {...props}
                        type="tel"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        placeholder="0"
                      />
                    )}
                  />
                  <input
                    type="hidden"
                    {...register("otp", {
                      required: "OTP is Required",
                      pattern: {
                        value: /^[0-9]{6}$/,
                        message: "Invalid OTP. Please try again.",
                      },
                    })}
                  />
                </div>
                {errors.otp && (
                  <p className="otp-error">{errors.otp.message}</p>
                )}
              </div>

              <div className="resend-container">
                <p className="resend-container-text">
                  {AUTHENTICATION.DID_NOT}
                </p>
                <button
                  type="button"
                  className={`resend-button ${
                    isResendDisabled ? "disabled" : ""
                  }`}
                  onClick={handleResend}
                  disabled={isResendDisabled}
                >
                  {isResendDisabled
                    ? `${AUTHENTICATION.RESEND} (${resendTimer}s)`
                    : AUTHENTICATION.RESEND}
                </button>
              </div>

              <button
                type="submit"
                className={`email-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  AUTHENTICATION.VERIFY_OTP
                )}
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="email-button"
              >
                {AUTHENTICATION.BACK_EMAIL_VERIFY}
              </button>
            </form>
         </AuthLayout>
      <ToastContainer position="top-center" />
    </Fragment>
  );
}
