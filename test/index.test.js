import TypeTrigger from '../dist/index.js'

test('One', () => {
    let a = false

    TypeTrigger.register('monkey', () => {
        a = true
    })


})
