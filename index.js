let intro = (firstName, lastName, DOB, thisCallBack) => {
    console.log(`Hello ${firstName} ${lastName}, it's a pleasure to meet you`);

    thisCallBack(DOB);
}


let age = (DOB) => {
    console.log(`Are you ${DOB} years and above?`);
}

intro("Cynthia", "Adewale", 18, age);