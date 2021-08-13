const post = require("./post")
// @ponicode
describe("post.getPost", () => {
    test("0", () => {
        let callFunction = () => {
            post.getPost(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            post.getPost(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            post.getPost(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            post.getPost(10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            post.getPost({ type: "ADD_TODO" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            post.getPost(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
