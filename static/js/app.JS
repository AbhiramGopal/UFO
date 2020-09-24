// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
function buildtable(){
    tbody.html("")
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).array.forEach((val) => {
            let cell = row.append("td")
            cell.text(val)
            
        });

    });
}
function handleclick(){
    
    let date = d3.select("#datetime").property("value")
    let filteredData = tableData
    if(date){
        filteredData = filteredData.filter(row=>row.datetime==date)
    }
    buildtable(filteredData)

}
d3.selectAll("#filter-btn").on("click",handleclick)
buildtable(tableData)
