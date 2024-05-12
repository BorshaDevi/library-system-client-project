

const BookList = ({allBook}) => {
    const {_id,bookName,image,category,rating,authorName}=allBook
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-cyan-200">Image</th>
              <th className="text-cyan-200">Book Name</th>
              <th className="text-cyan-200">Category</th>
              <th className="text-cyan-200">Rating</th>
              <th className="text-cyan-200"></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={image}alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td className="text-blue-700 font-bold  ">

                {bookName}
                <br></br>
                <span className="text-cyan-200">{authorName}</span>
              </td>
              
              <td className="text-blue-700 font-bold  ">{category}</td>
              <td className="text-black font-bold ">{rating}</td>
              <th>
                <button className=" text-blue-500 bg-white  rounded-t-xl rounded-b-xl ">Update</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default BookList;