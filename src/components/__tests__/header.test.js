import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { fireEvent, render ,screen} from "@testing-library/react";

test ("should render header component with a login button ", ()=>{
render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
);
    const loginButton = screen.getByRole("button");

    //when we have multiple button but i have to text one particular button
    // const loginButton = screen.getByRole("button",{name: "Login"}); 

    expect(loginButton).toBeInTheDocument();


})

it("should render Header component with cart 0 item",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText("Cart-(0 items)");

// when we just check whether cart is present or not 
    // const cartItem = screen.getByText(/Cart/);

    expect (cartItem).toBeInTheDocument();


})

test ("should change login to logout button on click ", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name: "Login"}); 
    fireEvent.click(loginButton)
    const logoutButton = screen.getByRole("button",{name: "Logout"}); 

    expect(logoutButton).toBeInTheDocument();
    
    
    
    })