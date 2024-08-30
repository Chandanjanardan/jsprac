// binary search sort first
function binarySearch(arr,target){
    arr.sort()
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let midIndex=Math.floor((leftIndex+rightIndex)/2)
        if(target===arr[midIndex]){
            return "found"
        }
        if(target>arr[midIndex]){
            leftIndex=midIndex+1
        }
        if(target<arr[midIndex]){
            rightIndex=midIndex-1
        }
    }
    return `not found`
}

let arr=[4,1,6,2,9]
let result= binarySearch(arr,10)
console.log(result)
