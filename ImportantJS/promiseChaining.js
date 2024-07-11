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
let p1 = async1()
p1.then((res) => {
    console.log("promise fulfilled", res)
    console.log("fetching data2")
    let p2 = async2()
    p2.then((res) => {
        console.log("promise fulfilled", res)
    })
})
