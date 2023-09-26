import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mockData/mockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch=jest.fn(()=> Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
)

it("should load restaurant menu component",async()=>{
    await act(async()=> 
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
         <RestaurantMenu/>
         <Cart/>
    </Provider>
    </BrowserRouter>
       
    ));
    const accodianHeader = screen.getByText("Specials (4)")
    fireEvent.click(accodianHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(4)

    const addBtn = screen.getAllByRole("button",{name:"Add +"})

    fireEvent.click(addBtn[0])

    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtn[1])
    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(6)

    fireEvent.click(screen.getByRole("button",{name:"Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(4)
    expect(screen.getByText("Cart is empty,please add item to the cart")).toBeInTheDocument();
    
})