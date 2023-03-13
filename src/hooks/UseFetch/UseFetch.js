const { useEffect,useState } = require("react");
import axios from "axios";

function UseFetch(url){
    const[error,setError]=useState(null)
    const[loading,Setloading]=useState(true)
    const[data,setData]=useState();
    const fetchData= async ()=> {
        try {
            const {data:responseData}= await axios.get(url)
            setData(responseData)
            Setloading(false)
           
            
            
        } catch (error) {
            setError(error.message)
            console.log(error)
        }
      
    }
    useEffect(()=>{
        fetchData()
    },[])
    return{data,error,loading}
}export default UseFetch