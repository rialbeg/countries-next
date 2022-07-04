import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { Container, CountrySection, InputSection } from "./style";
import { BiSearchAlt2 } from "react-icons/bi";
import { SyntheticEvent, useState } from "react";
import { SelectRegion } from "../components";
import { getAllCountries } from "../countryApi/apis";
import { CountryCard } from "../components";

export interface Country {
  flags: {
    png: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}
export const getStaticProps: GetStaticProps = async () => {
  const countries: Country[] = await getAllCountries();

  return {
    props: { countries },
  };
};

const Home: NextPage = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [filteredData, setFilteredData] = useState(countries);
  const [filteredDataHome, setFilteredDataHome] = useState(filteredData);

  const handleFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  const handleSearchCountryChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    let value = target.value.toLowerCase();
    let result = [];

    result = filteredData.filter((data: Country) => {
      return data.name.toLowerCase().search(value) != -1;
    });

    setFilteredDataHome(result);
  };

  return (
    <Container>
      <InputSection onSubmit={handleFormSubmit}>
        <div className="search-input">
          <div className="search-content">
            <BiSearchAlt2 size={20} />
            <input
              type="text"
              placeholder="Search for a country..."
              onChange={handleSearchCountryChange}
            />
          </div>
        </div>

        <SelectRegion
          data={{
            countries,
            filteredData,
            setFilteredData,
            setFilteredDataHome,
          }}
        />
      </InputSection>

      <CountrySection>
        {filteredDataHome.map((country: Country, index: number) => (
          <Link href={`/countryinfo/${country.name}`} key={index}>
            <a>
              <CountryCard
                country={{
                  flags: { png: country.flags.png },
                  name: country.name,
                  population: country.population,
                  region: country.region,
                  capital: country.capital,
                }}
              />
            </a>
          </Link>
        ))}
      </CountrySection>
    </Container>
  );
};

export default Home;
