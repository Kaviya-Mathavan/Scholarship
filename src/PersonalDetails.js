import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@mui/material/Button';
import axios from 'axios';
import './Personaldetails.css'
import { MenuItem, TextField } from "@mui/material";
// import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';

const USER_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const EMAIL_REGEX = /^\w+([-]?\w+)*@\w+([-]?\w+)*.(\w{2,3})+$/;
const DOB_REGEX = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d+$/;
const AGE_REGEX = /^(?:0 [1-9]| d|3) ([/.-]) (?:0 [1-9]|1 [0-2])1 (?:19|20)dd$/;

const PHONENUM_REGEX = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
const FATHERNAME_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;

const MOTHERNAME_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;

const AADHARNUM_REGEX = /^ [2-9] {1} [0-9] {3} [0-9] {4} [0-9] {4}$/;
const OWNHOUSE_REGEX = /^[^\s][a-zA-Z0-9\s]+$/;
const PERSONALDETAILS_URL = '/personaldetails';

const GenderSelect = [
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    }
];
const OwnRent = [
    {
        value: 'Yes',
        label: 'Yes',
    },
    {
        value: 'No',
        label: 'No',
    }
];

const CourseType = [
    {
        value: 'Engineering',
        label: 'Engineering',
    },
    {
        value: 'Arts',
        label: 'Arts',
    }
];

const SchoolType = [
    {
        value: 'Government',
        label: 'Government',
    },
    {
        value: 'Private',
        label: 'Private',
    }
];

const ParentType = [
    {
        value: 'Single Parent',
        label: 'Single Parent',
    },
    {
        value: 'Orphan Child',
        label: 'Orphan Child',
    },
    {
        value: 'Parents',
        label: 'Parents',
    }
];
// const PersonalDetails = () => {
function PersonalDetails(){
    const userRef = useRef();
    const errRef = useRef();
    var valid = true;

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validemail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [dob, setDob] = useState('');
    const [validDob, setValidDob] = useState(false);
    const [dobFocus, setDobFocus] = useState(false);

    const [age, setAge] = useState('');
    const [validAge, setValidAge] = useState(false);
    const [ageFocus, setAgeFocus] = useState(false);

    const [gender, setGender] = useState('');
    const [validGender] = useState(false);
    const [genderFocus, setGenderFocus] = useState(false);

    const [phonenum, setPhonenum] = useState('');
    const [validPhonenum, setValidPhonenum] = useState(false);
    const [phonenumFocus, setPhonenumFocus] = useState(false);

    const [fathername, setFathername] = useState('');
    const [validFathername, setValidFathername] = useState(false);
    const [fathernameFocus, setFathernameFocus] = useState(false);

    const [fatheroccupation, setFatheroccupation] = useState('');
    const [validFatheroccupation] = useState(false);
    const [fatheroccupationFocus, setFatheroccupationFocus] = useState(false);

    const [fatheroccupationpp, setFatheroccupationpp] = useState('');
    const [validFatheroccupationpp] = useState(false);
    const [fatheroccupationppFocus, setFatheroccupationppFocus] = useState(false);


    const [fathersalary, setFathersalary] = useState('');
    const [validFathersalary] = useState(false);
    const [fathersalaryFocus, setFathersalaryFocus] = useState(false);

    const [fatherincome, setFatherincome] = useState('');
    const [validFatherincome] = useState(false);
    const [fatherincomeFocus, setFatherincomeFocus] = useState(false);

    const [mothername, setMothername] = useState('');
    const [validMothername, setValidMothername] = useState(false);
    const [mothernameFocus, setMothernameFocus] = useState(false);


    const [mothersalary, setMothersalary] = useState('');
    const [validMothersalary, setValidMothersalary] = useState(false);
    const [mothersalaryFocus, setMothersalaryFocus] = useState(false);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [motheroccupation, setMotheroccupation] = useState('');
    const [validMotheroccupation] = useState(false);
    const [motheroccupationFocus, setMotheroccupationFocus] = useState(false);

    const [parent, setParent] = useState('');
    const [validParent] = useState(false);
    const [parentFocus, setParentFocus] = useState(false);

    const [address, setAddress] = useState('');
    const [validAddress] = useState(false);
    const [addressFocus, setAddressFocus] = useState(false);

    const [aadharnum, setAadharnum] = useState('');
    const [validAadharnum, setValidAadharnum] = useState(false);
    const [aadharnumFocus, setAadharnumFocus] = useState(false);

    const [aadharnumi, setAadharnumi] = useState('');
    const [validAadharnumi, setValidAadharinum] = useState(false);
    const [aadharnumiFocus, setAadharnumiFocus] = useState(false);



    const [community, setCommunity] = useState('');
    const [validCommunity] = useState(false);
    const [communityFocus, setCommunityFocus] = useState(false);

    const [communityc, setCommunityc] = useState('');
    const [validCommunityc] = useState(false);
    const [communitycFocus, setCommunitycFocus] = useState(false);


    const [state, setState] = useState('');
    const [file, setFile] = useState(null);
    const [validState] = useState(false);
    const [stateFocus, setStateFocus] = useState(false);


    const [district, setDistrict] = useState('');
    const [validDistrict] = useState(false);
    const [districtFocus, setDistrictFocus] = useState(false);

    const [districtrf, setDistrictrf] = useState('');
    const [validDistrictrf] = useState(false);
    const [districtrfFocus, setDistrictrfFocus] = useState(false);

    const [ownhouse, setOwnhouse] = useState('');
    const [validOwnhouse, setValidOwnhouse] = useState(false);
    const [ownhouseFocus, setOwnhouseFocus] = useState(false);

    const [ownhousect, setOwnhousect] = useState('');
    const [validOwnhousect, setValidOwnhousect] = useState(false);
    const [ownhousectFocus, setOwnhousectFocus] = useState(false);

    const [districtpm, setDistrictpm] = useState('');
    const [validDistrictpm] = useState(false);
    const [districtpmFocus, setDistrictpmFocus] = useState(false);

    const [ownhousest, setOwnhousest] = useState('');
    const [validOwnhousest, setValidOwnhousest] = useState(false);
    const [ownhousestFocus, setOwnhousestFocus] = useState(false);
    
    const[pending,setpending]=useState('false')




    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])

    // useEffect(() => {
    //     setValidName(USER_REGEX.test(user));
    // }, [user])

    // useEffect(() => {
    //     setValidEmail(EMAIL_REGEX.test(email));
    // }, [email])

    // useEffect(() => {
    //     setValidDob(DOB_REGEX.test(dob));
    // }, [dob])
    // useEffect(() => {
    //     setValidAge(AGE_REGEX.test(age));
    // }, [age])

    // useEffect(() => {
    //     setValidPhonenum(PHONENUM_REGEX.test(phonenum));
    // }, [phonenum])
    // useEffect(() => {
    //     setValidFathername(FATHERNAME_REGEX.test(fathername));
    // }, [fathername])
    // // useEffect(() => {
    // //     setValidFatheroccupation (FATHERNAME_REGEX.test(fatheroccupation));
    // // }, [fatheroccupation])
    // useEffect(() => {
    //     setValidMothername(MOTHERNAME_REGEX.test(mothername));
    // }, [mothername])
    // // useEffect(() => {
    // //     setValidMotheroccupation(MOTHEROCCUPATION_REGEX.test(motheroccupation));
    // // }, [motheroccupation])
    // useEffect(() => {
    //     setValidAadharnum(AADHARNUM_REGEX.test(aadharnum));
    // }, [aadharnum])

    // useEffect(() => {
    //     setValidOwnhouse(OWNHOUSE_REGEX.test(ownhouse));
    // }, [ownhouse])
    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, email, dob, age, gender, phonenum, fathername, fatheroccupation, mothername, motheroccupation, aadharnum, community, state, district, ownhouse])
     
    function submit() {
        // const blob = new Blob([file], { type: file.type })
        const data =     {
      "full_name": user,
      "age":age,
      "school_id": 1,
      "application_status":"pending",
       "email": email,
       "phone_Number": phonenum,
        "gender": gender,
        "community": community,
        "date_of_birth":dob,
        "father_name": fathername,
        "father_occupation": fatheroccupation,
        "father_monthly_salary": fathersalary,
        "mother_name": mothername,
        "mother_occupation": motheroccupation,
        "mother_monthly_salary": mothersalary,
        "state": state,
        "district": district,
        "own_house_or_rent_house": ownhouse,
        "course_type": ownhousect,
        "reference_name": districtrf,
        "school_type": ownhousest,
        "parent": parent,
        "application_status": "pending",
        "address": address,
        "school_id": 1,
        "Aadhar_Card": aadharnumi,
        "passport_photo": fatheroccupationpp,
        "aadhar_Number": aadharnum,
        "community_Certificate": communityc,
        "income_Certificate": fatherincome,
        "if_No_Rent_paid_per_month": districtpm,

        }
           
       
    
          axios.post("http://localhost:8080/api/v1/user/addUser", data)
          .then((response) => {
               console.log(response.data)
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
                        <a href="Sign.js">Sign In</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 id="pd">PersonalDetails</h1>
                    <form >
                        {/* <span>Name</span> */}
                        <div class="grid-container">
                            <TextField id="standard-basic" label="Name" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                aria-invalid={validName ? "false" : "tr+ue"}
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
                            <FontAwesomeIcon icon={faTimes} className={validemail || !email ? "hide" : "invalid"} />
                        </label> */}
                            {/* <span>Email</span> */}
                            <TextField id="standard-basic" label="Email" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                            
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
                            
                            <TextField id="datepic" label="Date Of Birth" variant="standard" 
                                                    
                             ref={userRef}
                             autoComplete="off"
                             type="date"
                             onChange={(e) => setDob(e.target.value)}
                             value={dob}
                             required
                             aria-invalid={validDob ? "false" : "true"}
                             aria-describedby="dobnote"
                             onFocus={() => setDobFocus(true)}
                             onBlur={() => setDobFocus(false)} 
                             /> 
                            <p id="dobnote" className={dobFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                            {/* <label htmlFor="Age">
                            Age:
                            <FontAwesomeIcon icon={faCheck} className={age ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={"invalid"} />
                        </label> */}
                            {/* <span>Age</span> */}
                            <TextField id="standard-basic" label="Age" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setAge(e.target.value)}
                                value={age}
                                // required
                                aria-invalid={validAge ? "false" : "true"}
                                aria-describedby="dobnote"
                                onFocus={() => setAgeFocus(true)}
                                onBlur={() => setAgeFocus(false)}
                            />
                            <p id="note" className={ageFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                            
                            
                            <TextField id="outlined-select-gender" label="Gender" variant="standard"
                                select
                                ref={userRef}
                                autoComplete="off"
                                type="select"
                                onChange={(e) => setGender(e.target.value)}
                                value={gender}
                                required
                                aria-invalid={validGender ? "false" : "true"}
                                aria-describedby="gendernote"
                                onFocus={() => setGenderFocus(true)}
                                
                                onBlur={() => setGenderFocus(false)}
                            >
                                {GenderSelect.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <p id="gendernote" className={genderFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                       
                            <TextField id="standard-basic" label="Phone Number" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setPhonenum(e.target.value)}
                                value={phonenum}
                                required
                                aria-invalid={validPhonenum ? "false" : "true"}
                                aria-describedby="phonenumnote"
                                onFocus={() => setPhonenumFocus(true)}
                                onBlur={() => setPhonenumFocus(false)}
                            />

                            <p id="phonenumnote" className={phonenumFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                        
                            <TextField id="standard-basic" label="Mother Name" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setMothername(e.target.value)}
                                value={mothername}
                                required
                                aria-invalid={validMothername ? "false" : "true"}
                                aria-describedby="mothernamenote"
                                onFocus={() => setMothernameFocus(true)}
                                onBlur={() => setMothernameFocus(false)}
                            />

                            <p id="mothernamenote" className={mothernameFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                           
                            <TextField id="standard-basic" label="Mother Occupation" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setMotheroccupation(e.target.value)}
                                value={motheroccupation}
                                required
                                aria-invalid={validMotheroccupation ? "false" : "true"}
                                aria-describedby="mothernamenote"
                                onFocus={() => setMotheroccupationFocus(true)}
                                onBlur={() => setMotheroccupationFocus(false)}
                            />

                            <p id="motheroccupationnote" className={motheroccupationFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <TextField id="standard-basic" label="Mother Salary" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setMothersalary(e.target.value)}
                                value={mothersalary}
                                required
                                onFocus={() => setMothersalaryFocus(true)}
                                onBlur={() => setMothersalaryFocus(false)}
                            />

                            <p id="motheroccupationnote" className={mothersalaryFocus && !valid ? "instructions" : "offscreen"}></p>


                            <TextField id="standard-basic" label="FatherName" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setFathername(e.target.value)}
                                value={fathername}
                                required
                                aria-invalid={validFathername ? "false" : "true"}
                                aria-describedby="fathernamenote"
                                onFocus={() => setFathernameFocus(true)}
                                onBlur={() => setFathernameFocus(false)}
                            />

                            <p id="fathernamenote" className={fathernameFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                            {/* <label htmlFor="FatherOccupation">
                            Father Occupation:
                            <FontAwesomeIcon icon={faCheck} className={validFatheroccupation ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validFatheroccupation || !fatheroccupation ? "hide" : "invalid"} />
                        </label> */}
                            {/* <span>FatherOccupation</span> */}
                            <TextField id="standard-basic" label="FatherOccupation" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setFatheroccupation(e.target.value)}
                                value={fatheroccupation}
                                required
                                aria-invalid={validFatheroccupation ? "false" : "true"}
                                aria-describedby="fatheroccupationnote"
                                onFocus={() => setFatheroccupationFocus(true)}
                                onBlur={() => setFatheroccupationFocus(false)}
                            />

                            <p id="fatheroccupationnote" className={fatheroccupationFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <TextField id="standard-basic" label="Father Salary" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setFathersalary(e.target.value)}
                                value={fathersalary}
                                required
                                aria-invalid={validFathersalary ? "false" : "true"}
                                aria-describedby="fathersalarynote"
                                onFocus={() => setFathersalaryFocus(true)}
                                onBlur={() => setFathersalaryFocus(false)}
                            />

                            <p id="fatheroccupationnote" className={fathersalaryFocus && !valid ? "instructions" : "offscreen"}></p>
                
                            <TextField id="standard-basic" label="Address" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                                required
                               
                                onFocus={() => setAddressFocus(true)}
                                onBlur={() => setAddressFocus(false)}
                            />
                            <p id="addressnote" className={addressFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <TextField id="aadharfile" label="Aadhar Number" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setAadharnum(e.target.value)}
                                value={aadharnum}
                                required
                                aria-invalid={validAadharnum ? "false" : "true"}
                                aria-describedby="aadharnumnote"
                                onFocus={() => setAadharnumFocus(true)}
                                onBlur={() => setAadharnumFocus(false)}
                            />

                            <p id="aadharnumnote" className={aadharnumFocus && !valid ? "instructions" : "offscreen"}></p>
                                
                            <TextField id="aadharfile1" label="Aadhar card photo" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="file"
                                onChange={(e) =>      
                                    setFile(e.target.files[0])
                                }
                                required
                                aria-invalid={validAadharnumi ? "false" : "true"}
                                aria-describedby="aadharnuminote"
                                onFocus={() => setAadharnumiFocus(true)}
                                onBlur={() => setAadharnumiFocus(false)}
                            />
                            <p id="aadharnuminote" className={aadharnumiFocus && !valid ? "instructions" : "offscreen"}></p>
                           
                          
                            <TextField id="standard-basic" label="Community" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setCommunity(e.target.value)}
                                value={community}
                                required
                                aria-invalid={validCommunity ? "false" : "true"}
                                aria-describedby="communitynote"
                                onFocus={() => setCommunityFocus(true)}
                                onBlur={() => setCommunityFocus(false)}
                            />

                            <p id="communitynote" className={communityFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>


                            <TextField id="standard-basic-comm" label="Community certificate" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="file"
                                onChange={(e) => setCommunityc(e.target.value)}
                                required
                                aria-invalid={validCommunity ? "false" : "true"}
                                aria-describedby="communitycnote"
                                onFocus={() => setCommunitycFocus(true)}
                                onBlur={() => setCommunitycFocus(false)}
                            />

                            <p id="communitynote" className={communitycFocus && !valid ? "instructions" : "offscreen"}></p>
                               

                            <TextField id="ic" label="Income Certificate" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="file"
                                onChange={(e) => setFatherincome(e.target.value)}
                                value={fatherincome}
                                required
                                aria-invalid={validFatherincome? "false" : "true"}
                                aria-describedby="fatheroccupationnote"
                                onFocus={() => setFatherincomeFocus(true)}
                                onBlur={() => setFatherincomeFocus(false)}
                            />

                            <p id="fatheroccupationnote" className={fatheroccupationFocus && !valid ? "instructions" : "offscreen"}>

                            </p>


                            <TextField id="pp" label="Passport Photo" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="file"
                                onChange={(e) => setFatheroccupationpp(e.target.value)}
                                value={fatheroccupationpp}
                                required
                                onFocus={() => setFatheroccupationppFocus(true)}
                                onBlur={() => setFatheroccupationppFocus(false)}
                            />

                            <p id="fatheroccupationnote" className={fatheroccupationppFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                     
                            <TextField id="standard-basic" label="State" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setState(e.target.value)}
                                value={state}
                                required
                                aria-invalid={validState ? "false" : "true"}
                                aria-describedby="statenote"
                                onFocus={() => setStateFocus(true)}
                                onBlur={() => setStateFocus(false)}
                            />

                            <p id="statenote" className={stateFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>
                          
                            <TextField id="standard-basic" label="District" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setDistrict(e.target.value)}
                                value={district}
                                required
                                aria-invalid={validDistrict ? "false" : "true"}
                                aria-describedby="districtnote"
                                onFocus={() => setDistrictFocus(true)}
                                onBlur={() => setDistrictFocus(false)}
                            />

                            <p id="districtnote" className={districtFocus && !valid ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                <br />
                                <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <TextField id="outlined-select-ownhouse" label="Coarse Type" variant="standard"
                                select
                                ref={userRef}
                                autoComplete="off"
                                type="select"
                                onChange={(e) => setOwnhousect(e.target.value)}
                                value={ownhousect}
                                required
                                aria-invalid={validOwnhousect ? "false" : "true"}
                                aria-describedby="ownhousectnote"
                                onFocus={() => setOwnhousectFocus(true)}
                                onBlur={() => setOwnhousectFocus(false)}
                            >
                            {CourseType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            
                            <TextField id="outlined-select-ownhouse" label="School Type" variant="standard"
                                select
                                ref={userRef}
                                autoComplete="off"
                                type="select"
                                onChange={(e) => setOwnhousest(e.target.value)}
                                value={ownhousest}
                                required
                                aria-invalid={validOwnhousest ? "false" : "true"}
                                aria-describedby="ownhousenote"
                                onFocus={() => setOwnhousestFocus(true)}
                                onBlur={() => setOwnhousestFocus(false)}
                            >
                            {SchoolType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                            <TextField id="outlined-select-ownhouse" label="Parent" variant="standard"
                                select
                                ref={userRef}
                                autoComplete="off"
                                type="select"
                                onChange={(e) => setParent(e.target.value)}
                                value={parent}
                                required
                                aria-invalid={validParent ? "false" : "true"}
                                aria-describedby="ownparentnote"
                                onFocus={() => setParentFocus(true)}
                                onBlur={() => setParentFocus(false)}
                            >
                            {ParentType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        
                            <TextField id="outlined-select-ownhouse" label="OwnHouse" variant="standard"
                                select
                                ref={userRef}
                                autoComplete="off"
                                type="select"
                                onChange={(e) => setOwnhouse(e.target.value)}
                                value={ownhouse}
                                required
                                aria-invalid={validOwnhouse ? "false" : "true"}
                                aria-describedby="ownhousenote"
                                onFocus={() => setOwnhouseFocus(true)}
                                onBlur={() => setOwnhouseFocus(false)}
                            >
                            {OwnRent.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField id="standard-basic" label="If no rent paid per month" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setDistrictpm(e.target.value)}
                                value={districtpm}

                                aria-invalid={validDistrictpm ? "false" : "true"}
                                aria-describedby="districtnote"
                                onFocus={() => setDistrictpmFocus(true)}
                                onBlur={() => setDistrictpmFocus(false)}
                            />

                            <p id="districtnote" className={districtFocus && !valid ? "instructions" : "offscreen"}></p>
                                


                            <TextField id="standard-basic" label="Reference Name" variant="standard"
                                ref={userRef}
                                autoComplete="off"
                                type="text"
                                onChange={(e) => setDistrictrf(e.target.value)}
                                value={districtrf}

                                aria-invalid={validDistrictrf ? "false" : "true"}
                                aria-describedby="districtnote"
                                onFocus={() => setDistrictrfFocus(true)}
                                onBlur={() => setDistrictrfFocus(false)}
                            />


                        </div>
                        <div>
                           
                            <button id="bu" onClick={() => { submit()}}><Link to="/AcademicDetails">Next</Link></button>
                        </div>
                    </form>
                    <p>
                       
                    </p>
                </section>
            )}
        </>
    )
}

export default PersonalDetails;
