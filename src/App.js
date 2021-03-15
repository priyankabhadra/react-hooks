import {React , useState, useEffect, useRef} from 'react';

const App = () => {
  const [firstName, setFirstName] = useState(''); //This is useState which is the hook of react function component, where we can pass 2
  const [lastName, setLastName] = useState(''); //argumenet. 1st one for value and 2nd one for function name which will change
  const [emailId, setEmailId] = useState(''); //the state of value.
  const [phoneNo, setPhoneNo] = useState('');
  const [formFill, isFormFill] = useState(false);

  useEffect(() => {//useEffect is hook, which will decide when inside function will be execute. empty array([]) means it will execute on 
    FN.current.focus();//first load of application
  }, []);

  useEffect(() => { //it will print this message in console in first load of application
    console.log("Thanks for Entering in this page");
  }, []);

  useEffect(() => { //it will print this message in console in updating state. whenever we will update anystate inside array element
    console.log("Thanks for filling details");//it will print this message in console.
  }, [firstName, lastName, emailId, phoneNo]);

  useEffect(() => {
    console.log("Thanks for fill the form... Good Luck !!!");
  }, [formFill]);

  const onEnterPressInFirstName = (e) => {
   if(e.key == "Enter") {
      LN.current.focus();
    }
  }

  const onEnterPressInLastName = (e) => {
    if(e.key == "Enter") {
      PN.current.focus();
    }
  }

  const onEnterPressInPhoneNo = (e) => {
    if(e.key == "Enter") {
       ELN.current.focus();
    }
  }

  const onEnterPressInEmailId = (e) => {
    if(e.key == "Enter") {
      SLN.current.focus();
    }
  }

  const onClickOfSubmit = () => {
    const Name = firstName + " " + lastName;
    const email = emailId;
    const PhoneNo = phoneNo;
    const myDetails = {
      "Name" : Name,
      "Email" : email,
      "Phone Number" : PhoneNo
    };
    if(myDetails !== null) {
      isFormFill(true)
    }
    console.log("myDetails", myDetails);
  }


  const FN = useRef('');
  const LN = useRef('');
  const PN = useRef('');
  const ELN = useRef('');
  const SLN = useRef('');

  return (
    <>
        <h1>Please Fill the Form Before DeadLine...</h1>
        <label>First Name: </label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} ref={FN} onKeyDown={onEnterPressInFirstName}></input>
        <br /> <br />
        <label>Last Name: </label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} ref={LN} onKeyDown={onEnterPressInLastName}></input>
        <br /> <br />
        <label>Phone Number: </label>
        <input type="tel" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} ref={PN} onKeyDown={onEnterPressInPhoneNo}></input>
        <br /> <br />
        <label>Email Id: </label>
        <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} ref={ELN} onKeyDown={onEnterPressInEmailId}></input>
        <br /><br />
        <button ref={SLN} onClick={onClickOfSubmit}>Submit</button>
    </>
  )
}

export default App;