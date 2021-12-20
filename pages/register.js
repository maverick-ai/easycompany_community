import { useRef } from "react";
import axios from "axios";

export default function Register(){

    const RegisterUrl = "http://127.0.0.1:8000/api/registration/"

    const emailInputRef = useRef(null);
    const password1InputRef = useRef(null);
    const password2InputRef = useRef(null);
    const genderInputRef = useRef(null);
    const dateOfBirthInputRef = useRef(null);
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const workInputRef = useRef(null);
    const universityInputRef = useRef(null);

    async function performRegistration() {
        const details = JSON.stringify({
            email: emailInputRef.current.value,
            password1: password1InputRef.current.value,
            password2: password2InputRef.current.value,
            gender: genderInputRef.current.value,
            date_of_birth: dateOfBirthInputRef.current.value,
            first_name: firstNameInputRef.current.value,
            last_name: lastNameInputRef.current.value,
            work: workInputRef.current.value,
            university: universityInputRef.current.value
        });

        axios.post(LogInUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Host': '127.0.0.1:8000'
            },
            body: details
        })
        .then((response) => {
            // dispatch({type: FOUND_USER, data: response.data[0]})
            console.log(response.data);
        })
        .catch ((error) => {
            // dispatch({type: ERROR_FINDING_USER})
            console.log(error);
        });
    }
    return (
        <div className= "register-form">
            <h1>Register</h1>
            <label for="email" >Email</label>
            <input ref={emailInputRef} type="text" placeholder="Email" id="email"/>
            <label for="password1">Password</label>
            <input ref={password1InputRef} type="password" placeholder="Password" id="password1"/>
            <label for="password2" >Email</label>
            <input ref={password2InputRef} type="password" placeholder="Retype Password" id="password2"/>
            <label for="gender">Gender</label>
            <input ref={genderInputRef} type="text" placeholder="Gender" id="gender"/>
            <label for="date_of_birth">Date of Birth</label>
            <input ref={dateOfBirthInputRef} type="date" placeholder="Date of Birth" id="date_of_birth"/>
            <label for="first_name" >First Name</label>
            <input ref={firstNameInputRef} type="text" placeholder="First Name" id="first_name"/>
            <label for="last_name">Last Name</label>
            <input ref={lastNameInputRef} type="text" placeholder="Last name" id="last_name"/>
            <label for="work" >Work</label>
            <input ref={workInputRef} type="text" placeholder="Work" id="work"/>
            <label for="university">University</label>
            <input ref={universityInputRef} type="text" placeholder="University" id="university"/>
            <button onClick={performRegistration}>Register</button>

        </div>
    );
}