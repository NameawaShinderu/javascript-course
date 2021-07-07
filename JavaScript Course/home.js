/*
console.log("hellow");

//variables with a example

     var b = 'smmothie';
     console.log(b);
   
     var sumnum = 45;
     console.log(sumnum);

//eg: 810i0gettin element by diff shit in this ase by ID from html

    //store words
    document.getElementById('soag').innerHTML = 'yo';

     //store variables
     var age = prompt('Whar is your age');
     //document.getElementById('hellow').innerHTML = age;

//numbers in JS
     var num =  3.55;
     console.log(num * sumnum);

    console.log(num + 2);

     num1 = num - 3;
     console.log(num1)

     num2 = num * age;
     console.log(num2);

     num2++;
     console.log(num2);

     num2--;
     console.log(num2);

     num2 += 10
     console.log(num2)
    
     num2 += num
     console.log(num2);



//functions

     function huh()
    {
        alert('JUST A FUC');
    }
        
        huh();


     
     
    function aname()
    {
        var sname = prompt('what is your name');
        var result = 'hello' + ' ' + sname; //string concatenation
        console.log(result);


    }

 aname();



    function din()
     { 
    
       var result = 'hello' + ' ' + qname;
       console.log(result);

     } 

        var name = prompt('what is your name');
        din(name);


    function dname(lname)
     {
    
    var result = 'hello' + ' ' + lname;
    console.log(result);

     }

    var kname = prompt('what is your name');
     dname(kname);


    function sem1(a,b)
     {
      var sum = a + b;
      var result = 'hello' + ' ' + sum; //string concatenation
      console.log(result);

     }

 sem1(10, 10);

//loops

    ///While loops

     var num = 7;
     while (num<9){
        num++;
        console.log(num);
     }
      
    // for loop
    for (let num =78; num<100; num+=10){

        console.log(num);
    }


// data types

      let age = 18; //number
      let name = 'sog'//strin
      let name2 = {first: 'td'. last: 'soag'}; //object
      let trth = false; //boolean
      let list = {'apple', 'soag', 10}; //array
      let random; //undefined
      let nothing = null; //value null


//string
      let fruit = 'banna';
      let fruit2 = 'banna ';
      let fruit3 = 'banna,apple,oranfe';
      let morefruits = 'apple\nabab'; //adding \n to get to new line
      console.log(morefruits);
      console.log(fruit);
      console.log(fruit2);
    //finding length of string
      console.log(fruit.length); //getth overall legth of the string
      console.log(fruit2.length);
    //finding the position number of string
      console.log(fruit.indexOf('b')); //position number is give in ths case 0
      console.log(fruit2.indexOf('an')); //position number is given after the previus index, in this case 'an' comes after 'b' which is in 1st position
      console.log(fruit2.indexOf(' ')); //here 5 will come as it comes after the 5th letter 
    //slicing a string
       console.log(fruit.slice(1, 4)); //between two number using their positions, in this case 'ann' between psoition 1 word 'a' and position 4 word 'a'
    //replacinf a string

       console.log(fruit.replace('ban', '12'));
    //caps lock of a string
       console.log(fruit.toUpperCase());
       console.log(fruit2.toLowerCase());
    //split a string
       console.log(fruit3.split(',')); //spliy by a comma
       console.log(fruit.split('')); //spliy by a character
*/

//Array
       //2 ways to create array
          
           let fruit2 = ['1', '5', '3']; //first type
           fruit = new Array('1', '2', '4'); //secnd type
           console.log(fruit);
           console.log(fruit2);
           console.log(fruit[0]); //access value in a given position in this case at 0th position we have the string '1'
           
           fruit[1] = '99';
           console.log(fruit) //replaces the value at 1st postion which is '2' with '99 
        

        //program to print out the fruits in list

          for (i = 0; i < fruit.length ; i++){
              console.log(fruit[])
          }
    
    // other array common methods take from course = https://websitesetup.org/javascript-cheat-sheet/
  
