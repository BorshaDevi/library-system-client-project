


const AddBook = () => {
    
    return (
        <div className="mx-auto max-w-6xl">
        <div className="bg-glass">
        <h2 className="text-center text-xl font-semibold">Add Tourists Spot</h2>
        <form    className="p-5" >
            {/* 1st */}
            <div className="lg:grid lg:grid-cols-2  gap-5 lg:p-5 ">
            <div>
            <label htmlFor="name" className="lg:ml-3">Book name</label><br />
            <input type="text" name='spotName' placeholder="Book name" className="lg:ml-5 w-full p-3 rounded-t-md"  />
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
            <label htmlFor="location" className="lg:ml-3">Location</label><br />
            <input type="text" name='location' placeholder=" location" className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
           <div>
           <label htmlFor="short description" className="lg:ml-3">Short description</label><br />
            <input type="text" name='description' placeholder="description" className="lg:ml-5 w-full p-3 rounded-t-md"  />
           </div>
            </div>

            {/* 3rd */}
            <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
            <div>
            <label htmlFor="Average Cost" className="lg:ml-3">Average Cost</label><br />
            <input type="text" name='cost' placeholder="Average Cost" className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            <div>
            <label htmlFor="seasonality">seasonality</label>

            <select name="season" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
           
            </select>
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
            <label htmlFor="Quantity of the book">Quantity of the book</label>

            <select name="quantity" className="lg:ml-5 w-full p-3 rounded-t-md" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4">5</option>
            <option value="4">10</option>
            </select>
            </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 mt-2 gap-5 lg:p-5">
            <div>
            <label htmlFor="Email" className="lg:ml-3">Email</label><br />
            <input type="email" name='email' placeholder="Your Email"  className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            <div>
            <label htmlFor="name" className="lg:ml-3">Author Name</label><br />
            <input type="text" name='name' placeholder="Your name"className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            
            </div>
            {/* photo */}
            <div className="lg:mr-5 lg:ml-5">
            <label htmlFor="Image" className="lg:ml-3">Image</label><br />
            <input type="text" name='photo' placeholder=" Photo" className="lg:ml-5 w-full p-3 rounded-t-md"  />
            </div>
            <input type="submit" className=" mt-3 btn w-64 ml-20 lg:ml-96"  value='Add' />
        </form>
        </div>
    </div>
    );
};

export default AddBook;


// onSubmit={handleSubmit}