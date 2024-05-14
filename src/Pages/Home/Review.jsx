

const Review = () => {
    return (
        <div className="mt-10 ">
        <h1 className="text-center font-bold  text-blue-800  text-2xl">Book Reviews</h1>
        <div className="grid lg:grid-cols-3 ml-5 gap-5 mt-10  mx-auto max-w-6xl">
            
           <div className="card card-compact w-96 bg-glass shadow-xl">
           <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
           <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://i.ibb.co/Cmb9Ph9/handsome-smiling-man-looking-with-disbelief.jpg" />
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">Mr.Alum</h2>
    <p>The Future of Life is a thought-provoking and timely read that challenges readers to reconsider their relationship with the natural world and inspires them to take action to preserve Earth's biodiversity for future generations. Wilson's impassioned plea for stewardship and sustainability resonates long after the final page, making this book essential reading for anyone concerned about the fate of our planet.</p>
    
  </div>
</div>


<div className="card card-compact w-96 bg-glass shadow-xl">
<div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
<div className="chat-image avatar">
    
    <div className="w-10 rounded-full">
        
      <img alt="Tailwind CSS chat bubble component" src="https://i.ibb.co/wsVFLPP/young-smiling-man-red-shirt-with-optical-glasses-thumbs-up-isolated-orange-wall.jpg" />
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">Kabuja</h2>
    <p>Novel is a thought-provoking and timely read that challenges readers to reconsider their relationship with the natural world and inspires them to take action to preserve Earth's biodiversity for future generations. Wilson's impassioned plea for stewardship and sustainability resonates long after the final page, making this book essential reading for anyone concerned about the fate of our planet.</p>
    
  </div>
</div>


<div className="card card-compact w-96 bg-glass shadow-xl">
<div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>
<div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS chat bubble component" src="https://i.ibb.co/HNZ4mQC/front-view-smiley-girl-looking-away.jpg" />
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">Era</h2>
    <p>The dark night is a thought-provoking and timely read that challenges readers to reconsider their relationship with the natural world and inspires them to take action to preserve Earth's biodiversity for future generations. Wilson's impassioned plea for stewardship and sustainability resonates long after the final page, making this book essential reading for anyone concerned about the fate of our planet.</p>
    
  </div>
</div>
        </div>
        </div>
    );
};

export default Review;