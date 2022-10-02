import { Button } from "@mui/material";
import BellIcon from "../assets/icons/BellIcon";
import BookMarkIcon from "../assets/icons/BookMarkIcon";
import MailIcon from "../assets/icons/MailIcon";
import UserIcon from "../assets/icons/UserIcon";

const NavigationIcons = () => {
  return (
    <div className="flex gap-10">
      <div className="flex gap-8 items-baseline">
        <BookMarkIcon />
        <BellIcon />
        <MailIcon />
        <UserIcon />
      </div>
      <Button
        style={{
          backgroundColor: "#ED028C",
        }}
        variant="contained"
      >
        Upload all related
      </Button>
    </div>
  );
};

export default NavigationIcons;
