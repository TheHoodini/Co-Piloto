//importing styles
import styles from "./Home.module.css";

import Card from "../../components/Card";

//Fake json file to simulate the database
import carjson from "../../assets/carjson.json";
import UserQuestions from "../../components/Userquestions/Userquestions";

const Home = () => {
  return (
    <>
      <div className={styles.maincontainer}>
        {/* Delete this line later */}
        <span style={{ color: "grey" }}>
          For testing sakes we are using a json file to simulate the database
        </span>
        <UserQuestions />
        <div className={styles.titlecont}>
          <img
            className={styles.imgcont}
            src="/CoP_logo.png"
            alt="copilotologo"
          />
          Co-piloto
        </div>
        <div className={styles.pagecontainer}>
          <div className={styles.recommendations}>
            {/* Create an animated carousel showing the recommendations (5seg each card) */}
            <div className={styles.titles}>Recommendations</div>
            <div className={styles.recomendationscont}>
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
                />
              ))}
            </div>
          </div>
          <div className={styles.searchcont}>
            <div className={styles.titles}>Looking for a car?</div>
            <div className={styles.searchbarcont}>
              <input
                className={styles.searchbar}
                type="text"
                placeholder="Type here..."
              />
              <button type="submit" className={styles.searchfilter}>
                Filter
              </button>
            </div>
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
