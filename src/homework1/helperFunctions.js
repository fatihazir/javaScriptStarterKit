////////////////////////////////////////////////////////////////////////////////////////////
//HELPER FOR QUESTION 1 AND 4
export const CheckIfTheNumberIsPrime = (number) => {
    let isPrime = true

    if(number === 1 || number < 0){
        return false
    }

    for (let i = 2; i < number; i++) {
        if(number % i === 0){
            isPrime = false
            break;
        }
    }

    return isPrime
}
/////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////
//HELPERS FOR QUESTION 2
export const GetSumOfDividers = (number) => {
    let tempSumOfDividers = 0

    for (let i = 1; i < number; i++) {
        if(number % i === 0){
            tempSumOfDividers += i
        }
    }

    return tempSumOfDividers
}

export const CheckIfNumbersAreFriend = (firstNumber,dividerSumForFirstNumber,secondNumber,dividerSumForSecondNumber) => {
    if((firstNumber === dividerSumForSecondNumber) && (secondNumber === dividerSumForFirstNumber)){
        return true
    }

    return false
}
////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////
//HELPER FOR QUESTION 3
export const CheckIfTheNumberIsPerfect = (number) => {
    let tempSumOfDividers = 0

    for (let i = 1; i <= number; i++) {
        if(number % i === 0){
            tempSumOfDividers += i
        }
    }

    if(tempSumOfDividers === 2*number){
        console.log(number + " is a perfect number.")
    }

    return false
}
///////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
//HELPER FOR DRAWING LINE


export const DrawLine = (questionNumber, isStart = false) => {
    if(isStart){
        console.log("----------------" + "Question " + questionNumber + " is starting from here"+"------------------")
    }
    else{
        console.log("----------------" + "Question " + questionNumber + " is ending here"+"-------------------------")
    }
    
}
