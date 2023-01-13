import Categories from "./Categories";
import {connect} from 'react-redux'
import {useState} from "react";
import { Link } from "react-router-dom";
function Basket({basket,dispatch}) {
  const [data,setData]=useState(Categories)

  const decreaseCount =(id)=>{
    let f=basket.find((t)=>t.id === id);
    f.count--;
    if (f.count>0) {
            dispatch({
                type:"SET_BASKET",
                payload:basket,
            })
    }
    else{
        dispatch({
            type:"SET_BASKET",
            payload:[...basket.filter((t)=>t.id  !== id)],
        }) 
    }
}
    const increaseCount =(id)=>{
        let f =basket.find((t)=>t.id === id);
        f.count++;
        dispatch({
            type:"SET_BASKET",
            payload: basket,
        })
    }
    
  return (
    <section className="section-basket">
      
      <>
      {basket.length ? (
  <div className="container">
    <div className="row mb-5">
      <div className="col-lg-9">
  {data.length &&  basket.map((a)=>{
      let product =data.find((t)=>t.id === a.id);
      return(
        <div className="row">
        <div className="card">
          <div className="content-body">
            <h4 className="card-title basket-title mb-4 ">Your shopping cart</h4>
            <article className="row gy-3 mb-4 d-flex ">
              <div className="col-lg-5 ">
                <figure className="itemside d-flex ">
                  <div className="aside"><img src={product.image} style={{width:"150px",height:"100px",objectFit:"cover"}} className="img-sm img-thumbnail" /></div>
                  <figcaption className="info pl-5">
                    <p className="text-muted">{product.name}</p>
                  </figcaption>
                </figure>
              </div>
              
              <div className="col-auto d-flex operations">
                
              <button onClick={()=>decreaseCount(a.id)} className="btn btn-primary">-</button>
               <h4 >{a.count}</h4>
              <button onClick={()=>increaseCount(a.id)} className="btn btn-danger">+</button> 
              </div>
              <div className="col-lg col-sm-4 col-6">
                <div className="price-wrap  lh-sm"> 
                  <small className="text-muted ">{product.price}Azn</small> 
                </div>
              </div>
              <div className="col-lg col-sm-4 col-6">
                <div className="price-wrap  lh-sm"> 
                  <small className="text-muted ">{(product.price * a.count).toFixed(2)}Azn</small> 
                </div>
              </div>
              <div className="col-lg col-sm-4">
                <div className="float-lg-end mx-2">
                  <button onClick={()=>{
                    dispatch({
                      type:"SET_BASKET",
                      payload:[...basket.filter((t)=>t.id !== a.id)]
                    })
                  }}  className="btn btn-light text-danger">Remove</button>
                </div>
              </div>
            </article>
          </div> 
        </div> 

      </div>
      )
      
  })}
  </div>
        <div className="col-lg-3">
        <div className="card">
           <div className="card-body"> 
                        <div className="d-flex  basket-check-flex">
                           <div> <h4 className="text-danger">Total:</h4></div> 
                           <div className="text-end text-dark h5"> 
                           {basket.reduce((acc,item)=>acc+data.find((t)=>t.id === item.id).price * item.count,0).toFixed(2)}{""}Azn
                            </div>
                            </div> 
                            <hr />
                             <div className="text-center mt-3 mb-3">
                               <img src="https://w7.pngwing.com/pngs/421/982/png-transparent-payment-gateway-service-money-debit-card-italy-visa-text-service-logo.png" height={24} /> 
                               </div> 
                               <Link to={'/Check'} className="btn basket-btns mb-2 w-100">Checkout</Link>
                                </div> 
                                </div>
      </div>   
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
const t= (a)=>{
    return{
        basket:a.basket,
    }
}
export default connect(t)(Basket)