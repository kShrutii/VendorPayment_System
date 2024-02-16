import React from 'react';
import '../Styles/VendorEditForm.css'


function VendorEditForm({ vendorForm, onInputChange, onUpdateVendor }) {
  return (
    <div className='vendoreditform'>
      <h2>Edit Vendor</h2>
      <form>
      <label>
          Vendor Name:
          <input type="text" name="vendorName" value={vendorForm.vendorName} onChange={onInputChange}
          />
        </label> <br />
        <label>
            Bank Account No: 
            <input type="text" name="bankAccountNo" value={vendorForm.bankAccountNo} onChange={onInputChange} />
        </label> <br />
        <label>
            Bank Name: 
            <input type="text" name="bankName" value={vendorForm.bankName} onChange={onInputChange} />
        </label> <br />
        <label>
            Address: 
            <input type="text" name="AddressLine1" value={vendorForm.AddressLine1} onChange={onInputChange} />
            <input type="text" name="AddressLine2" value={vendorForm.AddressLine2} onChange={onInputChange} />
        </label> <br />
        <label>
            City: 
            <input type="text" name="city" value={vendorForm.city} onChange={onInputChange} />
        </label> <br />
        <label>
            Country: 
            <input type="text" name="country" value={vendorForm.country} onChange={onInputChange} />
        </label> <br />
        <label>
            Zip Code: 
            <input type="text" name="zipCode" value={vendorForm.zipCode} onChange={onInputChange} />
        </label> <br />
        {/* Input fields for editing vendor details */}
        <button type="button" onClick={onUpdateVendor}>
          Update Vendor
        </button>
      </form>
    </div>
  );
}

export default VendorEditForm;
