function delay(ms) {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async is done!");
            reject('Rejected!');
        }, 1000);
    });
    return promise;
}
function timeout(ms, prommise) {
}
function testNum(x) {
    return new Promise(function (resolve, reject) {
        x > 10 ? resolve(true) : reject(false);
    });
}
testNum(5).then(function (success) { console.log(success); })["catch"](function (err) { console.log(err); });
// 
var tab = ["q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];
function capsStrings(tab) {
    return new Promise(function (resolve, reject) {
        for (var i in tab) {
            if (typeof (i) !== "string") {
                reject("Not all occurrences are string");
            }
            tab[i] = tab[i].toLocaleUpperCase();
        }
        resolve("All done");
    });
}
capsStrings(tab).then(function (success) { console.log(tab); console.log(success); })["catch"](function (err) { console.log(err); });
function sortStrings(tab) {
    return new Promise(function (resolve, reject) {
        for (var i in tab) {
            tab.sort();
        }
        resolve("All done");
    });
}
capsStrings(tab).then(function (res) { return sortStrings(tab); }).then(function (finalRes) { console.log(finalRes); console.log(tab); });
