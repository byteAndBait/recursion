import {fibs,fibsRec} from "./index.js"

test("Fibs Iteration",()=>{
    expect(fibs(8)).toEqual([0,1,1,2,3,5,8,13])
})

test("Fibs Recrusive",()=>{
    expect(fibsRec(8)).toEqual([0,1,1,2,3,5,8,13])
})
