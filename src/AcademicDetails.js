import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { MenuItem, TextField } from "@mui/material";

import { Link } from 'react-router-dom';
import './AcademicDetails.css'


const AcademicDetails_URL = '/academicdetail';

const AcademicDetails= () => {
    const userRef = useRef();
    const errRef = useRef();
    var valid = true;

    const [tenregnum, setTenregnum] = useState('');
    const [validTenregnum, setValidTenregnum] = useState(false);
    const [tenregnumFocus, setTenregnumFocus] = useState(false);

    const [tenschool, setTenschool] = useState('');
    const [validTenschool, setValidTenschool] = useState(false);
    const [tenschoolFocus, setTenschoolFocus] = useState(false);

    const [tenmark, setTenmark] = useState('');
    const [validTenmark, setValidTenmark] = useState(false);
    const [tenmarkFocus, setTenmarkFocus] = useState(false);

    const [tencurriculam, setTencurriculam] = useState('');
    const [validTencurriculam, setValidTencurriculam] = useState(false);
    const [tencurriculamFocus, setTencurriculamFocus] = useState(false);

    const [tenaddress, setTenaddress] = useState('');
    const [validTenaddress, setValidTenaddress] = useState(false);
    const [tenaddressFocus, setTenaddressFocus] = useState(false);

    const [elevenregnum, setElevenregnum] = useState('');
    const [validElevenregnum, setValidElevenregnum] = useState(false);
    const [elevenregnumFocus, setElevenregnumFocus] = useState(false);

    const [elevenschool, setElevenschool] = useState('');
    const [validElevenschool, setValidElevenschool] = useState(false);
    const [elevenschoolFocus, setElevenschoolFocus] = useState(false);

    const [elevenmark, setElevenmark] = useState('');
    const [validElevenmark, setValidElevenmark] = useState(false);
    const [elevenmarkFocus, setElevenmarkFocus] = useState(false);

    
    const [elevencurriculam, setElevencurriculam] = useState('');
    const [validElevencurriculam, setValidElevencurriculam] = useState(false);
    const [elevencurriculamFocus, setElevencurriculamFocus] = useState(false);

    const [elevengroup, setElevenGroup] = useState('');
    const [validElevengroup, setValidElevengroup] = useState(false);
    const [elevengroupFocus, setElevengroupFocus] = useState(false);

    const [elevenaddress, setElevenaddress] = useState('');
    const [validElevenaddress, setValidElevenaddress] = useState(false);
    const [elevenaddressFocus, setElevenaddressFocus] = useState(false);

    const [twelthregnum, setTwelthregnum] = useState('');
    const [validTwelthregnum, setValidTwelthregnum] = useState(false);
    const [twelthregnumFocus, setTwelthregnumFocus] = useState(false);

    const [twelthschool, setTwelthschool] = useState('');
    const [validTwelthschool, setValidTwelthschool] = useState(false);
    const [twelthschoolFocus, setTwelthschoolFocus] = useState(false);

    const [twelthmark, setTwelthmark] = useState('');
    const [validTwelthmark, setValidTwelthmark] = useState(false);
    const [twelthmarkFocus, setTwelthmarkFocus] = useState(false);

    const [twelthcurriculam, setTwelthcurriculam] = useState('');
    const [validTwelthcurriculam, setValidTwelthcurriculam] = useState(false);
    const [twelthcurriculamFocus, setTwelthcurriculamFocus] = useState(false);

    const [twelthgroup, setTwelthGroup] = useState('');
    const [validTwelthgroup, setValidTwelthgroup] = useState(false);
    const [twelthgroupFocus, setTwelthgroupFocus] = useState(false);

    const [twelthaddress, setTwelthaddress] = useState('');
    const [validTwelthaddress, setValidTwelthaddress] = useState(false);
    const [twelthaddressFocus, setTwelthaddressFocus] = useState(false);


    // const [validcurriculam, setValidCurriculam] = useState(false);
    // const [curriculamFocus, setCurriculamFocus] = useState(false);

    // const [eleven, setEleven] = useState('');
    // const [validEleven, setValidEleven] = useState(false);
    // const [elevenFocus, setElevenFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit= async (e) => {
        e.preventDefault();
    
       const data =     {

      
        "tenth_mark": tenmark,
        // "register_number_10th": 3108191,
        "register_number_12th":twelthschool,

        "group_name": twelthgroup,
       
        "twelth_mark": twelthmark,
        "eleventh_mark": elevenmark,
        "eleventh_Mark_Sheet": elevencurriculam,
        "year_Of_Passing_12th": elevenaddress,
        "year_Of_passing_10th": tenaddress,
        "year_Of_Passing_11th": elevengroup,
        "school_name_12th":twelthregnum,
        "tenth_Mark_Sheet":tencurriculam,
        "twelth_Mark_Sheet":twelthaddress
        
    }
        console.log(data);
   

      axios.post("http://localhost:8080/api/v1/signup/login", {
        
        body:JSON.stringify(data)
      })
      .then((response) => {
           console.log('success')
           alert('Successfully Login')
      })
      .catch((error) => {
          console.log("érror")
      })
    }

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [tenregnum])


    // useEffect(() => {
    //     setValidTenregnum(TENREGNUM_REGEX.test(tenregnum));
    // }, [tenregnum])

   
    // useEffect(() => {
    //     setValidEmail(TENREGNUM_REGEX.test(tenregnum));
    // }, [tenregnum])

    useEffect(() => {
        setErrMsg('');
    }, [])

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
        // if button enabled with JS hack
        // const v1 = USER_REGEX.test(user);
        
        // const v2 = PWD_REGEX.test(pwd);
        // if (!v1 || !v2) {
        //     setErrMsg("Invalid Entry");
        //     return;
        // }
    //     try {
    //         const response = await axios.post(AcademicDetails_URL,
    //             JSON.stringify({ tenregnum }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             }
    //         );
    //         console.log(response?.data);
    //         console.log(response?.accessToken);
    //         console.log(JSON.stringify(response))
    //         // setSuccess(true);
         
    //         // setUser('');
    //         // setPwd('');
    //         // setMatchPwd('');
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 409) {
    //             setErrMsg('Username Taken');
    //         } else {
    //             setErrMsg('Registration Failed')
    //         }
    //         errRef.current.focus();
    //     }
    // }

   
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
                    <h1 id="pd">AcademicDetails</h1>
                    <form onSubmit={handleSubmit}>
                    <div class="grid-container3">
                     
                        <TextField id="standard-basic" label="10th Mark" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTenmark(e.target.value)}
                            value={tenmark}
                            required
                            aria-invalid={validTenmark ? "false" : "true"}
                            aria-describedby="tenmarknote"
                            onFocus={() => setTenmarkFocus(true)}
                            onBlur={() => setTenmarkFocus(false)}
                        />
                        <p id="tenmarknote" className={tenmarkFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        {/* <label htmlFor="tencurriculam">
                            10th Curriculam:
                            <FontAwesomeIcon icon={faCheck} className={validTencurriculam ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTencurriculam || !tenregnum ? "hide" : "invalid"} />
                        </label> */}
                      <TextField id="marksheet3" label="10th mark sheet" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="file"
                            onChange={(e) => setTencurriculam(e.target.value)}
                            value={tencurriculam}
                            required
                            aria-invalid={validTencurriculam ? "false" : "true"}
                            aria-describedby="tenregnumnote"
                            onFocus={() => setTencurriculamFocus(true)}
                            onBlur={() => setTencurriculamFocus(false)}
                        />
                        <p id="tencurriculamnote" className={tencurriculamFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
{/* 
                        <label htmlFor="tenaddress">
                            TENth School Address:
                            <FontAwesomeIcon icon={faCheck} className={validTenaddress ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTenaddress|| !tenaddress ? "hide" : "invalid"} />
                        </label> */}
                          <TextField id="standard-basic" label="Year of Passing 10th" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTenaddress(e.target.value)}
                            value={tenaddress}
                            required
                            aria-invalid={validTenaddress ? "false" : "true"}
                            aria-describedby="tenaddressnote"
                            onFocus={() => setTenaddressFocus(true)}
                            onBlur={() => setTenaddressFocus(false)}
                        />
                        <p id="tenaddressnote" className={tenaddressFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        {/* <label htmlFor="elevenregnum">
                            11th Register Number:
                            <FontAwesomeIcon icon={faCheck} className={validTenregnum ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTenregnum || !tenregnum ? "hide" : "invalid"} />
                        </label> */}
                        {/* <TextField id="standard-basic" label="11th Register Number" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setElevenregnum(e.target.value)}
                            value={elevenregnum}
                            required
                            aria-invalid={validElevenregnum ? "false" : "true"}
                            aria-describedby="elevenregnumnote"
                            onFocus={() => setElevenregnumFocus(true)}
                            onBlur={() => setElevenregnumFocus(false)}
                        />
                        <p id="elevenregnumnote" className={elevenregnumFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}

                        {/* <label htmlFor="elevenschool">
                            11th School Name:
                            <FontAwesomeIcon icon={faCheck} className={validElevenschool? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTenregnum || !tenregnum ? "hide" : "invalid"} />
                        </label> */}
                      {/* <TextField id="standard-basic" label="11th School Name" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setElevenschool(e.target.value)}
                            value={elevenschool}
                            required
                            aria-invalid={validElevenschool ? "false" : "true"}
                            aria-describedby="elevenschoolnote"
                            onFocus={() => setElevenschoolFocus(true)}
                            onBlur={() => setElevenschoolFocus(false)}
                        />
                        <p id="tenregnumnote" className={elevenschoolFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}
                        {/* <label htmlFor="elevenmark">
                            11th Mark:
                            <FontAwesomeIcon icon={faCheck} className={validElevenmark ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validElevenmark || !elevenmark ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="11th Mark" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setElevenmark(e.target.value)}
                            value={elevenmark}
                            required
                            aria-invalid={validElevenmark ? "false" : "true"}
                            aria-describedby="elevenmarknote"
                            onFocus={() => setElevenmarkFocus(true)}
                            onBlur={() => setElevenmarkFocus(false)}
                        />
                        <p id="elevenmarknote" className={elevenmarkFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                           <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

{/*                         
                        <label htmlFor="elevencurriculam">
                            11th Curriculam:
                            <FontAwesomeIcon icon={faCheck} className={validElevencurriculam ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validElevencurriculam || !elevencurriculam ? "hide" : "invalid"} />
                        </label> */}
                         {/* <TextField id="marksheet4" label="11th Mark Sheet" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="file"
                            onChange={(e) => setElevencurriculam(e.target.value)}
                            value={elevencurriculam}
                            required
                            aria-invalid={validElevencurriculam ? "false" : "true"}
                            aria-describedby="elevencurriculamnote"
                            onFocus={() => setElevencurriculamFocus(true)}
                            onBlur={() => setElevencurriculamFocus(false)}
                        />
                        <p id="elevencurriculamnote" className={elevencurriculamFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}
{/* 
                        <label htmlFor="elevengroup">
                            11th Group:
                            <FontAwesomeIcon icon={faCheck} className={validTwelthgroup ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTwelthgroup|| !twelthgroup ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="Year of passing 11th" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setElevenGroup(e.target.value)}
                            value={elevengroup}
                            required
                            aria-invalid={validElevengroup ? "false" : "true"}
                            aria-describedby="elevengroupnote"
                            onFocus={() => setElevengroupFocus(true)}
                            onBlur={() => setElevengroupFocus(false)}
                        />
                        <p id="elevenaddressnote" className={elevengroupFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        {/* <label htmlFor="elevenaddress">
                            11th School Address:
                            <FontAwesomeIcon icon={faCheck} className={validElevenaddress ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validElevenaddress|| !elevenaddress ? "hide" : "invalid"} />
                        </label> */}
                        {/* <TextField id="standard-basic" label="11th School Address" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setElevenaddress(e.target.value)}
                            value={elevenaddress}
                            required
                            aria-invalid={validElevenaddress ? "false" : "true"}
                            aria-describedby="elevenaddressnote"
                            onFocus={() => setElevenaddressFocus(true)}
                            onBlur={() => setElevenaddressFocus(false)}
                        />
                        <p id="elevenaddressnote" className={elevenaddressFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p> */}

                        {/* <label htmlFor="twelthregnum">
                            12th Register Number:
                            <FontAwesomeIcon icon={faCheck} className={validTenregnum ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTenregnum || !tenregnum ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="12th Register Number" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTwelthregnum(e.target.value)}
                            value={twelthregnum}
                            required
                            aria-invalid={validTwelthregnum ? "false" : "true"}
                            aria-describedby="twelthregnumnote"
                            onFocus={() => setTwelthregnumFocus(true)}
                            onBlur={() => setTwelthregnumFocus(false)}
                        />
                        <p id="twelthregnumnote" className={twelthregnumFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        {/* <label htmlFor="twelthschool">
                            12th School Name:
                            <FontAwesomeIcon icon={faCheck} className={validTwelthschool ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTwelthschool || !twelthschool ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="standard-basic" label="12th School Name" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTwelthschool(e.target.value)}
                            value={twelthschool}
                            required
                            aria-invalid={validTwelthschool ? "false" : "true"}
                            aria-describedby="twelthschoolnote"
                            onFocus={() => setTwelthschoolFocus(true)}
                            onBlur={() => setTwelthschoolFocus(false)}
                        />
                        <p id="twelthschoolnote" className={twelthschoolFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        {/* <label htmlFor="twelthmark">
                            12th Mark:
                            <FontAwesomeIcon icon={faCheck} className={validTwelthmark ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTwelthmark|| !twelthregnum ? "hide" : "invalid"} />
                        </label> */}
                         <TextField id="marksheet2" label="12th Mark" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTwelthmark(e.target.value)}
                            value={twelthmark}
                            required
                            aria-invalid={validTwelthmark ? "false" : "true"}
                            aria-describedby="twelthmarknote"
                            onFocus={() => setTwelthmarkFocus(true)}
                            onBlur={() => setTwelthmarkFocus(false)}
                        />
                        <p id="tenmarknote" className={twelthmarkFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        {/* <label htmlFor="twelthcurriculam">
                            12th Curriculam:
                            <FontAwesomeIcon icon={faCheck} className={validTwelthcurriculam ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTwelthcurriculam || !twelthcurriculam ? "hide" : "invalid"} />
                        </label> */}
                        <TextField id="standard-basic" label="12th Curriculam" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTwelthcurriculam(e.target.value)}
                            value={twelthcurriculam}
                            required
                            aria-invalid={validTwelthcurriculam ? "false" : "true"}
                            aria-describedby="twelthregnumnote"
                            onFocus={() => setTwelthcurriculamFocus(true)}
                            onBlur={() => setTwelthcurriculamFocus(false)}
                        />
                        <p id="twelthcurriculamnote" className={twelthcurriculamFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        {/* <label htmlFor="twelthgroup">
                            12th Group:
                            <FontAwesomeIcon icon={faCheck} className={validTwelthgroup ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validTwelthgroup|| !twelthgroup ? "hide" : "invalid"} />
                        </label> */}
                      <TextField id="standard-basic" label="12th Group" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setTwelthGroup(e.target.value)}
                            value={twelthgroup}
                            required
                            aria-invalid={validTwelthgroup ? "false" : "true"}
                            aria-describedby="twelthgroupnote"
                            onFocus={() => setTwelthgroupFocus(true)}
                            onBlur={() => setTwelthgroupFocus(false)}
                        />
                        <p id="twelthaddressnote" className={twelthgroupFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                         <TextField id="marksheet1" label="12th Mark Sheet" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="file"
                            onChange={(e) => setTwelthaddress(e.target.value)}
                            value={twelthaddress}
                            required
                            aria-invalid={validTwelthaddress ? "false" : "true"}
                            aria-describedby="twelthaddressnote"
                            onFocus={() => setTwelthaddressFocus(true)}
                            onBlur={() => setTwelthaddressFocus(false)}
                        />
                        <p id="twelthaddressnote" className={twelthaddressFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <TextField id="standard-basic" label="Year of passing 12th" variant="standard" 
                            ref={userRef}
                            autoComplete="off"
                            type="text"
                            onChange={(e) => setElevenaddress(e.target.value)}
                            value={elevenaddress}
                            required
                            aria-invalid={validElevenaddress ? "false" : "true"}
                            aria-describedby="elevenaddressnote"
                            onFocus={() => setElevenaddressFocus(true)}
                            onBlur={() => setElevenaddressFocus(false)}
                        />
                        <p id="elevenaddressnote" className={elevenaddressFocus && !valid ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                      </div>



                        {/* <button>Next</button> */}
                        { <button id="bu">SUBMIT</button> }
                    </form>
                   
                    <p>
                        <br />
                        <span className="line">
                        {/* { <button><Link to="/SignIn">SignIn</Link></button> } */}
                        </span>
                    </p>
                </section>
            )}
            
        </>
    )
}

export default AcademicDetails;