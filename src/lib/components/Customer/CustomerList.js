import React, {  memo } from 'react';
import { useDispatch } from 'react-redux';
import {  deleteCustomer} from '../../store/features/customer/customerSlice';

const CustomerList = ({ onEdit,Customers }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteCustomer(id));
      };

  return (
    <div className="p-4">
      
      <h1 className="text-xl font-bold mb-4">Customer List</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
          {Customers && Customers[0] && Object.keys(Customers[0]).map((key) => (
            <th className="border px-4 py-2">{key}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {Customers && Customers[0] && Customers.map((Customer) => (
            <tr key={Customer.id}>
                {Object.keys(Customer).map((key) => (

              <td className="border px-4 py-2">{Customer[key]}</td>
                ))}
           <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(Customer)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(Customer.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default memo(CustomerList);
