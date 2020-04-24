# TypeTrigger
Invoke actions on web pages by typing specific words. Only 2 KB gzipped and no runtime dependencies.

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

As soon as you type `beta` or `localtesting` on the keyboard, the actions will be invoked.
As soon as an unrecognized pattern is written, the detection is reset, i.e. typing `bettabeetaSomeRandombeta` will trigger on the last four characters, not before. Typing `monkeycode` would trigger both `monkey` and `keycode`.

## Use cases
 * Activate beta features
 * Redirect requests to local/testing domains
 * Show debug information (nothing secret though)
 * Administrative work, e.g. login as other user (of course provided user has authorization)

If you want a triggered state to persist between page refreshes, you could store that in LocalStorage.

The trigger words are not intended to be secret or sensitive, just undocumented. It's a lot easier to add a trigger word than having to create a custom admin interface, or forcing someone to add a custom LocalStorage value, for testing purposes.

## Notes
TypeTrigger listens for keypress events on `window.document`. Changing this to a specified dom element could be a future addition, feel free to add an issue or send in a PR. Note however that it only listens after the first registration, i.e. only importing the package does not activate it or add the listener. It uses one listener in total, not one per registration.

If you stop the propagation of keypress events, it will not reach this package.

## Licence
MIT
