import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Book from "./Book";


const CategoryBook = () => {
    const [datas,setDatas]=useState([])
    const {category}=useParams()
    
    useEffect(()=> {
        axios.get(`https://library-system-server-project.vercel.app/categoryName/${category}`)
        .then(res => {
            console.log(res.data)
            setDatas(res.data)
        })
    },[category])
    
    return (
        <div>
                  {
                       datas.map((data,index) => <Book key={index} data={data}></Book>)
                  }
        </div>
    );
};

export default CategoryBook;