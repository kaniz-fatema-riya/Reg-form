import React from 'react'
import { use,useState } from 'react'


function Uncontrolled({countryLoading}) {
    const Countries = use(countryLoading);
    
    // console.log(Countries);
     
    const [countryDialCode, setCountryDialCode] = useState('');
   
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.firstName.value,
        e.target.lastName.value,
        e.target.email.value,
        
        e.target.number.value,
        e.target.country.value,
        e.target.city.value,
        
       
        );

    }
  return (
   
   
        <div className='max-w-7xl mx-auto space-y-4'>
        <h1 className='text-center text-4xl font-semibold'>Registration Form</h1>
        <p className='text-center'>Fill the form below to register</p>
        <form onSubmit= {handleSubmit} className="flex flex-col gap-4   ">
        
        <input type="text"  name="firstName" placeholder="First Name" maxLength="50" className="border p-2 required"  />
        <input type="text" name="lastName" placeholder="Last Name" maxLength="50" className="border p-2 required" />
        <input type="email" name="email"  placeholder="Email" className="border p-2 required" />

        {/* Number with Country Code */}
        <div>
         <select value={countryDialCode}  onChange={(e) => setCountryDialCode(e.target.value)}  id="countries"  className=" border p-2 required mr-2">

        {
            Countries.map(countryList =>  <option id="countryDialCode"  key= {countryList.name} value={countryList.name}> {countryList.name} {countryList.dial_code}</option>
                
            )
   
        }
        
         </select>  
        
        <input type="text" name= "number" placeholder="Phone" className=" border p-2 required" />
        </div>

        <input type="text" name="country" placeholder="Country" className="border p-2 required"/>
        <input type="text" name="city" placeholder="City" className="border p-2"/>
        
       
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

export default Uncontrolled

