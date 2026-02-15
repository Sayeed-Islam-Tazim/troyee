import Image from "next/image";
import {
  FaAlignRight,
  FaClock,
  FaLocationDot,
  FaMapLocationDot,
  FaMobileScreenButton,
} from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const SideDrawer = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-5" className="drawer-button text-lg">
          <FaAlignRight />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-5"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 min-h-full w-80 p-4 ">
          {/* Sidebar content here */}
          <div className="flex items-center gap-1/4 mb-8">
            <Image
              src={"/troyee-logo.png"}
              alt="logo"
              width={100}
              height={100}
            />
            <p className="text-2xl">Troyee</p>
          </div>
          <p className="mb-4">
            Nullam dignissim, ante scelerisque the is euismod fermentum odio sem
            semper the is erat, a feugiat leo urna eget eros. Duis Aenean a
            imperdiet risus.
          </p>
          <p className="mb-4">Contact Info</p>
          <div className="mb-4 text-xl space-y-2">
            <p className="flex items-center gap-4 text-green-600">
              <FaMapLocationDot />{" "}
              <span className="font-medium text-white">Address</span>
            </p>
            <p className="flex items-center gap-4 text-green-600">
              <HiMail /> <span className="font-medium text-white">Email</span>
            </p>
            <p className="flex items-center gap-4 text-green-600">
              <FaClock /> <span className="font-medium text-white">Time</span>
            </p>
            <p className="flex items-center gap-4 text-green-600">
              <FaMobileScreenButton />{" "}
              <span className="font-medium text-white">01944780125</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
