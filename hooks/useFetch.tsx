import { useEffect, useState } from "react";
import { Product } from "../models/product";
import axios from "axios";


function useFetch(url:string) {
  const [data, setData] = useState<Product[]>()
  const [loading,setLoading] = useState<boolean>(true)
  const [error,setError] =useState<string>();

  useEffect(() => {
    getData()
  }, [])

 async  function  getData() {
   try {
     const {data:response}=   await axios.get<Product[]>(url)
     setData(response)
     setLoading(false)
   } catch (error) {
     setError(error.message)
     setLoading(false)
     
   }
  }

  return {data,loading,error}
}

export default useFetch;