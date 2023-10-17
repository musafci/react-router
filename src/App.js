import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './components/HomePage';
import About from './components/About';

function App() {
  return (
    <div className="App">
		<BrowserRouter>
			<header>
				<nav>
					{/* <Link to="/">Home</Link> */}
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home/>} />
					{/* <Route index element={<Home/>} /> */}
					<Route path="/about" element={<About/>} />
				</Routes>
			</main>
		</BrowserRouter>
    </div>
  );
}

export default App;
