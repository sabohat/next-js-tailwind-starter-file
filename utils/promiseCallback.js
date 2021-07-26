const promiseCallback = (fn) =>
    new Promise((resolve, reject) => {
        if (fn) {
            fn()
        }
        resolve(true)
        reject()
    })
export default promiseCallback
