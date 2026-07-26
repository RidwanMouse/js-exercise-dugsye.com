 
 const people = [
    {name: "Ridwan", age: "25", city: "borama"},
    {name: "khalid", age: "26", city: "jigjiga"},
    {name: "abdinajib", age: "23", city: "hargaisa"}
 ]
 
 for(const person of people){
    for(const key in person){
        console.log(`${key}: ${person[key]}`);
    }
     console.log("-----");
 };
