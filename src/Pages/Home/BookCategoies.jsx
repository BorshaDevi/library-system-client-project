import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const BookCategoies = ({bookcate}) => {
  const {loading}=useContext(AuthContext)
    const {image,category}=bookcate
    return (
        <div>
            <Link to={`/cateBook/${category}`}>
              {
                loading?<span className="loading loading-spinner loading-lg"></span> : <div className="card card-compact w-96 mt-5 grid grid-cols-2 shadow-xl ">
                <figure><img className='w-60 p-3' src={image}alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title font-semibold bg-blue-300 justify-center  rounded-r-md rounded-l-md text-blue-500">{category}</h2>
                  
                  <div className="card-actions mt-9">
                    <button className="btn ">View</button>
                  </div>
                </div>
              </div>
              }
              
          </Link>
        </div>
    );
};

export default BookCategoies;