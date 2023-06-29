import React from 'react'
import Card from '../components/Card/Card'
import { useNavigate } from "react-router-dom";
import "./comon.css"
function Home() {
    const navigate = useNavigate();

    const coursesPage = (path:string) => {
        navigate(path)
    }
  return (
    <div className='home-container'>
      <Card onClick={()=>coursesPage('/counter')} />
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
