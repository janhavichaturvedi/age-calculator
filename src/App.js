import React, { useState } from "react";
import "./index.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthYear = parseFloat(birthDate.substring(0, 4));
    const birthMonth = parseFloat(birthDate.substring(5, 7));
    const birthDay = parseFloat(birthDate.substring(8, 10));

    let years = today.getFullYear() - birthYear;
    const todayMonth = today.getMonth() + 1;
    const todayDay = today.getDate();

    if (
      todayMonth < birthMonth ||
      (todayMonth === birthMonth && todayDay < birthDay)
    ) {
      years--;
    }

    let months = todayMonth - birthMonth;
    if (todayDay < birthDay) {
      months--;
    }
    if (months < 0) {
      months = 12 + months;
    }

    const days =
      todayDay < birthDay
        ? today.getDate() + (birthDay - todayDay)
        : today.getDate() - birthDay;

    setAge({ years, months, days });
  };

  return (
    <main>
    <div>
      <div className="heading"><h1>Age Calculator</h1></div>
      
      <label>Enter your birth date: </label>
      <div className="wrap">
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="input_field"
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && (
        <p>
          Your age is: {age.years} years, {age.months} months, and {age.days}{" "}
          days
        </p>
      )}
      </div>
    </div>
    </main>
  );
}

export default AgeCalculator;
