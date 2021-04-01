//1. Create array of objects of employee (name age gender experience and salary)
studentList = [{
        name: "thomas",
        age: 18,
        gender: "male",
        experience: 2,
        salary: 15000.50
    },
    {
        name: "Ashwini",
        age: 16,
        gender: "female",
        experience: 3,
        salary: 22000.25
    },
    {
        name: "cathirne",
        age: 17,
        gender: "female",
        experience: 4,
        salary: 30000.75

    },
    {
        name: "mithun",
        age: 22,
        gender: "male",
        experience: 5,
        salary: 40000.15
    },
    {
        name: "sathis",
        age: 24,
        gender: "male",
        experience: 6,
        salary: 62000.25
    }
];




let totalSalries = 0;
studentList.forEach(x => {
    //Change the names are in capital letters  
    x.name = x.name.toUpperCase();
    console.log(x.name);

    //change the all the employee age 35
    x.age = 35;
    console.log(x.age);

    //Each employee salary multiply by 2
    x.salary *= 2;
    console.log(x.salary);

    //add the salaries
    totalSalries += x.salary;
    console.log(totalSalries);

    


})


//divide by 4
    divdevalue = totalSalries / 4;
    console.log(divdevalue);


    //And the value is converted to string
    divdevalue = divdevalue.toString();
    console.log(divdevalue);

    //again converted to money
	
	  divdevalue = Number(Number(divdevalue).toFixed(2));
     console.log(typeof divdevalue);
	 

    //add 7000 rupees
    divdevalue += 7000;
    console.log(divdevalue);

    //split the amount to each employee
     divdevalue /= studentList.length;
    document.getElementById("myname").innerHTML = divdevalue ;
	alert(divdevalue);
