
//Arrow functions

{ <button 
onClick={() => { 
  console.log("hello world");
  }}
></button> }

//Don't use if, use this instead to reduce the amount of lines
 let age = 16;
 let name = age > 10 ? "Pedro" : "Jack";

const Component = () => {
     return age > 10 ? <div> Pedro </div> : <div> Jack </div>;

  }

// This reduced the time of you writting the same stuff and adding deleting something

const person = {
     name: "Pedro",
     age: 20,
     isMarried: false,

  };

 const { name, age, isMarried } = person;

 const person2 = {...person, name: "Jack"}

 const names = ["Pedro", "Jack", "Jessica"]
  const names2 = [...names, "Joel"];

// This reduce the amount of lines using functions like map instead of for, and filter instead of complicated other ones

let names = ["Jack", "Carol"]

 names.map((name) => {
     return <h1> {name} </h1>
 });

 names.filter((name) => {
     return name !== "Pedro"

  });

// Know these basic apis
Async + Await + Fetch;