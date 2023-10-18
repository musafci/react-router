import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.name} || Based in {career.address.street}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  return res.json()
}