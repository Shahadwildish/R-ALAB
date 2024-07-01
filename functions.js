/// Function to take an array of numbers and return the sum of those number
function sumArray(x) {
    return x.reduce((sum, element) => sum + element, 0)
}

let numbers = [1, 2, 6]
console.log(sumArray(numbers))



// function to calculate the average of the numbers in an array.

function averageArray(x) {
    if (x.length === 0) return 0;  ///making sure the array is not empty other wise the logic would try to devide by 0 and fail
    const total = sumArray(x); /// calculate the array's sum using our previous function
    return total / x.length; //// calculate the average 
}

console.log(averageArray(numbers))

//   function to return longest string in array

function longestString(x) {
    return x.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

let words = ["I", "Like", "my", "toast", "golden", "with", "Avocados"];

console.log(longestString(words));



/// function to return an array of strings longer than a give number

function stringsLongerThan(x, y) {
    return x.filter(z => z.length > y);
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning', 'good', 'better'], 3));


// function to count from `1 to n by recursion

function printNumbers(n, current = 1) {
    if (current > n) return;
    console.log(current)
    printNumbers(n, current + 1);

}
printNumbers(10)



// const data =
//     [
//         { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
//         { id: "48", name: "Barry", occupation: "Runner", age: "25" },
//         { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
//         { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
//         { id: "7", name: "Bilbo", occupation: "None", age: "111" }
//     ]


//    const sortedData =  data.sort((a,b) => parseInt(a.age) - parseInt(b.age));
//    console.log(sortedData);

// const filterAge = data.filter(row => parseInt(row.age) <=50);
// console.log(filterAge);


// const mappedData = data.map(person => ({
//     id: person.id,
//     name: person.name,
//     job: person.occupation,
//     age: (parseInt(person.age) + 1).toString()
//   }));
//   console.log('Mapped data with job and incremented age:', mappedData);

// Part 1: Thinking Functionally

// Function to sum an array of numbers
function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of an array of numbers
function averageArray(numbers) {
  if (numbers.length === 0) return 0;
  return sumArray(numbers) / numbers.length;
}

// Function to find the longest string in an array of strings
function longestString(strings) {
  return strings.reduce((longest, str) => str.length > longest.length ? str : longest, '');
}

// Function to return strings longer than a given number
function stringsLongerThan(strings, length) {
  return strings.filter(str => str.length > length);
}

// Function to print every number between 1 and n using recursion
function printNumbersRecursively(n) {
  function printHelper(current) {
    if (current > n) return;
    console.log(current);
    printHelper(current + 1);
  }
  printHelper(1);
}

// Part 2: Thinking Methodically

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// Sort the array by age
const sortedByAge = data.slice().sort((a, b) => a.age - b.age);

// Filter the array to remove entries with an age greater than 50
const filteredByAge = data.filter(person => person.age <= 50);

// Map the array to change the "occupation" key to "job" and increment every age by 1
const mappedData = data.map(person => ({
  ...person,
  job: person.occupation,
  age: person.age + 1
}));

// Use the reduce method to calculate the sum of the ages
const totalAge = data.reduce((sum, person) => sum + person.age, 0);

// Calculate the average age
const averageAge = totalAge / data.length;

// Part 3: Thinking Critically

// Function to increment the age field of an object
function incrementAge(obj) {
  if (!obj.age) {
    obj.age = 0;
  }
  obj.age += 1;
  obj.updated_at = new Date();
}

// Function to make a copy of an object, increment the age field, and return the copy
function incrementAgeCopy(obj) {
  const copy = { ...obj, updated_at: new Date(obj.updated_at ? obj.updated_at.getTime() : Date.now()) };
  if (!copy.age) {
    copy.age = 0;
  }
  copy.age += 1;
  return copy;
}

// Part 4: Thinking Practically

// Example CSV data
const csvData1 = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctor’s Assistant,26`;

// Function to parse CSV into a two-dimensional array
function parseCSVto2DArray(csvString) {
  const rows = csvString.trim().split('\n');
  const data = rows.map(row => row.split(',').map(cell => cell.trim()));
  return data;
}

// Parse CSV data into a two-dimensional array
const dataArray1 = parseCSVto2DArray(csvData1);
const numberOfColumns = dataArray1[0].length;
console.log('Number of Columns:', numberOfColumns);
console.log('Data Array:', dataArray1);

// Function to transform CSV data into an array of objects
function transformCSVDataToObjects(dataArray) {
  const headers = dataArray[0].map(header => header.toLowerCase());
  return dataArray.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
}

// Transform two-dimensional array into an array of objects
const objectArray1 = transformCSVDataToObjects(dataArray1);
console.log('Object Array:', objectArray1);

// Remove the last element
objectArray1.pop();

// Insert a new object at index 1
objectArray1.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// Add a new object to the end
objectArray1.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log('Manipulated Object Array:', objectArray1);

// Calculate the average age
let totalAge2 = 0;
for (const obj of objectArray1) {
  totalAge2 += parseInt(obj.age, 10);
}
const averageAge2 = totalAge2 / objectArray1.length;
console.log('Average Age:', averageAge2);

// Function to generate a textual report from the data
function generateReport(data) {
  data.forEach(entry => {
    const report = Object.entries(entry).map(([key, value]) => `${key}: ${value}`).join(', ');
    console.log(report);
  });
}

// Generate report from the manipulated data
generateReport(objectArray1);

// Function to convert array of objects back to CSV
function convertObjectsToCSV(dataArray) {
  const headers = Object.keys(dataArray[0]);
  const csvRows = [headers.join(',')];

  for (const obj of dataArray) {
    const row = headers.map(header => obj[header]);
    csvRows.push(row.join(','));
  }

  return csvRows.join('\n');
}

// Transform final data back to CSV format
const finalCSV = convertObjectsToCSV(objectArray1);
console.log('Final CSV:\n', finalCSV);


