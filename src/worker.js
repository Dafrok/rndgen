export function generate(options) {
  return new Promise(resolve => {
    const worker = new Worker('worker.js')
    worker.onmessage = function (e) {
      const {data, method} = e.data;
      if (method === 'generate') {
        resolve(data)
      }
      console.log('ter')
      worker.terminate()
    }
    worker.postMessage({method: 'generate', options})
  })
}
