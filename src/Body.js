

import { React,useEffect,useState, } from 'react'
import Content from './Content'
export default function Body() {
    const [data,setData] = useState(null)
  

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-10-07&sortBy=publishedAt&apiKey=5e99a430081843aa81c53baae05d39c0')
        .then((Response)=>Response.json())
        .then((news)=>setData(news))
        .catch((error)=>console.error("error fetching this data",error))

    },[])

  return (
    <div >
  
        {
          
data ? data.articles.map((article,index)=>(
  <div className='all' >
  
  <p >
  <p className='title' >Title:{article.title}</p>
    <img className='img'  src={article.urlToImage} alt={article.author}/>
    <Content word={article.title}/>
    </p>


  </div>
  
   
)) : <p>Loading...</p>
        }

    </div>
  )
}


