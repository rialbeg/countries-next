import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import { Country } from "..";
import {
  getAllCountries,
  getCountryByCode,
  getCountryByName,
} from "../../countryApi/apis";
import {
  BorderCountries,
  Container,
  Content,
  CountryButton,
  CountryInfoContent,
} from "./style";
import { Button } from "./style";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useWidth } from "../../hooks/useWidth";

interface Currency {
  name: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const countries: Country[] = await getAllCountries();

  const paths = countries.map((country) => {
    return {
      params: { name: country.name },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const name = context?.params?.name;

  const countryInfo = await getCountryByName(name);
  const borderCodes: Promise<any>[] = [];
  const borderNames: string[] = [];

  countryInfo[0].borders?.map((borderCountry: string, index: number) => {
    borderCodes.push(getCountryByCode(borderCountry));
  });

  const countries = await Promise.all(borderCodes);
  countries.map((country) => {
    borderNames.push(country.name);
  });
  // console.log(borderNames);
  // const countryCode = await getCountryByCode(countryInfo[0])

  // console.log(countryInfo);
  return { props: { countryInfo, borderNames } };
};

export default function CountryInfo({
  countryInfo,
  borderNames,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // const [imgWidth, setImageWidth] = useState(400);
  // const [imgHeight, setImageHeight] = useState(300);
  // if (width || 0 <= 450) {
  //   setImageWidth(300);
  //   setImageHeight(200);
  // }

  return (
    <Container>
      <Link href="/">
        <Button className="button">
          <HiArrowNarrowLeft />
          Back
        </Button>
      </Link>

      <Content>
        <Image
          layout="intrinsic"
          src={countryInfo[0].flags.png}
          width={400}
          height={300}
        />
        <CountryInfoContent>
          <h1>{countryInfo[0].name}</h1>
          <div className="country-info-attr">
            <div className="column-1">
              <p>
                <span>Native Name: </span>
                {countryInfo[0].nativeName}
              </p>
              <p>
                <span>Population: </span>
                {countryInfo[0].population.toLocaleString("en-US")}
              </p>
              <p>
                <span>Region: </span>
                {countryInfo[0].region}
              </p>
              <p>
                <span>Sub Region: </span>
                {countryInfo[0].subregion}
              </p>
              <p>
                <span>Capital: </span>
                {countryInfo[0].capital}
              </p>
            </div>
            <div className="column-2">
              <p>
                <span>Top Level Domain: </span>
                {countryInfo[0].topLevelDomain[0]}
              </p>
              <p>
                <span>Currencies: </span>
                {countryInfo[0]?.currencies?.map(
                  (currency: Currency) => currency.name
                )}
              </p>
              <p>
                <span>Languages: </span>
                {countryInfo[0]?.languages?.map(
                  (language: Currency, index: number) => (
                    <label key={index}>{language.name},</label>
                  )
                )}
              </p>
            </div>
          </div>
          <BorderCountries>
            <p>Border Countries:</p>

            <div>
              {borderNames.map((borderName: string, index: number) => {
                return (
                  <Link href={`/countryinfo/${borderName}`} key={index}>
                    <CountryButton className="button">
                      {borderName}
                    </CountryButton>
                  </Link>
                );
              })}
            </div>
          </BorderCountries>
        </CountryInfoContent>
      </Content>
    </Container>
  );
}
