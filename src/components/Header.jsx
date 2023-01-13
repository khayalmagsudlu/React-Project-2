import { useState ,useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
function Header({basket,wish,dispatch}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const [categoriess,setCategoriess]=useState([
        {
        "id":1,
        "name":"Smartphones",
        },
        {
          "id":2,
          "name":"Tablets",
        },
        {
          "id":3,
          "name":"Laptops"
        },
        {
          "id":4,
          "name":"Audio "
        },
        {
          "id":5,
          "name":"Cameras "
        },
        {
          "id":6,
          "name":"Smart Watches"
        },
     
        
    ]);
  return (
  <>
  {/* <BasketModal/> */}
  <nav className="py-2 bg-light header-top  border-bottom">
        <div className="container d-flex flex-wrap align-items-center">
          <ul className="nav me-auto">
            <li className="nav-item"><Link to="/blog" className="nav-link link-dark px-0 ">Blog</Link></li>
            <li className="nav-item"><Link to="/return" className="nav-link link-dark ">Return</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link link-dark px-2">Contact</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link link-dark ">About</Link></li>
          </ul>
          <ul className="nav navsi">
            <li className="nav-item"><i className="fab fa-facebook-f" /></li>
            <li className="nav-item"><i className="fab fa-twitter" /></li>
            <li className="nav-item"> <i className="fab fa-instagram" /></li>
            <li className="nav-item"><i className="fab fa-linkedin-in" /></li>
          </ul>
        </div>
      </nav>
  <header className="section-header border-bottom sticky-top"> 
    <nav className="navbar navbar-expand-lg navbar-light">
       <div className="container"> 
       <NavLink to="/" className="navbar-brand" > 
       E-coommerce
        </NavLink>
         <div className="order-lg-last order d-flex align-items-center flex-shrink-0">
          <div className="jj">
           <div  className="head-search">
             <i  style={{cursor:"pointer"}}    
              onClick={() => {
                  dispatch({
                    type: "SET_SEARCHMODAL",
                    payload: true,
                  });
                }} className="fa fa-search " />
             </div>
                    <Link to={'/wish'}  className="bs position-relative">
                  <i className="bi bi-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {wish.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
                  <Link to={'/basket'}  className="bs position-relative">
                  <i className="bi bi-cart3"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {basket.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
                 </div>
                 <div className="mobile-bars ">
                 <i className="fa-solid fa-bars " onClick={handleShow}></i>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <NavLink to={'/'} onClick={handleClose} style={{color:"#000",textDecoration:"none",fontSize:"20px"}}>E-coommerce </NavLink>
        </Offcanvas.Header>
        <Offcanvas.Body  >
        <ul className='navbar-nav mx-auto nav-menu'>

{categoriess.map((category)=>(
<li  style={{fontSize:"18px"}}  key={category.id} className="nav-item ">
<NavLink onClick={handleClose} style={{color:"#000",borderBottom:"1px solid"}} to={`/category/${category.id}`} className="nav-link" >{category.name}</NavLink>
</li>
))}
<li className="nav-item nav-icons mt-3">

<Link  onClick={handleClose} to={'/wish'}  className="bs position-relative ">
                  <i className="bi bi-heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {wish.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
                  <Link  onClick={handleClose} to={'/basket'}  className="bs position-relative mx-4">
                  <i className="bi bi-cart3"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {basket.length}
          <span className="visually-hidden">unread messages</span>
        </span>
      </Link>
</li>

        </ul> 
        </Offcanvas.Body>
      </Offcanvas>
      </div>
                 <div  className="nav-menu-icons">
            <i onClick={()=>{
              dispatch({
                type:"SET_MOBILEMENU",
                payload:true
              })
            }}  className="fa-solid fa-bars "></i>
            </div>
                    </div>
                     <div className="collapse navbar-collapse" id="navbar_main4">
                      <ul className='navbar-nav mx-auto nav-menu'>

                         {categoriess.map((category)=>(
    <li  style={{fontSize:"18px"}} key={category.id} className="nav-item ">
    <NavLink style={{color:"#000"}} to={`/category/${category.id}`} className="nav-link" >{category.name}</NavLink>
  </li>
                ))}
                <li className="nav-item nav-icons">
                <a  className="btn  btn-icon btn-light">
             <i className="fa fa-search" />
             </a>
              <a className="btn  btn-icon btn-light"> 
              <i className="fa fa-heart" >{wish.length}</i>
              </a>
               <a  className="btn  btn-icon btn-primary">
                 <i className="fa fa-shopping-cart" >{basket.length}</i>
                 </a>
                </li>

                                 </ul> 
                                 </div>
                                 </div>
                                 </nav>
   </header>
  </>
  )
}
const t=a=>{
  return{
    basket:a.basket,
    wish:a.wish,
  }
};
export default connect(t)(Header)