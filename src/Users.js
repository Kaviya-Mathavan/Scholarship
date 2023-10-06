import * as React from 'react';
import {useRef, useState, useEffect } from "react";
import axios from 'axios';
import { TextField } from "@mui/material";
import "./Users.css"
const UserId_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const FullName_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const Email_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const PhoneNumber_REGEX = /^[A-z][A-z0-9 _]{3,23}$/;
const Address_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const SchoolId_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const User_URL='';

const Users = (props) => {

    const fnameRef = useRef();

    const emailRef = useRef();

    const phRef = useRef();

    const uaddressRef = useRef();

    const genderRef = useRef();

    const aadharnumRef = useRef();

    const communityRef = useRef();

    const dobRef = useRef();

    const ageRef = useRef();

    const fathernameRef = useRef();

    const foccupationRef = useRef();

    const fmsRef = useRef();

    const mnameRef = useRef();

    const moccupationRef = useRef();

    const mmsRef = useRef();

    const stateRef = useRef();

    const disRef = useRef();

    const tmarkRef = useRef();

    const emarkRef = useRef();

    const twemarkRef = useRef();

    const tweregRef = useRef();

    const htypeRef = useRef();

    const mrentRef = useRef();

    const ctypeRef = useRef();

    const rnameRef = useRef();

    const scltypeRef = useRef();

    const tmsheetRef = useRef();

    const emsheetRef = useRef();

    const twemsheetRef = useRef();

    const aadharcardRef = useRef();

    const passphRef = useRef();

    const ccRef = useRef();

    const icRef = useRef();

    const yoptenthRef = useRef();

    const yopeleventhRef = useRef();

    const yoptwelvethRef = useRef();

    const sidRef = useRef();

    const errRef = useRef();

    var valid = true;

    const [uid, setUid] = useState('');

    const [validUid, setValidUid] = useState(false);

    const [UidFocus, setUidFocus] = useState(false);

 
    const [fname, setFname] = useState(props.data.full_name);

    const [validFname, setValidFname] = useState(false);

    const [fnameFocus, setFnameFocus] = useState(false);

 

    const [email, setEmail] = useState(props.data.email);

    const [validEmail, setValidEmail] = useState(false);

    const [emailFocus, setEmailFocus] = useState(false);

 

 

    const [ph, setPh] = useState(props.data.phone_Pumber);

    const [validPh, setValidPh] = useState(false);

    const [phFocus, setPhFocus] = useState(false);

 

    const [uaddress, setUaddress] = useState(props.data.address);

    const [validUaddress, setValidUaddress] = useState(false);

    const [uaddressFocus, setUaddressFocus] = useState(false);

 

    const [gender, setGender] = useState(props.data.gender);

    const [validGender, setValidGender] = useState(false);

    const [genderFocus, setGenderFocus] = useState(false);

 

    const [aadharnum, setAadharnum] = useState(props.data.aadhar_Number);

    const [validAadharnum, setValidAadharnum] = useState(false);

    const [aadharnumFocus, setAadharnumFocus] = useState(false);

 

    const [community, setCommunity] = useState(props.data.community);

    const [validCommunity, setValidCommunity] = useState(false);

    const [communityFocus, setCommunityFocus] = useState(false);

 

    const [dob, setDob] = useState(props.data.date_of_birth);

    const [validDob, setValidDob] = useState(false);

    const [dobFocus, setDobFocus] = useState(false);

 

    const [age, setAge] = useState(props.data.age);

    const [validAge, setValidAge] = useState(false);

    const [ageFocus, setAgeFocus] = useState(false);

 

    const [fathername, setFathername] = useState(props.data.father_name);

    const [validFathername, setValidFathername] = useState(false);

    const [fathernameFocus, setFathernameFocus] = useState(false);

 

    const [foccupation, setFoccupation] = useState(props.data.father_occupation);

    const [validFoccupation, setValidFoccupation] = useState(false);

    const [foccupationFocus, setFoccupationFocus] = useState(false);

 

    const [fms, setFms] = useState(props.data.father_monthly_salary);

    const [validFms, setValidFms] = useState(false);

    const [fmsFocus, setFmsFocus] = useState(false);

 

    const [mname, setMname] = useState(props.data.mother_name);

    const [validMname, setValidMname] = useState(false);

    const [mnameFocus, setMnameFocus] = useState(false);

 

    const [moccupation, setMoccupation] = useState(props.data.mother_occupation);

    const [validMoccupation, setValidMoccupation] = useState(false);

    const [moccupationFocus, setMoccupationFocus] = useState(false);

 

    const [mms, setMms] = useState(props.data.mother_monthly_salary);

    const [validMms, setValidMms] = useState(false);

    const [mmsFocus, setMmsFocus] = useState(false);

 

    const [state, setState] = useState(props.data.state);

    const [validState, setValidState] = useState(false);

    const [stateFocus, setStateFocus] = useState(false);

 

    const [dis, setDis] = useState(props.data.district);

    const [validDis, setValidDis] = useState(false);

    const [disFocus, setDisFocus] = useState(false);

 

    const [tmark, setTmark] = useState(props.data.tenth_mark);

    const [validTmark, setValidTmark] = useState(false);

    const [tmarkFocus, setTmarkFocus] = useState(false);

 

    const [emark, setEmark] = useState(props.data.eleventh_mark);

    const [validEmark, setValidEmark] = useState(false);

    const [emarkFocus, setEmarkFocus] = useState(false);

 

    const [twemark, setTwemark] = useState(props.data.twelth_mark);

    const [validTwemark, setValidTwemark] = useState(false);

    const [twemarkFocus, setTwemarkFocus] = useState(false);

 

    const [twereg, setTwereg] = useState(props.data.register_number_12th);

    const [validTwereg, setValidTwereg] = useState(false);

    const [tweregFocus, setTweregFocus] = useState(false);

 

    const [htype, setHtype] = useState(props.data.own_house_or_rent_house);

    const [validHtype, setValidHtype] = useState(false);

    const [htypeFocus, setHtypeFocus] = useState(false);

 

    const [mrent, setMrent] = useState(props.data.if_No_Rent_paid_per_month);

    const [validMrent, setValidMrent] = useState(false);

    const [mrentFocus, setMrentFocus] = useState(false);

 

    const [ctype, setCtype] = useState(props.data.course_type);

    const [validCtype, setValidCtype] = useState(false);

    const [ctypeFocus, setCtypeFocus] = useState(false);

 

    const [rname, setRname] = useState(props.data.reference_name);

    const [validRname, setValidRname] = useState(false);

    const [rnameFocus, setRnameFocus] = useState(false);

 

    const [scltype, setScltype] = useState(props.data.school_type);

    const [validScltype, setValidScltype] = useState(false);

    const [scltypeFocus, setScltypeFocus] = useState(false);

 

    const [tmsheet, setTmsheet] = useState(props.data.tenth_Mark_Sheet);

    const [validTmsheet, setValidTmsheet] = useState(false);

    const [tmsheetFocus, setTmsheetFocus] = useState(false);

 

    const [emsheet, setEmsheet] = useState(props.data.eleventh_Mark_Sheet);

    const [validEmsheet, setValidEmsheet] = useState(false);

    const [emsheetFocus, setEmsheetFocus] = useState(false);

 

    const [twemsheet, setTwemsheet] = useState(props.data.twelth_Mark_Sheet);

    const [validTwemsheet, setValidTwemsheet] = useState(false);

    const [twemsheetFocus, setTwemsheetFocus] = useState(false);

 

    const [aadharcard, setAadharcard] = useState(props.data.aadhar_card);

    const [validAadharcard, setValidAadharcard] = useState(false);

    const [aadharcardFocus, setAadharcardFocus] = useState(false);

 

    const [passph, setPassph] = useState(props.data.passport_photo);

    const [validPassph, setValidPassph] = useState(false);

    const [passphFocus, setPassphFocus] = useState(false);

 

    const [cc, setCc] = useState(props.data.community_Certificate);

    const [validCc, setValidCc] = useState(false);

    const [ccFocus, setCcFocus] = useState(false);

 

    const [ic, setIc] = useState(props.data.income_Certificate);

    const [validIc, setValidIc] = useState(false);

    const [icFocus, setIcFocus] = useState(false);

 

    const [yoptenth, setYoptenth] = useState(props.data.year_Of_passing_10th);

    const [validYoptenth, setValidYoptenth] = useState(false);

    const [yoptenthFocus, setYoptenthFocus] = useState(false);

 

    const [yopeleventh, setYopeleventh] = useState(props.data.year_Of_Passing_11th);
        
    const [validYopeleventh, setValidYopeleventh] = useState(false);

    const [yopeleventhFocus, setYopeleventhFocus] = useState(false);

 

    const [yoptwelveth, setYoptwelveth] = useState(props.data.year_Of_Passing_12th);

    const [validYoptwelveth, setValidYoptwelveth] = useState(false);

    const [yoptwelvethFocus, setYoptwelvethFocus] = useState(false);

 

    const [sid, setSid] = useState(props.data.school_id);

    const [validSid, setValidSid] = useState(false);

    const [sidFocus, setSidFocus] = useState(false);

 

    const [errMsg, seterrMsg] = useState('');

    const [success, setSuccess] = useState(false);

    useEffect(() => {

    }, [])

    useEffect(() => {

 

        setValidUid(UserId_REGEX.test(uid));

 

    }, [uid])

    useEffect(() => {

 

        setValidFname(FullName_REGEX.test(fname));

    }, [fname])

 

    useEffect(() => {

 

        setValidEmail(Email_REGEX.test(email));

    }, [email])

    useEffect(() => {

 

        setValidPh(PhoneNumber_REGEX.test(ph));

 

    }, [ph])

 

    useEffect(() => {

 

        setValidUaddress(Address_REGEX.test(uaddress));

    }, [uaddress])

 

    useEffect(() => {

 

        setValidSid(SchoolId_REGEX.test(sid));

 

    }, [sid])

    useEffect(() => {

    seterrMsg('');

    }, [uid, fname,email, ph,uaddress,sid])

    const handleSubmit = async (e) => {

        e.preventDefault();

        const data={

            "Full_Name": fname,

            "Email" : email,

            "phone_Pumber": ph,

            "Address": uaddress,

            "Gender": gender,

            "Aadhar_Number": aadharnum,

            "community": community,

            "Date_Of_Birth": dob,

            "Age":age,

            "Father_name": fathername,

            "Father_Occupation": foccupation,

            "Father_monthly_salary": fms,

             "Mother_name": mname,

             "Mother_Occupation":moccupation,

             "Mother_monthly_salary":mms,

             "State":state,

             "District":dis,

             "10th_mark":tmark,

             "11th_mark":emark,

             "12th_mark":twemark,

             "register_Number_12th":twereg,

             "Own_house_OR_Rent_House": htype,

             "If_No_Rent_paid_per_month": mrent,

             "Course_Type": ctype,

             "Reference_name": rname,

             "School Type": scltype,

             "10th_Mark_Sheet":tmsheet,

             "11th_Mark_Sheet":emsheet,

             "12th_Mark_Sheet":twemsheet,

             "Aadhar_Card":aadharcard,

             "Passport_photo":passph,

             "Community_Certificate":cc,

             "Income_Certificate":ic,

             "Year_of_passing_10th":yoptenth,

             "Year_of_passing_11th":yopeleventh,

             "Year_of_passing_12th":yoptwelveth,

             "School_id":sid    

        }

        console.log(data);
      axios.post("http://localhost:8000/getAllUsers", data)

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

                <h1 id="pd">UserDetails</h1>
                 <form onSubmit={handleSubmit}>
                        <div id="grid-container5">

                            <TextField id="standard-basic" label="Full Name" variant="standard"

                                ref={fnameRef}

                                autoComplete="off"

                                onChange={(e) => setFname(e.target.value)}

                                value={fname}

                                required

                                aria-invalid={validFname ? "false" : "true"}

                            />

                            <p id="uidnote" className={fnameFocus && !validFname ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Email" variant="standard"

                                ref={emailRef}

                                autoComplete="off"

                                onChange={(e) => setEmail(e.target.value)}

                                value={email}

                                required

                                aria-invalid={validEmail ? "false" : "true"}
 />

                            <p id="uidnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"}> </p>


                            <TextField id="standard-basic" label="Phone Number" variant="standard"

                                ref={phRef}

                                autoComplete="off"

                                onChange={(e) => setPh(e.target.value)}

                                value={ph}

                                required

                                aria-invalid={validPh ? "false" : "true"}

                            />

                            <p id="uidnote" className={phFocus && !validPh ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Address" variant="standard"

                                ref={uaddressRef}

                                autoComplete="off"

                                onChange={(e) => setUaddress(e.target.value)}

                                value={uaddress}

                                required

                                aria-invalid={validUaddress ? "false" : "true"}

                            />

                            <p id="uidnote" className={uaddressFocus && !validUaddress ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Gender" variant="standard"

                                ref={genderRef}

                                autoComplete="off"

                                onChange={(e) => setGender(e.target.value)}

                                value={gender}

                                required

                                aria-invalid={validGender ? "false" : "true"}

                            />

                            <p id="uidnote" className={genderFocus && !validGender ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Aadhar Number" variant="standard"

                                ref={aadharnumRef}

                                autoComplete="off"

                                onChange={(e) => setAadharnum(e.target.value)}

                                value={aadharnum}

                                required
                            />

                            <p id="uidnote" className={aadharnumFocus && !validAadharnum ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="community" variant="standard"

                                ref={communityRef}

                                autoComplete="off"

                                onChange={(e) => setCommunity(e.target.value)}

                                value={community}

                                required

                                aria-invalid={validCommunity? "false" : "true"}

                            />

                            <p id="uidnote" className={communityFocus && !validCommunity ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Date Of Birth" variant="standard"

                                ref={dobRef}

                                autoComplete="off"

                                onChange={(e) => setDob(e.target.value)}

                                value={dob}

                                required

                                aria-invalid={validDob? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={dobFocus && !validDob ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Age" variant="standard"

                                ref={ageRef}

                                autoComplete="off"

                                onChange={(e) => setAge(e.target.value)}

                                value={age}

                                required

                                aria-invalid={validAge? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={ageFocus && !validAge ? "instructions" : "offscreen"}> </p>
                            
                            <TextField id="standard-basic" label="Father Name" variant="standard"

                                ref={fathernameRef}

                                autoComplete="off"

                                onChange={(e) => setFathername(e.target.value)}

                                value={fathername}

                                required

                                aria-invalid={validFathername? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={fathernameFocus && !validFathername ? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Father Occupation" variant="standard"

                                ref={foccupationRef}

                                autoComplete="off"

                                onChange={(e) => setFoccupation(e.target.value)}

                                value={foccupation}

                                required

                                aria-invalid={validFoccupation? "false" : "true"}   

                            />

                            <p id="uidnote" className={foccupationFocus && !validFoccupation? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Father Monthly Salary" variant="standard"

                                ref={fmsRef}

                                autoComplete="off"

                                onChange={(e) => setFms(e.target.value)}

                                value={fms}

                                required

                                aria-invalid={validFms? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={fmsFocus && !validFms? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Mother Name" variant="standard"

                                ref={mnameRef}

                                autoComplete="off"

                                onChange={(e) => setMname(e.target.value)}

                                value={mname}

                                required

                                aria-invalid={validMname? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={mnameFocus && !validMname ? "instructions" : "offscreen"}> </p>


                            <TextField id="standard-basic" label="Mother Occupation" variant="standard"

                                ref={moccupationRef}

                                autoComplete="off"

                                onChange={(e) => setMoccupation(e.target.value)}

                                value={moccupation}

                                required

                                aria-invalid={validMoccupation? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={moccupationFocus && !validMoccupation? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Mother Monthly Salary" variant="standard"

                                ref={mmsRef}

                                autoComplete="off"

                                onChange={(e) => setMms(e.target.value)}

                                value={mms}

                                required

                                aria-invalid={validMms? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={mmsFocus && !validMms? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="State" variant="standard"

                                ref={stateRef}

                                autoComplete="off"

                                onChange={(e) => setState(e.target.value)}

                                value={state}

                                required

                                aria-invalid={validState? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={stateFocus && !validState? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="District" variant="standard"

                                ref={disRef}

                                autoComplete="off"

                                onChange={(e) => setDis(e.target.value)}

                                value={dis}

                                required

                                aria-invalid={validDis? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={disFocus && !validDis? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="10th Mark" variant="standard"

                                ref={tmarkRef}

                                autoComplete="off"

                                onChange={(e) => setTmark(e.target.value)}

                                value={tmark}

                                required

                                aria-invalid={validTmark? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={tmarkFocus && !validTmark? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="11th Mark" variant="standard"

                                ref={emarkRef}

                                autoComplete="off"

                                onChange={(e) => setEmark(e.target.value)}

                                value={emark}

                                required

                                aria-invalid={validEmark? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={emarkFocus && !validEmark? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="12th Mark" variant="standard"

                                ref={twemarkRef}

                                autoComplete="off"

                                onChange={(e) => setTwemark(e.target.value)}

                                value={twemark}

                                required

                                aria-invalid={validTwemark? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={twemarkFocus && !validTwemark? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Register Number 12th" variant="standard"

                                ref={tweregRef}

                                autoComplete="off"

                                onChange={(e) => setTwereg(e.target.value)}

                                value={twereg}

                                required

                                aria-invalid={validTwereg? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={tweregFocus && !validTwereg? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Own House OR Rent House" variant="standard"

                                ref={htypeRef}

                                autoComplete="off"

                                onChange={(e) => setHtype(e.target.value)}

                                value={htype}

                                required

                                aria-invalid={validHtype? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={htypeFocus && !validHtype? "instructions" : "offscreen"}> </p>

                      
                            <TextField id="standard-basic" label="If No Rent Per Month" variant="standard"

                                ref={mrentRef}

                                autoComplete="off"

                                onChange={(e) => setMrent(e.target.value)}

                                value={mrent}

                                required

                                aria-invalid={validMrent? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={mrentFocus && !validMrent? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Course Type" variant="standard"

                                ref={ctypeRef}

                                autoComplete="off"

                                onChange={(e) => setCtype(e.target.value)}

                                value={ctype}

                                required

                                aria-invalid={validCtype? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={ctypeFocus && !validCtype? "instructions" : "offscreen"}> </p>

             
                            <TextField id="standard-basic" label="Reference Name" variant="standard"

                                ref={rnameRef}

                                autoComplete="off"

                                onChange={(e) => setRname(e.target.value)}

                                value={rname}

                                required

                                aria-invalid={validRname? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={rnameFocus && !validRname? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="School Type" variant="standard"

                                ref={scltypeRef}

                                autoComplete="off"

                                onChange={(e) => setScltype(e.target.value)}

                                value={scltype}

                                required

                                aria-invalid={validScltype? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={scltypeFocus && !validScltype? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Year Of Passing 10th" variant="standard"

                                ref={yoptenthRef}

                                autoComplete="off"

                                onChange={(e) => setYoptenth(e.target.value)}

                                value={yoptenth}

                                required

                                aria-invalid={validYoptenth? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={yoptenthFocus && !validYoptenth? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Year Of Passing 11th" variant="standard"

                                ref={yopeleventhRef}

                                autoComplete="off"

                                onChange={(e) => setYopeleventh(e.target.value)}

                                value={yopeleventh}

                                required

                                aria-invalid={validYopeleventh? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={yopeleventhFocus && !validYopeleventh? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic" label="Year Of Passing 12th" variant="standard"

                                ref={yoptwelvethRef}

                                autoComplete="off"

                                onChange={(e) => setYoptwelveth(e.target.value)}

                                value={yoptwelveth}

                                required

                                aria-invalid={validYoptwelveth? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={yoptwelvethFocus && !validYoptwelveth? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic1" label="10th Mark Sheet" variant="standard"

                                ref={tmsheetRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setTmsheet(e.target.value)}

                                value={tmsheet}

                                required

                                aria-invalid={validTmsheet? "false" : "true"}

                            />

                            <p id="uidnote" className={tmsheetFocus && !validTmsheet? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic2" label="11th Mark Sheet" variant="standard"

                                ref={emsheetRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setEmsheet(e.target.value)}

                                value={emsheet}

                                required

                                aria-invalid={validEmsheet? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={emsheetFocus && !validEmsheet? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic3" label="12th Mark Sheet" variant="standard"

                                ref={twemsheetRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setTwemsheet(e.target.value)}

                                value={twemsheet}

                                required

                                aria-invalid={validTwemsheet? "false" : "true"}

                            />

                            <p id="uidnote" className={twemsheetFocus && !validTwemsheet? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic4" label="Aadhar Card" variant="standard"

                                ref={aadharcardRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setAadharcard(e.target.value)}

                                value={aadharcard}

                                required

                                aria-invalid={validAadharcard? "false" : "true"}

                            />

                            <p id="uidnote" className={aadharcardFocus && !validAadharcard? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic5" label="Passport Photo" variant="standard"

                                ref={passphRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setPassph(e.target.value)}

                                value={passph}

                                required

                                aria-invalid={validPassph? "false" : "true"}

                            />

                            <p id="uidnote" className={passphFocus && !validPassph? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic6" label="Community Certificate" variant="standard"

                                ref={ccRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setCc(e.target.value)}

                                value={cc}

                                required

                                aria-invalid={validCc? "false" : "true"}

                            />

                            <p id="uidnote" className={ccFocus && !validCc? "instructions" : "offscreen"}> </p>

                            <TextField id="standard-basic7" label="Income Certificate" variant="standard"

                                ref={icRef}

                                type="file"

                                autoComplete="off"

                                onChange={(e) => setIc(e.target.value)}

                                value={ic}

                                required

                                aria-invalid={validIc? "false" : "true"}

                               

                            />

                            <p id="uidnote" className={icFocus && !validIc? "instructions" : "offscreen"}> </p>

   
                            <TextField id="standard-basic" label="School Id" variant="standard"

                                ref={sidRef}

                                autoComplete="off"

                                onChange={(e) => setSid(e.target.value)}

                                value={sid}

                                required

                                aria-invalid={validSid ? "false" : "true"}

                            />

                            <p id="uidnote" className={sidFocus && !validSid ? "instructions" : "offscreen"}> </p>                          

                           </div>


                        </form>

                        {/* <button id="bu10" onClick={handleSubmit}>NEXT</button> */}

                        </section>

                       )}

                         </>

                         )

                }

export default Users;

 

 

 

