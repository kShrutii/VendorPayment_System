import React from 'react';
import '../Styles/VendorForm.css';
import { Link, useNavigate } from 'react-router-dom';

let navigate=useNavigate;

function VendorForm({ vendorForm, onInputChange, onCreateVendor }) {  
  return (
    
    <div className='vendorform' >
      <h2>Create Vendor</h2>
      <br />
      <form>
        <label>
          Vendor Name:
          <input type="text" placeholder='Enter Name' name="vendorName" value={vendorForm.vendorName} onChange={onInputChange} />
        </label> <br />
        <label>
            Bank Account No: 
            <input type="text" placeholder='Enter Bank Account No' name="bankAccountNo" value={vendorForm.bankAccountNo} onChange={onInputChange} />
        </label> <br />
        <label>
            Bank Name: 
            <input type="text" placeholder='Enter Bank Name' name="bankName" value={vendorForm.bankName} onChange={onInputChange} />
        </label> <br />
        <label>
            Address: 
            <input type="text" placeholder='Enter AddressLine1' name="AddressLine1" value={vendorForm.AddressLine1} onChange={onInputChange} />
            <input type="text" placeholder='Enter AddressLine2' name="AddressLine2" value={vendorForm.AddressLine2} onChange={onInputChange} />
        </label> <br />
        <label>
            City: 
            <input type="text" placeholder='Enter City' name="city" value={vendorForm.city} onChange={onInputChange} />
        </label> <br />
        <label>
            Country: 
            <input type="text" placeholder='Enter Country' name="country" value={vendorForm.country} onChange={onInputChange} />
        </label> <br />
        <label>
            Zip Code: 
            <input type="text" placeholder="Enter Your Zip-Code" name="zipCode" value={vendorForm.zipCode} onChange={onInputChange} />
        </label> <br />
        <button type="button" onClick={onCreateVendor}>Create Vendor</button>
      </form>
    </div>
  );
}

export default VendorForm;
