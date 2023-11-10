function sum(arr){
    let theSum = 0;
    for(x of arr){
        theSum += x;
    }
    console.log(theSum);
}
function multiply(arr){
    let tot = 1;
    for(x of arr){
        tot *= x;
    }
    console.log(tot);
}
sum([1,32,2]);
multiply([1,2,4]);
