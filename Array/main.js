// //EX_1
//Correct the syntax error
[ 1, 7 , 9 , 45 ]

 ["Str", "alex","moh",

 'the','fox' ,'over' ,"lazy", 'dog' ]
// EX_2
//What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
 "banan".index[1];
 "Tomato".index[0];
// EX_3
 let Favoritefood=["burger","pizza","suchi","shawarma","zinger"];
 let FavoriteSport=["tennis","fotball","swimming","thewalked"];
 let FavoriteMovie=["Inception","The Shawshank Redemption","Pulp Fiction","The Dark Knight"];
//  EX_4
   function firstOfArray(mu){
    if (mu.length === 0) {
        return null;

    }
        return mu[0];
   }
   console.log(firstOfArray([7,9,4]));
   console.log(firstOfArray([`"m"`,`"o"`,`"a"`,`"h"`]));
   console.log(firstOfArray([]));
// EX_5
function lastOfArray(ar){
    if (ar.length===0){
        return null;

    }
       return ar[0];

} 

console.log(lastOfArray([1,0,7]));
console.log(lastOfArray([`"p"`,`"q"`,`"e"`,`"l"`]));
console.log(lastOfArray([]));
// EX_6
 let arr= ["munther","mohammad","mutaz","morad"];
 console.log(arr);

 arr.push("munes");
 console.log(arr);

 arr.unshift("momen");
 console.log(arr);

 arr.shift();
 console.log(arr);
 
 arr.pop();
 console.log(arr);
//  EX_7
 let sr = [12,5,3.9,4];
 console.log(sr);

 var pushResult =sr.push(7);
 console.log(pushResult);
 console.log(sr);

 var unshiftResult =sr.unshift(6);
 console.log(unshiftResult);
 console.log(sr);
 var shiftedElement =sr.shift();
 console.log(shiftedElement);
 console.log(sr);
 var popedElement =sr.pop();
 console.log(popedElement);
 console.log(sr);
//  EX_8
function middleOfArray(denvir){
    const length =denvir.length;

    if(length ==0){
        return "array is empty";

    }
    if(length %2==1){
        const middleIndex =Math.floor(length/2);
        return denvir[middleIndex];
    }
    else{
        const middleIndex1 = length / 2-1;
        const middleIndex2 = length / 2 ;
        return [denvir[middleIndex1] ,denvir[middleIndex2]];

    }
}
 let array1 = [0,9,8,7,6];
 let result1 = middleOfArray(array1);
 console.log(result1);

 let array2 =["w",`"a , m"`,"r"];
 let result2 =middleOfArray(array2);
 console.log(result2);
// EX_9

let animals =['cat','ele','bird'];
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2;
console.log(animals);
// EX_10
function indexOfArray(pars,index) {
   if(index <0 || index >=pars.lenth){
      return "invalid index";
   }
   return pars[index];
}
let pars =[2,3,4,7,9];
console.log(indexOfArray(pars,3));
console.log(indexOfArray(pars,2));
console.log(indexOfArray(pars,1));