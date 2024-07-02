import { Link } from "react-router-dom";
import styles from "./styles.module.css"

function Signup(){
    const googleAuth=()=>{
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/google/callback`,"_self"

        );
    };

    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>signup Form</h1>
            <div className={styles.form.container}>
                <div className={styles.left}>
                    <img className="" src="" alt="" />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>Create Account</h2>
                    <input type="text" className={styles.input} placeholder="Username" />
                    <input type="text" className={styles.input} placeholder="Email" />
                    <input
                     type="password" 
                     className="{style.input}
                     placeholder=password"
                     />
                    <button className={styles.btn}>Sign up</button>
                    <p className={styles.text}>or</p>
                    <button className={styles.google_btn}onClick={googleAuth}>
                        <img src="" alt="google icon" />
                        <span>sign up with google</span>
                    </button>
                    <p className={styles.text}>
                        Already Have Account ?<Link to="/login">login</Link>

                    </p>
                </div>
            </div>
        </div>
    ); 
}

export default Signup;