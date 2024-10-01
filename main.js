function CVSscript(CVSValue) {
    const rows = CVSValue.split('\n');
  
    const numColumns = rows[0].split(',').length;
    const results = [];
    rows.forEach(row => {
      const cells = row.split(',');
  
      if (cells.length === numColumns) {
        results.push(cells);
      }
    });

    const arry = [];
  
    for (let i = 1; i < results.length; i++) {
      const row = results[i];
      const arrys = {};
  
      for (let x = 0; x < row.length; x++) {
        arrys[results[0][x].toLowerCase()] = row[x];
      }
  
      arry.push(arrys);
    }
    
    arry.pop();
    arry.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
  
    arry.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

    let totalAge = 0;
    for (let i = 0; i < arry.length; i++) {
      totalAge += parseInt(arry[i].age);
    }
    const averageAge = totalAge / arry.length;

  
    console.log("Average Age:", averageAge);
  }

CVSscript()