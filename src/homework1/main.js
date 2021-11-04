import {
    CheckIfTheNumberIsPrime,
    DrawLine,
    GetSumOfDividers,
    CheckIfNumbersAreFriend,
    CheckIfTheNumberIsPerfect
} from "./helperFunctions.js"


//QUESTION 1
const FindPrime = (...numbers) => {

    numbers.forEach(element => {
        var tempIsPrime = CheckIfTheNumberIsPrime(element)

        if (tempIsPrime) {
            console.log(element + " is prime.")
        }
        else {
            console.log(element + " is not prime.")
        }
    });

}

DrawLine(1, true)
FindPrime(2, 5, 8, 21, 13, 1, -5)




//QUESTION 2
const FindFriendNumbers = (firstNumber, secondNumber) => {
    let dividerSumForFirstNumber = GetSumOfDividers(firstNumber)
    let dividerSumForSecondNumber = GetSumOfDividers(secondNumber)

    let result = CheckIfNumbersAreFriend(firstNumber, dividerSumForFirstNumber, secondNumber, dividerSumForSecondNumber)

    if (result) {
        console.log(firstNumber + " and " + secondNumber + " are friend numbers.")
    }
    else {
        console.log(firstNumber + " and " + secondNumber + " are not friend numbers.")
    }
}

DrawLine(2, true)
FindFriendNumbers(220, 284)
FindFriendNumbers(1184, 1210)
FindFriendNumbers(20, 50)




//QUESTION 3
const FindPerfectNumbers = () => {
    for (let i = 1; i < 1000; i++) {
        CheckIfTheNumberIsPerfect(i)
    }

}

DrawLine(3, true)
FindPerfectNumbers()




//QUESTION 4
const FindPrimeNumbers = () => {
    for (let i = 2; i < 1000; i++) {
        var tempIsPrime = CheckIfTheNumberIsPrime(i)

        if (tempIsPrime) {
            console.log(i + " is prime.")
        }

    }
}

DrawLine(4, true)
FindPrimeNumbers()
DrawLine(4)