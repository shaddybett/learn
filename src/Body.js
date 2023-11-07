import React from 'react'
import { useEffect,useState } from 'react'

export default function Body() {
    const [data,setData] = useState(null)

    useEffect(()=>{
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2023-10-07&sortBy=publishedAt&apiKey=5e99a430081843aa81c53baae05d39c0')
        .then((Response)=>Response.json())
        .then((news)=>setData(news))
        .catch((error)=>console.error("error fetching this data",error))

    },[])
  return (
    <div>
        {
data ? data.articles.map((article,index)=>(
  <div>
  <p>Title:{article.title}</p>
  <p><img src={article.urlToImage} alt={article.name}/></p>
  </div>
  
   
)) : <p>Loading...</p>
        }
    </div>
  )
}


