import { fireEvent, render ,screen} from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mockData/mockResListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("should search list for the cafe text input  ",async()=>{

    await act(async()=>render(
    <BrowserRouter>
          <Body/>
    </BrowserRouter>
  ))

  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button",{name: "Search"});

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput,{target :{value:"cafe"}})
  fireEvent.click(searchBtn)
  //screen should load 2 cafe
   const cardAfterSearch = screen.getAllByTestId("resCard");
   expect(cardAfterSearch.length).toBe(2);

//   expect(searchBtn).toBeInTheDocument();
    
})

it("should filter the top rated restaurant ",async()=>{

    await act(async()=>render(
    <BrowserRouter>
          <Body/>
    </BrowserRouter>
  ))

  const cardBeforeFilter = screen.getAllByTestId("resCard")

  expect(cardBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button",{name:"Top rated Restaurants"})
  fireEvent.click(topRatedBtn);

  const cardAfterFilter = screen.getAllByTestId("resCard");
  expect(cardAfterFilter.length).toBe(4);
    
})