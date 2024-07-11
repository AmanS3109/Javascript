const getPromise =() => { 
    return new Promise((resolve, reject) => {
    console.log("I am Genius")
    resolve("success")
    // reject("some error occurred")
});
}

let promise = getPromise()
promise.then((res) => {
    console.log("Promise fulfilled", res)
}).catch((err) => {
    console.log("promise rejected", err)
});