function job(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject("error");
        }
        if (data % 2 == 0) {
            setTimeout(() => { reject("even") }, 2000);
        } else {
            setTimeout(() => { resolve("odd") }, 1000)
        }
    });
}

job("string").then((sucess) => { console.log("String resolved: " + sucess) }).catch((err) => { console.log("String rejected: " + err) });
job(3).then((sucess) => { console.log("3 resolved: " + sucess) }).catch((err) => { console.log("3 rejected: " + err) });
job(6).then((sucess) => { console.log("6 resolved: " + sucess) }).catch((err) => { console.log("6 rejected: " + err + "\n\n\n") });
