import {
	Route,
	NavLink,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider 
} from 'react-router-dom';
import './App.css';
import Home from './components/HomePage';
import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Product from './components/Product';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout/>}>
			<Route path="/" element={<Home/>} />
			{/* <Route index element={<Home/>} /> */}
			<Route path="/about" element={<About/>} />
			<Route path="/order-summary" element={<OrderSummary/>}/>
			<Route path="/products" element={<Product/>}>
				<Route index element={<FeaturedProduct/>}/>
				<Route path="featured" element={<FeaturedProduct/>}/>
				<Route path="new" element={<NewProduct/>}/>
			</Route>
			<Route path="*" element={<NotFound/>} />
		</Route>
	)
);

function App() {
  return (
    <div className="App">
		<RouterProvider router={router} />
    </div>
  );
}

export default App;
