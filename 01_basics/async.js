function myFunction(callback) {
    setTimeout(() => {
        const data = { name: "Mansi", age: 24 };
        callback(data);
    }, 3000);
}

myFunction((data) => {
    console.log("Data:", data);
});