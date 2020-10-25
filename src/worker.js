const worker = new Worker('worker.js')

export function generate(options) {
  return new Promise(resolve => {
    worker.onmessage = function (e) {
      resolve(e.data)
      worker.onmessage = null
    }
    worker.postMessage({method: 'generate', options})
  })
}

