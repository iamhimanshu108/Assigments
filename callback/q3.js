const person ={
    firstName: "Himanshu",
    lastName: "Yadav",
    age: 21,
};

function ageIndays(person, callback){
    const fullName = `${person.firstName} ${person.lastName}`
    const ageIndays = person.age * 365
    callback(fullName, ageIndays);
}

function logResult(fullName, ageIndays){
    console.log(`The person full name is ${fullName} and their age In days = ${ageIndays}`);
}

ageIndays(person, logResult)