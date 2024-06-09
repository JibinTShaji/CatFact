import { useEffect, useState } from "react";
import axios from "axios"


function App() {

  const [catFact,setFact]=useState("")

  const fetchData=async()=>{
    const {data}=await axios.get("https://catfact.ninja/fact")
    setFact(data.fact)

  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
<div className="flex w-full h-screen  justify-center bg-slate-900 items-center ">
<div className="flex-row  rounded-xl py-32 w-1/2 bg-slate-800">
<div className="flex justify-center   px-5 py-5">
  <div className="flex  text-gray-200 text-wrap text-xl font-semibold">{catFact}</div>
  </div>
  <div className="flex justify-center mt-2 ">
  <button className="flex   hover:bg-sky-600 active:bg-sky-800 bg-sky-500 text-gray-100 rounded-lg px-5 py-2" onClick={fetchData}>Generate Fact</button>
  </div>
</div>
</div>
  );
}

export default App;

