function getSum(num1:number, num2:number):number {
    return num1 + num2
}

// console.log(getSum(1,4))

var mySum = function(num1:number, num2:any):number {
    if (typeof num1 === 'string') {
        num1 = parseInt(num1)
    }
    if (typeof num2 === 'string') {
        num2 = parseInt(num2)
    }
 return num1 + num2
}

function getName(firstName:string, lastName?:string):string {
    if (lastName === undefined) {
        return firstName
    }
    return firstName + " " + lastName
}

function myVoid():void {

}

console.log(getName("John"))