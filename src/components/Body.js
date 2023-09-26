import ResturantCard,{WithPromotedLable} from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // const {userLogedIn} =UserContext(UserContext);

  const [searchText, setSearchText] = useState("");
  
  const RestaurantCardPromoted =WithPromotedLable(ResturantCard);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7199008&lng=75.857383&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  const onlineStatus = useOnlineStatus();

  if(onlineStatus=== false){
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    )
  }

  const {setUserName,UserLogedIn} = useContext(UserContext)

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid ="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          <button
          className="px-4 bg-gray-100 m-4 rounded-lg "
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        </div>

        <div className="search m-2 p-4">
         <label>UserName: </label>
         <input className=" mt-4 p-2 border border-black" 
         value={UserLogedIn}
         onChange={(e)=>setUserName(e.target.value)}
         />
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="link-style"
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            {
              restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} />
              ):(
              <ResturantCard resData={restaurant} />
              )
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
