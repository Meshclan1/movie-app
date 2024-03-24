import Header from "../Components/Header";

const api_key = process.env.API_KEY;

export default async function Home() {
  const imdb = await fetch();

  const data = await res.json();

  return <Header />;
}
