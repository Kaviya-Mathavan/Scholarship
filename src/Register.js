import { useRef, useState, useEffect } from "react";
import {  faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import "./Register.css"
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";


const USER_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^\w+([-]?\w+)*@\w+([-]?\w+)*.(\w{2,3})+$/;
const REGISTER_URL = '';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    var valid = true;

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validemail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleClick=(e)=>{
        e.preventDefault()
        const Register={user,email,pwd,matchPwd}
        console.log(Register)
        fetch("http://localhost:8080/api/v1/user/add",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(Register)
    
      }).then(()=>{
        console.log("New Student added")
      })
    }

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = {user,email,fname,fid, pwd, matchPwd}
       const data =     {
        "name": user,

        "email": email,

        "password": pwd,

        "confirm_Password": matchPwd
    }
        console.log(data);
   

      axios.post("http://localhost:8080/api/v1/signup/addsignup", data)
      .then((response) => {
           console.log('success')
      })
      .catch((error) => {
          console.log("érror")
      })
    }

   
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                    
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 id="r">Register</h1>
                    <form >
                        {/* <label htmlFor="username">
                            Name:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label> */}
                        <div class="grid-container1">
                      <TextField id="signinemail1" label="Name" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            // type="name"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        {/* <label htmlFor="Email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validemail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validemail || !pwd ? "hide" : "invalid"} />
                        </label> */}
                        <TextField id="signinemail2" label="Email" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            // type="email"
                         
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validemail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        <p id="emailnote" className={emailFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>



                        {/* <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label> */}
                       <TextField id="standard-basic" label="Password" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                           
                            type="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>


                        {/* <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label> */}
                       <TextField id="standard-basic" label="Confirm Password" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="password"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>
                        
                        </div>
                        {/* disabled={!validName || !validPwd || !validMatch ? true : false} */}

                        <button disabled={!validName|| !validemail || !validPwd || !validMatch ? true : false}  id="bu" onClick={handleSubmit}>SignUp</button>
                        {/* <button id="bu" onClick={handleSubmit}>SignUp</button> */}
                        {/* <Link className="signIn" to="/SignIn"></Link> */}
                    </form>
                   
                    <p id="ar">
                        Already registered?<Link className="signIn" to="/SignIn">SignIn</Link>  
                    </p>
                </section>
            )}
        </>
    )
}

export default Register;
