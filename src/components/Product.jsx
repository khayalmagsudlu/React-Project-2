import { Link } from "react-router-dom"
function Product({item}) {
  return (
    <Link to={`/details/${item.id}`} className="product">
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <span>{item.sizedetail}</span>
        <span>{item.color}</span>
        <span style={{color:"red",fontSize:"30px"}}>{item.yaddas}</span>
    </Link>
  )
}

export default Product