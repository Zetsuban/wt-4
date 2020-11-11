function delay(ms: number) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async is done!");
            reject('Rejected!');
        }, 1000);
    });
    return promise;
}
function timeout(ms: number, prommise) {
}

function testNum(x: number) {
    return new Promise((resolve, reject) => {
        x > 10 ? resolve(true) : reject(false);
    })
}

testNum(5).then((success) => { console.log(success); }).catch((err) => { console.log(err); })

// 

let tab: string[] = ["q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"]

function capsStrings(tab: string[]) {
    return new Promise((resolve, reject) => {
        for (const i in tab) {
            if (typeof (i) !== "string") {
                reject("Not all occurrences are string")
            }
            tab[i] = tab[i].toLocaleUpperCase()
        }
        resolve("All done")
    })
}

capsStrings(tab).then((success) => { console.log(tab); console.log(success); }).catch((err) => { console.log(err); });

function sortStrings(tab: string[]) {
    return new Promise((resolve, reject) => {
        for (const i in tab) {
            tab.sort()
        }
        resolve("All done")
    })
}

capsStrings(tab).then((res) => { return sortStrings(tab); }).then((finalRes) => { console.log(finalRes); console.log(tab); });