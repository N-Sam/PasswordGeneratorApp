// creating the placeholder for the generated pwd

const passordBox = document.getElementById("password");




// Creating a password generator function
let passWordGenerator = ()=>{
    // passord length
    let length = 12;
    // Character sets
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$&%@";
    // return values
    let retVal = "";

    // looping over the character set to choose random character
    while(retVal.length < length){
        retVal += charSet[Math.floor(Math.random() * charSet.length)];
    }

    // returning the generated password
    return passordBox.value = retVal;

}
