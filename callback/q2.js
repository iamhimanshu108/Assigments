function manipulateString(inputString, callback){
    const manipulatedString  = inputString.toUpperCase()

    callback(manipulatedString)
}

manipulateString("Hello Himanshu", logString)

function logString(manipulatedString){
    console.log(`The maniputed string is: ${manipulatedString}`);
}


