import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BookList from "../BookList/BookList";


const AllBook = () => {
    const {user}=useContext(AuthContext)
    const [allBooks,setAllBooks]=useState([])
    useEffect(()=> {
        axios.get(`https://library-system-server-project.vercel.app/allBooks/${user?.email}`)
        .then(res => {
            console.log(res.data)
            setAllBooks(res.data)
        })
    },[user])
    return (
        <>
        {
            allBooks.map(allBook => <BookList key={allBook._id} allBook={allBook}></BookList> )
        }
      
      </>
    );
};

export default AllBook;