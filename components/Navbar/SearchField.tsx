import React, { useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon";
import QuickAccess from "./QuickAccess";
const SearchField = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchClick = () => {};
  return (
    <div
      id="nav-middle-container"
      className="h-[37px] flex justify-center items-center gap-1"
    >
      <QuickAccess />
      <input
        id="search"
        name="search"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const input = e.target.value;
          setSearchValue(input);
        }}
        autoComplete={"off"}
        placeholder="Search love questions and answers"
        className="h-full indent-4 w-[427px] border border-[#D6D5D5] focus:outline-[#D6D5D5] hover:border-[#D6D5D5] placeholder:italic"
      />
      <div
        id="search-button"
        className="min-h-full p-2 border border-[##D6D5D5] flex justify-center items-center cursor-pointer hover:border-[#D6D5D5]"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchField;
