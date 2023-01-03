import "./App.css";
import "react-phone-number-input/style.css";
import { useState } from "react";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
const getMember = { mobile: "+61413549397" };
function App() {
  const [value, setValue] = useState(getMember.mobile);
  console.log(value);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "200px" }}>
          <PhoneInput
            initialValueFormat="national"
            placeholder="Enter phone number"
            defaultCountry="AU"
            value={value}
            onChange={setValue}
          />
        </div>
        <p style={{ color: "red" }}>
          {value && isValidPhoneNumber(value)
            ? ""
            : "Please input a correct mobile number"}
        </p>
        <p>
          Is possible:{" "}
          {value && isPossiblePhoneNumber(value) ? "true" : "false"}
        </p>
        <p>Is valid: {value && isValidPhoneNumber(value) ? "true" : "false"}</p>
        <p>National: {value && formatPhoneNumber(value)}</p>
        <p>International: {value && formatPhoneNumberIntl(value)}</p>
      </header>
    </div>
  );
}

export default App;
