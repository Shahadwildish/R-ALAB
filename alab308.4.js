// Function to parse CSV into a two-dimensional array
function parseCSVto2DArray(csvString) {
    const rows = csvString.trim().split('\n');
    const data = rows.map(row => row.split(',').map(cell => cell.trim()));
    return data;
  }
  
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
  
  // Function to generate a textual report from the data
  function generateReport(data) {
    data.forEach(entry => {
      const report = Object.entries(entry).map(([key, value]) => `${key}: ${value}`).join(', ');
      console.log(report);
    });
  }
  
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
  
  // Example CSV data
  const csvData1 = `ID,Name,Occupation,Age
  42,Bruce,Knight,41
  57,Bob,Fry Cook,19
  63,Blaine,Quiz Master,58
  98,Bill,Doctor’s Assistant,26`;
  
  // Parse CSV data into a two-dimensional array
  const dataArray1 = parseCSVto2DArray(csvData1);
  const numberOfColumns = dataArray1[0].length;
  console.log('Number of Columns:', numberOfColumns);
  console.log('Data Array:', dataArray1);
  
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
  let totalAge = 0;
  for (const obj of objectArray1) {
    totalAge += parseInt(obj.age, 10);
  }
  const averageAge = totalAge / objectArray1.length;
  console.log('Average Age:', averageAge);
  
  //   manipulated data
  generateReport(objectArray1);
  
  // Transform final datak to CSV format
  const finalCSV = convertObjectsToCSV(objectArray1);
  console.log('Final CSV:\n', finalCSV);
  