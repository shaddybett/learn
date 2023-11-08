import React from "react";
import { Link } from "react-router-dom";


// function handleClick(event){
// event.preventDefault();
// }
export default function Home() {
  return (
    <div>
      <Link to={'about'}>about</Link>
      <br/>
      <Link to='/author'>author</Link>
      <br/>
      <Link to='/content'>Content</Link>
      <br/>
      

      
      <p>Welcome home!</p>
    </div>
  );
}
