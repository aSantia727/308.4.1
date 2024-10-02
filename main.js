// Part 2

const data = [
  `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26`
];

function CSVdata(csvString) {
  const lines = csvString.split('\n');
  const headers = lines[0].split(',');
  const data2 = []; 

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    const rowData = {};
    for (let j = 0; j < headers.length; j++) {
      rowData[headers[j].toLowerCase()] = row[j];
    }
    data2.push(rowData);
  }

  return data2; 
}

const transformedData = CSVdata(data[0]);

// Part 4

transformedData.pop();
transformedData.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
transformedData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

const totalAge = transformedData.reduce((sum, person) => sum + parseInt(person.age), 0);

const averageAge = totalAge / transformedData.length;

console.log("Average age:", averageAge);

// Part 5

function convertToCSV(data) {
  const headers = Object.keys(data[0]);
  const headerRow = headers.join(',');
  const dataRows = data.map(row => headers.map(key => row[key]).join(',')).join('\n');
  return headerRow + '\n' + dataRows; // Return CSV format
}

const csvOutput = convertToCSV(transformedData);

console.log(csvOutput);
