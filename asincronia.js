/* function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value)
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(0,(value, result) => {
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1,(value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2,(value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3,(value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4,(value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5,(value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                    })
                })
            })
        })
    })
}) */

/* function cuadradoPromise(value) {
    if(typeof value != "number") {
        return Promise.reject(`Error, el ${value} ingresado no es un número`)
    }
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
        })
        }, 0 | Math.random * 1000);
    })
}

cuadradoPromise(0)
    .then((obj) => {
        console.log(obj);
        console.log("Inicio Promise");
        console.log(`Promise ${obj.value} ${obj.result}`);
        return cuadradoPromise(1)
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} ${obj.result}`);
        return cuadradoPromise(2)
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} ${obj.result}`);
        return cuadradoPromise(3)
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} ${obj.result}`);
        return cuadradoPromise("hola")
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} ${obj.result}`);
        return cuadradoPromise(5)
    })
    .then((obj) => {
        console.log(`Promise ${obj.value} ${obj.result}`);
        console.log("Fin Promise");
    })
    .catch(err => console.error(err)) */

function cuadradoPromise(value) {
    if (typeof value != "number") {
        return Promise.reject(`Error, el ${value} ingresado no es un número`)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random() * 1000);
    })
}
async function AsincronaDeclarada() {
    try {
        console.log("Inicio del Async Function");
        let obj = await cuadradoPromise(0)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(1)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(2)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise("a")
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(4)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(5)
        console.log(`Async Function ${obj.value} ${obj.result}`);
    } catch (error) {
        console.error(error);
    }
}
AsincronaDeclarada()

const AsincronaExpresada = async() => {
    try {
        console.log("Inicio del Async Function");
        let obj = await cuadradoPromise(6)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(7)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise("8")
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(9)
        console.log(`Async Function ${obj.value} ${obj.result}`);
        obj = await cuadradoPromise(10)
        console.log(`Async Function ${obj.value} ${obj.result}`);
    } catch (error) {
        console.error(error);
    }
}

AsincronaExpresada()