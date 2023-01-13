import {useState,useEffect} from "react";
import Categories from "./Categories";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import ReactPaginate from 'react-paginate';
function Category({ basket, dispatch , wish}) {
  const [data,setData]=useState(Categories)
  let {cat_id}=useParams();
  const product = data.filter((p) => p.category === +cat_id);
  
  const filterResult2=(catItem)=>{
    const result =Categories.filter((curdata)=>{
        return curdata.color === catItem
    })
    setData(result);
  }
  const filterResult3=(catItem)=>{
    const result =Categories.filter((curdata)=>{
        return curdata.brand === catItem
    })
    setData(result);
  }
  const filterResult4=(catItem)=>{
    const result =Categories.filter((curdata)=>{
        return curdata.rating === catItem
    })
    setData(result);
  }
  const addToBasket =(id)=>{
    let f= basket.find((t)=>t.id === id);
    if (f) {
      f.count++;
      dispatch({
        type:"SET_BASKET",
        payload:[...basket],
      })
    }
    else{
      dispatch({
        type:"SET_BASKET",
        payload:[...basket,{id:id,count:1}],
      })
    }
  
 
  }
  const addToWish = (id) =>{
    let z=wish.find((t)=>t.id === id);
    if (z) {
      z.count++;
      dispatch({
        type:"SET_WISH",
        payload:[...wish],
      })
    }
    else{
      dispatch({
        type:"SET_WISH",
        payload:[...wish,{id:id,count:1}],
      })
    }
  }
  const removeFromBasket =(id)=>{
    dispatch({
      type:"SET_BASKET",
      payload:[...basket.filter((t)=>t.id !== id)]
    })
  }
  const removeFromWish =(id)=>{
    dispatch({
      type:"SET_WISH",
      payload:[...wish.filter((t)=>t.id !== id)]
    })
  }
  const [loading,setLoading]=useState(true)
  const itemsPerPage = 8;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, product]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };
  const [show,setShow]=useState(true);
  return (
  <>

  <section className="category-section">
  <div className="container">
  <div className="row">
        <aside className="col-lg-3">
        <button className="btn btn-outline-secondary mb-3 w-100 d-lg-none collapsed" data-bs-toggle="collapse" data-bs-target="#aside_filter" aria-expanded="false">Show filter</button>
          <div id="aside_filter" className="card d-lg-block mb-5 collapse" style={{}}>

            <div className="filter-group">
              <header className="card-header">
                <a href="#" className="title collapsed " data-bs-toggle="collapse" data-bs-target="#collapse_aside1" aria-expanded="false">
Categories  <i className="icon-control fa fa-chevron-down" style={{float:"right"}}/>
                </a>
              </header>
              <div className="collapse" id="collapse_aside1" style={{}}>
                <div className="card-bodys">
                  <ul className="list-menu">
                    <li><Link to="/category/1">Smartphones </Link></li>
                    <li><Link to="/category/2">Tablets</Link></li>
                    <li><Link to="/category/3">Laptops</Link></li>
                    <li><Link to="/category/4">Audio</Link></li>
                    <li><Link to="/category/5">Cameras</Link></li>
                    <li><Link to="/category/6">Smart Watches </Link></li>
              
                  </ul>
                </div> 
              </div> 
            </div>

            <div className="filter-group">
              <header className="card-header">
                <a href="#" className="title" data-bs-toggle="collapse" data-bs-target="#color">
                  Color   <i className="icon-control fa fa-chevron-down" style={{float:"right"}} />
                </a>
              </header>
              <div className="collapse show" id="color">
                <div className="card-body">
                <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>setData(Categories)}>All</span>
                  </label>
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult2('black')}>Black</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult2('blue')}>Blue</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult2('red')}>Red</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult2('green')}>Green</span>
                  </label> 
                </div> 
              </div> 
            </div>

            <div className="filter-group">
              <header className="card-header">
                <a href="#" className="title" data-bs-toggle="collapse" data-bs-target="#collapse_aside_brands">
                  Brands   <i className="icon-control fa fa-chevron-down" style={{float:"right"}} />
                </a>
              </header>
              <div className="collapse show" id="collapse_aside_brands">
                <div className="card-body">
                <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>setData(Categories)}>All</span>
                  </label>
                <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Samsung')}>Samsung</span>
                  </label>
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Xiaomi')}>Xiaomi</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Microsoft')}>Microsoft</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Blackview')}>Blackview</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Asus')}>Asus </span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Hp')}>HP</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('HyperX')}>HyperX  </span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Shure')}>Shure</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Sony')}>Sony  </span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Nikon')}>Nikon</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('Apple')}>Apple</span>
                  </label> 
                  <label className="form-check mb-2">
                    <span className="form-check-label" onClick={()=>filterResult3('HUAWEI')}>Huawei</span>
                  </label> 
                </div> 
              </div> 
            </div>
            
            <div className="filter-group">
              <header className="card-header">
                <a href="#" className="title" data-bs-toggle="collapse" data-bs-target="#rating">
                  Ratings   <i className="icon-control fa fa-chevron-down" style={{float:"right"}} />
                </a>
              </header>
              <div className="collapse show" id="rating">
                <div className="card-body">
                <label className="form-check mb-2">
                    <span style={{cursor:"pointer",fontWeight:"500"}} className="form-check-label" onClick={()=>setData(Categories)}>All</span>
                  </label> 
                <label className="form-check mb-2">
                    <span style={{cursor:"pointer"}} className="form-check-label" onClick={()=>filterResult4('5star')}>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    </span>
                  </label>
                  <label className="form-check mb-2">
                    <span style={{cursor:"pointer"}} className="form-check-label" onClick={()=>filterResult4('4star')}>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-regular fa-star "></i>
                    </span>
                  </label>
                  <label className="form-check mb-2">
                    <span style={{cursor:"pointer"}} className="form-check-label" onClick={()=>filterResult4('3star')}>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-regular fa-star "></i>
                    <i className="fa-regular fa-star "></i>
                    </span>
                  </label>
                  <label className="form-check mb-2">
                    <span style={{cursor:"pointer"}} className="form-check-label" onClick={()=>filterResult4('2star')}>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-regular fa-star "></i>
                    <i className="fa-regular fa-star "></i>
                    <i className="fa-regular fa-star "></i>
                    </span>
                  </label> 
                  <label className="form-check mb-2">
                    <span style={{cursor:"pointer"}} className="form-check-label" onClick={()=>filterResult4('1star')}>
                    <i className="fa-solid fa-star checked"></i>
                    <i className="fa-regular fa-star "></i>
                    <i className="fa-regular fa-star "></i>
                    <i className="fa-regular fa-star "></i>
                    <i className="fa-regular fa-star "></i>
                    </span>
                  </label>
                </div> 
              </div> 
            </div> 
          </div> 
         
        </aside> 
        <main className="col-lg-9">
          <header className="d-lg-flex align-items-center  mb-4 pb-3 category-haeader">
            <span style={{fontSize:"0.9125rem",}} className="d-block py-2">Showing {currentItems.length} results</span>
            <div className="ms-auto">
              <div className="btn-group btn-groups ">
              <button  onClick={()=>setShow(true)}  className={show?"selected-filter": ""} > 
              <i className="bi bi-grid-3x3-gap-fill"></i>
                </button>
                <button onClick={()=>setShow(false)}   className={!show?"selected-filter": ""}> 
                <i className="bi bi-list-task"></i>
                </button>
              </div>
            </div>
          </header>
          <div className="row ">
        <main className="col-lg-12">
          {product.length>0 ?(
   <>
   {show ? (
<div className="row">
{ currentItems.map((a)=>{
   let check_basket =basket.find((t)=>t.id === a.id);
   let check_wish = wish.find((t) => t.id === a.id);
return (
<div className="col-lg-3 col-md-6 col-sm-6">
<div key={a.id} className="card mb-4 " style={{height:"450px"}}>
 <div className="card-body">
   <div className="card-img-actions">
   <Link onClick={()=>setLoading(!loading)} to={`/products/${a.id}`}><img style={{height:"160px",width:"160px",objectFit:"cover"}} src={a.image} className="card-img img-fluid " alt="" /></Link>
   </div>
 </div>
 <div className="card-body card-body-list  text-center">
   <div className="mb-2" style={{height:"60px"}}>
     <h6 className="font-weight-semibold">
       <span style={{fontSize:"14px",display:"block"}} className="text-default mb-2" >{a.name}</span>
     </h6>
   </div>
   <h3 className="mb-4 font-weight-semibold mt-3">{a.price}$</h3>
   <div className="card-body-button  d-block">
   {check_wish ? (
   <button  onClick={()=>removeFromWish(a.id)} style={{border:"none",width:"150px",height:"30px",marginBottom:"15px",backgroundColor:"#FF9F1A",color:"#fff"}}><span style={{marginLeft:"10px"}}>Remove From Wish</span></button>
   ):(
     <button  onClick={()=>addToWish(a.id)} style={{border:"none",width:"150px",height:"30px",marginBottom:"15px",backgroundColor:"#10936A",color:"#fff"}}><span style={{marginLeft:"10px"}}>Add To Wish</span></button>
   )}
   {check_basket ? (
   <button  onClick={()=>removeFromBasket(a.id)}  style={{border:"none",width:"150px",height:"30px",backgroundColor:"#FF9F1A",color:"#fff"}}><span style={{marginLeft:"10px"}}>Remove From Cart</span></button>
   ):(
   <button  onClick={()=>addToBasket(a.id)}  style={{border:"none",width:"150px",height:"30px",backgroundColor:"#EF233C",color:"#fff"}}><span style={{marginLeft:"10px"}}>Add To Cart</span></button>
   )}
   </div>
 </div>
</div>
</div>
)
})}
<div>


</div>
</div>
   ):(
     <>
     { currentItems.map((a)=>{
               let check_basket =basket.find((t)=>t.id === a.id);
               let check_wish = wish.find((t) => t.id === a.id);
               return(
                 <div className="card card-product-list mb-3">
                 <div className="row g-0 p-4 ">
                   <aside className="col-xl-3 col-md-4 lists-image">
                     <a href="#" className="img-wrap"> <img src={a.image} /> </a>
                   </aside> 
                   <div className="col-xl-6  col-md-5 col-sm-7">
                     <div className="card-body align-items-center">
                       <a href="#" className="title h5 ">{a.name}</a>
                       <div className="rating-wrap mb-2">
                         <ul className="rating-stars">
                           <li className="stars-active" style={{width: '90%'}}>
                             <img src="images/misc/stars-active.svg" alt="" />
                           </li>
                           <li> <img src="images/misc/starts-disable.svg" alt="" /> </li>
                         </ul>
                       </div> 
                     </div> 
                   </div> 
                   <aside className="col-xl-3 col-md-3 col-sm-5">
                     <div className="info-aside">
                       <div className="price-wrap">
                         <span className="price h5">{a.price}$</span>  
                       </div>
                       <br />
                       <div className="mb-3">
                       {check_wish ? (
   <button  onClick={()=>removeFromWish(a.id)} style={{border:"none",width:"150px",height:"30px",marginBottom:"15px",backgroundColor:"#FF9F1A",color:"#fff"}}><span style={{marginLeft:"10px"}}>Remove From Wish</span></button>
   ):(
     <button  onClick={()=>addToWish(a.id)} style={{border:"none",width:"150px",height:"30px",marginBottom:"15px",backgroundColor:"#10936A",color:"#fff"}}><span style={{marginLeft:"10px"}}>Add To Wish</span></button>
   )}
   {check_basket ? (
   <button  onClick={()=>removeFromBasket(a.id)}  style={{border:"none",width:"150px",height:"30px",backgroundColor:"#FF9F1A",color:"#fff"}}><span style={{marginLeft:"10px"}}>Remove From Cart</span></button>
   ):(
   <button  onClick={()=>addToBasket(a.id)}  style={{border:"none",width:"150px",height:"30px",backgroundColor:"#EF233C",color:"#fff"}}><span style={{marginLeft:"10px"}}>Add To Cart</span></button>
   )}
                       </div>
                     </div> 
                   </aside>
                 </div>
               </div>
               )
     })}
  
     </>
   )}
   </>
          ):(
            <div className="ss d-flex align-items-center justify-content-center flex-column ">
            <img style={{width:"300px",height:"300px",objectFit:"cover"}} src="https://cdn.dribbble.com/users/1181180/screenshots/7025252/media/aa9558875314510c281a4483bc99da22.gif" alt="" />
            <h5 className="text-center">No Products Found</h5>
            </div>
          )}
       
     
       
         
          <div className="pagi">
          <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        breakClassName={'page-item'}
        breakLinkClassName={'page-link'}
        containerClassName={'pagination'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
        renderOnZeroPageCount={null}
      />
          </div>
       
          <hr />
        </main> 
      </div> 
          <hr />
        </main> 
      </div>
  </div>
  </section>


  </>
  )
}
const t=a=>{
  return{
    basket: a.basket,
    wish:a.wish,
  }
}
export default connect(t)(Category)