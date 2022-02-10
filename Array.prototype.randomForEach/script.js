Array.prototype.randomForEach = function(func){
  const clone = this
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  while(clone.length >= 1){
    const ran = getRandomInt(clone.length)
    func(this[ran])
    clone.splice(ran, 1)
  }
}
let arrTest = [1,2,3,4]

arrTest.randomForEach((a)=>{
  console.log(a)
})
