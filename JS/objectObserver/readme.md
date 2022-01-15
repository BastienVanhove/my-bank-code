## define
``` js
    const objectListener = (targetObj, doSomething) => {
    return new Proxy(targetObj, {
        set: function (target, key, value) {
            doSomething(target, key, value);
            target[key] = value;
            return true;
        }
      });
}
```
## use
``` js
    let object = {x: 0, y: 0} //define an object

    let func = (target, key, value) => {
        //do something
        console.log(`target : ${target}, key : ${key}, value ${value}`);
    } 
    //define a function to do something when variable change

    let variableChangeur = objectListener(object, func)
    //define the object for change first object

    variableChangeur.z = 7
    //test to change object

    console.log(object)
```

## result
```
    target : [object Object], key : z, value 7
    { x: 0, y: 0, z: 7 }
```

