import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <h1>WELCOME HOME</h1>
      <input type="email" />
      <br/>
      <Link to={'about'}>about</Link>
      <br/>
      <Link to='/author'>author</Link>
      <br/>
      <Link to='/content'>Content</Link>
      <br/>

      

      
     
    </div>
  );
}
