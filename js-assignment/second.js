function isVowel(s){

    const vowels = "aeoiu";

    if(s.length>1 || !vowels.includes(s)){
        return false;
    }
    else
        return true;
}
console.log(isVowel2("is"));
