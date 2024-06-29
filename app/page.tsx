"use client";

import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query Query {
    country(code: "BR") {
      name
      native
      capital
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("data", data);

  return (
    <div>
      <h1>Data from GraphQL:</h1>
      <p>{data.country.capital}</p>
    </div>
  );
}
