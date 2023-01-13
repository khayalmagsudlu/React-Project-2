import {useState,useEffect} from "react";
import React from 'react'
import {connect} from 'react-redux'
import { useParams } from 'react-router-dom';
import Categories from "./Categories";
function ProductDetails({ basket, dispatch, wish }) {
  const [data,setData]=useState(Categories)
  const [spiner, setSpiner ] = useState(true);
  const { id } = useParams();
  const product = data.find((p) => p.id === +(id));
  const check=basket.find((a)=>a.id === +id)
  const check1 = wish.find((a) => a.id === +id);
  useEffect(() => {
    setTimeout(() => setSpiner(false),200)
  }, []);
  const decreaseCount =()=>{
    let f=basket.find((t)=>t.id === +id);
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
            payload:[...basket.filter((t)=>t.id  !== +id)],
        }) 
    }
}
    const increaseCount =()=>{
        let f =basket.find((t)=>t.id === +id);
        f.count++;
        dispatch({
            type:"SET_BASKET",
            payload: basket,
        })
    }
    const addToBasket = () => {
      dispatch({
        type: "SET_BASKET",
        payload: [
          ...basket,
          {
            id: +id,
            count: 1,
          },
        ],
      });
    };
    const removeFromBasket = () => {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket.filter((t) => t.id !== +id)],
      });
    };
    const addToWish = () => {
      dispatch({
        type: "SET_WISH",
        payload: [
          ...wish,
          {
            id: +id,
            count: 1,
          },
        ],
      });
    };
    const removeFromWish = () => {
      dispatch({
        type: "SET_WISH",
        payload: [...wish.filter((z) => z.id !== +id)],
      });
    };
return (
  
  <section className="product-detail-sec" >
    <div className="container">
      {spiner ? (
  <span  className="loader d-flex align-items-center justify-content-center mx-auto"></span>
      ):(
        <div className="card detail-card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1"><img style={{width:"200px",height:"200px",objectFit:"cover",margin:"0 auto"}} src={product.image} /></div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title detail-p">{product.name}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star checked" />
                  <span className="fa fa-star" />
                  <span className="fa fa-star" />
                </div>
                <span className="review-no">41 reviews</span>
              </div>
              <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
              <h4 className="price">current price: <span>{product.price}$</span></h4>
              <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
            {check && (
          <div className="operations-detail d-flex ">
              <span onClick={decreaseCount}>-</span>
              <span className="spantwo">{check.count}</span>
             <span onClick={increaseCount}>+</span>
          </div>
            )}
          
              <div className="detail-button">
                {check ? (
                <button style={{backgroundColor:"rgb(16, 147, 106)"}} onClick={removeFromBasket} className=" detail-addtocart " >Remove from To Cart</button>

                ):(
                  <button onClick={addToBasket} className=" detail-addtocart   " >Add To Cart</button>
                )}
                {check1 ? (
                <button style={{backgroundColor:"rgb(255, 159, 26)"}}  onClick={removeFromWish} className=" detail-addtowish " >Remove from  To Wish</button>

                ):(
                <button onClick={addToWish} className=" detail-addtowish   " >Add To Wish</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
   
  
      
      </div>
    </section>
   
  )
}
const t=(a)=>{
  return{
    basket:a.basket,
    wish:a.wish,
  }
}
export default connect(t) (ProductDetails)