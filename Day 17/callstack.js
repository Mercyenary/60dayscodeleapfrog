//Function call
function firstfunction() {
    console.log("inside firstfunction");
    secondfunction();
}

function secondfunction() {
    console.log("inside secondfunction");
}

firstfunction();

//exception handling
function throwError() {
    throw new Error("Custom Error");
}

function except() {
    try {
        console.log("Start of try block");
        throwError();
        console.log("End of try block"); 
    } catch (error) {
        console.error("Caught error:", error.message);
    }
}
except();

