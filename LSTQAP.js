console.log("Hello from script.js!");
fetch('data.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error reading JSON file:', error));
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      console.log('Name:', item.name);
    });
  })
  .catch(error => console.error('Error reading JSON file:', error));
  function getNames(data) {
    return data.map(item => item.name).join(', ');
  }
  
  function getAges(data) {
    return data.map(item => item.age).join(', ');
  }
  
  function getCities(data) {
    return data.map(item => item.city).join(', ');
  }
  fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('json-data').innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error reading JSON file:', error));
