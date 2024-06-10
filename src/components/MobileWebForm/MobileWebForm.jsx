import React, { useState } from "react";
import { BiChevronLeft, BiChevronRight, BiRupee } from "react-icons/bi";
import "./MobileForm.css";
import { TiTick } from "react-icons/ti";
import { useForm } from "react-hook-form";

function MobileWebForm() {
  // Array representing the steps in the form
  const steps = [1, 2, 3, 4];
  // State to track the current step of the form
  const [currentStep, setCurrentStep] = useState(1);
  // State to track if the form is complete
  const [complete, setComplete] = useState(false);
  // Initialize useForm hook for form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Function to handle the "Next" button click
  const handleNext = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // Function to handle the "Previous" button click
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data);
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      handleNext();
    }
  };

  return (
    <div className="mobileWebForm h-[100vh] overflow-hidden">
      <div className="flex flex-col h-full">
        {/* Header with navigation buttons and step title */}
        <div className="p-4 border-[#000] border-b-[1px]">
          <div className="flex justify-between items-center">
            {/* Previous step button */}
            <BiChevronLeft
              size={26}
              className="translate-y-[2px]"
              onClick={handlePrevious}
            />
            {/* Title based on the current step */}
            <span className="text-base font-semibold">
              {currentStep === 1 && "Personal Details"}
              {currentStep === 2 && "Business Details"}
              {currentStep === 3 && "Other Business Details"}
              {currentStep === 4 && "Login Info"}
            </span>
            <div></div>
            {/* <BiChevronRight size={26} className="translate-y-[2px]" /> */}
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-full flex flex-col justify-between py-2"
        >
          <div className="mt-5">
            <div className="w-full my-4">
              {/* Personal Details Step */}
              {currentStep === 1 && (
                <div className=" flex flex-col mx-4">
                  <div className="mt-3">
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      {...register("first_name", {
                        required: "first name is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "first name is not valid",
                        },
                      })}
                      placeholder="First Name"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.first_name && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="last_name"
                      {...register("last_name", {
                        required: "last name is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "last name is not valid",
                        },
                      })}
                      placeholder="Last Name"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.last_name && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="date"
                      id="dob"
                      {...register("dob", {
                        required: "date of birth is required",
                      })}
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.dob && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.dob.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex flex-col text-base font-normal">
                    <input
                      type="text"
                      name="education"
                      id="education"
                      {...register("education", {
                        required: "education is required",
                      })}
                      placeholder="Education"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.education && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.education.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="marital_status"
                      id="marital_status"
                      {...register("marital_status", {
                        required: "marital status required",
                      })}
                      placeholder="Marital Status"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.marital_status && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.marital_status.message}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {/* Business Details Step */}
              {currentStep === 2 && (
                <div className="flex flex-col mx-4">
                  <div className="mt-3">
                    <input
                      type="text"
                      id="business_category"
                      {...register("business_category", {
                        required: "Business category is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "Business category is not valid",
                        },
                      })}
                      placeholder="Business Category"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.business_category && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.business_category.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="company_name"
                      {...register("company_name", {
                        required: "Company name is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "Company name is not valid",
                        },
                      })}
                      placeholder="Company Name"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.company_name && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.company_name.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="established_year"
                      placeholder="Year of Establishment"
                      {...register("established_year", {
                        required: "Established year is required",
                        pattern: {
                          value: /^(19|20)\d{2}$/,
                          message: "Established year is not valid",
                        },
                      })}
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.established_year && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.established_year.message}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between gap-4">
                    <div className="mt-3 flex flex-col text-base font-normal">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        {...register("city", {
                          required: "City is required",
                        })}
                        placeholder="City"
                        className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                      />
                      {errors.city && (
                        <span className="text-[#ff3737] text-xs pl-1">
                          {errors.city.message}
                        </span>
                      )}
                    </div>
                    <div className="mt-3">
                      <input
                        type="text"
                        name="pincode"
                        id="pincode"
                        maxLength={6}
                        {...register("pincode", {
                          required: "pincode is required",
                        })}
                        placeholder="Pin Code"
                        className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                      />
                      {errors.pincode && (
                        <span className="text-[#ff3737] text-xs pl-1">
                          {errors.pincode.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 flex flex-col text-base font-normal">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      {...register("state", {
                        required: "State is required",
                      })}
                      placeholder="State"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.state && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.state.message}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {/* Other Business Details Step */}
              {currentStep === 3 && (
                <div className=" flex flex-col mx-4">
                  <div className="mt-3">
                    <input
                      type="text"
                      id="number_of_employees"
                      {...register("number_of_employees", {
                        required: "nomber of staff is required",
                        pattern: {
                          value: /^([1-9]\d{0,3}|10000)$/,
                          message: "number of staff is not valid",
                        },
                      })}
                      placeholder="Number of Staff"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.number_of_employees && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.number_of_employees.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="company_registration"
                      {...register("company_registration", {
                        required: "company registration is required",
                      })}
                      placeholder="Company Registration"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.company_registration && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.company_registration.message}
                      </span>
                    )}
                  </div>
                  {/* <div className=" flex items-center mt-5">
                    <div className=" bg-[#E4E7FF] px-4 py-1 rounded-lg text-[12px] text-[#6246EA] min-w-[100px]">
                      Service Area
                    </div>
                    <div className=" h-[1px] w-full bg-[#ccc]"></div>
                  </div> */}
                  <div className="mt-3">
                    <input
                      type="text"
                      id="gst_number"
                      placeholder="GST Number(Optional)"
                      {...register("gst_number", {
                        pattern: {
                          value:
                            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                          message: "GST number is not valid",
                        },
                      })}
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.gst_number && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.gst_number.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="office_number"
                      id="office_number"
                      {...register("office_number", {
                        required: "office number is required",
                        pattern: {
                          value: /^(\+91[\-\s]?)?[6-9]\d{9}$/,
                          message: "office number is not valid",
                        },
                      })}
                      placeholder="Office Number"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.office_number && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.office_number.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="office_email"
                      id="office_email"
                      {...register("office_email", {
                        required: "office email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "office email is not valid",
                        },
                      })}
                      placeholder="Office Email"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.office_email && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.office_email.message}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {/* Login Info Step */}
              {currentStep === 4 && (
                <div className="flex flex-col mx-4">
                  <div className="mt-3">
                    <input
                      type="text"
                      name="user_email"
                      id="user_email"
                      {...register("user_email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Email is not valid",
                        },
                      })}
                      placeholder="Email"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.user_email && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.user_email.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      id="user_password"
                      {...register("user_password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password must contain at least one letter and one number",
                        },
                      })}
                      placeholder="Password"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.user_password && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.user_password.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      id="confirm_password"
                      {...register("confirm_password", {
                        required: "Confirm password is required",
                        validate: (value, formvalues) =>
                          value === formvalues.user_password ||
                          "Passwords do not match",
                      })}
                      placeholder="Confirm Password"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.confirm_password && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.confirm_password.message}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center mt-10">
                    <div className="bg-[#E4E7FF] px-4 py-1 rounded-lg text-[14px] text-[#6246EA] min-w-[150px] text-center">
                      Membership Plan
                    </div>
                    <div className="h-[1px] w-full bg-[#ccc]"></div>
                  </div>
                  <div className="flex gap-8 w-full justify-between my-5">
                    <div className="w-full rounded-md bg-[#6246ea] flex flex-col gap-2 items-center justify-center py-12">
                      <span className="text-[#fff] font-bold text-xl">
                        6 Months
                      </span>
                      <p className="text-[#fff] text-md flex items-center">
                        <BiRupee /> 5000/-
                      </p>
                    </div>
                    <div className="w-full rounded-md bg-[#6246ea] flex flex-col gap-2 items-center justify-center py-12">
                      <span className="text-[#fff] font-bold text-xl">
                        1 Year
                      </span>
                      <p className="text-[#fff] text-md flex items-center">
                        <BiRupee /> 8000/-
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            {/* Next and Submit Button */}
            <div className="w-full">
              <div className="mx-4">
                <button
                  type="submit"
                  className=" w-full bg-[#061237] py-2 text-center text-[#E2DDFB] rounded-md shadow-md shadow-[#DAD3FB] mb-2"
                >
                  {currentStep === steps.length ? "Submit" : "Next"}
                </button>
              </div>
            </div>
            {/* Succes Message Line */}
            <div className="my-5">
              <div className="flex justify-between">
                {steps?.map((step, i) => (
                  <div
                    key={i}
                    className={`step-item ${
                      currentStep === i + 1 && "active"
                    } ${(i + 1 < currentStep || complete) && "complete"} `}
                  >
                    <div className="step">
                      {i + 1 < currentStep || complete ? (
                        <TiTick size={24} />
                      ) : (
                        ""
                      )}
                    </div>
                    <p className=" text-[#000] text-sm">step {step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MobileWebForm;
