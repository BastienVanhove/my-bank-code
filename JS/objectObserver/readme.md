## for use
``` js
    let object = {x: 0, y: 0}
    let func = (target, key, value) => {
        console.log('variable change')
        console.log(`target : ${target}, key : ${key}, value ${value}`);
    }

    let variableChangeur = objectListener(object, func) 
    object.z = 7

    console.log(object)
```
