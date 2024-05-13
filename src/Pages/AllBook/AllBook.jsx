import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import BookList from "../BookList/BookList";
import { TbArticle } from "react-icons/tb";
import { PiDotsNineFill } from "react-icons/pi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import GridBook from "../GridBook/GridBook";
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
       <Tabs>
    <TabList>
      <Tab><TbArticle /></Tab>
      <Tab><PiDotsNineFill /></Tab>
    </TabList>

    <TabPanel>
    {
            allBooks.map(allBook => <BookList key={allBook._id} allBook={allBook}></BookList> )
    }
    </TabPanel>
    <TabPanel>
        <div className="grid lg:grid-cols-3 grid-cols-1 ml-5 gap-10 mx-auto max-w-6xl">
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