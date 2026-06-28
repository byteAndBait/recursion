import { sayHello } from "./index.js";
test("Hello",()=>{
    expect(sayHello()).toBe("Hello, World!")
})
