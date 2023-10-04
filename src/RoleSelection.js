
import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import  "./RoleSelection.css";
import { Link } from 'react-router-dom';



const RoleSelection_URL = '/RoleSelection';

const RoleSelection = () => {
    const userRef = useRef();
    const errRef = useRef();
    var valid = true;

    const [wur, setWur] = useState('');
    const [validWur, setValidName] = useState(false);
    const [wurFocus, setWurFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack


        try {
            const response = await axios.post(RoleSelection_URL,
                JSON.stringify({ wur }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);

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


    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>

                    </p>
                </section>
            ) : (
                <section >
                    <div id="b1">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} >{errMsg}</p>
                    <h1 class="rs">RoleSelection</h1>
                    <form onSubmit={handleSubmit}>
                        <div id="rs1">
                            {/* <label htmlFor="wur">
                                Who Are You?
                                <FontAwesomeIcon icon={faCheck} className={validWur ? "valid" : "hide"} />
                                <FontAwesomeIcon icon={faTimes} className={validWur || !wur ? "hide" : "invalid"} />
                            </label> */}
                            Who Are You?

                        </div>
                        {/* <input
                            type="text"
                            id="wur"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setWur(e.target.value)}
                            value={wur}
                            required
                            aria-invalid={validWur ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setWurFocus(true)}
                            onBlur={() => setWurFocus(false)}
                        /> */}
                        <p id="uidnote" className={wurFocus && wur && !validWur ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                        {/*<button>STUDENT</button>
                        <button>ADMIN</button> */}
                    </form>

                    
                        <br />
                        
                            <div>
                            <button id="bu3"><Link to="/Register">STUDENT</Link></button>
                            <br />
                            <button id="bu4"><Link to="/AdminRegister">ADMIN</Link></button>
                            </div>

                        
                    
                    </div>
                   
                    
                </section>
            )}
        </>
    )
}

export default RoleSelection;
