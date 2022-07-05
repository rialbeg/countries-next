import { useState } from "react";
import { Country } from "../../pages";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./style";

import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

interface SelectRegionProps {
  data: {
    countries: Country[];
    filteredData: Country[];
    setFilteredData: (countries: Country[]) => void;
    setFilteredDataHome: (countries: Country[]) => void;
  };
}

export function SelectRegion({ data }: SelectRegionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("Filter by Region");

  const toggling = () => setIsOpen(!isOpen);

  const handleFilterRegionChoice = (value: string) => {
    let result = [];

    result = data.countries.filter((data: Country) => {
      return data.region.search(value === "All" ? "" : value) != -1;
    });

    data.setFilteredData(result);

    data.setFilteredDataHome(result);
  };
  const onOptionClicked = (option: string) => {
    handleFilterRegionChoice(option);
    setOptionValue(option);
    setIsOpen(false);
  };

  const options = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <DropDownContainer>
      <DropDownHeader className="dropdown-header" onClick={toggling}>
        {isOpen && <RiArrowUpSLine size={20} className="arrow" />}
        {!isOpen && <RiArrowDownSLine size={20} className="arrow" />}
        {optionValue}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer className="dropdown-list-container">
          <DropDownList>
            {options.map((option, index) => (
              <ListItem onClick={() => onOptionClicked(option)} key={index}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
