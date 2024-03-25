import React from "react";

export default function Footer() {
  const getCurrentDate = () => {
    const currentDate = new Date();
    return currentDate.toDateString();
  };

  return (
    <footer className="dark:bg-gray-800 bg-amber-100 fixed bottom-0 w-full py-2 ">
      <div className="container mx-auto flex  justify-between ">
        <p>&copy; {new Date().getFullYear()} Ayo Website</p>
        <p className="text-sm">Today is: {getCurrentDate()}</p>
      </div>
    </footer>
  );
}
