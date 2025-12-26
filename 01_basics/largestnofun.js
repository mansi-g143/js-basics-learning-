function findLargestElement(numbers) {
    let bigelement=numbers[0];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>bigelement){
            bigelement= numbers[i];
        }
    }return bigelement;
}

let value=[1,2,3,4,8];
console.log(findLargestElement(value))
