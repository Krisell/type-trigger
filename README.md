# TypeTrigger
Invoke actions on web pages by typing specific words. Only 2 KB gzipped.

## Install
```bash
npm i @krisell/type-trigger
```

## How to use
```js
import TypeTrigger from '@krisell/type-trigger'

TypeTrigger.register('beta', () => {
  // Whatever action you want, for instance `this.showBeta = true` in a Vue app
})

TypeTrigger.register('localtesting', () => {
  // Whatever other action you want, for instance `apiURL = 'http://localhost:5000'`
})
```

As soon as you type `beta` or `otherfeature` on the keyboard, the actions will be invoked.
As soon as an unrecognized pattern is written, the detection is reset, i.e. typing `bettabeetaSomeRandombeta` will trigger on the last four characters, not before.

## Use cases
 * Activate beta features
 * Redirect requests to local/testing domains
 * Show debug information (nothing secret though)
 * Administrative work, e.g. login as other user (of course provided user has authorization)

If you want a triggered state to persist between page refreshes, you could store that in LocalStorage.

The trigger words are not intended to be secret or sensitive, just undocumented. It's a lot easier to add a trigger word than having to create a custom admin interface, or forcing someone to add a custom LocalStorage value, for testing purposes.
