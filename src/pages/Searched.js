import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const API_KEY = "799d6ceaa01c4e3f9e0470efdc47d5a5"

function Searched() {
    const [searchedRecipes, setSearchedRecipes] = useState([])
    let params = useParams()
    const getSearched = async (name) =>{
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}`
            )
        const recipes = await data.json() 
        setSearchedRecipes(recipes.results)   
    }
    useEffect(()=>{
     getSearched(params.searchTerm)
    },[params.searchTerm])
  return (
    <Grid>
        {searchedRecipes.map((item)=>{
          return(
              <Card key={item.id}>
                <Link to={'/recipe/'+item.id}>
                   <img src={item.image} alt={item.title} />
                   <h3>{item.title}</h3>
                   </Link>
              </Card>
          )
        })}
    </Grid>
  )
}
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`

const Card = styled.div`
 img{
   width: 100%;
   border-radius: 2rem;
 }
 a{
   text-decoration: none;
 }
 h4{
   text-align: center;
   padding: 1rem;
 }
 `
export default Searched