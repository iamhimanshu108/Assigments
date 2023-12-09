function greet(name){
    return new Promise((resolve) => {
        const greeting = `Good Morning, ${name}!`;
        resolve(greeting)
    })
}

greet("Himanshu").then((message) => console.log(message))