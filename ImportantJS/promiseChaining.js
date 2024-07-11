function async1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some data1")
            resolve("success")
        }, 3000)
    })
}
function async2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("some data2")
            resolve("success")
        }, 3000)
    })
}
console.log("fetching data1")
async1().then((res) => {
    console.log("promise fulfilled", res)
    console.log("fetching data2")
    async2().then((res) => {              // promise chaining
        console.log("promise fulfilled", res)
    })
})
