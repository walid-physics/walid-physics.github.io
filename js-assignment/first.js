function max(x,y,z){
    if(x>y && x>z){
        return x;
    }
    else if (y>z)
        return y;
    else 
        return z;
}

console.log(max(22,39,22));