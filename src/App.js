 
 import React,{ useEffect, useState } from 'react';
import './App.css';
import Recepy from './Recepy'

function App() {

 const [ recipes, setRecepy ] = useState([])
 const [ search, setSearch ] = useState("");
 const [ query, getQuery ] = useState("chicken")

 useEffect (() => {
    getRecipes()
 },[query])
  
  const APP_ID = "f199c667";
  const AppKey = "cae5ee0e70df8cdc843a1812e6c99b16";
  
   

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${AppKey}`);

    const data = await response.json()
    setRecepy(data.hits)
    console.log(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = (e) =>{
    e.preventDefault()
    getQuery(search);
    setSearch("")

  }
  return (
    <div className="app">
       <div className="headline">
        <h1>Fed up with same receipes ? Try something new ...</h1>
        
      </div>
      <form className="searchform" onSubmit={getSearch}>
        <input className="searchbar" value={search} onChange={updateSearch} type="text"/>
        <button className="search-btn" type="submit" >search</button>
      </form>
     
      <div className="card">
        {recipes.map(recipe => (
          <Recepy
          key={recipe.recipe.id}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
