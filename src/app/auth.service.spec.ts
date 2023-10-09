import { AuthService } from "./auth.service"; 

describe("Auth service test",()=>{
    let service:AuthService;

     beforeEach(()=>{
        service = new AuthService();
     })

    it("should return hello world",()=>{
        expect(service.sayHello()).toEqual("hello world!")
    })
})