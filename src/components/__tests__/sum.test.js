import { Sum } from "../Sum";

test("sum function will calculate the sum of two numbers",()=>{
    const result = Sum(3,4)
    expect (result).toBe(7);
})