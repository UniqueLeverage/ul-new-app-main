import {Link} from "react-router-dom";
import routerPaths from "../../routerPaths.tsx";
import carExample1 from "../../assets/carExample1.jpg";
import {HiPlus} from "react-icons/hi";
import {BsThreeDotsVertical} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {GoClock} from "react-icons/go";
import {useState} from "react";

interface NotListedListProps {
    setActiveKey: (value: (((prevState: string) => string) | string)) => void
}

const NotListedList = ({setActiveKey}: NotListedListProps) => {
    const [showAddButton, setShowAddButton] = useState(false);
    const [showPostingSoonModal, setShowPostingSoonModal] = useState(false);

    const openPostingSoonModal = () => {
        setShowAddButton(false);
        setShowPostingSoonModal(true);
    };
    const closePostingSoonModal = () => {
        setShowPostingSoonModal(false);
    };
    const switchToPostingSoonTab = () => {
        setActiveKey("posting_soon");
        setShowPostingSoonModal(false);
    };

    return (
        <div>
            <Link to={routerPaths.vehicle_not_listed}
                  className="flex items-center p-3 bg-[#FBFBFB] hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3">
                    <div className="md:text-lg lg:text-base font-medium">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                </div>
                <div className="ml-auto relative">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openPostingSoonModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <HiPlus size="18" className="mr-1"/> Post to Marketplace
                    </button>
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setShowAddButton(!showAddButton);
                            }}
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"
                                             className={`${showAddButton ? 'text-[#1B74E4]' : ''}`}/>
                    </button>
                    {showAddButton && (
                        <div
                            className="absolute right-1 top-8 z-10 bg-white rounded-md md:hidden p-4 shadow-sm">
                            <button type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        openPostingSoonModal();
                                    }}
                                    className="bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] flex items-center cursor-pointer py-1.5 px-3 rounded-lg whitespace-nowrap">
                                <HiPlus size="18" className="mr-1"/> Post to Marketplace
                            </button>
                        </div>
                    )}
                </div>
            </Link>
            <Link to="#"
                  className="flex items-center p-3 hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3">
                    <div className="md:text-lg lg:text-base font-medium">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openPostingSoonModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <HiPlus size="18" className="mr-1"/> Post to Marketplace
                    </button>
                    <button type="button"
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"/>
                    </button>
                </div>
            </Link>
            <Link to="#"
                  className="flex items-center p-3 bg-[#FBFBFB] hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3">
                    <div className="md:text-lg lg:text-base font-medium">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openPostingSoonModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <HiPlus size="18" className="mr-1"/> Post to Marketplace
                    </button>
                    <button type="button"
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"/>
                    </button>
                </div>
            </Link>
            <Link to="#"
                  className="flex items-center p-3 hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3">
                    <div className="md:text-lg lg:text-base font-medium">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openPostingSoonModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <HiPlus size="18" className="mr-1"/> Post to Marketplace
                    </button>
                    <button type="button"
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"/>
                    </button>
                </div>
            </Link>
            <Link to="#"
                  className="flex items-center p-3 bg-[#FBFBFB] hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3">
                    <div className="md:text-lg lg:text-base font-medium">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openPostingSoonModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <HiPlus size="18" className="mr-1"/> Post to Marketplace
                    </button>
                    <button type="button"
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"/>
                    </button>
                </div>
            </Link>
            {showPostingSoonModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="bg-white rounded-lg w-90 md:w-[425px] relative border border-[#33333333] shadow-[0px_12px_128px_0px_rgba(0,40,11,0.2)] animate-[fadeZoomIn_0.3s_ease-out]">
                        <button
                            onClick={closePostingSoonModal}
                            className="absolute top-3 right-3 border border-[#3333331A] rounded-md p-1 cursor-pointer">
                            <AiOutlineClose size={18}/>
                        </button>
                        <div className="font-medium text-xl mb-1 px-5 pt-5">
                            Posting Soon!
                        </div>
                        <div className="text-xs text-[#0000008F] mb-6 px-5">
                            Your vehicle will be listed on the Marketplace shortly.
                        </div>
                        <div className="text-center px-5">
                            <img src={carExample1} alt="Car Example"
                                 className="object-cover w-[235px] h-[150px] rounded-xl mx-auto mb-2.5"/>
                            <div className="text-[#01011D] font-medium">
                                2016 Dodge Challenger SXT Plus
                            </div>
                            <div className="text-[#1B74E4] text-lg">
                                $17,995
                            </div>
                        </div>
                        <div
                            className="bg-[#F7F7F7] w-full px-5 flex rounded-b-lg justify-between py-2 mt-4">
                            <div>
                                <button type="button"
                                        onClick={closePostingSoonModal}
                                        className="bg-[#F5F9FF] text-[#1B74E4] border border-[#E1EEFF] text-xs md:text-sm flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                                    <HiPlus size="18" className="mr-1"/> Add Another Vehicle
                                </button>
                            </div>
                            <div>
                                <button type="button"
                                        onClick={switchToPostingSoonTab}
                                        className="bg-[#1B74E4] text-white border border-[#E1EEFF] text-xs md:text-sm flex items-center cursor-pointer py-1.5 px-3 rounded-lg">
                                    <GoClock size="18" className="mr-1"/> View Posting Que
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
export default NotListedList;