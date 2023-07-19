//EX_1
const numbers =[3,4,6];
  const doubleNumbers =numbers.map(val=>{
    return val*2;
});
console.log(doubleNumbers);
//--------------------------------------------------------------
//EX_2
const num = [5, 10,8];

const stringItUp =num.map(valu=>{
return valu.toString();
});
console.log(stringItUp);
//--------------------------------------------------------------
//EX_3
const arr = ["munther", "mohammad","mahmoud","ahmad"];
 
 const capitalizeNames = arr.map(valu=>{
    return valu.charAt(0).toUpperCase()+ valu.slice(1).toLowerCase();
 });
     console.log(capitalizeNames);
//--------------------------------------------------------------
//EX_4
function namesOnly(stw){
    const stringsArray = stw.map(valu=>{
       if(valu.age>=18){
           return`${valu.name}can go to The Matrix `
          }
          else{
            return`${valu.name} is under age !!`;
          }
           
    });
    return stringsArray;
}

    console.log(namesOnly([
            {
               name: "Munther Alaes",
               age: 19
           },
           {
               name: "Munes Alaes",
               age: 29
           },
          {
               name: "Morad Alaes",
               age: 28
           },
           {
               name: "Mohammad",
               age: 27
           },
           {
               name: " Mutasem Alaes",
               age: 24
           }
         ]));  
//--------------------------------------------------------------
//EX_5
function makeStrings(arr){
    const makeStrings =arr.map(valu=>{
     if(valu.age<= 18){
        return `${valu.name} can go to The Matrix`
     }
     else{
        return`${valu.name} is under age !!`
     } 
      
    });

      return makeStrings;
}

         console.log(makeStrings([
            
            {
                name: "Munther Alaes",
                age: 19
            },
            {
                name: "Munes Alaes",
                age: 29
            },
           {
                name: "Morad Alaes",
                age: 28
            },
            {
                name: "Mohammad",
                age: 27
            },
            {
                name: " Mutasem Alaes",
                age: 24
            }
         ]));
//--------------------------------------------------------------
//EX_6
function readyToPutInTheDOM (arr){
    const readyToPutInTheDOM =arr.map(valu=>{
   return `<h1>${valu.name}</h1><h2> ${valu.age}</h2>`;

    });
    return readyToPutInTheDOM;

}
console.log(readyToPutInTheDOM([
    {
        name: "Munther Alaes",
          age: 19            
    },

    {
        name: "Munes Alaes",
          age: 29           
    },

    {
        name: "Momen Alaes",
          age: 30         
    },

    {
        name: "Munes Alaes",
          age: 29           
    },



    {
        name: "Morad Alaes",
          age: 28           
    },

    
]));
//--------------------------------------------------------------
//EX_7
function doubleValues(arr){
    const doubleValues =arr.map(valu=>{
      return valu*2;
    });
    return doubleValues;

} 
         console.log(doubleValues([2,3,6]));
         console.log(doubleValues([2,-3,-6]));
//--------------------------------------------------------------
//EX_8
function valTimesIndex(arr){
    const multipliedArray = arr.map((value,index)=>{
     return value*index;
    });
    return multipliedArray ;
}

         console.log(valTimesIndex([2,3,6]));
         console.log(valTimesIndex([2,-3,-6]));
//--------------------------------------------------------------
//EX_9
function extractKey(arr,key) {
    const extractKey = arr.map(obj=>{
        return obj[key];

    });
        return extractKey;
}
console.log(extractKey([{name:'munther'},{name:'munes'},{name:'morad'},{name:'mohammad'}],'name'));
//--------------------------------------------------------------
//EX_10
function extractFullName(arr,key) {
    const extractFullName =arr.map(Obj=>{
      return Obj.first + " " + Obj.last;
    });
        return extractFullName;
}
console.log(extractFullName([{first:"munther", last:"alaes"},{first:"munes", last:"alaes"},{first:"morad", last:"alaes"},{first:"mutaz", last:"alaes"}]));


  