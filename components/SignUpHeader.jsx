import styles from '../styles/SignUpHeader.module.scss';

function SignUpHeader(){
    return(
        <div style={{marginTop: '40%'}}>
            <div className={styles.headerDiv}>
                <img src="phone_assets/man2.png" className={styles.man}></img>
                <hr className={styles.headerLine} />
                <h1 className={styles.heading}>Sign Up</h1>
            </div>
        </div>
    )
};

export default SignUpHeader;