import { Link, useLoaderData } from "react-router-dom"

export default function Careers() {
  const careers = useLoaderData()

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.name} || Address : {career.address.street}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
export const careersLoader = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  
  if (!res.ok) {
	throw Error("Not fetched data!");
  }

  return res.json()
}