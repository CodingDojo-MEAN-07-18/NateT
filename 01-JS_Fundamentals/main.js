// Assignment: JavaScript Objects
// Challenge 1 : Write a function that accepts an array of student objects
console.log("== Challenge 1 ==");

let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

students.forEach((student)=>{
    console.log(student);
    }
);

// Challenge 2 : Write a function that accepts an object of users divided into employees and managers
console.log("\n == Challenge 2 ==");

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
 for(var element in users){
    console.log(element.toUpperCase());
    let count = 0;
    
    users[element].forEach((person)=>{        
        let fname = person.first_name.toUpperCase();
        let lname = person.last_name.toUpperCase();
        let nameLength = fname.length + lname.length;
        count++;
        console.log(`${count} ${fname} ${lname} ${nameLength}`);
    })
 };

    // for(var element in users){
    //     console.log(element.toUpperCase()); // Show keys sections
    // for(let i = 0; i < users[element].length; i++){    // loop through each array object
        
    //     let ind = (i + 1);  
    //     let fname = users[element][i].first_name.toUpperCase();
    //     let lname = users[element][i].last_name.toUpperCase();       
    //     let fullNameLength = (fname+lname).length;

    //     console.log(`${ind} ${fname} ${lname} ${fullNameLength}`);                
    // }
//} 