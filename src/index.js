let isInitialized = false
let entries = []

function init () {
  window.document.addEventListener('keypress', e => {
    for (let entry of entries) {
      if (entry.word[entry.progress] !== e.key) {
        entry.progress = 0
      }

      if (entry.word[entry.progress] === e.key) {
        entry.progress += 1

        if (entry.progress >= entry.word.length) {
          entry.progress = 0
          if (typeof entry.cb === 'function') {
            entry.cb()
          }
        }
      }
    }
  })
}

class TypeTrigger {
  static register (word, cb) {
    if (!isInitialized) {
      init()
      isInitialized = true
    }

    entries.push({ word, cb, progress: 0 })
  }
}

export default TypeTrigger
