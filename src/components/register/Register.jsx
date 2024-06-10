import React, { useState } from "react";
import "./Register.css";
import { City, Country, State } from "country-state-city";
import businessCategories from "./JSON-Objs/businessCategories";
import useIsMobile from "../../hooks/UseIsMobile";
import MobileRegister from "./MobileRegister";
import { useForm } from "react-hook-form";

function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const isMobile = useIsMobile();
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const countries = Country.getAllCountries();
  // const states = State.getAllStates();
  // const cities = City.getAllCities();
  // const filteredStates = states.filter(
  //   (state) => state.countryCode === formData.selectedCountry
  // );
  // const filteredCities = cities.filter(
  //   (city) =>
  //     city.countryCode === formData.selectedCountry &&
  //     city.stateCode === formData.selectedState
  // );
  // const filteredBusinessCategories = businessCategories.map(
  //   (businessCategory) => businessCategory.category
  // );
  // const filteredBusinesSubCategories = businessCategories
  //   .filter(
  //     (businessCategory) =>
  //       businessCategory.category === formData.business_category
  //   )
  //   .flatMap((businessCategory) => businessCategory.subcategories);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const submitForm = () => {
    setSuccessMessage("Thank you for registering. We will contact you soon.");
  };

  return (
    <div className="main-container mt-5 p-5 font-manrope">
      {successMessage ? (
        <div className="card" id="successMessage">
          <div className="card-header text-center h6 p-3 bg-primary text-white">
            Thank you for registering.
          </div>
          <div className="card-body p-3 bg-success">
            <h5 className="text-center text-white">
              We Will contact you soon.
            </h5>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className=" pt-16 sm:pt-20 md:pt-32  lg:pt-40 mx-2 sm:mx-18 md:mx-36 lg:mx-56"
        >
          <div className="stepwizard" id="stepwizard">
            <div className="stepwizard-row ">
              <div className="stepwizard-step">
                <button
                  // type="button"
                  className={`btn px-4 py-[5px] rounded-full border-[1px] border-[#ccc] ${
                    currentStep !== 1
                      ? "bg-[#f5f5f5] text-[#000]"
                      : "bg-blue text-[#fff]"
                  }`}
                  onClick={() => setCurrentStep(1)}
                >
                  1
                </button>
                <div className=" text-[#000] text-md my-3">Personal Detail</div>
              </div>
              <div className="stepwizard-step">
                <button
                  // type="button"
                  className={`btn px-4 py-[5px] rounded-full border-[1px] border-[#ccc] ${
                    currentStep !== 2
                      ? "bg-[#f5f5f5] text-[#000]"
                      : "bg-blue text-[#fff]"
                  }`}
                  onClick={() => setCurrentStep(2)}
                >
                  2
                </button>
                <div className=" text-[#222] text-md my-3 ">
                  Business Detail
                </div>
              </div>
            </div>
          </div>
          {/* form content */}
          {isMobile ? (
            // <MobileRegister
            //   currentStep={currentStep}
            //   formData={formData}
            //   setFormData={setFormData}
            //   handleChange={handleChange}
            //   countries={countries}
            //   filteredCities={filteredCities}
            //   filteredStates={filteredStates}
            //   filteredBusinessCategories={filteredBusinessCategories}
            //   filteredBusinesSubCategories={filteredBusinesSubCategories}
            // />
            <>LOL</>
          ) : currentStep === 1 ? (
            <div>
              <div className=" text-[#000] text-3xl font-normal opacity-80">
                Personal Detail
              </div>
              <div className=" flex w-full justify-between gap-4 my-4">
                <div className=" flex flex-col w-[50%]">
                  <div className="mt-1">
                    <label
                      htmlFor="first_name"
                      className="text-[#000] text-base font-normal"
                    >
                      First Name:
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      {...register("first_name", {
                        required: "first name is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "first name is not valid",
                        },
                      })}
                      placeholder="Enter your first name"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.first_name && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.first_name.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="middle_name"
                      className="text-[#000] text-base font-normal"
                    >
                      Father/Husband Name:
                    </label>
                    <input
                      type="text"
                      id="middle_name"
                      {...register("middle_name", {
                        required: "last name is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "last name is not valid",
                        },
                      })}
                      placeholder="Enter your middle name"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.last_name && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="dob"
                      className="text-[#000] text-base font-normal"
                    >
                      Date of Birth:
                    </label>
                    <input
                      type="date"
                      id="dob"
                      {...register("dob", {
                        required: "date of birth is required",
                      })}
                      placeholder="Enter your date of birth"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.dob && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.dob.message}
                      </span>
                    )}
                  </div>
                  <div className="my-1 flex flex-col text-base font-normal">
                    <label
                      htmlFor="marital_status"
                      className="text-[#000] text-base font-normal"
                    >
                      Marital Status:
                    </label>
                    <div className=" flex gap-5 mt-2 py-2">
                      <div>
                        <input
                          type="radio"
                          name="marital_status"
                          id="unmarried"
                          value="unmarried"
                          {...register("marital_status", {
                            required: "Marital status is required",
                          })}
                          className="h-[15px] w-[15px]"
                        />{" "}
                        Unmarried
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="marital_status"
                          id="married"
                          value="married"
                          {...register("marital_status", {
                            required: "Marital status is required",
                          })}
                          className="h-[15px] w-[15px]"
                        />{" "}
                        Married
                      </div>
                    </div>
                    {errors.marital_status && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.marital_status.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="cast"
                      className="text-[#000] text-base font-normal"
                    >
                      Cast:
                    </label>
                    <input
                      type="text"
                      name="cast"
                      id="cast"
                      {...register("cast", {
                        required: "Cast is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "cast is not valid",
                        },
                      })}
                      placeholder="Enter your cast"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.cast && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.cast.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="resident_address"
                      className="text-[#000] text-base font-normal"
                    >
                      Resident Address:
                    </label>
                    <textarea
                      name="resident_address"
                      id="resident_address"
                      {...register("resident_address", {
                        required: "resident address is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "cast is not valid",
                        },
                      })}
                      placeholder="Enter your resident address"
                      className=" p-3 py-2 mt-2 min-h-[100px] w-full border-[1px] border-[#ccc] rounded-md text-base font-normal outline-none"
                    ></textarea>
                    {errors.resident_address && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.resident_address.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="gmail"
                      className="text-[#000] text-base font-normal"
                    >
                      Gmail:
                    </label>
                    <input
                      type="email"
                      name="gmail"
                      id="gmail"
                      {...register("gmail", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      placeholder="Enter your gmail address"
                      className="border-[1px] border-[#ccc] p-3 py-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.gmail && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.gmail.message}
                      </span>
                    )}
                  </div>

                  {/* <div className="mt-1">
                    <label
                      htmlFor="selectedCountry"
                      className="text-[#000] text-base font-normal"
                    >
                      Country:
                    </label>

                    <select
                      id="selectedCountry"
                      name="selectedCountry"
                      // value={formData.selectedCountry}
                      // onChange={handleChange}
                      className="bg-gray-50 border-[1px] border-[#ccc] text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Select your country</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  <div className="mt-1">
                    <label
                      htmlFor="aadhar_number"
                      className="text-[#000] text-base font-normal"
                    >
                      Aadhar Number:
                    </label>
                    <input
                      type="text"
                      name="aadhar_number"
                      id="aadhar_number"
                      {...register("aadhar_number", {
                        required: "Aadhar number is required",
                        pattern: {
                          value: /^\d{12}$/,
                          message: "Aadhar number must be a 12-digit number",
                        },
                      })}
                      placeholder="Enter your Aadhar Number"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.aadhar_number && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.aadhar_number.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className=" flex flex-col w-[50%]">
                  <div className="mt-1">
                    <label
                      htmlFor="last_name"
                      className="text-[#000] text-base font-normal"
                    >
                      Last Name:
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      {...register("last_name", {
                        required: "last name is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "last name is not valid",
                        },
                      })}
                      placeholder="Enter your last name"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.last_name && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.last_name.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="middle_name_profession"
                      className="text-[#000] text-base font-normal"
                    >
                      Father/Husband Profession:
                    </label>
                    <input
                      type="text"
                      name="middle_name_profession"
                      id="middle_name_profession"
                      {...register("middle_name_profession", {
                        required: "profession is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "profession is not valid",
                        },
                      })}
                      placeholder="Enter your father/husband profession"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.middle_name_profession && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.middle_name_profession.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="phone_number"
                      className="text-[#000] text-base font-normal"
                    >
                      Phone Number:
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      id="phone_number"
                      maxLength="10"
                      {...register("phone_number", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Phone number must be a 10-digit number",
                        },
                      })}
                      placeholder="Enter your phone number"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.phone_number && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.phone_number.message}
                      </span>
                    )}
                  </div>
                  <div className="my-1 flex flex-col text-base font-normal">
                    <label
                      htmlFor="education"
                      className="text-[#000] text-base font-normal"
                    >
                      Education:
                    </label>
                    <input
                      type="text"
                      name="education"
                      id="education"
                      {...register("education", {
                        required: "education is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "education is not valid",
                        },
                      })}
                      placeholder="Enter your education"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.education && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.education.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="university"
                      className="text-[#000] text-base font-normal"
                    >
                      University:
                    </label>
                    <input
                      type="text"
                      name="university"
                      id="university"
                      {...register("university", {
                        required: "university is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "university is not valid",
                        },
                      })}
                      placeholder="Enter your university"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.university && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.university.message}
                      </span>
                    )}
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="permanent_address"
                      className="text-[#000] text-base font-normal"
                    >
                      Permanent Address:
                    </label>
                    <textarea
                      name="permanent_address"
                      id="permanent_address"
                      {...register("permanent_address", {
                        required: "permanent address is required",
                        pattern: {
                          value: /^[a-z ,.'-]+$/i,
                          message: "permanent address is not valid",
                        },
                      })}
                      placeholder="Enter your permanent address"
                      className=" p-3 py-2 mt-2 min-h-[100px] w-full border-[1px] border-[#ccc] rounded-md text-base font-normal outline-none"
                    ></textarea>
                    {errors.permanent_address && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.permanent_address.message}
                      </span>
                    )}
                  </div>
                  {/* <div className="mt-1">
                    <label
                      htmlFor="selectedState"
                      className="text-[#000] text-base font-normal"
                    >
                      State:
                    </label>
                    <select
                      id="selectedState"
                      name="selectedState"
                      // value={formData.selectedState}
                      // onChange={handleChange}
                      className="bg-gray-50 border-[1px] border-[#ccc] text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Select your state</option>
                      {filteredStates.map((state, index) => (
                        <option key={index} value={state.isoCode}>
                          {state.name}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  {/* <div className="mt-1">
                    <label
                      htmlFor="selectedCity"
                      className="text-[#000] text-base font-normal"
                    >
                      City:
                    </label>
                    <select
                      id="selectedCity"
                      name="selectedCity"
                      // value={formData.selectedCity}
                      // onChange={handleChange}
                      className="bg-gray-50 border-[1px] border-[#ccc] text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Select your city</option>
                      {filteredCities.map((city, index) => (
                        <option key={index} value={city.isoCode}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                  </div> */}
                  <div className="mt-1">
                    <label
                      htmlFor="pan_number"
                      className="text-[#000] text-base font-normal"
                    >
                      Pan Number:
                    </label>
                    <input
                      type="text"
                      name="pan_number"
                      id="pan_number"
                      maxLength={10}
                      {...register("pan_number", {
                        required: "PAN number is required",
                        pattern: {
                          value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                          message:
                            "PAN number must be in the format AAAAA9999A",
                        },
                      })}
                      placeholder="Enter your PAN Number"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                    {errors.pan_number && (
                      <span className="text-[#ff3737] text-xs pl-1">
                        {errors.pan_number.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className=" text-[#000] text-3xl font-normal opacity-80">
                Business Detail
              </div>
              <div className=" flex w-full justify-between gap-4 my-4">
                <div className=" flex flex-col w-[50%]">
                  <div className="mt-1">
                    <label
                      htmlFor="company_name"
                      className="text-[#000] text-base font-normal"
                    >
                      Company Name:
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      id="company_name"
                      // value={formData.company_name}
                      // onChange={handleChange}
                      placeholder="Enter your company name"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>

                  <div className="mt-1">
                    <label
                      htmlFor="company_address"
                      className="text-[#000] text-base font-normal"
                    >
                      Company Address:
                    </label>
                    <input
                      type="text"
                      name="company_address"
                      id="company_address"
                      // value={formData.company_address}
                      // onChange={handleChange}
                      placeholder="Enter your company's address"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                  {/* <div className="my-1 flex flex-col text-base font-normal">
                      <label
                        htmlFor="marital_status"
                        className="text-[#000] text-base font-normal"
                      >
                        Marital Status:
                      </label>
                      <div className=" flex gap-5 mt-2 py-2">
                        <div>
                          <input
                            type="radio"
                            name="marital_status"
                            id="unmarried"
                            value="unmarried"
                            // checked={formData.marital_status === "unmarried"}
                            // onChange={handleChange}
                            className="h-[15px] w-[15px]"
                          />{" "}
                          Unmarried
                        </div>
                        <div>
                          <input
                            type="radio"
                            name="marital_status"
                            id="married"
                            value="married"
                            // checked={formData.marital_status === "married"}
                            // onChange={handleChange}
                            className="h-[15px] w-[15px]"
                          />{" "}
                          Married
                        </div>
                      </div>
                    </div> */}
                  <div className="mt-1">
                    <label
                      htmlFor="number_of_employees"
                      className="text-[#000] text-base font-normal"
                    >
                      Number Of Employees:
                    </label>
                    <input
                      type="text"
                      name="number_of_employees"
                      id="number_of_employees"
                      // value={formData.number_of_employees}
                      // onChange={handleChange}
                      placeholder="Enter the number of employees"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                  {/* <div className="mt-1">
                      <label
                        htmlFor="resident_address"
                        className="text-[#000] text-base font-normal"
                      >
                        Resident Address:
                      </label>
                      <textarea
                        name="resident_address"
                        id="resident_address"
                        // value={formData.resident_address}
                        // onChange={handleChange}
                        placeholder="Enter your resident address"
                        className=" p-3 py-2 mt-2 min-h-[100px] w-full border-[1px] border-[#ccc] rounded-md text-base font-normal outline-none"
                      ></textarea>
                    </div> */}
                  <div className="mt-1">
                    <label
                      htmlFor="company_email"
                      className="text-[#000] text-base font-normal"
                    >
                      Company Email:
                    </label>
                    <input
                      type="email"
                      name="company_email"
                      id="company_email"
                      // value={formData.company_email}
                      // onChange={handleChange}
                      placeholder="Enter your company gmail address"
                      className="border-[1px] border-[#ccc] p-3 py-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>

                  {/* <div className="mt-1">
                      <label
                        htmlFor="selectedCountry"
                        className="text-[#000] text-base font-normal"
                      >
                        Country:
                      </label>
  
                      <select
                        id="selectedCountry"
                        name="selectedCountry"
                        // value={formData.selectedCountry}
                        // onChange={handleChange}
                        className="bg-gray-50 border-[1px] border-[#ccc] text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      >
                        <option value="">Select your country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country.isoCode}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div> */}
                  <div className="mt-1">
                    <label
                      htmlFor="company_contact"
                      className="text-[#000] text-base font-normal"
                    >
                      Company Contact:
                    </label>
                    <input
                      type="text"
                      name="company_contact"
                      id="company_contact"
                      // value={formData.company_contact}
                      // onChange={handleChange}
                      placeholder="Enter your company contact number"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                  <div className="mt-1">
                    <label
                      htmlFor="describe_business"
                      className="text-[#000] text-base font-normal"
                    >
                      Describe Your Business:
                    </label>
                    <textarea
                      name="describe_business"
                      id="describe_business"
                      // value={formData.describe_business}
                      // onChange={handleChange}
                      placeholder="Enter your business description"
                      className=" p-3 py-2 mt-2 min-h-[100px] w-full border-[1px] border-[#ccc] rounded-md text-base font-normal outline-none"
                    ></textarea>
                  </div>
                </div>
                <div className=" flex flex-col w-[50%]">
                  <div className="mt-1">
                    <label
                      htmlFor="company_established"
                      className="text-[#000] text-base font-normal"
                    >
                      Company Established:
                    </label>
                    <input
                      type="text"
                      name="company_established"
                      id="company_established"
                      // value={formData.company_established}
                      // onChange={handleChange}
                      placeholder="Enter your company's establishment"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                  <div className="my-1 flex flex-col text-base font-normal">
                    <label
                      htmlFor="is_registered"
                      className="text-[#000] text-base font-normal"
                    >
                      Registered:
                    </label>
                    <div className="flex gap-5 mt-2 py-2">
                      <div>
                        <input
                          type="radio"
                          name="company_type"
                          id="property"
                          value="property"
                          // checked={formData.company_type === "property"}
                          // onChange={handleChange}
                          className="h-[15px] w-[15px]"
                        />{" "}
                        Property
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="company_type"
                          id="llp"
                          value="llp"
                          // checked={formData.company_type === "llp"}
                          // onChange={handleChange}
                          className="h-[15px] w-[15px]"
                        />{" "}
                        LLP
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="company_type"
                          id="pvtltd"
                          value="pvtltd"
                          // checked={formData.company_type === "pvtltd"}
                          // onChange={handleChange}
                          className="h-[15px] w-[15px]"
                        />{" "}
                        Pvt Ltd
                      </div>
                      <div>
                        <input
                          type="radio"
                          name="company_type"
                          id="other"
                          value="other"
                          // checked={formData.company_type === "other"}
                          // onChange={handleChange}
                          className="h-[15px] w-[15px]"
                        />{" "}
                        Other
                      </div>
                    </div>
                  </div>

                  <div className="mt-1">
                    <label
                      htmlFor="yearly_turnover"
                      className="text-[#000] text-base font-normal"
                    >
                      Yearly Turnover:
                    </label>
                    <input
                      type="text"
                      name="yearly_turnover"
                      id="yearly_turnover"
                      // value={formData.yearly_turnover}
                      // onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                  <div className="my-1 flex flex-col text-base font-normal">
                    <label
                      htmlFor="yearly_profit"
                      className="text-[#000] text-base font-normal"
                    >
                      Yearly Profit:
                    </label>
                    <input
                      type="text"
                      name="yearly_profit"
                      id="yearly_profit"
                      // value={formData.yearly_profit}
                      // onChange={handleChange}
                      placeholder="Enter your education"
                      className="border-[1px] border-[#ccc] p-3 py-2 mt-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                  {/* <div className="mt-1">
                    <label
                      htmlFor="business_category"
                      className="text-[#000] text-base font-normal"
                    >
                      Business Category:
                    </label>
                    <select
                      id="business_category"
                      name="business_category"
                      // value={formData.business_category}
                      // onChange={handleChange}
                      className="bg-gray-50 border-[1px] border-[#ccc] text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Select your Business Category</option>
                      {filteredBusinessCategories.map((category, index) => (
                        <option key={index} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div> */}

                  {/* <div className="mt-1">
                    <label
                      htmlFor="business_subcategory"
                      className="text-[#000] text-base font-normal"
                    >
                      Business Sub Category:
                    </label>
                    <select
                      id="business_subcategory"
                      name="business_subcategory"
                      // value={formData.business_subcategory}
                      // onChange={handleChange}
                      className="bg-gray-50 border-[1px] border-[#ccc] text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    >
                      <option value="">Select business sub category</option>
                      {filteredBusinesSubCategories.map(
                        (subcategories, index) => (
                          <option key={index} value={subcategories}>
                            {subcategories}
                          </option>
                        )
                      )}
                    </select>
                  </div> */}
                  <div className="mt-1">
                    <label
                      htmlFor="gst"
                      className="text-[#000] text-base font-normal"
                    >
                      GST Number:
                    </label>
                    <input
                      type="text"
                      name="gst"
                      id="gst"
                      // value={formData.gst}
                      // onChange={handleChange}
                      placeholder="Enter your GST Number"
                      className="border-[1px] border-[#ccc] p-3 py-2 rounded-md w-full text-base font-normal outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {}
          {}
          <div className="flex justify-end mt-4">
            {/* <button
              type="button"
              className=" bg-blue text-[#fff] p-2 px-3 rounded-xl hover:bg-purple"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Previous
            </button> */}
            {currentStep === 1 ? (
              <div
                // type="button"
                className=" bg-blue text-[#fff] p-2 px-5 rounded-xl hover:bg-purple"
                onClick={nextStep}
              >
                Next
              </div>
            ) : (
              <button
                type="submit"
                className=" bg-orange-gradient  text-[#fff] p-2 px-5 rounded-xl"
                // onClick={submitForm}
              >
                Submit
              </button>
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default Register;
