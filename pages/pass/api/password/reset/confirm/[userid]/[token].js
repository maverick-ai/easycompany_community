import {useEffect} from 'react'
import {LogInURL,PasswordResetPost} from "../../../../../../../components/constants";
import { sendReq } from '../../../../../../../components/requests';
import router, { useRouter } from 'next/router';


const Passchange = ({userid, token}) => {
    const router = useRouter();
    const regex = new RegExp(
        "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      );

    const changePassword = async event => {
        event.preventDefault()
        if (!regex.test(event.target.pass1.value)) {
            alert("Password must contain at least 8 characters, one character and one number");
          
        }
        else if (event.target.pass1.value!=event.target.pass2.value){
            alert("Passwords do not match");
        }
        else{
            const credentials=JSON.stringify({
                new_password1: event.target.pass1.value,
                new_password2: event.target.pass2.value,
                uid: userid,
                token: token
            });
            console.log(credentials);
        
            const response = await sendReq(`${PasswordResetPost}${userid}/${token}/`, null, "POST", credentials);
            console.log(response.detail)
            if (response.detail=="Password has been reset with the new password."){
                router.push("/login");
            }
            else {
                router.push("/error");
            }
        }
    }

    return(
        <div>
            <h1>Forgot Password Form</h1>
            <h1>Enter new password</h1>
            <form onSubmit={changePassword}>
                <label htmlFor="email">New Password</label>
                <input id="pass1" name="pass1" type="password" autoComplete="pass-1" required />
                <label htmlFor="pass">Re-enter Password</label>
                <input id="pass2" name="pass2" type="password" autoComplete="pass-2" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default Passchange;

export async function getServerSideProps({query}) {
    return {
        props: {
            userid: query.userid,
            token: query.token
        }
    }
}