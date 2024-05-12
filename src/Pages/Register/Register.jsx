import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
  
  const {createUser,updateUser}=useContext(AuthContext)
  const valide = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const handleRegister=e=>{
    e.preventDefault()
    const form=e.target;
    const email=form.email.value;
    const name=form.name.value;
    const password=form.password.value;
    const photo=form.photo.value;
    console.log(email,name,password,photo)
    if(!valide.test(password)){
      return Swal.fire({
        title: 'Error!',
        text: 'password should be at least 8 character,one capital letter,one special character ',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
    createUser(email,password)
    .then(result => {
      Swal.fire({
        title: 'successful',
        text: 'You successfully register',
        icon: 'success',
        confirmButtonText: 'ok'
      })
    })
    .catch(error => console.log(error))
    // updateUser(name,photo)
    // .then(()=> {
        
    // })
    // .catch(error => console.log(error))

  }
    return (
        <div>
               <div className="min-h-screen ">
  <div className="hero-content flex-col ">
  <h1 className="font-bold text-white text-2xl">Register</h1>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-glass border border-blue-300">
      <form onSubmit={handleRegister}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="Text" placeholder="photo" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input  className="btn bg-blue-400 hover:bg-blue-600" type="submit" value='Register' />
          
        </div>
        <p className="">Have account?Please <Link  className='text-blue-900 font-semibold' to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;