import React, { useState,useEffect,memo  } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomers } from '../../store/features/customer/customerSlice';
import { useQuery } from "@tanstack/react-query";
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import Alerts from '../utills/Alerts';

const Customer = () => {
  const [customer, setCustomer] = useState(null);
  const Customers = useSelector((state) => state.customers.list);
  const status=useSelector((state) => state.customers.status);
  const dispatch = useDispatch();


  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn:fetchCustomers("")
  });
  


  useEffect(() => {

    dispatch(fetchCustomers(""));
 
}, []);

const newCustomer=()=>{
if(!customer && Customers.length>0){
  let CustomerObj={...Customers[0]};
  
  CustomerObj.id=null;
  CustomerObj.name="";
  CustomerObj.address="";
  CustomerObj.contactnumber=0;
  setCustomer({ ...CustomerObj });
}
}


  return (
    <>

      <div className="container mx-auto p-4">
        
      {status && <Alerts type={status}></Alerts>}

     { customer &&  <CustomerForm customer={customer} setCustomer={setCustomer}  />}
    {!customer &&    <button onClick={newCustomer} className="bg-green-500 text-white px-4 py-2 rounded" type="submit">
       Add New Customer
      </button>}
        <CustomerList onEdit={setCustomer} Customers={Customers} />
      
      </div>
      </>
  );
};

export {CustomerList,CustomerForm,Alerts};
export default memo(Customer);