import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    const HandleClick=()=>{
        setShowIndex()
    }

    return(
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
               <div className="flex justify-between cursor-pointer" onClick={HandleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span className="pr-20">↓</span>
                </div>
                {showItems && <ItemList  items= {data.itemCards}/>}
            </div>
            
        </div>
    )
}
export default RestaurantCategory