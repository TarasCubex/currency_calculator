'use client';

import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import Option from "./Option/Option";
import Control from "./Control/Control";
import type { TOption } from "./CurrencyDropDown.types";
import styles from "./CurrencyDropdown.module.scss";
import type { TCurrency } from "@/types";

const options: TOption[] = [
  { value: "usd", label: "USD" },
  { value: "eur", label: "EUR" },
  { value: "gbp", label: "GBP" },
  { value: "aud", label: "AUD" },
  { value: "cad", label: "CAD" },
];

const CurrencyDropdown: React.FC<{currency: TCurrency, setCurrency : React.Dispatch<SetStateAction<TCurrency>>}> = ({currency, setCurrency}) => {

  return (
    <Select
      instanceId='seclect'
      isMulti={false}
      options={options}
      value={{value: currency, label: currency.toUpperCase() as TOption['label']}}
      onChange={(option) =>option && setCurrency((option as TOption).value)}
      classNames={{
        control: (state) =>
          state.isFocused ? styles.control_focused : styles.control,
        container: () => styles.container,
        menu: () => styles.menu,
        indicatorSeparator: () => styles.separator,
        option: (state) => state.isSelected ? styles.option_selected : state.isFocused ? styles.option_focused  : styles.option,
        singleValue: () => styles.value,
        valueContainer: () => styles.value_container,
        indicatorsContainer: () => styles.indicator
      }}
      components={{ Option, Control }}
      closeMenuOnSelect={true}
      isSearchable={false}
      blurInputOnSelect={true}
    />
  );
};

export default CurrencyDropdown;
