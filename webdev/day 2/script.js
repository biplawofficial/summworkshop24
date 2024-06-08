// const person ={fname:"rahul",lname:"kumar",age:25};
// for(let x in person)
// {
//     console.log(x+":"+person[x]);
// }

//for in loop similar to for each loop
// const num={1:1,2:2,4:3,5:4};
// let arr=[3,4,5,6,7];
// for(let x in arr)
// console.log(arr[x]);

//break statement is used to break the loop and continue to skip the current loop
// let i=0
// while(i<10)
// {
//     if(i==8)
//     break;
//     console.log(i++);
    
// }


// let i=0
// while(i<10)
// {
//     i++;
//     if(i===4)
//     continue;
//     console.log(i);
// }

//iterate i to n if i is multiple of 3 print fizz if multiple of 5 print buzz and if of both then fizzbuzz and give output in single line and separated by commas 
// {
//     let i;
//     let n=prompt();
//     let res="";
//     for(i=1;i<n;i++)
//     {
//         if(i%3==0&&i%5==0)
//         res+="Fizzbuzz";
//         else if((i%3==0))
//         res+="Fizz";
//         else if(i%5==0)
//         res+="Buzz";
//         else
//         res+=i;   
//         res+=","}
//         console.log(res);
// }


// //arrays in js
// let animals=["cow","dog","cat","monkey","elephant"];
// console.log(animals.length);  //finding length of loop 
// let n=animals.length;


// // //adding elements in array 

// // animals.push("Deer");
// // for(var i in animals)
// // console.log(animals[i])

// // //remove element from array

// // animals.pop();
// // for(var i in animals)
// // console.log(animals[i]);

// //modyfing an element
// //animals[1]="cheetah";
// //console.log(animals[1]);

// //printing whole array 
// //console.log(animals)

// //q2

// function uexist(array,str)
// {
//     for(let i=0;i<array.length;i++)
//     {
//     if(array[i]==str)
//     return true;
//     }
//     return false;
// }
// function lenn(array)
// {
//     return array.length;
// }
// function adduser(array,str)
// {
//     array.push(str);
// }
// function finduser(array,str)
// {
//     for(let i=0;i<array.length;i++)
//     {
//         if(array[i]==str)
//         return i+1;
       
//     }
//       return -1
// }
// function rmuser(array,str)
// {
//         for(let i=0;i<array.length;i++)
//     {
//         if(array[i]===str)
//       array.splice(i,1);
//     }
// }


// let array=["user1","user2","user3","user4"];

// rmuser(array,"user2")
// console.log(array)
// console.log(uexist(array,"user3"))
// console.log(uexist(array,"user5"))


// console.log(finduser(array,"user1"))
// console.log(finduser(array,"user3"))


//finding index of any array 
// array.indexOf(string);


//function in js
// function fn_name(num,ber)
// {
//     return num+ber;
// }
// console.log(fn_name(6,9))

//anonmous funciton is a function where we can assign a variable name to any function 

// let a=function fn(num,ber)
// {
//     return num+ber;
// }
// console.log(a(3,4));

//example 
// const square=function(number)
// {
//     return number*number;
// }
// const x=square(4);
// console.log(x);

//arrow function was introduced in es6 version 
// const greet=name=>{
//     return 'hello,${name}';
// }

//rest parameter used in place where we dont know how many variables to take as parameter
// const sum=(...num)=>
// {
//     let total=0;
//     console.log(num)
//     //console.log(typeof(num)) 
//     for(let x of num)
//     {
//         total+=x
//     }
//     return total;
// }
// console.log(sum(1,2,3))

//it will give error when we use let x in num because num is an object

//spread parameter when an function accepts only variable and we pass array then we can use spread parameter it spreads the values of the array 
//console.log(...arr)

// function a(name,callback)
// {
//     console.log(`hello,${name}!`);
//     callback();
// }
// function b()
// {
//     console.log("bro")
// }
// a('hello',b);


//set timeout is an inbuild function to make a delay 
// function fetch(callback)
// {
//     console.log("Fetching data..");
//     setTimeout(()=>
//     {
//     const error=false;
//     if(error)
//     {
//         callback('an error occured while fetching data',null);
        
//     }
//     else
//     {
//     const data={id:1,name:'harry'};
//     callback (null,data);
//     }
//     },2000
//     )
// }
// function process(error,data)
// {
//     if(error)
//     {
//         console.log(error);
//     }
//     else
//     {
//         console.log('data fetched successfully',data);
//     }
// }
// fetch(process);