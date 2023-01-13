import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import Aos from "aos";
import 'aos/dist/aos.css'
import {connect} from "react-redux";
function Homepage({dispatch,basket,wish}) {
  const [data,setData]=useState(Categories)
  const phone=[
    {
      id:1,
        category: 1,
        image: "https://www.mihome.az/wp-content/uploads/2022/08/f0e1de8abe621b1cd7317d0900-738x738.jpeg",
        name: "MI SMARTFONLAR",
        price:"100 Azn"
    },
    {
      id:2,
      category: 1,
      image: "https://www.mihome.az/wp-content/uploads/2022/08/f0e1de8abe621b1cd7317d0900-738x738.jpeg",
      name: "MI SMARTFONLAR",
      price:"100 Azn"
    },
    {
      id:3,
      category: 1,
      image: "https://www.mihome.az/wp-content/uploads/2022/08/f0e1de8abe621b1cd7317d0900-738x738.jpeg",
      name: "MI SMARTFONLAR",
      price:"100 Azn"

    },
    {
      id:4,
      category: 1,
      image: "https://www.mihome.az/wp-content/uploads/2022/08/f0e1de8abe621b1cd7317d0900-738x738.jpeg",
      name: "MI SMARTFONLAR",
      price:"100 Azn"
      
    },
    {
      id:5,
      category: 1,
      image: "https://www.mihome.az/wp-content/uploads/2022/08/f0e1de8abe621b1cd7317d0900-738x738.jpeg",
      name: "MI SMARTFONLAR",
      price:"100 Azn"

    },
    {
      id:6,
      category: 1,
      image: "https://www.mihome.az/wp-content/uploads/2022/08/f0e1de8abe621b1cd7317d0900-738x738.jpeg",
      name: "MI SMARTFONLAR",
      price:"100 Azn"

    }
  ]
  const goodcategory=[
    {
      id:1,
      name:"Smartphones",
      image:"https://k4j3j2s7.rocketcdn.me/partdo/phone/wp-content/uploads/sites/2/2022/12/category-used-phone.png",
      link:"/category/1",
      length:"48",
    },
    {
      id:2,
      name:"Tablets",
      image:"https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-TBQ-1105-TB-0302_d37d08b51eac676f0baf41b1205a28cf_w_png.webp",
      length:"48",
      link:"/category/2"
    },
    {
      id:3,
      name:"Laptops",
      image:"https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-KOT-1114-NB-1648_c74d24edb9399bc64d97faaee892ffe8_w_png.webp",
      length:"48",
      link:"/category/3"
    },
    {
      id:4,
      name:"Audio",
      length:"11",
      image:"https://kontakt.az/wp-content/uploads/2022/11/data-sony-home-theater-bdv-e4100-2-500x500-1-150x150.webp",
      link:"/category/4"
    },
    {
      id:5,
      length:"45",
      name:"Cameras",
      image:"https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-PHV-1106-PH-0120_8447d1e2027b147e68f69c45294a859d_w_png.webp",
      link:"/category/5"
    },
    {
      id:6,
      length:"48",
      name:"Smart Watches",
      image:"https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SMW-1106-SW-0202_d27bd422301619bd2bd93d8741be9b8c_w_png.webp",
      link:"/category/6"
    }
  ]
  const goodproduct=[
    {
      "category": 1,
      "image": "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-SBP-1105-SM-1658_2c400e11d6aaef1f19ac6701da320f2f_w_png.webp",
      "name": "\n\nXiaomi Redmi Note 11 4/128 GB Twilight Blue \n\nnağd alışa- 20M \n0M 0% 12ay \n\n",
      "price": "499.99",
      "id": 5,
  "Available":"8",
  "Sold":"22",
      "link":"/products/5",
      "precent":"-14%"
  },
  {
    "category": 2,
    "image": "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-TBQ-1105-TB-0340_2b88d65c3c4d780daa6b23ad7c3cfea5_w_png.webp",
    "name": "\n\nSamsung Galaxy Tab S6 Lite (SM-P619) 128 GB Gray \n\n0M 0% 12ay\n\n",
    "price": "899.99",
  "Sold":"18",
  "id": 91,
  "Available":"12",
    "link":"/products/91",
    "precent":"-2%"
},
{
  "category": 3,
  "image": "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-KOT-1114-NB-1644_66bb2a1a6f150573c31dec7f51e390a0_w_png.webp",
  "name": "\n\nNotbuk HP Pavilion Gaming 17-CD2049UR (4E1C5EA) \n",
    "link":"/products/101",
  "Sold":"27",
  "price": "2999.99",
    "precent":"-15%",
  "Available":"20",
    
  "id": 101
},
{
  "category": 4,
  "image": "https://kontakt.az/wp-content/uploads/2022/08/hyperx_solocast_01_main_1600x-jpg.webp",
  "name": "\n\nMicrophone 2E MG-001 \n\n0M 0% 6ay\n\n",
  "Sold":"32",
  "link":"/products/145",
    "price": "44.99",
  "id": 145,
  "precent":"-21%",
  "Available":"30",
  
},
{
  "category": 5,
  "image": "https://kontakt.az/wp-content/uploads/gallery-tum/TM-DG-PHV-1106-PH-0078_e92b274eb1dcfe9a858b36142c7fa677_w_png.webp",
  "name": "\n\nNikon D5600 + AF-P 18-140 VR \n\n0M 0% 12ay\n\n",
    "link":"/products/176",
  "Sold":"29",
  "price": "1899.99",
  "id": 176,
  "Available":"15",
  "precent":"-25%",
}
  ]
  const addToBasket=(id)=>{
    let f=basket.find((t)=>t.id === id)
    if (f) {
        f.count ++;
        dispatch({
          type:"SET_BASKET",
          payload:[...basket]
        })
    }
    else{
      dispatch({
        type:"SET_BASKET",
        payload:[...basket,{id:id,count:1}]
      })
    }
  }
  const addToWish=(id)=>{
    let z =wish.find((a)=>a.id === id);
    if (z) {
      z.count++;
      dispatch({
        type:"SET_WISH",
        payload:[...wish]
      })
    }
    else{
      dispatch({
        type:"SET_WISH",
        payload:[...wish,{id:id,count:1}]
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
  const endTime= new Date('february 25, 2023 20:00:00').getTime();
  const [currentTime,setCurrentTime]=useState(new Date().getTime());
  const gap=endTime-currentTime;
  
  
  const seconds=1000;
  const minutes=seconds * 60;
  const hours=minutes * 60;
  const days=hours * 24;
  
  
  const remainingDays=Math.floor(gap/days);
  const remainingHours=Math.floor((gap%days) / hours);
  const remainingMinutes=Math.floor((gap%hours) / minutes);
  const remainingSeconds=Math.floor((gap%minutes) / seconds);
   
    useEffect(()=>{
      setTimeout(()=>setCurrentTime(new Date().getTime()),1000)
    },[currentTime])
  return (
    <>
    <section className="section-1 mb-5" >
      <div className="container">
    <div  id="carouselExampleDark" className="carousel carousel-dark slide"  data-bs-ride="carousel">
        <div  className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div  className="carousel-inner">
          <div   className="carousel-item active" data-bs-interval={10000}>
            <img  src="https://klbtheme.com/partdo/wp-content/uploads/2022/10/slider-09-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption carousel-caption-text dd  d-none d-md-block">
              <h5>This Week Only for World Premier</h5>
              <p className="carousel-caption-text-p1">Mobiles Accessories for All Your Needs</p>
              <p className="carousel-caption-text-p2">Installation of parts in the services of, our partners. Limited time offer for only new <br/> customer, also get free shipping on orders. </p>
              <span><del style={{textDecoration:"line-through",color:"#db1014",fontSize:"15px",marginRight:"10px"}}>$419</del>$389.99</span>
              <Link to={'/products/7'} className="ssss">Buy Now</Link>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img  src="https://klbtheme.com/partdo/wp-content/uploads/2022/10/slider-10-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption carousel-caption-text  d-none d-md-block">
              <h5>This Week Only for World Premier</h5>
              <p className="carousel-caption-text-p1">Mobiles Accessories for All Your Needs</p>
              <p className="carousel-caption-text-p2">Installation of parts in the services of, our partners. Limited time offer for only new <br/> customer, also get free shipping on orders. </p>
              <span><del style={{textDecoration:"line-through",color:"#db1014",fontSize:"15px",marginRight:"10px"}}>$659</del>$599.99 </span>
              <Link to={'/products/55'} className="ssss">Buy Now</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://klbtheme.com/partdo/wp-content/uploads/2022/10/slider-11-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption carousel-caption-text  d-none d-md-block">
              <h5>This Week Only for World Premier</h5>
              <p className="carousel-caption-text-p1">Mobiles Accessories for All Your Needs</p>
              <p className="carousel-caption-text-p2">Installation of parts in the services of, our partners. Limited time offer for only new <br/> customer, also get free shipping on orders. </p>
              <span><del style={{textDecoration:"line-through",color:"#db1014",fontSize:"15px",marginRight:"10px"}}>$279</del>$199.99 </span>
              <Link  to={'/products/188'} className="ssss">Buy Now</Link>

            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </section>

    <section className="section-2 mb-5"
    data-aos="fade-up"
   >
      <div className="container">
        <div className="row gy-3">
             <div className="col-lg-4 col-md-6"> 
      <div className="card  card-body card-backs" style={{border:"none"}}> 
      <div className="itemside d-flex align-items-center">
         <div className="card-body-left"> 
         <span className="text-secondary icon-md bg-secondary-light"><i className="fa-solid fa-truck-fast" style={{color:"#3bc9db",fontSize:"25px"}} ></i>
         </span> 
         </div>
          <div className="card-body-right"> 
          <h6 className="title" style={{fontFamily:""}}>International Shipment</h6>
           <p>Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p> 
           </div> 
           </div>
             </div> 
             </div>
             <div className="col-lg-4 col-md-6"> 
      <div className="card card-body card-backs" style={{border:"none"}}> 
      <div className="itemside d-flex align-items-center">
         <div className="card-body-left"> 
         <span className="text-secondary icon-md bg-secondary-light"><i className="fa-solid fa-arrow-rotate-left" style={{color:"#3bc9db",fontSize:"25px"}} ></i>
         </span> 
         </div>
          <div className="card-body-right"> 
          <h6 className="title">Extended 45 day returns</h6>
           <p>Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis.</p> 
           </div> 
           </div>
             </div> 
             </div>
             <div className="col-lg-4 col-md-6"> 
      <div className="card card-body card-backs" style={{border:"none"}}> 
      <div className="itemside d-flex align-items-center">
         <div className="card-body-left"> 
         <span className=" text-secondary icon-md bg-secondary-light"><i className="fa-solid fa-shield-halved" style={{color:"#3bc9db",fontSize:"25px"}} ></i>
         </span> 
         </div>
          <div className="card-body-right"> 
          <h6 className="title">Secure Payment</h6>
           <p>Dynar trefår decist semir. Lirad alkobom viktigt. Kabågon viren. Pimpa sperovis</p> 
           </div> 
           </div>
             </div> 
             </div>

             </div>
      </div>
    </section>

    <section   className="section-3 mb-5" 
     data-aos="fade-up"
 >
        <div className="container">
          <div className="row ">
        <div className="col-lg-6 col-md-6 mb-5">
           <div className="card card-back" style={{height: '220px'}}>
             <div className="card-body caption">
               <h5 className="card-title" style={{color:"#fff",backgroundColor:"#EF233C",width:"150px",borderRadius:"10px",padding:"2px 8px",fontSize:"15px"}} >On Sale This Week</h5>
                <p className="caption-p1">Better Quality Better <br/>Service for Your Phone</p> 
                <p className="caption-p2">Plakrore maheten. Astronens ultranirad. Dod. </p>
                <Link to={'/category/2'} className="card-back-a"> Shop Now </Link>
                 </div>
                  </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
           <div className="card card-back1" style={{height: '220px'}}>
             <div className="card-body caption">
               <h5 className="card-title" style={{color:"#fff",backgroundColor:"#EF233C",width:"150px",borderRadius:"10px",padding:"2px 8px",fontSize:"15px"}}>On Sale This Week</h5>
                <p className="caption-p1">The Importance of <br/> Sensitivity for the Phone</p> 
                <p className="caption-p2">Plakrore maheten. Astronens ultranirad. Dod. </p>
                <Link to={'/category/1'} className="card-back-a"> Shop Now </Link>
                 </div>
                  </div>
                  </div>
                  </div>
        </div>
  
    </section>

    <section className="section-4 mb-5" 
      data-aos="fade-up">
        <div className="container">
            <div className="card deals">
            <header className="d-lg-flex align-items-center mb-4 pb-3 dsx-header">
        <div className="dsx    d-md-flex  align-items-center">
        <p style={{color:"#f03e3e",fontWeight:"700",textAlign:"center"}} className="d-block py-2">Latest Deals for This Week</p>
        <p style={{color:"#f03e3e",fontWeight:"700",textAlign:"center"}} className="d-block  py-2"><span className=" phone-ss">{remainingDays} : {remainingHours} : {remainingMinutes} : {remainingSeconds}</span></p>
<p className="countdown-description">Remains until the end of the offer</p>
        </div>
   
        <div className="ms-auto">
    
          <div className="btn-group1 btn-dsx">
       <Link to={'/category/1'} style={{color:"#000",textDecoration:"none",fontSize:".9125rem",fontFamily:"serif"}}>View all<i className="fa-solid fa-right-long mx-2"></i></Link>
          </div>
        </div>
      </header>
       
              <div className="cards deals-body">
                <div className="row">
                {goodproduct.map((a)=>{
                        let check_basket =basket.find((t)=>t.id === a.id);
                        let check_wish = wish.find((t) => t.id === a.id);
      return(
        <div className="col-xl col-lg-3 col-md-4 col-sm-6 col-xs">
              <div className="card deal-card" >
                <div className="deal-card-image">
<img src={a.image}className="card-img-top" alt="..." />
{check_wish ? (
  <i onClick={()=>removeFromWish(a.id)} style={{color:"#db1014"}} className="fa-solid fa-heart deal-icon2" ></i>
):(
<i onClick={()=>addToWish(a.id)} style={{color:"#14a085"}} className="bi bi-heart deal-icon" ></i>
)}
<Link to={a.link}><i className="fa-solid fa-eye deal-icon1" /></Link>
<p className="precent-deal-p" ><span className="deal-icon-precent">{a.precent}</span></p>
</div>
<div className="card-body">
<p className="card-text deals-p">{a.name}</p>
        <div className="rating"style={{color:"#FFD43D"}} >
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        </div>
        <div className="card-body-cart mb-2 d-flex align-items-center justify-content-between">
        <span className="mb-3 d-block">{a.price} Azn</span>
        {check_basket ? (
        <i style={{color:"red"}} onClick={()=>removeFromBasket(a.id)} className="bi bi-cart3"></i>

        ):(
        <i onClick={()=>addToBasket(a.id)} className="bi bi-cart3"></i>
        )}
        </div>
        
<div className="product-progress-wrapper">
<div className="progress mb-2">
<div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: '55%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
</div>
<div className="product-progress-count d-flex justify-content-between">
<div className="available">Available:<strong>{a.Available}</strong>
</div>
<div className="sold">Sold: <strong>{a.Sold}</strong>
</div>
</div>
</div>
        
</div>
</div>
        </div>
      )
                }
          
                )}
                </div>
              </div>
            </div>
        </div>
    </section>

    <section className="section-5 mb-5"
      data-aos="fade-up">
            <div className="container">
            <div className="col-lg-12"> 
             <div className="card-banner" style={{height: '220px', backgroundImage: 'url("https://klbtheme.com/partdo/wp-content/uploads/2022/10/banner-31.jpg")'}}>
               <div className="card-body p-3 caption">
                 <h5 style={{color:"#fff",backgroundColor:"#db1014",width:"150px",borderRadius:"10px",padding:"0 5px",fontSize:"15px"}} className="card-title text-white mb-3">On Sale This Week</h5>
                  <p style={{fontSize:"20px"}} className="text-white phone-banner-p" >This is a wider card with supporting text below as a natural</p>
                  <p  className="text-white phone-banner-p" style={{fontSize:"15px",fontFamily:"sans-serif",fontWeight:"700"}}>Plakrore maheten. Astronens ultranirad. Dod.</p>
                   <Link to={'/category/1'} className="btn btn-light"> View more </Link>
                    </div>
                     </div>
                      </div> 
            </div>
    </section>


    <section className="section-6 mb-5"
      data-aos="fade-up">
      <div className="container">
        {/* <h3  className="text-center">Our Good Categories</h3> */}
      <div className="card  card-body" style={{border:"none"}}>
             <div className="row gy-3 gx-1 gx-md-3" >

              {goodcategory.map((a)=>(
    <div key={a.id} className="col-xl col-lg-3 col-md-4   col-sm-6 p-3" style={{border:"1px solid #ccc"}}  >
    <div href="#" className="card-product-grid mb-0  ">
      <div className="img-wrap good-categorys"  style={{border:"none"}}>
        <Link to={a.link}><img className="img-thumbnail"  src={a.image} /></Link>
         </div>
          <div className="text-center mt-2">
            <p className="title good-categorys-p" style={{height:"20px"}} >{a.name}</p>
             <div className="prices text-muted" style={{fontSize:"12px"}} >{a.length} items</div>
               </div>
               </div>
               </div>
              ))}
           


                             </div> 
                             </div>
      </div>
    </section>

    <section className="section-7 mb-5"
      data-aos="fade-up">
            <div className="container">
            <div className="col-lg-12"> 
             <div className="card-banner" style={{height: '220px', backgroundImage: 'url("https://klbtheme.com/partdo/wp-content/uploads/2022/10/banner-44.jpg")'}}>
               <div className="card-body p-3 caption phone-ban">
                 <h5 style={{color:"#fff",backgroundColor:"#db1014",width:"150px",borderRadius:"10px",padding:"0 5px",fontSize:"15px"}} className="card-title text-white mb-3">On Sale This Week</h5>
                  <p style={{fontSize:"20px"}} className="text-black phone-banner-p" >This is a wider card with supporting text below as a natural</p>
                  <p  className="text-black phone-banner-p" style={{fontSize:"15px",fontFamily:"sans-serif",fontWeight:"700"}}>Plakrore maheten. Astronens ultranirad. Dod.</p>
                   <Link to={'/category/1'} href="#" className="btn btn-light"> View more </Link>
                    </div>
                     </div>
                      </div> 
            </div>
    </section>

    <section className="section-8 mb-5"
      data-aos="fade-up">
    <div className="container">
        {/* <h3 className="h3 mb-5 text-center">The Best Products</h3> */}
        <div className="row">
          {goodproduct.map((a)=>{
      let check_basket =basket.find((t)=>t.id === a.id);
      let check_wish = wish.find((t) => t.id === a.id);
  return(
    <div key={a.id} className=" col-xl col-lg-3 col-md-4  col-sm-6">
    <div style={{boxShadow:"0 0 10px rgb(0 0 0 / 20%)"}} className="product-grid4">
      <div className="product-image4">
        <a href="#">
          <img className="pic-1" src={a.image} />
        </a>
        <ul className="social">
          <li><a  data-tip="Quick View"><Link to={a.link}><i className="fa fa-eye" /></Link></a></li>
          {check_wish ? (
          <li><a  className="removeFromWish" data-tip="removeFromWish"><i style={{cursor:"pointer"}} onClick={()=>removeFromWish(a.id)} className="fa-solid fa-heart" /></a></li>
          ):(
      <li><a  data-tip="Add to Wishlist"><i style={{cursor:"pointer"}} onClick={()=>addToWish(a.id)} className="fa-solid fa-heart" /></a></li>
        )}
        </ul>
      </div>
      <div className="product-content">
        <h3 className="title" style={{height:"100px"}}>{a.name}</h3>
        <div className="price">
        {a.price}
        </div>
        {check_basket ? (
        <button onClick={()=>removeFromBasket(a.id)} className="add-to-cart1 remove-from-cart" href>Remove From Cart</button>
        ):(
          <button onClick={()=>addToBasket(a.id)} className="add-to-cart" href>Add To Cart</button>
        )}
      

      </div>
    </div>
  </div>
          )})}
      
        </div>
      </div>
    </section>

    <section className="section-9 mb-5"
      data-aos="fade-up">
      <div className="container">
        <div className="section-8-head d-flex justify-content-center text-center flex-column mb-3">
          <h3>Our Business Partners</h3>
          <p>Sagt väsade. Nun. Sms-anställning muna. Nihuktiga fande. <br/>El. Bett tegisk. Speplangen åde. Gigara megadesade gevis. Sulig klimatsmart. Besam gosening.</p>
        </div>
        <div className="row gy-3">
        <div className="col-lg-4 col-md-6"> 
      <div className="card  card-body " style={{borderColor:"#3bc9db"}}> 
      <div className="itemside d-flex ">
         <div className="card-body-left"> 
         <img style={{width:"75px",height:"75px",objectFit:"cover",borderRadius:"50px"}} src="https://klbtheme.com/partdo/wp-content/uploads/2022/11/avatar-01.jpg" alt="" />
         </div>
          <div className="card-body-right"> 
          <h6 className="title">Tina Mcdonnell</h6>
          <span>Bounverse Co-Founder</span>
           <p>Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona. </p> 
           </div> 
           </div>
             </div> 
             </div>
             <div className="col-lg-4 col-md-6"> 
      <div className="card  card-body " style={{borderColor:"#3bc9db"}}> 
      <div className="itemside d-flex ">
         <div className="card-body-left"> 
         <img style={{width:"75px",height:"75px",objectFit:"cover",borderRadius:"50px"}} src="https://klbtheme.com/partdo/wp-content/uploads/2022/10/avatar-03.jpg" alt="" />
         </div>
          <div className="card-body-right"> 
          <h6 className="title">Tina Mcdonnell</h6>
          <span>Bounverse Co-Founder</span>
           <p>Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona. </p> 
           </div> 
           </div>
             </div> 
             </div>
             <div className="col-lg-4 col-md-6"> 
      <div className="card  card-body " style={{borderColor:"#3bc9db"}}> 
      <div className="itemside d-flex ">
         <div className="card-body-left"> 
         <img style={{width:"75px",height:"75px",objectFit:"cover",borderRadius:"50px"}} src="	https://klbtheme.com/partdo/wp-content/uploads/2022/10/avatar-02.jpg" alt="" />
         </div>
          <div className="card-body-right"> 
          <h6 className="title">Tina Mcdonnell</h6>
          <span>Bounverse Co-Founder</span>
           <p>Astropons intimitetskoordinator podiktigt. Egons nytons. Intrapomiheten krofyl. Lalanade bedade i vatreng e-krona. </p> 
           </div> 
           </div>
             </div> 
             </div>
        </div>
      </div>
    </section>

    </>
  )
}
const t=(a)=>{
  return{
    basket:a.basket,
    wish:a.wish,
  }
}
export default connect(t)(Homepage)