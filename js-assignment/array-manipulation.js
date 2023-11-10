let arr = [1,'ds',2.2];
arr[0]= 0;
// arr.splice(0,1);

function some(arr){
    let obj = {};
    for (x of arr){
        var y = typeof x;
        obj[y] = x;  
    }
    console.log(obj);
}
function arrToObj(arr){
    let obj = {};
    for(var i = 0; i < arr.length; i++){
        obj[i] = arr[i];
    }
    console.log(obj)
}

arrToObj([12,2.2,[1,2], {ana:'sa'},"sdds"])