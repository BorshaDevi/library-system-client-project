import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div >
         <div className=" ">
  <div className="hero-content flex-col ">
  <h1 className="font-bold text-white text-2xl">Login</h1>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-glass border border-blue-300">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
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
            <input  className="btn bg-blue-400 hover:bg-blue-600" type="submit" value='Login' />
          
        </div>
        <p className="text-white">Do not have account?Please <Link  className='text-blue-900 font-semibold' to='/register'>Register</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;