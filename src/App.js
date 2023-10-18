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
import CareersLayout from './layouts/CareersLayout';
import Careers, { careersLoader } from './components/careers/Careers'
import CareerDetails, {careerDetailsLoader} from './components/careers/CareerDetails';

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
			<Route path="careers" element={<CareersLayout/>}>
				<Route 
					index 
					element={<Careers/>} 
					loader={careersLoader} 
				/>
				<Route 
					path=":id" 
					element={<CareerDetails/>}
					loader={careerDetailsLoader}
				/>
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
