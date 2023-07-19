//EX_1
function areEquivalentObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (!obj2.hasOwnProperty(key)) {
        return false;
      }
  
      const value1 = obj1[key];
      const value2 = obj2[key];
  
      if (typeof value1 === 'object' && typeof value2 === 'object') {
        if (!areEquivalentObjects(value1, value2)) {
          return false;
        }
      } else if (value1 !== value2) {
        return false;
      }
    }
  
    return true;
  }
  
  // Test cases
  const obj1 = {
    name: "Munther Alaes",
    age: 19,
    address: {
      city: "Aqaba",
      country: "Jordan"
    },
    hobbies: ["Swimming", "skiing"]
  };
  
  const obj2 = {
    name: "yhia Alaes",
    age: 30,
    address: {
      city: "Amman",
      country: "Jordan"
    },
    hobbies: ["tinnes", "gaming"]
  };
  
  const obj3 = {
    name: "Mohammad Ahmad",
    age: 25,
    address: {
      city: "Aqaba",
      country: "Jordan"
    },
    hobbies: ["football", "swimming"]
  };
  
  console.log(areEquivalentObjects(obj1, obj2)); // true
  console.log(areEquivalentObjects(obj1, obj3)); // false
  //EX_2

  function copyToClipboard(text) {
  // Create a temporary input element
  const tempInput = document.createElement("input");

  // Set its value to the text to be copied
  tempInput.value = text;

  // Append the input element to the document
  document.body.appendChild(tempInput);

  // Select the text inside the input element
  tempInput.select();

  // Execute the copy command
  document.execCommand("copy");

  // Remove the temporary input element from the document
  document.body.removeChild(tempInput);
}

// Test the function
const textToCopy = "Hello, I'm a string to copy!";
copyToClipboard(textToCopy);
console.log("Text copied to clipboard:", textToCopy);
//EX_3
function csvTo2DArray(csvString) {
    // Split the CSV string into rows based on line breaks
    const rows = csvString.split("\n");
  
    // Initialize the 2D array
    const array2D = [];
  
    // Process each row and split into columns based on commas
    for (const row of rows) {
      const columns = row.split(",");
      array2D.push(columns);
    }
  
    return array2D;
  }
  
  // Test the function
  const csvString = `1,John,Doe
  2,Jane,Smith
  3,Bob,Johnson`;
  
  const result = csvTo2DArray(csvString);
  console.log(result);
  //EX_4
  function csvTo2DArrayOfObjects(csvString1) {
    // Split the CSV string into rows based on line breaks
    const rows = csvString1.split("\n");
  
    // Extract the title row and split it into column titles
    const titleRow = rows[0];
    const columnTitles = titleRow.split(",");
  
    // Initialize the 2D array of objects
    const array2DObjects = [];
  
    // Process each row (except the title row) and create objects with column titles as keys
    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(",");
      const obj = {};
  
      for (let j = 0; j < columnTitles.length; j++) {
        obj[columnTitles[j]] = columns[j];
      }
  
      array2DObjects.push(obj);
    }
  
    return array2DObjects;
  }
  
  // Test the function
  const csvString1 = `ID,Name,Age
  1,John,30
  2,Jane,25
  3,Bob,40`;
  
  const result1 = csvTo2DArrayOfObjects(csvString);
  console.log(result1);
  //EX_5
  function arrayObjectsToCSV(dataArray, columns) {
    const csvRows = [];
  
    // Add the column titles as the first row in the CSV
    csvRows.push(columns.join(","));
  
    // Iterate through each object and extract the values of the specified columns
    dataArray.forEach((obj) => {
      const values = columns.map((column) => obj[column]);
      csvRows.push(values.join(","));
    });
  
    // Join the CSV rows to form the final CSV string
    const csvString = csvRows.join("\n");
  
    return csvString;
  }
  
  // Test the function
  const data = [
    { ID: '1', Name: 'John', Age: '30', City: 'New York' },
    { ID: '2', Name: 'Jane', Age: '25', City: 'San Francisco' },
    { ID: '3', Name: 'Bob', Age: '40', City: 'Chicago' }
  ];
  
  const columnsToInclude = ['ID', 'Name', 'Age'];
  
  const result2 = arrayObjectsToCSV(data, columnsToInclude);
  console.log(result2);
//  EX_6
function findValueByKey(jsonObject, targetKey) {
    let result = null;
  
    function traverse(obj) {
      for (const key in obj) {
        if (key === targetKey) {
          result = obj[key];
          return;
        }
  
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          traverse(obj[key]);
        }
      }
    }
  
    traverse(jsonObject);
    return result;
  }
  
  // Test the function
  const jsonData = {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "gaming", "cooking"]
  };
  
  const targetKey = "city";
  const targetValue = findValueByKey(jsonData, targetKey);
  console.log(`The value for key '${targetKey}' is:`, targetValue);
//EX_7
function numberToDigitsArray(number) {
    const numberString = number.toString();
    const digitsArray = numberString.split("").map(Number);
    return digitsArray;
  }
  
  // Test the function
  const number = 12345;
  const result3 = numberToDigitsArray(number);
  console.log(result3);
  //EX_8
  function filterOutValues(originalArray, valuesToFilter) {
    return originalArray.filter((element) => !valuesToFilter.includes(element));
  }
  
  // Test the function
  const originalArray = [1, 2, 3, 4, 5, 6, 7];
  const valuesToFilter = [2, 4, 6];
  
  const result5 = filterOutValues(originalArray, valuesToFilter);
  console.log(result5);
  //EX_9
  function combinations(array) {
    const result = [];
  
    function generateCombinations(subArray, currentIndex) {
      result.push(subArray);
  
      for (let i = currentIndex; i < array.length; i++) {
        generateCombinations([...subArray, array[i]], i + 1);
      }
    }
  
    generateCombinations([], 0);
    return result;
  }
  
  // Test the function
  const givenArray = [1, 2, 3];
  const result6 = combinations(givenArray);
  console.log(result6);
  //EX_10
  function extractValuesAtIndexes(array, indexes) {
    const extractedValues = [];
  
    for (const index of indexes) {
      if (index >= 0 && index < array.length) {
        extractedValues.push(array[index]);
      }
    }
  
    return extractedValues;
  }
  
  // Test the function
  const originalArray1 = [10, 20, 30, 40, 50];
  const indexesToExtract = [0, 2, 4];
  
  const result9 = extractValuesAtIndexes(originalArray1, indexesToExtract);
  console.log(result9);
  