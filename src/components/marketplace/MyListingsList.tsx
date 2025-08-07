import {Link} from "react-router-dom";
import routerPaths from "../../routerPaths.tsx";
import carExample1 from "../../assets/carExample1.jpg";
import {FaRegTrashCan} from "react-icons/fa6";
import {BsThreeDotsVertical} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

const MyListingsList = () => {

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showDeleteListingModal, setShowDeleteListingModal] = useState(false);
    const openDeleteModal = () => {
        setShowDeleteModal(true);
        setShowDeleteListingModal(false)
    };
    const closeDeleteModal = () => {
        setShowDeleteModal(false);
    };

    return (
        <div>
            <Link to={routerPaths.vehicle_update_price}
                  className="flex items-center p-3 bg-[#FBFBFB] hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3 relative w-[55%] md:w-auto">
                    <div className="md:text-lg lg:text-base font-medium leading-5">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                    <div
                        className="absolute left-full top-1/2 md:top-0 transform -translate-y-1/2 md:translate-y-0 whitespace-nowrap text-[8px] md:text-[10px] font-medium text-white bg-[#06C753] py-0.5 px-1.5 rounded-md md:rounded-lg">
                        Updating Price
                    </div>
                </div>
                <div className="ml-auto relative">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openDeleteModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <FaRegTrashCan size="17" className="mr-1.5"/> Delete Listing
                    </button>
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setShowDeleteListingModal(!showDeleteListingModal);
                            }}
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"
                                             className={`${showDeleteListingModal ? 'text-[#1B74E4]' : ''}`}/>
                    </button>
                    {showDeleteListingModal && (
                        <div
                            className="absolute right-1 top-8 z-10 bg-white rounded-md md:hidden p-4 shadow-sm">
                            <button type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        openDeleteModal();
                                    }}
                                    className="bg-[#F5F9FF] text-[#1B74E4] border border-[#E1EEFF] flex items-center cursor-pointer py-1.5 px-3 rounded-lg whitespace-nowrap">
                                <FaRegTrashCan size="17" className="mr-1.5"/> Delete Listing
                            </button>
                        </div>
                    )}
                </div>
            </Link>
            <Link to={routerPaths.vehicle_deleting}
                  className="flex items-center p-3 hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3 relative w-[55%] md:w-auto">
                    <div className="md:text-lg lg:text-base font-medium leading-5">
                        2016 Dodge Challenger SXT Plus
                    </div>
                    <div className="text-[#5D6162] text-xs md:text-sm lg:text-xs">
                        <span>$17,995</span> - <span>110K Miles</span>
                    </div>
                    <div
                        className="absolute left-full top-1/2 md:top-0 transform -translate-y-1/2 md:translate-y-0 whitespace-nowrap text-[8px] md:text-[10px] font-medium text-white bg-[#FF0000] py-0.5 px-1.5 rounded-md md:rounded-lg">
                        Deleting
                    </div>
                </div>
                <div className="ml-auto">
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                openDeleteModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <FaRegTrashCan size="17" className="mr-1.5"/> Delete Listing
                    </button>
                    <button type="button"
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"/>
                    </button>
                </div>
            </Link>
            <Link to={routerPaths.vehicle_listed}
                  className="flex items-center p-3 bg-[#FBFBFB] hover:bg-[#f7f7f7] cursor-pointer duration-300 ease-out">
                <div>
                    <img src={carExample1} alt="Car Example"
                         className="object-cover w-[50px] h-[50px] rounded-md"/>
                </div>
                <div className="px-2 lg:px-3 w-[55%] md:w-auto">
                    <div className="md:text-lg lg:text-base font-medium leading-5">
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
                                openDeleteModal();
                            }}
                            className="hidden bg-[#F5F9FF] text-[#1B74E4] text-sm border border-[#E1EEFF] md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#1B74E4] hover:text-white duration-300 ease-out">
                        <FaRegTrashCan size="17" className="mr-1.5"/> Delete Listing
                    </button>
                    <button type="button"
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"/>
                    </button>
                </div>
            </Link>
            {showDeleteModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="bg-white rounded-lg w-90 p-5 relative border border-[#33333333] shadow-[0px_12px_128px_0px_rgba(0,40,11,0.2)] animate-[fadeZoomIn_0.3s_ease-out]">
                        <button
                            onClick={closeDeleteModal}
                            className="absolute top-3 right-3 border border-[#3333331A] rounded-md p-1 cursor-pointer">
                            <AiOutlineClose size={18}/>
                        </button>
                        <div className="bg-[#F5F9FF] w-fit p-2 rounded-full mx-auto mb-4">
                            <FaRegTrashCan size={20} className="text-[#1B74E4]"/>
                        </div>
                        <div className="font-medium text-center">
                            Delete listing from Marketplace?
                        </div>
                        <div className="text-sm text-center text-[#0000008F] mb-5">
                            your vehicle will be removed shortly.
                        </div>
                        <button
                            className="text-sm bg-[#1B74E4] text-white rounded-md w-[90%] mx-auto block py-2 cursor-pointer"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default MyListingsList;