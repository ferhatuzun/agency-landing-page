import { Button, Drawer } from "@mui/material";
import CustomButton from "../ui/CustomButton";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <div className=" font-inter bg-bg py-4">
      <div className="container mx-auto ">
        <div className="hidden lg:flex items-center justify-between">
          <div>
            <img src="/images/Logo.png" alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-x-5 text-text">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Feature</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-x-4">
            <CustomButton href="#" size="sm" color="default">
              Login
            </CustomButton>
            <CustomButton href="#" size="sm" color="colored">
              Sign Up
            </CustomButton>
          </div>
        </div>
        <div className="flex justify-end lg:hidden">
          <Button
            onClick={toggleDrawer(true)}
            className="bg-green"
            variant="text"
          >
            <GiHamburgerMenu size={45} className="text-green" />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className="flex flex-col h-screen py-5 px-12">
              <div>
                <img src="/images/Logo.png" alt="" />
              </div>
              <div className="mt-10">
                <ul className=" gap-x-5 text-text text-lg">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Service</a>
                  </li>
                  <li>
                    <a href="#">Feature</a>
                  </li>
                  <li>
                    <a href="#">Product</a>
                  </li>
                  <li>
                    <a href="#">Testimonial</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="flex mt-auto gap-x-4 ">
                <CustomButton href="#" size="sm" color="default">
                  Login
                </CustomButton>
                <CustomButton href="#" size="sm" color="colored">
                  Sign Up
                </CustomButton>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;
