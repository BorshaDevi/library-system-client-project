import axios from "axios";


const BorrowData = ({borrowData,borrowDatas,setBorrowDatas}) => {
    const {image,returnDate,borrowDate,bookName,category,_id}=borrowData
    const handleDelete=bookName=>{
        axios.delete(`https://library-system-server-project.vercel.app/delete/${bookName}`)
        .then(res => {
           const remain=borrowDatas.filter(borrowdata => borrowdata.bookName !==bookName)
           setBorrowDatas(remain)
        })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{category}</p>
    <div className="flex">
        <p>Borrow Data:{borrowDate}</p>
        <p>Return Data:{returnDate}</p>
    </div>
    <button onClick={() => handleDelete(bookName)} className="btn bg-blue-400">Return</button>
  </div>
  <figure><img src={image} alt="Shoes" /></figure>
</div>
        </div>
    );
};

export default BorrowData;