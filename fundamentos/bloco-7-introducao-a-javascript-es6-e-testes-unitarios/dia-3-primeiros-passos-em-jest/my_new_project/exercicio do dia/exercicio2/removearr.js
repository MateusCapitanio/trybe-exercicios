
const removearr = (arr,item) => {
    let newarr = []
    for (let i = 0; i < arr.length; i+=1) {
        if(item !== arr[i]) {
            newarr.push(arr[i])
        }        
    }
    return newarr
}

module.exports = removearr;