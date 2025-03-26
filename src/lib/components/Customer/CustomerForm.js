import React, { useEffect,useState,memo  } from 'react';
import { useDispatch } from 'react-redux';
import { addCustomer, updateCustomer } from '../../store/features/customer/customerSlice';

const CustomerForm = ({ customer, setCustomer }) => {
  
  const dispatch = useDispatch();
  const [form, setForm] = useState(customer);

  useEffect(() => {

    if (customer) {
      setForm(customer);
    }
  }
  , [customer]);

 const getFormDetails = (entity,type,value) => {

if(entity!=="id"){
    switch(type){
      case 'string':
      return(
        <div className="mb-4">
        <label className="block text-gray-700">{entity}</label>
        <input
          type="text"
          className="w-1/2 p-2 border rounded"
          value={value}
          onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
        />
      </div>);
      case 'number':
      return(
        <div className="mb-2">
        <label className="block text-gray-700">{entity}</label>
        <input
          type="number"
          className="w-1/2 p-2 border rounded"
          value={value}
          onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
        />
      </div>);
          case 'date':
            return(
              <div className="mb-2">
              <label className="block text-gray-700">{entity}</label>
              <input
                type="date"
                className="w-1/2 p-2 border rounded"
                value={value}
                onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
              />
            </div>);
            default:
              return(
                <div className="mb-4">
                <label className="block text-gray-700">{entity}</label>
                <input
                  type="text"
                  className="w-1/2 p-2 border rounded"
                  value={value}
                  onChange={(e) => setForm({ ...form, [entity]: e.target.value })}
                />
              </div>);
    }
  }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form.id) {
           
        dispatch(updateCustomer(form,"vender"));
      //dispatch(updatecustomer(form,"customer"));
    } else {
        
      dispatch(addCustomer(form,"vender"));
    }
    setCustomer(null);
    {Object.keys(form).map((key) =>{setForm({key:''})})}
   
  };
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">
        {form && form.id ? 'Edit customer' : 'Add customer'}
      </h1>
    {form && Object.keys(form).map((key) =>getFormDetails(key,typeof(form[key]),form[key]))}

      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        {form && form.id ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default memo(CustomerForm);
