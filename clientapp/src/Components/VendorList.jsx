import React from 'react';
import '../Styles/VendorList.css'

function VendorList({ vendors, onEditVendor, onDeleteVendor }) {
  return (
    
    <div className='vendorlist'>
      
      {vendors.map((vendor, index) => (
        <div key={index}>
          <p>
          <h2>Vendors</h2>
            Vendor Name: {vendor.vendorName} <br /> 
            Bank Account No: {vendor.bankAccountNo} <br /> 
            Bank Name: {vendor.bankName}
          </p>
          <button onClick={() => onEditVendor(index)}>Edit</button>
          <button onClick={() => onDeleteVendor(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default VendorList;
