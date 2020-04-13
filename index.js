

function isBalanced(str){

    function parensMap(str){
        let newObject={}
        for(let i=0;i<str.length;i++){
            let currentElement=str[i]
            if(newObject[currentElement]){
                newObject[currentElement]+=1
            }
            else{
                newObject[currentElement]=1
            }
        }
        return newObject
        
    }
    let newObject=parensMap(str)
    for(let key in newObject){
        if(newObject[key] % 2 !==0){
            return false
        }
    }
    return true
}