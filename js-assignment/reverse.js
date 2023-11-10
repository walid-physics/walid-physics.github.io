function reverse(string){
    let res = "";
    for(s of string){
        res = s + res; 
    }
    console.log(res);
}

function longestWord(arr){
    let res = 0;
    for( x of arr){
        if(res < x.length) res = x.length;
    }
    console.log(res);
}

function filterLongWord(arr, j){
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length <= j){
            arr.splice(i,1);
            i--;
        }
    }
    console.log(arr);
}


let text = "How are you doing today?";
const myArray = text.split(" ");

console.log(myArray);

filterLongWord(['j','ahsd', 'sd'],2);

// longestWord(['as', 'only','who']);

// reverse("abcdefg");