//fetch function for the page...
//This function will return a recommended car based on the data provided by the user
const url = "http://ddman.pythonanywhere.com/predict/";

async function getRecommendedCar(data) {
    const response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return [result]
  }

export default getRecommendedCar;

// {
//     "Year": ---,
//     "Kilometer": ---,
//     "Fuel": ---,
//     "Transmission": ---,
//     "Owner": ---,
//     "Mileage": ---,
//     "Engine": ---,
//     "Seats": ---,
//     "Price": ---
//   }