import React from 'react'
import { use,useState } from 'react'


function Form({countryLoading}) {
    const Countries = use(countryLoading); 
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
     const handleNameChange = (setter) => (e) => {
     const inputValue = e.target.value;
      if (/^[A-Za-z\s-]*$/.test(inputValue)) {
      setter(inputValue);
   
      }
      };
   

    function handleSubmit(e) {
        e.preventDefault();
        if(handleSubmit){
        alert('Form Submitted Successfully');
          
        }

       
         
        const selectedCountry = Countries.find(c => c.name === country); 
        const dialCode = selectedCountry ? selectedCountry.dial_code : '';

        
        console.log(e.target.firstName.value,
        e.target.lastName.value,
        e.target.email.value,
        dialCode + e.target.number.value,
        e.target.country.value,
        e.target.city.value);

        e.target.reset();
        

      }
      return (
   
        <div className='max-w-4xl mx-auto space-y-4'>
        <h1 className='text-center text-4xl font-semibold'>Registration Form</h1>
        <p className='text-center'>Fill the form below to register</p>
        <form onSubmit= {handleSubmit} className="flex flex-col gap-4   ">
        
        <input  value={firstName} onChange={handleNameChange(setFirstName)} type="text"  name="firstName" placeholder="First Name" pattern="[A-Za-z\s-]+" maxLength="50" className="border p-2 " required />
        <input value={lastName} onChange={handleNameChange(setLastName)} type="text" name="lastName" placeholder="Last Name" maxLength="50" className="border p-2 " required/>
        <input type="email" name="email"  placeholder="Email" className="border p-2 " required />

        {/* Number with Country Code */}
        <div>
         <select value={country}  onChange={(e) => setCountry(e.target.value)}  required  className=" border p-2 required mr-2">
          <option value="">Select Country</option>

        {
            Countries.map(countryList =>  <option  key= {countryList.name} value={countryList.name}> {countryList.name} {countryList.dial_code}</option>    
            )
        }
        
         </select>  
        
        <input type="text" name= "number" placeholder="Phone" className=" border p-2 "  required/>
        </div>

        <input type="text" name="country" placeholder="Country" className="border p-2 " required />
        <input type="text" name="city" maxLength="100" placeholder="City" className="border p-2" />
        
       
        <div className="flex flex-col">
            <p className="text-lg font-semibold">Upload your Image <span className="text-sm font-light">(Upload jpg, png, webp. Max file size 5MB)</span>
            </p>
            <input type="file" className="border p-2"/>
            
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  )
  
}

export default Form

