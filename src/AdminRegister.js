import { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';

import { TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import './AdminRegister.css'
// const express = require ('express')
  
const USER_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^\w+([-]?\w+)*@\w+([-]?\w+)*.(\w{2,3})+$/;
// const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();
    var valid = true;

    const [address, setAddress] = useState('');
    const [validAddress, setValidAddress] = useState(false);
    const [addressFocus, setAddressFocus] = useState(false);


    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    
    // const [aid, setAid] = useState('');
    // const [validAid, setValidAid] = useState(false);
    // const [aidFocus, setAidFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validemail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [fname, setFname] = useState('');
    const [validFname, setValidFname] = useState(false);
    const [fnameFocus, setFnameFocus] = useState(false);

    const [fid, setFid] = useState('');
    const [validFid, setValidFid] = useState(false);
    const [fidFocus, setFidFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    
    const [cn, setCn] = useState('');
    const [validCn, setValidCn] = useState(false);
    const [cnFocus, setCnFocus] = useState(false);
    // const [address, setAddress] = useState('');
    // const [validAddress, setValidAddress] = useState(false);
    // const [addressFocus, setAddressFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

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
        setValidFname(EMAIL_REGEX.test(fname));
    }, [email])
    useEffect(() => {
        setValidFid(EMAIL_REGEX.test(fid));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user,email,fname,fid, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = {user,email,fname,fid, pwd, matchPwd}
       const data =     {
        "address": "sjxbwsxjyxwhxf",
        "admin_Id": 19,
        "email": "chag2wsw2@gmail.com",
        "admin_name": null,
        "foundation_id": 1,
        "contact_Number": 0
    }
        console.log(data);
   

      axios.post("http://localhost:8080/api/v1/admins/addAdmin", data)
      .then((response) => {
           console.log('success')
      })
      .catch((error) => {
          console.log("érror")
      })
    }
        // if button enabled with JS hack
        // const v1 = USER_REGEX.test(user);
        
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        // try {
        //     const response = await axios.post(REGISTER_URL,
        //         JSON.stringify({ user,email, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(response?.data);
        //     console.log(response?.accessToken);
        //     console.log(JSON.stringify(response))
        //     setSuccess(true);
        //     //clear state and controlled inputs
        //     //need value attrib on inputs for this
        //     setUser('');
        //     setPwd('');
        //     setMatchPwd('');
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 409) {
        //         setErrMsg('Username Taken');
        //     } else {
        //         setErrMsg('Registration Failed')
        //     }
        //     errRef.current.focus();
        // }
    
        // {(mark>90) ? <> </> : <></>}

   
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
                    <h1 id="h">Register</h1>
                    <form >
                        {/* <label htmlFor="username">
                            Name:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label> */}
                        <div class="grid-container2">

                        <TextField id="standard-basic" label="Address" variant="standard"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            required
                            aria-invalid={validAddress ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setAddressFocus(true)}
                            onBlur={() => setAddressFocus(false)}
                        />
                        <p id="uidnote" className={addressFocus && address && !validAddress ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                         <TextField id="standard-basic" label="Name" variant="standard"
                            ref={userRef}
                            autoComplete="off"
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

{/* 
                        <TextField id="standard-basic" label="Name" variant="standard"
                            ref={userRef}
                            autoComplete="off"
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
                        </p> */}
                        {/* <label htmlFor="Email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validemail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validemail || !pwd ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="Email" variant="standard"
                            ref={userRef}
                            autoComplete="off"
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
                        {/* <label htmlFor="Foundation Name">
                            Foundation Name:
                            <FontAwesomeIcon icon={faCheck} className={validFname ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validFname || !fname ? "hide" : "invalid"} />
                        </label> */}
                        <TextField id="standard-basic" label="Foundation Name" variant="standard"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFname(e.target.value)}
                            value={fname}
                            required
                            aria-invalid={validFname ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setFnameFocus(true)}
                            onBlur={() => setFnameFocus(false)}
                        />
                        <p id="uidnote" className={fnameFocus && fname && !validFname ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        {/* <label htmlFor="FoundationId">
                            Foundation Id:
                            <FontAwesomeIcon icon={faCheck} className={validFid ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validFid || !fid ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="Foundation Id" variant="standard"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setFid(e.target.value)}
                            value={fid}
                            required
                            aria-invalid={validFid ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setFidFocus(true)}
                            onBlur={() => setFidFocus(false)}
                        />
                        <p id="uidnote" className={fidFocus && user && !validFid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>


{/* 
                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="Password" variant="standard"
                            ref={userRef}
                            autoComplete="off"
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

                        <TextField id="standard-basic" label="Contact Number" variant="standard"
                            ref={userRef}
                            autoComplete="off"
                            type="password"
                            onChange={(e) => setCn(e.target.value)}
                            value={cn}
                            required
                            aria-invalid={validCn ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setCnFocus(true)}
                            onBlur={() => setCnFocus(false)}
                        />
                        <p id="confirmnote" className={cnFocus && !validCn ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        </div>

                        {/* <button disabled={!validName || !validPwd || !validMatch ? true : false}>SignUp</button> */}
                      
                    </form>
                    <p id="ad">
                        Already registered?<br />
                        <span className="line">
                        { <button id="r1"onClick={handleSubmit} ><Link to="/SignIn">SignIn</Link></button> }
                        </span>
                    </p>
                     <p id="ar1">
                        Already registered?<Link className="signIn" to="/SignIn">SignIn</Link>
                       
                       
                    </p>
                </section>
                
            )}
        </>
    )
}

export default Register;