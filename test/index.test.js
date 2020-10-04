import TypeTrigger from '../dist/index.js'

test('It triggers a single event when the word is typed', () => {
    const callback = jest.fn()

    TypeTrigger.register('monkey', callback)

    expect(callback).not.toHaveBeenCalled()
    TypeTrigger.type('monkey')
    expect(callback).toHaveBeenCalledTimes(1)
})

test('It resets correctly when mistyping', () => {
    const callback = jest.fn()

    TypeTrigger.register('monkey', callback)

    TypeTrigger.type('monke')
    expect(callback).not.toHaveBeenCalled()

    TypeTrigger.type('onkey')
    expect(callback).not.toHaveBeenCalled()

    TypeTrigger.type('mon')
    TypeTrigger.type('ke')
    expect(callback).not.toHaveBeenCalled()
    TypeTrigger.type('y')
    expect(callback).toHaveBeenCalledTimes(1)
})

test('It can handle multiple registrations', () => {
    const callback_a = jest.fn()
    const callback_b = jest.fn()

    TypeTrigger.register('monkey', callback_a)
    TypeTrigger.register('donkey', callback_b)

    TypeTrigger.type('monk')
    TypeTrigger.type('donk')
    TypeTrigger.type('key')
    expect(callback_a).not.toHaveBeenCalled()
    expect(callback_b).not.toHaveBeenCalled()

    TypeTrigger.type('mon')
    TypeTrigger.type('don')
    TypeTrigger.type('key')
    expect(callback_a).not.toHaveBeenCalled()
    expect(callback_b).toHaveBeenCalledTimes(1)
})

test('The same word can be registered multiple times', () => {
    const callback = jest.fn()

    TypeTrigger.register('monkey', callback)
    TypeTrigger.register('monkey', callback)
    TypeTrigger.register('donkey', callback)

    TypeTrigger.type('donkey')
    expect(callback).toHaveBeenCalledTimes(1)

    TypeTrigger.type('monkey')
    expect(callback).toHaveBeenCalledTimes(3)
})

test('Triggerwords can overlap and not reset eachother', () => {
    const callback = jest.fn()

    TypeTrigger.register('monkey', callback)
    TypeTrigger.register('keycode', callback)

    TypeTrigger.type('monkeycode')
    expect(callback).toHaveBeenCalledTimes(2)
})

test('Invalid registrations does not throw an error', () => {
    const callback = jest.fn()

    TypeTrigger.register('monkey', 'not-a-function')

    TypeTrigger.type('monkey')
    expect(callback).toHaveBeenCalledTimes(0)
})
