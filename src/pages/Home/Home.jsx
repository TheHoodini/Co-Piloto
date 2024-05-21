//importing styles
import styles from "./Home.module.css";

//React stuff
import { useEffect, useState } from "react";

//Fake json file to simulate the database
import carjson from "../../assets/carjson.json";
import Card from "../../components/Card";
import UserQuestions from "../../components/Userquestions";
import Info from "../../components/Info";
import Help from "../../components/Help";
import getRecommendedCar from "../../assets/JS/fetchs";

const Home = () => {
  const [isCardVisible, setCardVisible] = useState(false);
  const [isHelpVisible, setHelpVisible] = useState(false);
  // New state for the current card's information
  const [currentCard, setCurrentCard] = useState(null);

  const [recommendedcar, setRecommendedCar] = useState([]);

  const handleShowCard = (cardInfo) => {
    // Set the current card's information
    setCurrentCard(cardInfo);
    setCardVisible(true);
  };

  const handleCloseCard = () => {
    setCardVisible(false);
  };

  const handleShowHelp = () => {
    setHelpVisible(true);
  };

  const handleCloseHelp = () => {
    setHelpVisible(false);
  };

  useEffect(() => {
    // Retrieve the user's responses from the localStorage
    const userResponses = JSON.parse(localStorage.getItem("userResponses"));
    // Use the user's responses for the fetch request
    if (userResponses) {
      getRecommendedCar(userResponses).then((data) => setRecommendedCar(data));
    }
  }, []);

  // Engine: 2621;
  // Fuel: 2;
  // Kilometer: 674;
  // Mileage: 18;
  // Owner: 1;
  // Price: 31000;
  // Seats: 5;
  // Transmission: 0;
  // Year: 2022;
  return (
    <>
      <div className={styles.maincontainer}>
        {isCardVisible && <Info card={currentCard} onClose={handleCloseCard} />}
        {isHelpVisible && <Help onClose={handleCloseHelp} />}

        <div className={styles.titlecont}>
          <img
            className={styles.imgcont}
            src="/CoP_logo.png"
            alt="copilotologo"
          />
          Co-piloto
        </div>

        <div className={styles.pagecontainer}>
          <button className={styles.helpB} onClick={handleShowHelp}></button>
          <div className={styles.recommendations}>
            <div className={styles.titles}>Recommendations</div>
            <div className={styles.recomendationscont}>
              {recommendedcar.length > 0 ? (
                recommendedcar.map((item, index) => (
                  <Card
                    key={index}
                    name={item.Name}
                    // brand={item.Kilometer}
                    price={item.Price}
                    seats={item.Seats}
                    ccengine={item.Engine}
                    year={item.Year}
                    fueltype={item.Fuel}
                    // img={item.img}
                    handleShowCard={() => handleShowCard(item)}
                  />
                ))
              ) : (
                <div className={styles.userquestioncont}>
                  <h3>
                    Please fill the information below to show recommendations
                  </h3>
                  <UserQuestions />
                </div>
              )}
            </div>
          </div>
          <div className={styles.searchcont}>
            <div className={styles.titles}>Looking for a car?</div>
            {/* Feature for later... 
            <div className={styles.searchbarcont}>
              <input
                className={styles.searchbar}
                type="text"
                placeholder="Type here..."
              />
              <button type="submit" className={styles.searchfilter}>
                Filter
              </button>
            </div> */}
            <div className={styles.searchresults}>
              {carjson.map((item, index) => (
                <Card
                  key={index}
                  name={item.name}
                  brand={item.brand}
                  price={item.price}
                  seats={item.seats}
                  ccengine={item.ccengine}
                  year={item.year}
                  fueltype={item.fueltype}
                  img={item.img}
                  handleShowCard={() => handleShowCard(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
