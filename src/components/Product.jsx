import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <>
        <h1>Product</h1>
        <input type="text" placeholder="Search here" id="" />
        <nav>
            <Link to="featured">Featured</Link>
            <Link to="new">New</Link>
        </nav>
        <Outlet/>
    </>
    
  )
}

export default Product