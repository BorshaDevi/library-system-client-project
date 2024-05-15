import { Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'

const Book = ({data}) => {
    console.log(data)
    const {category,bookName,image,rating,authorName,_id}=data
    return (
        <div>
           <div className="card card-side mt-5 bg-white mx-auto max-w-6xl shadow-xl">
  <figure><img src={image} className="w-60" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-blue-500">{bookName}</h2>
    <h5 className="">{authorName}</h5>
    <p >category:<span className="text-blue-300">{category}</span></p>
    <p><Rating
              initialRating={rating}
              
              ></Rating></p>
    <div className="card-actions mt-10 ">
      <Link to='/details'><button className="btn hover:bg-blue-400">Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;