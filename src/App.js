import "./App.css";
import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const getMember = { mobile: "+61413549397" };
function App() {
  const [value, setValue] = useState(getMember.mobile);
  console.log(value);

  const [phone, setPhone] = useState("+61 413549397");
  const handleChange = (value) => {
    console.log(value);
    setValue(`+${value}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "200px" }}>
          <PhoneInput
            // initialValueFormat="national"
            international
            placeholder="Enter phone number"
            defaultCountry="AU"
            value={value}
            onChange={setValue}
            countryCallingCodeEditable={false}
            countrySelectProps={{}}
            label="hello"
          />
        </div>

        {/* <p>
          Is possible:{" "}
          {value && isPossiblePhoneNumber(value) ? "true" : "false"}
        </p> */}
        {/* <p>Is valid: {value && isValidPhoneNumber(value) ? "true" : "false"}</p> */}
        {/* <p>National: {value && formatPhoneNumber(value)}</p> */}
        {/* <p>International: {value && formatPhoneNumberIntl(value)}</p> */}
        <hr style={{ width: "100%" }} />
        <div>
          <ReactPhoneInput
            country={"au"}
            value={value}
            onChange={handleChange}
            masks
            enableSearch
            disableSearchIcon
            // defaultErrorMessage={"error"}
          />
        </div>
        <p style={{ color: "red" }}>
          {value && isValidPhoneNumber(value)
            ? ""
            : "Please input a correct mobile number"}
        </p>
      </header>
    </div>
  );
}

export default App;
