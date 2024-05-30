import { useContext, useEffect, useState } from "react";

import axios from "axios";
import BookList from "../BookList/BookList";
import { TbArticle } from "react-icons/tb";
import { PiDotsNineFill } from "react-icons/pi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GridBook from "../GridBook/GridBook";
const AllBook = () => {
    const[sort,setSort]=useState('')
    const[filter,setFilter]=useState('')
    const [allBooks,setAllBooks]=useState([])
    useEffect(()=> {
        axios.get(`https://library-system-server-project.vercel.app/allBooks?sort=${sort}&filter=${filter}`)
        .then(res => {
            console.log(res.data)
            setAllBooks(res.data)
        })
    },[sort,filter])
    return (
        <>
       <Tabs>
    <TabList>
      <Tab><TbArticle /></Tab>
      <Tab><PiDotsNineFill /></Tab>
      <label htmlFor="sorting" className="bg-white">Sort by quntite</label>

      <select
onChange={(e)=>setSort(e.target.value)}
name="sort" id="sort" value={sort}>
  <option value="">SortIng</option>
  <option value="asc">asc</option>
  <option value="des">des</option>
  
</select>

      <select
onChange={(e)=>setFilter(e.target.value)}
name="category" id="category" className="ml-10" value={filter}>
  <option value="">Category</option>
  <option value="Novel" className="hover:bg-blue-500">Novel</option>
  <option value="Drama" className="hover:bg-blue-500">Drama</option>
  <option value="Sci-if" className="hover:bg-blue-500">Sci-if</option>
  <option value="Thriller" className="hover:bg-blue-500">Thriller</option>
  
</select>
    </TabList>

    <TabPanel className='bg-white'>
    {
            allBooks.map(allBook => <BookList key={allBook._id} allBook={allBook}></BookList> )
    }
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 grid-cols-1 ml-5 gap-10 mx-auto max-w-6xl ">
    {
            allBooks.map(allBook => <GridBook key={allBook._id} allBook={allBook}></GridBook> )
    }
    </div>
    </TabPanel>
  </Tabs>
      </>
    );
};

export default AllBook;