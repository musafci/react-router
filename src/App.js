import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage';
import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Product from './components/Product';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<header>
				<nav>
					{/* <Link to="/">Home</Link> */}
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/products">Products</NavLink>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home/>} />
					{/* <Route index element={<Home/>} /> */}
					<Route path="/about" element={<About/>} />
					<Route path="/order-summary" element={<OrderSummary/>}/>
					<Route path="/products" element={<Product/>}>
						<Route path="featured" element={<FeaturedProduct/>}/>
						<Route path="new" element={<NewProduct/>}/>
					</Route>
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</main>
		</BrowserRouter>
    </div>
  );
}

export default App;
