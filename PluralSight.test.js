const PluralSight = require('./PluralSight')


describe('PluralSight', () => {
    let nextTestUnlocked = false

    const canRunThisTest = () => {
        if (nextTestUnlocked){
            nextTestUnlocked = false
            return true;
        }
        return false
    }
    
    const unlockNextTest = () => {
        nextTestUnlocked = true
    }
// a dependency may be blank
    test('property "package" must contain dependency', () => {
        expect(PluralSight.string).toBeDefined()
        expect(typeof PluralSight.number).toEqual('number')
        expect(PluralSight.string).toEqual("KittenService: CamelCaser")

        unlockNextTest()
    })

    test('property "string" must exist and meet the requirements', () => {
        if (canRunThisTest()) {
            expect(basics.string).toBeDefined()
            expect(typeof basics.string).toEqual('string')
            expect(basics.string.length).toBeGreaterThan(3)
            expect(basics.string.length).toBeLessThan(5)
            expect(basics.string).toEqual('Cake')

            unlockNextTest()
        }
    })

    test('property "boolean" must exist and meet the requirements', () => {
        if (canRunThisTest()) {
            expect(basics.boolean).toBeDefined()
            expect(basics.boolean).toBeTruthy()
            expect(typeof basics.boolean).toEqual('boolean')
            expect(basics.boolean).toEqual(true)

            unlockNextTest()
        }
    })

    test('property "object" must exist and meet the requirements', () => {
        if (canRunThisTest()) {
            expect(basics.object).toBeDefined()
            expect(typeof basics.object).toEqual('object')
            expect(Object.keys(basics.object).length).toEqual(2)
            expect(basics.object).toHaveProperty('b', 1)
            expect(basics.object).toStrictEqual({a: undefined, b: 1})

            unlockNextTest()
        }
    })

    test('property "array" must exist and meet the requirements', () => {
        if (canRunThisTest()) {
            expect(basics.array).toBeDefined()
            expect(Array.isArray(basics.array)).toBeTruthy()
            expect(basics.array.length).toEqual(2)
            expect(basics.array[0]).toEqual('Cake')
            expect(basics.array[1]).toEqual(42)

            unlockNextTest()
        }
    })

    test('property "null" must exist and meet the requirements', () => {
        if (canRunThisTest()) {
            expect(basics.null).toBeDefined()
            expect(basics.null).toEqual(null)

            unlockNextTest()
        }
    })

    test('property "function" must exist and meet the requirements', () => {
        if (canRunThisTest()) {
            expect(basics.function).toBeDefined()
            expect(typeof basics.function).toEqual('function')
            expect(basics.function.length).toEqual(2)
            expect(typeof basics.function()).toEqual('number')

            unlockNextTest()
        }
    })

    test.each([
        [1, 1, 2],
        [2, 2, 4],
        [400, 31, 431],
        [12, -24, -12],
        ['Hello', ' World', NaN],
        [1, "Pizza", NaN]
    ])('property "function" do the right logic with %p and %p', 
        (x, y, expected) => {
        if (canRunThisTest()) {
            expect(basics.function(x,y)).toEqual(expected)

            unlockNextTest()
        }
    })
})