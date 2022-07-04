import Image from "next/image";
import { Country } from "../../pages";
import { Container } from "./style";

interface CountryCardProps {
  country: Country;
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <Container className="country-card">
      <div className="flag">
        <Image
          src={country.flags.png}
          layout="intrinsic"
          width={220}
          height={150}
        />
      </div>

      <div className="country-card-info">
        <h2>{country.name}</h2>
        <p>
          <span>Population: </span>
          {country.population.toLocaleString("en-US")}
        </p>
        <p>
          <span>Region: </span>
          {country.region}
        </p>
        <p>
          <span>Capital: </span>
          {country.capital || "Doesn't have one"}
        </p>
      </div>
    </Container>
  );
}
