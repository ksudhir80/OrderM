import React, {  memo } from 'react';
import { useDispatch } from 'react-redux';
import {  deleteProduct, } from '../../features/product/productSlice';

const ProductList = ({ onEdit,Products }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
      };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <table className="min-w-full bg-white border">
        <thead key="colHead">
          <tr key="columns">
          {Products && Products[0] && Object.keys(Products[0]).map((key) => (
            <th className="border px-4 py-2">{key}</th>
          ))}
          </tr>
        </thead>
        <tbody>
          {Products && Products[0] && Products.map((product) => (
            <tr key={product.id}>
                {Object.keys(product).map((key) => (

              <td className="border px-4 py-2">{product[key]}</td>
                ))}
           <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => onEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(product.id)}
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

export default memo(ProductList);
