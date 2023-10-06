import { useRef, useState, useEffect } from "react";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MenuItem, TextField } from "@mui/material";
// import logo from './Image/signinlog.png';
import './SignIn.css'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX=/^\w+([-]?\w+)*@\w+([-]?\w+)*.(\w{2,3})+$/;
const SignIn_URL = '/SignIn';
const RoleSelect = [
    {
        value: 'Student',
        label: 'Student',
    },
    {
        value: 'Admin',
        label: 'Admin',
    }
];
const myStyle={
    backgroundImage:
"url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};

const SignIn= () => {
    const   userRef = useRef();
    const errRef = useRef();
    var valid = true;


    const [email, setEmail] = useState('');
    const [validemail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    
    const [role, setRole] = useState('');
    const [validRole, setValidRole] = useState(false);
    const [roleFocus, setRoleFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // const handleSubmit= async (e) => {
    //     e.preventDefault();
    
    //    const data =     {

    //     "email": email,

    //     "password": pwd,
        
    // }
    //     console.log(data);
   

    //   axios.post("http://localhost:8080/api/v1/signup/login", {
        
    //     body:JSON.stringify(data)
    //   })
    //   .then((response) => {
    //        console.log('success')
    //        alert('Successfully Login')
    //   })
    //   .catch((error) => {
    //       console.log("érror")
    //   })
    // }
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
       
    }, [pwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        console.log("ok");
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(email);
        
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/api/v1/signup/login",
                JSON.stringify({"email":email,"password": pwd  }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            
            setEmail('')
            setPwd('');
           
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    function submit() {
        // const v1 = USER_REGEX.test(email);
        
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
        console.log("ÖK");
        var data  = {"email":email,"password": pwd  }
        try {
             axios.post("http://localhost:8080/api/v1/signup/login",
                data
            ).then((results) => {
                if(results.data[1] != undefined){
                    if (role === "Student") {
                        window.location.href = "http://localhost:3000/PersonalDetails";
                    } else {
                        window.location.href = "http://localhost:3000/Chart";
                    }
                }
                else{
                    setErrMsg("Invalid Entry");
                    return;
                }
            })
            
            setEmail('')
            setPwd('');
           
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    function Adminsubmit() {
        console.log(
            "OKAY"
        );
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
                <div className="title">
                <section className="contain">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    {/* <img src={logo} className='logocls' alt="logo" /> */}
                    <h1  id="pd1">பாண்டித்யம்</h1>
                  
                    <form onSubmit={handleSubmit}>
           
                          <TextField id="signinemail" label="Email" variant="standard" 
                            ref={userRef}
                     
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            // type="email"
                            required
                            aria-invalid={validemail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        /> <br></br>
                        <p id="emailnote" className={emailFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                          {/* <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> */}
                        </p>



                        {/* <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label> */}
                          <TextField id="standard-basic" label="Password" variant="standard" 
                            ref={userRef}
                     
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            type="password"
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        {/* <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}> */}
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            {/* <br /> */}
                            {/* <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span> */}
                        {/* </p> */}
                        <TextField id="outlined-select-role" label="RoleSelection" variant="standard" 
                            select
                            ref={userRef}
                            autoComplete="off"
                            type="select"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            required
                            aria-invalid={validRole ? "false" : "true"}
                            aria-describedby="rolenote"
                            onFocus={() => setRoleFocus(true)}
                            onBlur={() => setRoleFocus(false)}
                            >
                            {RoleSelect.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <p id="rolenote" className={roleFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                          <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                    </form>
                    {/* <p>
                        Forgot password?<br />
                        <span className="line">
                       
                        { <button><Link to="/Register">Reset Password</Link></button> }
                        
                        </span>
                    </p> */}
                    
                    {/* <buttom onClick={handleSubmit}><Link to="/PersonalDetails">SignIn</Link></buttom> */}
                       
                      { role==="Student" ? ( <button  id ="s" onClick={()=>{submit()}} >
                        {/* <Link to="/PersonalDetails">SignIn</Link> */} Student SignIn
                        </button> ):(<button id="s" onClick={()=>{ submit()}}>
                        {/* <Link to="/Chart">SignIn</Link> */} Admin SignIn
                        </button>)}
                       
                    <br></br>
                    <p id="d">
                        Don't have an account?<Link to="/Register">SignUp</Link>
                       
                      
                    </p>
                    
                </section>
                </div>
            )}
        </>
    )


}
export default SignIn;


