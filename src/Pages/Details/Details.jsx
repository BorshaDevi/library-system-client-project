import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";


const Details = () => {
    const {user}=useContext(AuthContext)
    const loadData=useLoaderData()
    const{bookName,_id,description,image,authorName,category,bookNumber}=loadData
    const handleSubmit=e=>{
        e.preventDefault()
        const form=e.target
        const userName=form.name.value;

        const userEmail=form.email.value;
        const returnDate=form.returnDate.value;
        const borrow={
            bookNumber,
            userName,
            userEmail,
            returnDate,
            category,
            bookName,
            book_id:_id,
            image,
            
        }
        axios.post('https://library-system-server-project.vercel.app/borrow',borrow)
        .then(res => {
            console.log(res.data)
        })
        
        
       
    }
    return (
        <div>
            <div className="hero min-h-screen mx-auto max-w-6xl bg-blue-300">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image}className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-white">{bookName}</h1>
      <p className="text-blue-900">{authorName}</p>
      <p className="py-6">{description}</p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
<form  onSubmit={handleSubmit}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" name='email'  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} name='name' className="input input-bordered" required />
          
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date</span>
          </label>
          <input type="Date" name='returnDate' className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
        <input type="submit" className="btn bg-blue-300" value='Submit' />
        </div>
      </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;