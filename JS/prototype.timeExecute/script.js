Function.prototype.timeExecute = async function(){
    const self = this

    const generatePromise = function(){
        return new Promise(resolve => {
            let allPerf = []
            let numberAnalyseOf = 100
            for(let i = 0; i<numberAnalyseOf; i++){
                let startTime = performance.now()
                self()
                let endTime = performance.now()
                allPerf.push(endTime - startTime)
            }
            let m = 0
            allPerf.forEach(a=>{
                m+=a
            })
            m = m/numberAnalyseOf
    
            resolve(m)
        })
    }

    const time = await generatePromise()
    console.log(`${time}ms`)
}
