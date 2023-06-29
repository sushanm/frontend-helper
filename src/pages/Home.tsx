import React from 'react'
import Card from '../components/Card/Card'
import { useNavigate } from "react-router-dom";
import "./common.css"
import { AiOutlineAppstoreAdd } from "react-icons/ai";
function Home() {
    const navigate = useNavigate();

    const coursesPage = (path:string) => {
        navigate(path)
    }
  return (
    <div className='home-container'>
      <Card onClick={()=>coursesPage('/counter')} name="Couter Application" description="This is simple counter application" icon={<AiOutlineAppstoreAdd />}/>
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
      <Card onClick={()=>coursesPage('/counter')} />
    </div>
  )
}

export default Home
