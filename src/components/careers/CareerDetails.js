import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for : {career.name}</h2>
      <p>Starting salary : {career.username}</p>
      <p>Location : {career.email}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
  )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

  return res.json()
}