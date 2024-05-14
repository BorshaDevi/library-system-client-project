import axios from "axios";
import { useEffect, useState } from "react";


const BookCategory = () => {
    const [bookcates,setBookcates]=useState([])
    useEffect(()=> {
        axios.get('https://library-system-server-project.vercel.app/category')
        .then(res => {
            console.log(res.data)
            setBookcates(res.data)
        })
    })
    return (
        <>
         <h1 className="text-2xl font-bold text-center text-blue-800">Book Category</h1>
        <div className="grid lg:grid-cols-2 lg:ml-64 mt-10 ml-5 mx-auto max-w-5xl">
           
        {
            bookcates.map(bookcate => <div key={bookcate._id}  >
                <div className="card card-compact w-96 mt-5 grid grid-cols-2 shadow-xl ">
            <figure><img className='w-60 p-3' src={bookcate.image}alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title font-semibold bg-blue-300 justify-center  rounded-r-md rounded-l-md text-blue-500">{bookcate.category}</h2>
              
              <div className="card-actions mt-9">
                <button className="btn ">View</button>
              </div>
            </div>
          </div>
          </div> )
        }
        </div>
        </>
        
    );
};

export default BookCategory;