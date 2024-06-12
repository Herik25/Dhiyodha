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
  // handling the gender selection with popup
  const [isGenderPopupVisible, setIsGenderPopupVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  // console.log(selectedGender);
  // handling the business category selection with popup
  const [isBusinessCategoryPopupVisible, setIsBusinessCategoryPopupVisible] =
    useState(false);
  const [selectBusinessCategory, setSelectedBusinessCategory] = useState("");
  // console.log(selectBusinessCategory);
  // handeling the company registration
  const [isBusinessRegistration, setIsBusinessRegistration] = useState(false);
  const [businessRegistration, setBusinessRegistration] = useState("");

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

  // Function to handle gender selection
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setIsGenderPopupVisible(false);
  };

  // Function to handle business category selection
  const handleBusunessCategory = (category) => {
    setSelectedBusinessCategory(category);
    setIsBusinessCategoryPopupVisible(false);
  };

  // Function to handle business category selection
  const handleBusunessRegistration = (type) => {
    setBusinessRegistration(type);
    setIsBusinessRegistration(false);
  };

  // Function to handle form submission
  const onSubmit = async (data) => {
    // json object
    const userObject = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      dob: data.dob,
      countryCode: "IN",
      mobileNo: "8799026842",
      password: data.password,
      confirmPassword: data.confirmPassword,
      education: data.education,
      maritalStatus: "MARRIED",
      companyDetails: {
        businessCategory: "AGRICULTURE",
        companyName: data.companyName,
        companyRegistration: businessRegistration,
        establishedYear: 2018,
        numberOfStaff: data.numberOfStaff,
        gstNumber: data.gstNumber,
        officeNumber: data.officeNumber,
        officeEmail: data.officeEmail,
      },
      address: {
        city: data.city,
        state: data.state,
        pinCode: data.pinCode,
      },
    };

    console.log(userObject);

    if (currentStep === steps.length) {
      try {
        const response = await fetch(
          "https://dry-eggs-pay.loca.lt/api/socialAuth/memberSignup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userObject),
          }
        );
        console.log(response);

        if (response.ok) {
          const result = await response.json();
          console.log("Form submission successful:", result);
          setComplete(true);
        } else {
          console.error("Form submission failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } else {
      handleNext();
    }
  };

  return (
    <div className="mobileWebForm h-[100vh]">
      <div className="flex flex-col h-full">
        {/* gender pop up box */}
        {isGenderPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <div onClick={() => handleGenderSelect("SINGLE")}>Single</div>
              <div onClick={() => handleGenderSelect("MARRIED")}>Married</div>
            </div>
          </div>
        )}
        {/* business category pop up box */}
        {isBusinessCategoryPopupVisible && (
          <div className="popup-overlay">
            <div className="popup">
              <div onClick={() => handleBusunessCategory("AGRICULTURE")}>
                Agriculture
              </div>
              <div onClick={() => handleBusunessCategory("EDUCATION")}>
                Education
              </div>
              <div onClick={() => handleBusunessCategory("ENTERTAINMENT")}>
                Entertainment
              </div>
              <div onClick={() => handleBusunessCategory("FINANCE")}>
                Finance
              </div>
              <div onClick={() => handleBusunessCategory("HEALTHCARE")}>
                Healthcare
              </div>
              <div onClick={() => handleBusunessCategory("RETAIL")}>Retail</div>
              <div onClick={() => handleBusunessCategory("Technology")}>
                Technology
              </div>
            </div>
          </div>
        )}
        {isBusinessRegistration && (
          <div className="popup-overlay">
            <div className="popup">
              <div onClick={() => handleBusunessRegistration("SOLO_PROPRIETOR")}>
                Solo Proprietor
              </div>
              <div onClick={() => handleBusunessRegistration("PARTNERSHIP")}>
                Parternership
              </div>
              <div onClick={() => handleBusunessRegistration("PRIVATE_LIMITED")}>
                Private Limited
              </div>
              <div onClick={() => handleBusunessRegistration("NGO")}>
                NGO
              </div>
              <div onClick={() => handleBusunessRegistration("NON_REGISTERED")}>
                Non Registered
              </div>
            </div>
          </div>
        )}
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
                      name="firstName"
                      id="firstName"
                      {...register("firstName", {
                        required: "first name is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "first name is not valid",
                        },
                      })}
                      placeholder="First Name"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.firstName && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", {
                        required: "last name is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "last name is not valid",
                        },
                      })}
                      placeholder="Last Name"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.lastName && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.lastName.message}
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
                      placeholder="education"
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
                      id="gender"
                      value={selectedGender}
                      onClick={() => setIsGenderPopupVisible(true)}
                      readOnly
                      placeholder="Marital Status"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                  </div>
                </div>
              )}
              {/* Business Details Step */}
              {currentStep === 2 && (
                <div className="flex flex-col mx-4">
                  <div className="mt-3">
                    <input
                      type="text"
                      id="businessCategory"
                      value={selectBusinessCategory}
                      onClick={() => setIsBusinessCategoryPopupVisible(true)}
                      readOnly
                      placeholder="Business Category"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                  </div>

                  <div className="mt-3">
                    <input
                      type="text"
                      id="companyName"
                      {...register("companyName", {
                        required: "Company name is required",
                        pattern: {
                          value: /^[a-zA-Z'-]{1,49}$/,
                          message: "Company name is not valid",
                        },
                      })}
                      placeholder="Company Name"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.companyName && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.companyName.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="establishedYear"
                      placeholder="Year of Establishment"
                      {...register("establishedYear", {
                        required: "Established year is required",
                        pattern: {
                          value: /^(19|20)\d{2}$/,
                          message: "Established year is not valid",
                        },
                      })}
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.establishedYear && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.establishedYear.message}
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
                        name="pinCode"
                        id="pinCode"
                        maxLength={6}
                        {...register("pinCode", {
                          required: "pinCode is required",
                        })}
                        placeholder="Pin Code"
                        className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                      />
                      {errors.pinCode && (
                        <span className="text-[#ff3737] text-xs pl-1">
                          {errors.pinCode.message}
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
                      id="numberOfStaff"
                      {...register("numberOfStaff", {
                        required: "nomber of staff is required",
                        pattern: {
                          value: /^([1-9]\d{0,3}|10000)$/,
                          message: "number of staff is not valid",
                        },
                      })}
                      placeholder="Number of Staff"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.numberOfStaff && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.numberOfStaff.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      id="companyRegistration"
                      value={businessRegistration.split("_").join(" ")}
                      onClick={() => setIsBusinessRegistration(true)}
                      readOnly
                      placeholder="Company Registration"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                  </div>
                  {/* <div className="mt-3">
                    <input
                      type="text"
                      id="companyRegistration"
                      {...register("companyRegistration", {
                        required: "company registration is required",
                      })}
                      placeholder="Company Registration"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.companyRegistration && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.companyRegistration.message}
                      </span>
                    )}
                  </div> */}
                  {/* <div className=" flex items-center mt-5">
                    <div className=" bg-[#E4E7FF] px-4 py-1 rounded-lg text-[12px] text-[#6246EA] min-w-[100px]">
                      Service Area
                    </div>
                    <div className=" h-[1px] w-full bg-[#ccc]"></div>
                  </div> */}
                  <div className="mt-3">
                    <input
                      type="text"
                      id="gstNumber"
                      placeholder="GST Number(Optional)"
                      {...register("gstNumber", {
                        pattern: {
                          value:
                            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
                          message: "GST number is not valid",
                        },
                      })}
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.gstNumber && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.gstNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="officeNumber"
                      id="officeNumber"
                      {...register("officeNumber", {
                        required: "office number is required",
                        pattern: {
                          value: /^(\+91[\-\s]?)?[6-9]\d{9}$/,
                          message: "office number is not valid",
                        },
                      })}
                      placeholder="Office Number"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.officeNumber && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.officeNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="text"
                      name="officeEmail"
                      id="officeEmail"
                      {...register("officeEmail", {
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
                    {errors.officeEmail && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.officeEmail.message}
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
                      name="email"
                      id="email"
                      {...register("email", {
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
                    {errors.email && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message:
                            "Password must be at least 8 characters long",
                        },
                        pattern: {
                          value:
                            /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password must include uppercase, number and special character",
                        },
                      })}
                      placeholder="Password"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.password && (
                      <span className="text-[#ff3737] text-[11px] pl-1">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-3">
                    <input
                      type="password"
                      id="confirmPassword"
                      {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value, formvalues) =>
                          value === formvalues.password ||
                          "Passwords do not match",
                      })}
                      placeholder="Confirm Password"
                      className="p-3 py-3 mt-2 rounded-md w-full text-base font-normal outline-none border-none bg-[#E4E7FF] text-[#6246EA]"
                    />
                    {errors.confirmPassword && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.confirmPassword.message}
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
                  {}
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
