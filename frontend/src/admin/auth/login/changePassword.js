import { FC, Fragment, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SpkButton from "../../../@spk/uielements/spk-button";
import companylogoWebp from "../../../assets/images/brand-logos/companylogo.webp";
import companylogoPng from "../../../assets/images/brand-logos/companylogo.png";
// import { changePasswordAPI } from "../../../config/api/auth";
import { STATIC_VALUES } from "../../../constant/common";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./login.css";


// Move constants outside component to avoid recreation on every render
const { STATUS_CODES, BUTTONS, ERROR_MESSAGE } = STATIC_VALUES.COMMON;
const { AUTHENTICATION } = STATIC_VALUES;

// Form configuration outside component
const formConfig = {
  mode: "onChange" ,
};

// Password validation rules - moved outside to avoid recreation
const passwordValidation = {
  required: "New password is required",
  validate: {
    minLength: (value) =>
      value.length >= 8 || "Password must be at least 8 characters long",
    hasUpperCase: (value) =>
      /[A-Z]/.test(value) ||
      "Password must contain at least one capital letter",
    hasLowerCase: (value) =>
      /[a-z]/.test(value) || "Password must contain at least one small letter",
    hasNumber: (value) =>
      /\d/.test(value) ||
      "Password must contain at least one numeric character",
    hasSpecialChar: (value) =>
      /[@#$%&*!]/.test(value) ||
      "Password must contain at least one special character (@, #, $, %, &, *)",
  },
};

const ChangePassword = ({ onPasswordChanged }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>(formConfig);

  const newPassword = watch("newPassword");

  // Memoize the password toggle functions
  const toggleNewPasswordVisibility = useCallback(() => {
    setShowNewPassword((prev) => !prev);
  }, []);

  const toggleConfirmPasswordVisibility = useCallback(() => {
    setShowConfirmPassword((prev) => !prev);
  }, []);

  // Confirm password validation
  const confirmPasswordValidation = {
    required: ERROR_MESSAGE.CONFIRM_PASSWORD_ERROR,
    validate: {
      matchesPassword: (value) =>
        value === newPassword || ERROR_MESSAGE.CONFIRM_PASSWORD_ERROR_1,
    },
  };

  // Memoize the submit handler
  const onSubmit = useCallback(
    (data) => {
      setLoading(true);
      // const params = {
      //   newPassword: data?.newPassword,
      //   isTemporary: false,
      // };

      // changePasswordAPI(params)
      //   .then((res) => {
      //     if (
      //       res?.statusCode === STATUS_CODES.SUCCESS ||
      //       res?.statusCode === STATUS_CODES.SUCCESS_201
      //     ) {
      //       setTimeout(() => {
      //         onPasswordChanged();
      //       }, 1500);
      //     } else if (res?.statusCode === STATUS_CODES.BAD_REQUEST) {
      //       const errorMessage = res?.message;
      //       toast.error(errorMessage, {
      //         position: "top-center",
      //         autoClose: 3000,
      //       });
      //     }
      //   })
      //   .catch((err) => {
      //     toast.error(err?.data?.message || "Something went wrong");
      //   })
      //   .finally(() => {
      //     setLoading(false);
      //   });
    },
    [onPasswordChanged]
  );

  // Memoize the button text to prevent recalculation
  const buttonText = loading ? "Updating..." : BUTTONS.UPDATE
    

  return (
    <Fragment>
      {/* Preload the company logo for better LCP performance */}
      <link rel="preload" as="image" href={companylogoWebp} />
      <link rel="preload" as="image" href={companylogoPng} />

      <div className="container">
        <div className="authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor flex">
          <div className="grid grid-cols-12 w-full">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="my-[2.5rem] flex justify-center">
                <picture>
                  <source srcSet={companylogoWebp} type="image/webp" />
                  <img
                    src={companylogoWebp}
                    alt="logo"
                    className="desktop-logo"
                    loading="eager"
                    decoding="async"
                    width="100%"
                    height="100%"
                  />
                </picture>
              </div>

              <div className="box">
                <div
                  className="box-body !p-[3rem]"
                  role="tabpanel"
                  id="pills-with-brand-color-01"
                  aria-labelledby="pills-with-brand-color-item-1"
                >
                  <p className="h5 font-semibold mb-2 text-center paragraph">
                    {AUTHENTICATION.CREATE_YOUR_NEW_PASSWORD}
                  </p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-12 gap-y-4">
                      <div className="xl:col-span-12 col-span-12">
                        <label
                          htmlFor="new-password"
                          className="form-label text-default block"
                        >
                          {AUTHENTICATION.NEW_PASSWORD_LABEL}
                        </label>
                        <div className="input-group input-border">
                          <input
                            className="form-control form-control-lg w-full !rounded-md"
                            type={showNewPassword ? "text" : "password"}
                            placeholder={
                              AUTHENTICATION.NEW_PASSWORD_PLACEHOLDER
                            }
                            {...register("newPassword", passwordValidation)}
                            aria-invalid={
                              errors?.newPassword ? "true" : "false"
                            }
                          />
                          <SpkButton
                            variant="light"
                            onclickfunc={toggleNewPasswordVisibility}
                            Label="button"
                            customClass="ti-btn !rounded-s-none !mb-0"
                            buttontype="button"
                            Id="button-addon2"
                          >
                            {showNewPassword ? (
                              <VisibilityOutlinedIcon
                                style={{ fontSize: "1rem" }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                style={{ fontSize: "1rem" }}
                              />
                            )}
                          </SpkButton>
                        </div>

                        {errors?.newPassword && (
                          <p className="error-message">
                            {errors?.newPassword?.message }
                          </p>
                        )}
                      </div>

                      <div className="xl:col-span-12 col-span-12 mb-2">
                        <label
                          htmlFor="confirm-password"
                          className="form-label text-default block"
                        >
                          {AUTHENTICATION.CONFIRM_PASSWORD_LABEL}
                        </label>
                        <div className="input-group input-border">
                          <input
                            className="form-control form-control-lg w-full !rounded-md"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder={
                              AUTHENTICATION.CONFIRM_PASSWORD_PLACEHOLDER
                            }
                            {...register(
                              "confirmPassword",
                              confirmPasswordValidation
                            )}
                            aria-invalid={
                              errors?.confirmPassword ? "true" : "false"
                            }
                          />
                          <SpkButton
                            variant="light"
                            onclickfunc={toggleConfirmPasswordVisibility}
                            Label="button"
                            customClass="ti-btn !rounded-s-none !mb-0"
                            buttontype="button"
                            Id="button-addon3"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOutlinedIcon
                                style={{ fontSize: "1rem" }}
                              />
                            ) : (
                              <VisibilityOffOutlinedIcon
                                style={{ fontSize: "1rem" }}
                              />
                            )}
                          </SpkButton>
                        </div>

                        {errors?.confirmPassword && (
                          <p className="error-message">
                            {errors?.confirmPassword?.message }
                          </p>
                        )}
                      </div>

                      <div className="xl:col-span-12 col-span-12 grid mt-2">
                        <SpkButton
                          type="submit"
                          value="Submit"
                          variant="primary"
                          backgroundColor="rgb(255 0 0)"
                          customClass="ti-btn bg-primary !text-white !font-medium button-color"
                          disabled={loading}
                        >
                          {buttonText}
                        </SpkButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ChangePassword;
