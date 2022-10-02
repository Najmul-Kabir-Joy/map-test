import CompanyLogo from "../Navbar/CompanyLogo";
import NavigationIcons from "../Navbar/NavigationIcons";
import SearchField from "../Navbar/SearchField";

const Topbar = () => {
  return (
    <div className="bg-white sticky top-0 h-[100px] px-20 flex items-center">
      <CompanyLogo />
      <div className="flex basis-2/3 justify-between">
        <SearchField />
        <NavigationIcons />
      </div>
    </div>
  );
};

export default Topbar;
