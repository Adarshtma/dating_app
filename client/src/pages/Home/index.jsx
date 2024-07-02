
import styles from "./styles.module.css"

function Home(userDetails){
    const user=userDetails.user;
    const logout=()=>{
        window.open(
            `${process.env.REACT_APP_API_URL}/auth/logout`,"_self"

        );
    };

    return(
        <div className={styles.container}>
            <h1 className={styles.heading}>Home</h1>
            <div className={styles.form.container}>
                <div className={styles.left}>
                    <img className="" src="" alt="" />
                </div>
                <div className={styles.right}>
                    <h2 className={styles.from_heading}>profile</h2>
                    <input type="text" defaultValue={user.name} placeholder="Email" />
                    <input type="text" defaultValue={user.email} placeholder="password" />
                    <button className={styles.btn} onClick={logout}>Log out</button>
                    
                </div>
            </div>
        </div>
    ); 
}
export default Home;
