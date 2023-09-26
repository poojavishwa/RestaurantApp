import { screen, render } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

describe("contact us page test cases",()=>{
test ("should load contact us component",()=>{  //in place of "test" we can use "it" both are same
    render(<Contact/>)

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test ("should load button inside my contact component",()=>{
    render(<Contact/>)

    const button = screen.getByRole("button");
    // const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
})

test ("should load input name inside my contact component",()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("name");
    // const button = screen.getByText("Submit");

    expect(inputName).toBeInTheDocument();
})

test ("should load 2 input boxs inside my contact component ",()=>{
    render(<Contact/>)

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
})

})


// test ("should load contact us component",()=>{
//     render(<Contact/>)

//     const heading = screen.getByRole("heading");

//     expect(heading).toBeInTheDocument();
// })


// test ("should load button inside my contact component",()=>{
//     render(<Contact/>)

//     const button = screen.getByRole("button");
//     // const button = screen.getByText("Submit");

//     expect(button).toBeInTheDocument();
// })

// test ("should load input name inside my contact component",()=>{
//     render(<Contact/>)

//     const inputName = screen.getByPlaceholderText("name");
//     // const button = screen.getByText("Submit");

//     expect(inputName).toBeInTheDocument();
// })

// test ("should load 2 input boxs inside my contact component ",()=>{
//     render(<Contact/>)

//     const inputBoxes = screen.getAllByRole("textbox");

//     expect(inputBoxes.length).toBe(2);
//     // expect(inputBoxes.length).not.toBe(3);
// })

