import React, { useState,useEffect,memo  } from 'react';

import { ErrorBoundary } from "react-error-boundary";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts,updateStatus,fetchDataSync } from '../../features/product/productSlice';
import { useQuery } from "@tanstack/react-query";
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import Alerts from '../utills/Alerts';

const ProductDashboard = () => {
  const [product, setProduct] = useState(null);
  const [isLoadingSync,setIsLoadingSync]=useState("Loading...");
  const Products = useSelector((state) => state.products.list);
  const status=useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  
  const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <div>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );

  const useProductsQuery = () => {
  
    return useQuery({
      queryKey: ["products"],
      queryFn: async () => dispatch(fetchProducts()).unwrap(),
      retry:false
    });
  }
if(isLoadingSync==="Loading..."){
 const dataSync= fetchDataSync();
 if(dataSync){
  setIsLoadingSync("Loaded");
  console.log("after fetch sync");
 }
}
 
const { data, error, isLoading } =useProductsQuery();
console.log("query executed");

//  useQuery({
//   queryKey: ["products"],
//   queryFn: () => dispatch(fetchProducts())
// });




//   useEffect(() => {

//     console.log("before Fetch");
//     debugger;
//   dispatch(fetchProducts());
// console.log("after dispatch line");
    

 
// }, []);

if(!product && Products.length>0){
  let product={...Products[0]};
  
  product.id=null;
  product.name="";
  product.price=0;
  product.description="";
  setProduct({ ...product });
}

if (isLoading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;


  return (
    <>

      <div className="container mx-auto p-4">
        {isLoadingSync}
      {status && <Alerts type={status}></Alerts>}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProductForm product={product} setProduct={setProduct}  />
        <ProductList onEdit={setProduct} Products={!Products?data:Products} />
        </ErrorBoundary>
      
      </div>
      </>
  );
};

export default memo(ProductDashboard);