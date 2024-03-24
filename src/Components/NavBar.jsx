import React from "react";
import NavBarItem from "./NavBarItem";

export default function NavBar({ title, params }) {
  return (
    <div>
      <NavBarItem title="Trending" params="fetchTrending" />
      <NavBarItem title="Top Rated" params="fetchTopRated" />
    </div>
  );
}
