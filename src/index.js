let isInitialized = false
let entries = []

const keypress = key => {
  for (let entry of entries) {
    if (entry.word[entry.progress] !== key) {
      entry.progress = 0
    }

    if (entry.word[entry.progress] === key) {
      entry.progress += 1

      if (entry.progress >= entry.word.length) {
        entry.progress = 0
        if (typeof entry.cb === 'function') {
          entry.cb()
        }
      }
    }
  }
}

class TypeTrigger {
  static register (word, cb) {
    if (!isInitialized) {
      window.document.addEventListener('keypress', e => { keypress(e.key) })
      isInitialized = true
    }

    entries.push({ word, cb, progress: 0 })
  }
}

export default TypeTrigger
