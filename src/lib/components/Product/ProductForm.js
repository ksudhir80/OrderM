import React, { useEffect,useState,memo  } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../../store/features/product/productSlice';

const ProductForm = ({ product, setProduct }) => {
  
  const dispatch = useDispatch();
  const [form, setForm] = useState(product);

  useEffect(() => {

    if (product) {
      setForm(product);
    }
  }
  , [product]);

 const getFormDetails = (entity,type,value) => {

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


  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (form && form.id) {
           
        dispatch(updateProduct(form,"vender"));
      //dispatch(updateProduct(form,"product"));
    } else {
        
      dispatch(addProduct(form,"vender"));
    }
    setProduct(null);
    {Object.keys(form).map((key) =>{setForm({key:''})})}
   
  };
//   if (isLoading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">
        {form && form.id ? 'Edit Product' : 'Add Product'}
      </h1>
    {form && Object.keys(form).map((key) =>getFormDetails(key,typeof(form[key]),form[key]))}

      <button className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
        {form && form.id ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default memo(ProductForm);
