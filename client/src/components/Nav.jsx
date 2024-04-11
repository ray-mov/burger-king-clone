import { Link } from "react-router-dom"

import logo from "../assets/logo.png"
import searchIcon from "../assets/search.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercentage, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
  return (
    <nav className="flex px-8 py-4 justify-between items-center text-lg">
      <img src={logo} alt="logo"/>
      <div className="flex justify-between items-center px-5 bg-orange-50 rounded-2xl  basis-2/5 h-12 border-2 border-orange-200">
        <input type="text" name="search" id="search" placeholder="Search Nearby Restraurant" className=" bg-transparent w-full h-full border-none outline-none  "/>
        <img src={searchIcon} alt="searchIcon"/>
      </div>
      <div className="flex  justify-between items-center gap-10 ">
        <Link to="/cart" className="flex gap-2"> 
        <FontAwesomeIcon icon={faPercentage} size="xl" className=" text-orange-400"/>
        <span>King Deal</span>
        </Link>
        
        <Link to="/cart" className="flex gap-2"> 
        <FontAwesomeIcon icon={faShoppingCart} size="xl" className=" text-orange-400" />
         <span>Cart</span>
        </Link>
        
        <button className=" border-2  px-5 bg-orange-50 rounded-2xl  h-12 border-orange-200 hover:bg-orange-200"> <Link to="/login">Login</Link> </button>    
    </div>
    </nav>
  )
}

export default Nav