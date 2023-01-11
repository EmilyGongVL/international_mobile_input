import { useState } from "react";
import isMobilePhone from "validator/lib/isMobilePhone";
import isEmail from "validator/lib/isEmail";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const getMember = { mobile: "+61413549397" };
function App() {
  const [phone, setPhone] = useState(getMember.mobile);
  // const [isPhoneValid, setPhoneValid] = useState(false);
  console.log(phone);
  console.log(isMobilePhone(phone, "zh-CN"));
  console.log(isEmail("emily.gong@gmail"));
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "200px" }}>
          <PhoneInput
            country={"au"}
            value={phone}
            onChange={(value, country, formattedValue) => {
              setPhone(value);
              // console.log(value, country, formattedValue);
              // if (country.format?.length === formattedValue?.length) {
              //   setPhoneValid(true);
              // } else {
              //   setPhoneValid(false);
              // }
            }}
            enableSearch={true}
            specialLabel="hello"
          />
          {/* {!isPhoneValid && (
            <p style={{ color: "red" }}>Please input valid number!</p>
          )} */}
        </div>
      </header>
    </div>
  );
}

export default App;
