import { sendReq } from "../components/requests";
import {PasswordResetGet} from "../components/constants"
import { useRouter } from "next/router";

const test = () => {
    const router = useRouter()
    const regex = new RegExp(
        '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
          '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
          "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
      );
    const forgot =async event=> {
        event.preventDefault()
        if (!regex.test(event.target.email.value)){
            alert("Enter a valid email id");
        }
        else {
            const credentials=JSON.stringify({
                email: event.target.email.value
            });
            const response = await sendReq(PasswordResetGet, null, "POST", credentials);
            console.log(response.detail)
            if (response.detail == "Password reset e-mail has been sent."){
                router.push("/login");
            }
            else {
                router.push("/error");
            }
        }
    }
    
    return(
        <div>
            <h1>Hello</h1>
            <div className="Forgot-Password">
                <h2>Forgot Password</h2>
                <form onSubmit={forgot}>
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        
        </div>
    )

}


export default test;