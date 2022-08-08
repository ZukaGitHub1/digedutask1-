// 1 
class Course {
    constructor(title, mentorName, numOfStudents, price) {
        this.title = title
        this.mentorName = mentorName
        this.numOfStudents = numOfStudents
        this.price = price

    }


    printName(){
      console.log(nameCourse.title, Date());
    }
    startCourse(){
         console.log('Course has started...');
    }

}

const nameCourse = new Course('React', 'Vano', 20, 650);
const typeCourse = [nameCourse.printName(), nameCourse.startCourse()];
console.log(typeCourse);

// 2 !!

const myConsole = {
    rec: 'received: ',
    log:function(...other) {
        return console.log(this.rec + other);
    }
}
myConsole.log(1, 2, 3 , 4, 5);
// 3 !!
let user = {
    name: "Vaniko",
    skills:['React', 'Node']
}

console.log(user.name );
console.log(user.skills);

 
let  [firstName, stack] = [user.name, user.skills];

console.log(firstName);
console.log(stack);
// 4
const person1 = {
    name: "Giorgi",
    age: 40,
  };

  const person2 = person1;

  person2.name = "Gvantsa";

  console.log(person1); 
  console.log(person2);
// იმიტომ რომ ობიექტის შემთხვევაში არის (Reference Type);
//  person1  არის  მისამართი; 
// person1 && person2 -ს   აქვთ ერთი და იგივე მისამართი,
// რის გამოც name - "giorgi" შეიცვალა  "Gvantsa"-თი;

// 4 !!
const num = [1,2,3,4,5,6,7,8];
num.map( index => {index * 2 });
num.filter( current => {current % 2 === 0 });
num.reduce( function (result, item) {
    return result + item;
  }, 0);

// 6 !!
  const arrOfNumbers = [1,2,3,4,5,6,7,8,9,10];
    
 var newArr = arrOfNumbers.filter( index =>(index % 2 !== 0 ));
    newArr =  newArr.map(index => {return  index * 2 });
     newArr =  newArr.reduce( function (index ,result ){return index * result });  
   console.log(newArr);

// 7 !!!
   const username = {
    name: 'Vaniko',
    age: 20
   }
  
   const copiedUser = Object.assign({}, username);
   copiedUser.name = 'vanikos';
   console.log(username);
   console.log(copiedUser);

// 8 !!!!
   const copiedusername = JSON.stringify(username);
   console.log(copiedusername);
 
