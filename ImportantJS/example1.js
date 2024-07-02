function getData(dataID, getNextData) {
    setTimeout(()=> {
        console.log("data", dataID);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}
getData(1, () => {
    getData(2, () => {
        getData(3, () => {  // callback hells : this type of programming is hard
            getData(4)      // to understand and execution
        })
    })
}); // using arrow function to avoid error as getData is not a function,
    // so to make it as a fucntion we are using arrow function

