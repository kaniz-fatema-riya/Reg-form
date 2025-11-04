
import { use, useState } from "react";

function Form({ countryLoading }) {
  const countries = use(countryLoading);
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleNameChange = (setter) => (e) => {
    const inputValue = e.target.value;
    if (/^[A-Za-z\s-]*$/.test(inputValue)) {
      setter(inputValue);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (handleSubmit) {
      alert("Form Submitted Successfully");
    }

    const selectedCountry = countries.find((c) => c.name === country);
    const dialCode = selectedCountry ? selectedCountry.dial_code : "";

    console.log("First Name:", e.target.firstName.value);
    console.log("Last Name:", e.target.lastName.value);
    console.log("Email:", e.target.email.value);
    console.log("Phone Number:", dialCode + e.target.number.value);
    console.log("Country:", e.target.country.value);
    console.log("City:", e.target.city.value);
  

    e.target.reset();
  }
  return (
    <div className="w-[45%] mx-auto mt-[120px] space-y-4 bg-amber-50">
      <h1 className=" text-4xl font-semibold">Registration Form</h1>
      <p>Fill the form below to register</p>
      <p className="font-light">
        The registration for this course group project is completely free of
        charge for all participating students.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4    ">
        {/* Name */}
        <div className="flex justify-between gap-5 mt-5">
          {/* First Name */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="FirstName">First Name</label>
            <input
              value={firstName}
              onChange={handleNameChange(setFirstName)}
              id="FirstName"
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              pattern="[A-Za-z\s-]+"
              maxLength="50"
              className="border p-2 "
              required
            />
          </div>
          {/* Last Name */}
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="LastName">Last Name</label>
            <input
              value={lastName}
              onChange={handleNameChange(setLastName)}
              id="LastName"
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              maxLength="50"
              className="border p-2 "
              required
            />
          </div>
        </div>
        {/* Email  */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Enter your email address"
            className="border p-2 "
            required
          />
        </div>
        {/* Country and City */}
        <div className="flex justify-between gap-5 ">
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="LastName">Country</label>
            <input
              type="text"
              name="country"
              placeholder="Enter your country"
              className="border p-2 "
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label htmlFor="LastName">City</label>
            <input
              type="text"
              name="city"
              maxLength="100"
              placeholder="Enter your city"
              className="border p-2"
            />
          </div>
        </div>

        {/* Number with Country Code */}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="countryCode">Phone Number</label>
          <div className="flex ">
            <select
              value={country}
              id="countryCode"
              onChange={(e) => setCountry(e.target.value)}
              required
              className=" border required rounded-l-md "
            >
              <option value="">Select Country</option>

              {countries.map((singleCountry) => (
                <option key={singleCountry.name} value={singleCountry.name}>
                  {" "}
                  {singleCountry.name} {singleCountry.dial_code}
                </option>
              ))}
            </select>
            <input
              id="phoneInput"
              type="text"
              name="number"
              placeholder="Enter your phone number"
              className=" border p-2 w-full "
              required
            />
          </div>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2">
          <label htmlFor="imageUpload" className="text-md ">
            Upload your Image{" "}
            <span className="text-sm font-light">
              (Upload jpg, png, webp. Max file size 5MB)
            </span>
          </label>
          <input type="file" className="border p-2" />
        </div>

        <div className="flex gap-2">
          <input type="checkbox" name="" id="" />
          <p>
            I agree with{" "}
            <a className="text-blue-600" href="blank">
              Term & Policy
            </a>
          </p>
        </div>

        <button
          type="submit"
          className="w-35 rounded-md bg-amber-700 text-white p-2 hover:bg-amber-800 mt-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
