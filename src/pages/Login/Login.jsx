//import styles
import styles from "./Login.module.css";

//import react libraries
// import { useState } from "react";

const Login = () => {
  // const [lechugas, setlechugas] = useState(0);

  // function aumentarlechugas() {
  //   setlechugas(lechugas + 1);
  // }

  return (
    <>
      <div className={styles.maincont}>
        <div className={styles.middle}>
          <div className={styles.left}>
            <form className={styles.form} action="">
              <label className={styles.label}>LOGIN</label>
              <input
                className={styles.inputs}
                id="GET-name"
                type="text"
                name="name"
                placeholder="Username"
              />
              <input
                className={styles.inputs}
                id="GET-password"
                type="text"
                name="name"
                placeholder="Password"
              />
              <input className={styles.submit} type="submit" value="Sign in" />
            </form>
            <div className={styles.formbottom}>
              Don&apos;t have an account? <a href="" className={styles.sign}>Sign in!</a>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Welcome to Co-piloto</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
