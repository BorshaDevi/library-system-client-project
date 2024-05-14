import axios from "axios";
import { useEffect, useState } from "react";
import BookCategoies from "./BookCategoies";


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
            bookcates.map(bookcate => <BookCategoies key={bookcate._id} bookcate={bookcate}></BookCategoies> )
        }
        </div>
        </>
        
    );
};

export default BookCategory;