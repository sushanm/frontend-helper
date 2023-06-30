import React from 'react'
import Card from '../components/Card/Card'
import { useNavigate } from "react-router-dom";
import "./common.css"
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { challenges } from '../helper/chalenges';

function Home() {
  const navigate = useNavigate();

  const coursesPage = (path: string) => {
   console.log(path)
    navigate(path)
  }
  return (
    <div>

      <div className='home-container'>
        {challenges.map((challenge) => (


          <Card key={challenge.title} onClick={() => coursesPage(challenge.link)} name={challenge.title} description={challenge.description}
          isDisabled={challenge.isDisabled}
          isNew={challenge.isNew} inProgess={challenge.inProgess} icon={<AiOutlineAppstoreAdd />} />


        ))}

      </div>
    </div>
  )
}

export default Home
