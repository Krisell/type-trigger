import TypeTrigger from '../dist/index.js'

test('It triggers a single event when the word is typed', () => {
    let a = false

    TypeTrigger.register('monkey', () => { a = true })

    expect(a).toBe(false)
    TypeTrigger.type('monkey')
    expect(a).toBe(true)
})

test('It resets correctly when mistyping', () => {
    let a = false

    TypeTrigger.register('monkey', () => { a = true })

    TypeTrigger.type('monke')
    expect(a).toBe(false)

    TypeTrigger.type('onkey')
    expect(a).toBe(false)

    TypeTrigger.type('mon')
    TypeTrigger.type('ke')
    expect(a).toBe(false)
    TypeTrigger.type('y')
    expect(a).toBe(true)
})

test('It can handle multiple registrations', () => {
    let a = false
    let b = false

    TypeTrigger.register('monkey', () => { a = true })
    TypeTrigger.register('donkey', () => { b = true })

    TypeTrigger.type('monk')
    TypeTrigger.type('donk')
    TypeTrigger.type('key')
    expect(a).toBe(false)
    expect(b).toBe(false)

    TypeTrigger.type('mon')
    TypeTrigger.type('don')
    TypeTrigger.type('key')
    expect(a).toBe(false)
    expect(b).toBe(true)
})

test('The same word can be registered multiple times', () => {
    let counter = 0

    TypeTrigger.register('monkey', () => { counter++ })
    TypeTrigger.register('monkey', () => { counter++ })
    TypeTrigger.register('donkey', () => { counter++ })

    TypeTrigger.type('donkey')
    expect(counter).toBe(1)

    TypeTrigger.type('monkey')
    expect(counter).toBe(3)
})

test('Invalid registrations does not throw an error', () => {
    let counter = 0

    TypeTrigger.register('monkey', 'not-a-function')

    TypeTrigger.type('monkey')
    expect(counter).toBe(0)
})
