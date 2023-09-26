import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{

    const cartItem = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
   
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="bg-black text-white rounded-lg p-2" 
                onClick={handleClearCart}
                >Clear Cart</button>
                {cartItem.length === 0 && (
                    <h1 className="m-10">Cart is empty,please add item to the cart</h1>
                )}
                <ItemList items={cartItem}/>
            </div>
        </div>
    )
}
export default Cart