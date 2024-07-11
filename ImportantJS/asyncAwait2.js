function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("data", dataID);
            resolve("success")
        }, 3000);
    })
}

// async function getAllData(){
//     console.log("getting data1...")
//     await getData(1);
//     console.log("getting data2...")
//     await getData(2);
//     console.log("getting data3...")
//     await getData(3);
// }
// getAllData();

// IIFE
(async function(){
    console.log("getting data1...")
    await getData(1);
    console.log("getting data2...")
    await getData(2);
    console.log("getting data3...")
    await getData(3);
})();