import { useState, useEffect } from "react";
import CardContainer from "./components/CardContainer";
import { apiUrl } from './JsonData/Courses'
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
import Header from "./components/Header";
import filterData from "./JsonData/filterData";


function App() {

  const [courses,setCourses]=useState([]);
  const [loading, setLoading]=useState(true);
  const [category, setCategory]=useState(filterData[0].title)
  async function fetchData(){
    setLoading(true);
    try{
      const res= await fetch(apiUrl);
      const output= await res.json();
      //save data into a variable
      setCourses(output.data);
      
    }
    catch(error){
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="flex flex-col items-center bg-slate-400 pb-6 min-h-screen">
      <Header category={category} setCategory={setCategory}/>
      {loading ?(<Spinner/>) : (<CardContainer courses={courses} category={category} />) }
      {/* <CardContainer courses={courses} /> */}
    </div>
  );
}

export default App;
