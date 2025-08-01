import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState,Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import companylogo1 from "../../../assets/images/brand-logos/companyLogo1.png";
import "./EmailVerification.css";
// import { forgetAPI } from "../../../config/api/auth";
import { STATIC_VALUES } from "../../../constant/common";
import AuthLayout from "../authLayout";



export default function EmailVerification() {
  const { COMMON, AUTHENTICATION } = STATIC_VALUES;
  const { STATUS_CODES, STORED_KEYS, ALERTS, BUTTONS, ERROR_MESSAGE, REGEX } = STATIC_VALUES.COMMON;

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const handleBack = () => {
    const path = `/admin/login/`;
    navigate(path);
  };

  const routeChange = () => {
    const path = `/admin/otpverification/`;
    navigate(path);
  };

  const onSubmit = (data) => {
    setIsLoading(true);
    localStorage.setItem(COMMON.STORED_KEYS.EMAIL, data?.email);
    // const params = {
    //   email: data?.email,
    //   resend: false,
    // };

    // forgetAPI(params)
    //   .then((res) => {
    //     if (res?.statusCode === STATUS_CODES.SUCCESS_201) {
    //       toast.success("OTP has been sent to your email!");
    //       setTimeout(() => {
    //         routeChange();
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
    //       error?.response?.message || "Something went wrong!";
    //     toast.error(errorMessage, {
    //       position: "top-center",
    //       autoClose: 3000,
    //     });
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const emailValidation = {
  required: ERROR_MESSAGE.EMAIL_ERROR,
  pattern: {
    value: REGEX.EMAIL_REGEX,
    message: ERROR_MESSAGE.EMAIL_ERROR_1,
  },
};

  return (
     <Fragment>
      {/* <div className="email-container">
        <div className="email-logo">
          <img src={companylogo1} alt="Company Logo" />
        </div>

        <div className="box">
          <div
            className="box-body !p-[2rem]"
            role="tabpanel"
            id="pills-with-brand-color-01"
            aria-labelledby="pills-with-brand-color-item-1"
          >
            <h5 className="header">{AUTHENTICATION.EMAIL_VERIFY}</h5>

            <p className="instruction-text">
              {AUTHENTICATION.EMAIL_VERIFY_DESC}
            </p> */}
 <AuthLayout title={AUTHENTICATION.EMAIL_VERIFY}>
             <p className="instruction-text">
              {AUTHENTICATION.EMAIL_VERIFY_DESC}
            </p> 
              <form noValidate onSubmit={handleSubmit(onSubmit)} className="form">
               <div className="input-block">
              <label>{AUTHENTICATION.EMAIL_LABEL}</label>
              <input
                type="email"
                placeholder={AUTHENTICATION.EMAIL_PLACEHOLDER}
                {...register("email", emailValidation)}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

              <button
                type="submit"
                className="email-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loading-container">
                    <div className="spinner"></div>
                    Sending...
                  </div>
                ) : (
                  COMMON.BUTTONS.SEND_OTP
                )}
              </button>

              <button
                type="button"
                onClick={handleBack}
                className="email-button"
                disabled={isLoading}
              >
                {COMMON.BUTTONS.BACK_LOGIN}
              </button>
            </form>
            </AuthLayout>
          {/* </div>
        </div>
      </div> */}

      <ToastContainer position="top-center" />
    </Fragment>
  );
}
