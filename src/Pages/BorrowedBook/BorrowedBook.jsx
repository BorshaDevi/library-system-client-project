import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BorrowData from "./BorrowData";


const BorrowedBook = () => {
    const {user}=useContext(AuthContext)
    const[borrowDatas,setBorrowDatas]=useState([])
    useEffect(()=>{
       axios.get(`https://library-system-server-project.vercel.app/borrowedBook/${user?.email}`)
       .then(res => {
        setBorrowDatas(res.data)
       })
    },[user])
    return (
        <div>
            <div className="grid lg:grid-cols-3 grid-cols-1  gap-5 mx-auto max-w-6xl">
                 {
                    borrowDatas.map(borrowData => <BorrowData key={borrowData._id}  borrowDatas={borrowDatas} setBorrowDatas={setBorrowDatas} borrowData={borrowData}></BorrowData>)
                 }
            </div>
        </div>
    );
};

export default BorrowedBook;