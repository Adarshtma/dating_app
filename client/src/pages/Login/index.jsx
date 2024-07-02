

import { Link } from "react-router-dom";
import styles from "./styles.module.css"

function Login(){
    const googleAuth=()=>{
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,"_self"

        );
    };

    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>Login Form</h1>
            <div className={styles.form_container}>
                <div className={styles.left}>
                    <img className="" src="" alt="" />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>Members Login</h2>
                    <input type="text" className={styles.input} placeholder="Email" />
                    <input type="text" className={styles.input} placeholder="password" />
                    <button className={styles.btn}>Login</button>
                    <p className={styles.text}>or</p>
                    <button className={styles.google_btn}onClick={googleAuth}>
                        <img src="" alt="google icon" />
                        <span>sign with google</span>
                    </button>
                    <p className={styles.text}>
                        New Here?<Link to="/signup">Sign Up</Link>

                    </p>
                </div>
            </div>
        </div>
    ); 
}

export default Login;








