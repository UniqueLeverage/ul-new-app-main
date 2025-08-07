import {NavLink} from "react-router-dom";
import mainLogo from "../../assets/logoLandscape.png";
import mainLogoIcon from "../../assets/logoIcon.png";
import userProfile from "../../assets/profileUserEx1.jpg";
import {BsGear} from "react-icons/bs";
import {IoCalendarClearOutline} from "react-icons/io5";
import {IoMdMenu} from "react-icons/io";
import {RiSearchLine} from "react-icons/ri";

const Sidebar = () => {
    const menuItem = [
        {path: "/marketplace", name: "Marketplace", icon: <IoCalendarClearOutline size="23"/>},
        {path: "/settings", name: "Settings", icon: <BsGear size="23"/>}
    ];

    return (
        <>
            <div className="md:w-[70px] lg:w-[225px] h-screen bg-[#F7F7F7] fixed top-0 left-0 hidden md:flex flex-col border-r border-[#EBEBEB] overflow-hidden">
                <div className="py-3 border-b border-[#EBEBEB] flex justify-center items-center h-[56px]">
                    <img src={mainLogo} alt="Unique Leverage" className="hidden lg:flex w-[80%]"/>
                    <img src={mainLogoIcon} alt="Unique Leverage" className="w-[38px] h-[38px] lg:hidden"/>
                </div>

                <div className="py-3 px-3 lg:p-5 flex-1 overflow-y-auto no-scrollbar">
                    {menuItem.map((item, index) => (
                        <div key={index}>
                            {index !== 0 && <div className="bg-[#EBEBEB] h-[1px] w-[95%] my-2 lg:my-3 mx-auto"/>}
                            <NavLink
                                to={item.path}
                                className={({isActive}) =>
                                    `flex items-center justify-center lg:justify-start p-3 lg:p-3 rounded-xl transition ${
                                        isActive
                                            ? "bg-[#ECECEC] text-[#01011D] font-medium"
                                            : "text-[#787891] hover:text-[#01011D]"
                                    }`
                                }
                            >
                                <div className="flex items-center justify-center lg:w-10 text-inherit">{item.icon}</div>
                                <span className="text-sm hidden lg:inline">{item.name}</span>
                            </NavLink>
                        </div>
                    ))}
                </div>

                <div className="py-6 lg:pl-4 lg:pr-2">
                    <div className="flex items-center justify-center lg:justify-start">
                        <img
                            src={userProfile}
                            alt="User Profile"
                            className="w-10 h-10 lg:w-8 lg:h-8 rounded-full object-cover"
                        />
                        <div className="pl-2 font-medium text-[#01011D] hidden lg:inline text-xs">Nathan Allison</div>
                    </div>
                </div>
            </div>

            <div className="md:hidden border-b border-[#EBEBEB] flex justify-between items-center p-4">
                <div className="bg-[#F7F7F7] p-1.5 border border-[#EBEBEB] rounded-md">
                    <IoMdMenu size="25" className="text-black"/>
                </div>
                <div>
                    <img src={mainLogo} alt="Unique Leverage" className="h-[30px]"/>
                </div>
                <div className="p-1.5 border border-[#EBEBEB] rounded-md">
                    <RiSearchLine size="25" className="text-black"/>
                </div>
            </div>
        </>
    );
};

export default Sidebar;