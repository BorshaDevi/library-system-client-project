import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const {user,logout,loading}=useContext(AuthContext)
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
  {
    loading?<span className="loading loading-spinner loading-lg"></span> : <div>
      {
    user?<div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li><p>{user?.displayName}</p></li>
    <li><button onClick={handleLogOut} className="bg-blue-600">LogOut</button></li>
    </ul>
  </div> :<div className="navbar-end">
    <Link className="btn mr-2" to='/login'>Login</Link>
    <Link className="btn" to='/register'>Register</Link>
  </div>
  }
    </div>
  }
  
</div>
        </div>
    );
};

export default Navbar;