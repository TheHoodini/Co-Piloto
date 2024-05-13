//importing styles
import styles from "./Userquestions.module.css";

const brands = ['Brand A', 'Brand B', 'Brand C', 'Brand D']; // List of brands

import { useState } from "react";

const UserQuestions = () => {
  // State variables to store user inputs
  const [favoriteBrand, setFavoriteBrand] = useState('');
  const [seatsNeeded, setSeatsNeeded] = useState('');
  const [usage, setUsage] = useState('');
  const [enginePower, setEnginePower] = useState(0);
  const [priceRange, setPriceRange] = useState(30); // Initial value set to the minimum price

  // Function to handle submission of user input
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the user inputs here, you can use them as needed
    console.log('Favorite Brand:', favoriteBrand);
    console.log('Seats Needed:', seatsNeeded);
    console.log('Usage:', usage);
    console.log('Engine Power:', enginePower);
    console.log('Price Range:', priceRange);
  };

  return (
    <div className={styles.userquestionscont}>
      <form onSubmit={handleSubmit}>
        {/* Favorite Brand */}
        <div>
          <label htmlFor="favoriteBrand">Favorite Brand:</label>
          <select
            id="favoriteBrand"
            value={favoriteBrand}
            onChange={(e) => setFavoriteBrand(e.target.value)}
          >
            <option value="">Select</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
        
        {/* Number of Seats Needed */}
        <div>
          <label htmlFor="seatsNeeded">Number of Seats Needed:</label>
          <input
            type="number"
            id="seatsNeeded"
            min="2"
            max="8"
            value={seatsNeeded}
            onChange={(e) => setSeatsNeeded(parseInt(e.target.value))}
          />
        </div>

        {/* Usage */}
        <div>
          <label htmlFor="usage">Usage:</label>
          <select
            id="usage"
            value={usage}
            onChange={(e) => setUsage(e.target.value)}
          >
            <option value="">Select</option>
            <option value="off-road">Off-road</option>
            <option value="sport">Sport</option>
            <option value="street-drive">Street Drive</option>
            <option value="family">Family</option>
          </select>
        </div>

        {/* Engine Power (Slider) */}
        <div>
          <label htmlFor="enginePower">Engine Power (CC):</label>
          <input
            type="range"
            id="enginePower"
            min="0"
            max="5000"
            value={enginePower}
            onChange={(e) => setEnginePower(e.target.value)}
          />
          <span>{enginePower} CC</span>
        </div>

        {/* Price Range */}
        <div>
          <label htmlFor="priceRange">Price Range (COP):</label>
          <input
            type="range"
            id="priceRange"
            min="30"
            max="300"
            step="10"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
          <span>{priceRange} million COP</span>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserQuestions;