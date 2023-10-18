import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
        <header>
			<nav>
				{/* <Link to="/">Home</Link> */}
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/careers">Careers</NavLink>
			</nav>
		</header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout