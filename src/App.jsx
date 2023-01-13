import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Routes , Route, useLocation} from "react-router-dom";
import { useState} from "react";
import Homepage from './pages/Homepage';
import Header from './components/Header';
import Category from './pages/Category';
import {connect} from "react-redux";
import ProductDetails from './pages/ProductDetails';
import Basket from './pages/Basket';
import Footer from './components/Footer';
import Wish from './pages/Wish';
import About from './pages/About';
import Contact from './pages/Contact';
import Returns from './pages/Returns';
import Blog from './pages/Blog';
import AnimatedRoute from './components/AnimatedRoute';
import SearchModal from "./components/SearchModal";
import {AnimatePresence} from "framer-motion";
import ScrollTop from './components/ScrollTop';
import { useEffect } from 'react';
import Check from './pages/Check';
function App({dispatch,mobileMenu,searchmodal}) {
  const {pathname}=useLocation();
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])
  const loc1= useLocation();
  useEffect(()=>{
      dispatch({
          type:"SET_SEARCHMODAL",
          payload:false,
      })
  },[loc1.pathname])
  return (
<>
<Header />
{searchmodal && <SearchModal/>}
<ScrollTop/>
<AnimatePresence>
<Routes >
  <Route path='/'  element={<AnimatedRoute name="Homepage" ><Homepage /></AnimatedRoute>}/>
  <Route path='/products/:id'  element={<AnimatedRoute name="ProductDetails"><ProductDetails /></AnimatedRoute>}/>
  <Route path='/category/:cat_id' element={<AnimatedRoute  name="Category"><Category /></AnimatedRoute>}/>
  <Route path='/basket'  element={<AnimatedRoute name="Basket"><Basket /></AnimatedRoute>}/>
  <Route path='/wish'  element={<AnimatedRoute name="Wish"><Wish /></AnimatedRoute>}/>
  <Route path='/about'  element={<AnimatedRoute name="About"><About /></AnimatedRoute>}/>
  <Route path='/contact'  element={<AnimatedRoute name="Contact"><Contact /></AnimatedRoute>}/>
  <Route path='/return'  element={<AnimatedRoute name="Returns"><Returns /></AnimatedRoute>}/>
  <Route path='/blog'  element={<AnimatedRoute name="Blog"><Blog /></AnimatedRoute>}/>
  <Route path='/Check'  element={<AnimatedRoute name="Check"><Check /></AnimatedRoute>}/>
</Routes>
</AnimatePresence>
<Footer />
</>
  )
}
const t=(a)=>a;
export default connect(t)(App)
