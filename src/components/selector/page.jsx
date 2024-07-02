"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";

const CustomDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState(props.title);
  const [options, setOptions] = useState([
    "Housekeeping",
    "Security Service",
    "Industrial Hygiene Services",
    "Special Security Arrangements",
    "Driver (Heavy & Light)",
    "Horticulture",
    "House Maids",
    "Cook",
    "Baby Sitter",
    "Care Taker",
    "Dog Trainer/Walker",
    "CCTV Operator",
    "Fire Management",
    "Sanvida Karmi",
    "Courier Delivery",
    "Laundry House",
  ]);

  useEffect(() => {
    const filteredOptions = options.filter((item) => item !== props.title);
    setOptions(filteredOptions);
  }, [props.title]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    props.onServiceTypeChange(selectedValue);
  };

  return (
    <div>
      <select
        className={styles.selector}
        id="myDropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option className={styles.option} key={props.title} value={props.title}>
          {props.title}
        </option>
        {options.map((option) => (
          <option className={styles.option} key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
