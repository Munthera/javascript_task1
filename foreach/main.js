//EX_1
function doubleValues(arr) {
    const doubleArray =arr.forEach(value=>{
     console.log(value*2);
    });
        
}
doubleValues([1,2,3]);
doubleValues([5,1,2,3,10]) ;
//--------------------------------------------------------------
//EX_2
function onlyEvenValues(arr) {
    const evenValuesArray =arr.filter(value=>{
      return value%2==0;
    });
    return evenValuesArray;
        
}
console.log(onlyEvenValues([1,2,5]));
console.log(onlyEvenValues([4,5,7,9,10]));
//--------------------------------------------------------------
//EX_3
function showFirstAndLast(arr){
    const resultArray =[];
    arr.forEach(tre => {
        const firstChar = tre[0];
        const lastChar =tre[tre.length-1];
        const concatenated = firstChar + lastChar;
        resultArray.push(concatenated);

    });
    return resultArray;
}
console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));
//--------------------------------------------------------------
//EX_4
function addKeyAndValue(arr,key,value) {
    arr.forEach(obj => {
        obj[key]=value;

    });
    return arr;
}
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
//--------------------------------------------------------------
//EX_5
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = {};
  
    const lowerCaseStr = str.toLowerCase();
  
    lowerCaseStr.split('').forEach((char) => {
      if (vowels.includes(char)) {
        if (result[char]) {
          result[char]++;
        } else {
          result[char] = 1;
        }
      }
    });
  
    return result;
  }
  
  
  console.log(vowelCount('Elie'));  
  console.log(vowelCount('Tim')); 
  console.log(vowelCount('Matt'));  
  console.log(vowelCount('hmmm'));  
  console.log(vowelCount('I Am awesome and so are you')); 
  
