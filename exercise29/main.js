async function fetchData() {

  console.log(" start fetching Data");
  
  const response = await fetch('data.json');

 const data = await response.json();

console.log("response", data)

}

fetchData();