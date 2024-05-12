import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";



const AddBook = () => {
    const handleAddBook=e=>{
        e.preventDefault()
        const form=e.target;
        const bookName=form.bookName.value;
        const image=form.image.value;
        const description=form.description.value;
        const category=form.category.value;
        const authorName=form.authorName.value;
        const content=form.content.value;
        const rating=form.rating.value;
        const bookNumber=form.bookNumber.value;
        const books={bookName,image,description,category,authorName,content,rating,bookNumber}
        console.log(books)
        axios.post('https://library-system-server-project.vercel.app/books',books)
        .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: 'successfully logging',
                    text: ' iye',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
   
    
    return (
        <div className="mx-auto max-w-6xl">
        <div className="bg-glass">
        <h2 className="text-center text-xl font-semibold">Add Book</h2>
        <form onSubmit={handleAddBook}   className="p-5" >
            {/* 1st */}
            <div className="lg:grid lg:grid-cols-2  gap-5 lg:p-5 ">
            <div>
            <label htmlFor="Book name" className="lg:ml-3">Book name</label><br />
            <input type="text" name='bookName' placeholder="Book name" className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            <div>
            <label htmlFor="Category">Category</label>

            <select name="category" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
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
            <input type="text" name='authorName' placeholder="Author Name"className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
           <div>
           <label htmlFor="short description" className="lg:ml-3">Short description</label><br />
            <input type="text" name='description' placeholder="description" className="lg:ml-5 w-full p-3 rounded-t-md"  />
           </div>
            </div>

            {/* 3rd */}
            <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
            <div>
            <label htmlFor="image" className="lg:ml-3">Image</label><br />
            <input type="text" name='image' placeholder="Image" className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            <div>
            <label htmlFor="contents" className="lg:ml-3">Contents</label><br />
            <input type="text" name='content' placeholder="" defaultValue={'All types of book are here.'}  className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
            <div>
            <label htmlFor="Rating ">Rating </label>

            <select name="rating" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            </div>
            <div>
            <label htmlFor="Quantity of the book" className="lg:ml-3">Quantity of the book</label><br />
            <input type="number" name='bookNumber' placeholder="Book Number"  className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            </div>
            <input type="submit" className=" mt-3 btn w-64 ml-20 lg:ml-96 hover:bg-blue-500"  value='Add' />
        </form>
        </div>
    </div>
    );
};

export default AddBook;


// onSubmit={handleSubmit}