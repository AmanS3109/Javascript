function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data", dataID);
            resolve("success")
        }, 3000);
    })
}

// promise chaining
getData(1).then((res) => {
    // getData(2).then((res) => {
    //     console.log(res)
    // })
    return getData(2);
})
.then((res) => {
    return getData(3)
})
.then((res) => {
    console.log(res)
})