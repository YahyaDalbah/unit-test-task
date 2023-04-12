import Add from "./index";

describe('calculate a string', () => {
    
    test('return 0 from an empty string', () => {
        let string = ""

        const result = Add(string)

        expect(result).toBe(0)
    })
    test('return the sum of a string', () => {
        let string = "1"

        const result = Add(string)

        expect(result).toBe(1)

        let string2 = "1,3"

        const result2 = Add(string2)

        expect(result2).toBe(4)
    })
    test('handle more than 2 numbers and non-numbers', () => {
        let string = "i'm 1 and 2 and 3"
        const result = Add(string)

        expect(result).toBe("only supports up to 2 numbers")
    })
    
})
