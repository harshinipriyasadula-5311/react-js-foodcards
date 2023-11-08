
import React,{useState} from "react";
import "./App.css"
import {Header} from "./Header"
import List from "./FoodList"
import{FoodList}from"./FoodList"
import { FoodCard } from "./FoodCard";


const App= ()=>{
    const [foodList,updateFoodList]=useState([{foodUrl:"https://allchickenrecipe.com/wp-content/uploads/2020/05/Chicken-Momos-500x375.jpggit" ,
foodName:"Chicken Momos",id:"1"},
{foodUrl:"https://img.freepik.com/free-photo/fresh-gourmet-sandwich-with-meat-vegetables-generative-ai_188544-8106.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1698883200&semt=ais",
foodName:"Chicken Shawarma",id:"2"},
{foodUrl:"https://www.masala.tv/wp-content/uploads/2020/02/Chicken-Manchurian-dryy.jpg",
foodName:"Chicken Manchurian",id:"3"},
{foodUrl:"https://www.thespruceeats.com/thmb/X_JGM04VusvkuGqTVan4QmBRqjI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
foodName:"French Fries",id:"4"},
{foodUrl:"https://assets-global.website-files.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg",
foodName:"Ice Cream",id:"5"}
])
return(
    <>
    
    <Header/>
    <FoodList/>
    { foodList.map( (item,i)=>{
        console.log(item)
return<FoodCard Name={item.foodName}Img={item.foodUrl} Link={item.id} />
    })}
    </>
)
}
export default App;




















