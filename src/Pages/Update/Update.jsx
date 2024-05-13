import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const loadData=useLoaderData()
    // console.log(loadData)
    const {_id,bookName,image,category,authorName,rating}=loadData
    const handleUpdate=e=>{
        e.preventDefault()
        const form=e.target;
        const bookName=form.bookName.value;
        const image=form.image.value;
        const category=form.category.value;
        const authorName=form.authorName.value;
        const rating=form.rating.value;
        const updateBooks={bookName,image,category,authorName,rating,}
        console.log(updateBooks)
        axios.put(`https://library-system-server-project.vercel.app/update/${_id}`,updateBooks)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount>0){
                form.reset()
                Swal.fire({
                    title: 'successfully',
                    text: ' Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div className="mx-auto max-w-6xl">
        <div className="bg-glass">
        <h2 className="text-center text-xl font-semibold">Update Book</h2>
        <form onSubmit={handleUpdate}   className="p-5" >
            {/* 1st */}
            <div className="lg:grid lg:grid-cols-2  gap-5 lg:p-5 ">
            <div>
            <label htmlFor="Book name" className="lg:ml-3">Book name</label><br />
            <input type="text" name='bookName' placeholder="Book name" defaultValue={bookName} className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            <div>
            <label htmlFor="Category">Category</label>
            <select name="category" defaultValue={category} className="lg:ml-5 w-full p-3 rounded-t-md" id="">
            <option value="Drama">Drama</option>
            <option value="Sci-if">Sci-if</option>
            <option value="History">History</option>
            <option value="Thriller">Thriller</option>
            <option value="Novel">Novel</option>
            </select>
            </div>
            </div>
            {/* 2nd */}
            <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5 ">
            <div>
            <label htmlFor="authorName" className="lg:ml-3">Author Name</label><br />
            <input type="text" name='authorName' defaultValue={authorName} placeholder="Author Name"className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>


            <div>
            <label htmlFor="Rating ">Rating </label>

            <select name="rating" defaultValue={rating} className="lg:ml-5 w-full p-3 rounded-t-md" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            </div>
            </div>



            

            {/* 3rd */}
            
            <div>
            <label htmlFor="image" className="lg:ml-3">Image</label><br />
            <input type="text" name='image' defaultValue={image} placeholder="Image" className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            
            <input type="submit" className=" mt-3 btn w-64 ml-20 lg:ml-96 hover:bg-blue-500"  value='Submit' />
        </form>
        </div>
    </div>
    );
};

export default Update;