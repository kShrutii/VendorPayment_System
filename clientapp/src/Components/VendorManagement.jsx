import React, { useState } from 'react';
import VendorForm from './VendorForm';
import VendorList from './VendorList';
import VendorEditForm from './VendorEditForm';
import '../Styles/VendorManagement.css'
import { Navigate } from 'react-router-dom';

function VendorManagement({ onLogout }) {
  const [vendors, setVendors] = useState([]);
  const [vendorForm, setVendorForm] = useState({
    vendorName: '',
    bankAccountNo: '',
    bankName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    country: '',
    zipCode: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCreateVendor = () => {
    setVendors((prevVendors) => [...prevVendors, vendorForm]);
    setVendorForm({
      vendorName: '',
      bankAccountNo: '',
      bankName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      zipCode: '',
    });
  };

  const handleEditVendor = (index) => {
    setEditingIndex(index);
    const editedVendor = vendors[index];
    setVendorForm({ ...editedVendor });
  };

  const handleUpdateVendor = () => {
    const updatedVendors = [...vendors];
    updatedVendors[editingIndex] = vendorForm;
    setVendors(updatedVendors);
    setEditingIndex(null);
    setVendorForm({
      vendorName: '',
      bankAccountNo: '',
      bankName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      country: '',
      zipCode: '',
    });
  };

  const handleDeleteVendor = (index) => {
    const updatedVendors = vendors.filter((_, i) => i !== index);
    setVendors(updatedVendors);
  };

  return (
    <div className="hero">
        <div className='vendorManagement'>
            <h1>Vendor Management</h1>
            <button onClick={onLogout}>Logout</button>
            <br />
            <VendorForm
                vendorForm={vendorForm}
                onInputChange={handleInputChange}
                onCreateVendor={handleCreateVendor }
             
            />
            <VendorList
                vendors={vendors}
                onEditVendor={handleEditVendor}
                onDeleteVendor={handleDeleteVendor}
            />
            {editingIndex !== null && (
                <VendorEditForm
                vendorForm={vendorForm}
                onInputChange={handleInputChange}
                onUpdateVendor={handleUpdateVendor}
                />
            )}
        </div>
    </div>
    
  );
}

export default VendorManagement;
