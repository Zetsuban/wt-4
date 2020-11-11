function job(data) {
    return new Promise(function (resolve, reject) {
        if (isNaN(data)) {
            reject("error");
        }
        if (data % 2 == 0) {
            setTimeout(function () { reject("even"); }, 2000);
        }
        else {
            setTimeout(function () { resolve("odd"); }, 1000);
        }
    });
}
job("string").then(function (sucess) { console.log("String resolved: " + sucess); })["catch"](function (err) { console.log("String rejected: " + err); });
job(3).then(function (sucess) { console.log("3 resolved: " + sucess); })["catch"](function (err) { console.log("3 rejected: " + err); });
job(6).then(function (sucess) { console.log("6 resolved: " + sucess); })["catch"](function (err) { console.log("6 rejected: " + err + "\n\n\n"); });
