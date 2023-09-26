import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import Contact from "./Contact";
import UserContext from "../utils/UserContext";

const ResturantCard = (props) => {
  const {userLogedIn} = useContext(UserContext);
  const { resData } = props;
  console.log(resData);
  const {name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info || {};
  const { deliveryTime } = resData?.info?.sla || {};
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[400px] rounded-lg bg-gray-100 hover:bg-gray-300"
    >
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 px-4 text-lg">{name}</h3>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      <h4>{Array.isArray(cuisines) ? cuisines.join(", ") : "Cuisine data not available"}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{userLogedIn}</h4>
    </div>
  );
};

export const WithPromotedLable=(ResturantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <ResturantCard {...props}/>
      </div>
    )
  }
}

export default ResturantCard;
