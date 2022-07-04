import { useState } from "react";
import { Country } from "../../pages";
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
} from "./style";

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

  const toggling = () => setIsOpen(!isOpen);

  const handleFilterRegionChoice = (value: string) => {
    let result = [];
    console.log(value);
    result = data.countries.filter((data: Country) => {
      return data.region.search(value === "All" ? "" : value) != -1;
    });
    // console.log(result);
    data.setFilteredData(result);
    data.setFilteredDataHome(result);
  };
  const onOptionClicked = (option: string) => {
    handleFilterRegionChoice(option);
    setIsOpen(false);
  };

  const options = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <DropDownContainer>
      <DropDownHeader className="dropdown-header" onClick={toggling}>
        Filter by Region
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
