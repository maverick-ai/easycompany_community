import styles from '../styles/loginHeader.module.scss';

function LoginHeader(){
    return(
        <div style={{marginTop: '60%'}}>
            <div className={styles.headerDiv}>
                <img src="phone_assets/man.png" className={styles.man}></img>
                <hr className={styles.headerLine} />
                <h1 className={styles.heading}>Log In</h1>
            </div>
        </div>
    )
};

export default LoginHeader;