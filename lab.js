// let word = “”;
// let Cell1 = “”;
// let Cell2 = “”;
// let Cell3 = “”;
// let Cell4 = “”;
// for (let i = 0; i <= csvString.length; i++) {
//   if (csvString[i] === “\n” || i === csvString.length) {
//     Cell4 = word;
//     console.log(Cell1, Cell2, Cell3, Cell4);
//     word = “”;
//     Cell1 = “”;
//     Cell2 = “”;
//     Cell3 = “”;
//     Cell4 = “”;
//     continue;
//   }
//   if (csvString[i] != “,”) {
//     word += csvString[i];
//   } else if (Cell1 === “”) {
//     Cell1 = word;
//     word = “”;
//     continue;
//   } else if (Cell2 === “”) {
//     Cell2 = word;
//     word = “”;
//     continue;
//   } else if (Cell3 === “”) {
//     Cell3 = word;
//     word = “”;
//     continue;
//   }
// }
// Split the CSV string into rows based on newline characters.
let rows = csvString.split(“\n”);
for (let i = 0; i < rows.length; i++) {
  // Split the current row into individual elements (id, name, occupation, age)
 // based on the comma delimiter and assign them to respective variables.
 let [cell1, cell2, cell3, cell4] = rows[i].split(“,”);
    console.log(cell1, cell2, cell3, cell4);
}

let lines = csvString.split(‘\n’);
let colNum = lines[0].split(‘,’).length;
let twoD = [];
for(let line of lines){
    let row = line.split(‘,’);
    if(row.length === colNum)
    twoD.push(row);
}
console.log(twoD);


let lines = csvString.split(‘\n’);
//using const map1 = array1.map((x) => x * 2);
let header = lines[0].split(‘,’);
let result = [];
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(‘,’);
    let dataObj ={}
for(let j=0; j< header.length;j++){
    dataObj[header[j]]= values[j];
}
    result.push(dataObj)
}
console.log(result);

let lines = csvString.split(‘\n’);
//using const map1 = array1.map((x) => x * 2);
let header = lines[0].split(‘,’).map(header => header.toLowerCase());;
let result = [];
for(let i =1; i<lines.length;i++){
    let values = lines[i].split(‘,’);
    let dataObj ={}
for(let j=0; j< header.length;j++){
    dataObj[header[j]]= values[j];
}
    result.push(dataObj)
}
console.log(result.pop());
console.log(“After pop: “,result);
console.log(result.splice(1, 0,{ id: “48”, name: “Barry”, occupation: “Runner”, age: “25" }))
console.log(“After splice: “,result);
console.log(result.push({ id: “7”, name: “Bilbo”, occupation: “None”, age: “111" }));
console.log(“After push: “,result);
let totalAge = 0;
for(let i=0;i<result.length;i++){
    totalAge +=parseInt(result[i].age);
    console.log(“total ages: “,totalAge , result[i].age)
}
let avrageAge = totalAge/result.length
console.log(“avrageAge: “,Math.round(avrageAge))