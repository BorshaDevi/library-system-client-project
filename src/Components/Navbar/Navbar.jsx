import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user,logout,loading}=useContext(AuthContext)
  const [theme,setTheme]=useState('light')
  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme',theme)
  },[theme])
  const handleTheme=e=>{
    
    if(e.target.checked){
      setTheme('dark')
      
    }
    else{
      setTheme('light')
    }
  }
  
  const handleLogOut=()=>{
     logout()
     .then(()=> {
       
     })
     .catch(error => {
      console.log(error)
     })
  }
    const links=<>
        <li><NavLink className='text-blue-300 hover:text-blue-500 font-bold' to='/'>Home</NavLink></li>
        <li><NavLink  className='text-blue-300 hover:text-blue-500 font-bold' to='/addBook'>Add Book</NavLink></li>
        <li><NavLink className='text-blue-300 hover:text-blue-500 font-bold' to='/allBook'>All Books</NavLink></li>
        <li><NavLink className='text-blue-300 hover:text-blue-500 font-bold' to='/borrowedBook'>Borrowed Books</NavLink></li>
        {/* <li><NavLink className='text-blue-300 hover:text-blue-500 font-bold' to='/borrowedBook'></NavLink></li> */}

    </>
    return (
        <div>
            <div className="navbar bg-glass">
  <div className="navbar-start text-white">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52 text-white">
     {links}

      </ul>
    </div>
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://i.ibb.co/zQcVyr3/25736244-7098353.jpg" />
        </div>
      </div>
    <a className=" text-3xl font-extrabold">Akushe Library</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {links}

    </ul>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2">
  {
    loading?<span className="loading loading-spinner loading-lg"></span> : <div>
      {
    user?<div className="dropdown ml-20 dropdown-end ">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li><p>{user?.displayName}</p></li>
    <li><button onClick={handleLogOut} className="bg-blue-600">LogOut</button></li>
    </ul>
  </div> :<div className=" ml-10  flex">
    <Link className="btn mr-2" to='/login'>Login</Link>
    <Link className="btn" to='/register'>Register</Link>
  </div>
  }
    </div>
  }
  {/* <label className="cursor-pointer grid place-items-center">
  <input  type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label> */}
  <label className="cursor-pointer grid place-items-center">
  <input onChange={handleTheme} type="checkbox"  className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
</div>
</div>

        </div>
    );
};

export default Navbar;