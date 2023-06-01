import { useState, useEffect } from "react";
import {Grid}from "@material-ui/core"
import "./App.css";
import author from "./images/author.jpg";

function App() {
  const [posts, setPosts] = useState([]);


  const fetchPost = async () => {
   
      const response = await fetch(
        "https://api.quotable.io/random"
      );
      const data = await response.json();
      setPosts(data);
       console.log("data is::", data)
     
  
  };

  useEffect(() => {
    let interval = setInterval(()=>{
    fetchPost(); }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    <h1>Our Author's Quote</h1>
    
    <Grid container item xs={12} sm={12} md={12} lg={12} className="quote_wrapper">
    <Grid container item xs={12} sm={12} md={12} lg={12} className="quote_body">
    <Grid container item xs={12} sm={12} md={6} lg={6} className="quote_Card"> 
    <img src={author} alt=" "/> 
     <p>{ posts.content}</p></Grid>
    
      </Grid>
    </Grid>
    </>
  );
}

export default App;
