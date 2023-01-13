import {useState} from "react";
import Categories from "./Categories";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
function Wish({wish,dispatch}) {
  const [data,setData]=useState(Categories);
  return (
    <section className="wish" >
        <>
        {wish.length ? (
   <div className="container">
   <div className="row mb-5 mt-5">
   <h5 style={{color:"#ff5f00",fontWeight:"600"}} className="card-title mb-3">Wish List</h5>
   {data.length && wish.map((a)=>{
let product =data.find((t)=>t.id === a.id);
   return(
       <div className="row">
        <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
          <div className="row gy-2 align-items-center"> <div className="col-xl-4 col-sm-6">
           <div className="itemside align-items-center">
             <div className="aside"> 
             <img style={{width:"150px",height:"150px",objectFit:"cover",padding:"20px"}} src={product.image} className="img-sm img-thumbnail" />
              </div> 
           </div>
            </div>
             <div className="col-xl-4 col-sm-6">
               <span>
             {product.name}</span>
              <i  style={{cursor:"pointer",display:"block",color:"#ff5f00",paddingTop:"10px",width:"40px"}} onClick={()=>{
                    dispatch({
                      type:"SET_WISH",
                      payload:[...wish.filter((t)=>t.id !== a.id)]
                    })
                  }}className="fa-solid fa-trash"></i>
                <br />
                  </div>
                   <div className="col-md-4 d-flex justify-content-lg-end"> 
                   <div> 
                    <span className="price h6 me-4">{product.price}$</span>
                     <Link to={'/Check'} style={{backgroundColor:"#ff5f00",color:"#fff"}} className="btn">Go To Check-Out</Link>
                      </div>
                       </div>
                        </div>
          </div>
    
       </div> 
        </div>
   

     </div>
   )
})}
   </div>
</div>
        ):(
            <div className="empty-gif d-flex align-items-center justify-content-center mb-5 flex-column">
            <img src="https://hakimitr.com/assets/website/images/empty-cart.gif" alt="" />
            <Link to={`/`}><button style={{backgroundColor:"#db1014",color:"#fff",border:"none",borderRadius:"10px",padding:"10px 15px"}} className="mt-5 basket-bt">Return To Page</button></Link>
            </div>
        )}
        </>
    </section>
  )
}
const t=(a)=>{
    return{
        wish:a.wish,
    }
}
export default connect(t)(Wish)