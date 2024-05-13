import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'

const GridBook = ({allBook}) => {
    const {_id,bookName,image,category,rating,authorName}=allBook
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <h4 className="card-title text-blue-400">{authorName}</h4>
   <div className="flex">
    <p>{category}</p>
    <p > <Rating
              initialRating={rating}
              
              ></Rating></p>
   </div>
    <div className="card-actions justify-end">
    <Link to={`/update/${_id}`} className=" text-blue-500 btn bg-white  rounded-t-xl rounded-b-xl ">Update</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default GridBook;