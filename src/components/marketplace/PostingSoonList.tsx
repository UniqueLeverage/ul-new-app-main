import {Link} from "react-router-dom";
import routerPaths from "../../routerPaths.tsx";
import carExample1 from "../../assets/carExample1.jpg";
import {FaRegTrashCan} from "react-icons/fa6";
import {BsThreeDotsVertical} from "react-icons/bs";
import {AiOutlineClose} from "react-icons/ai";
import {useState} from "react";

const PostingSoonList = () => {
    const [showDeleteButton, setShowDeleteButton] = useState(false);
    const [showRemoveModal, setShowRemoveModal] = useState(false);

    const openRemoveModal = () => {
        setShowRemoveModal(true);
        setShowDeleteButton(false);
    };
    const closeRemoveModal = () => {
        setShowRemoveModal(false);
    };

    return (
        <div>
            <Link to={routerPaths.vehicle_posting_soon}
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
                                openRemoveModal();
                            }}
                            className="hidden border border-[#3333331A] text-sm md:flex items-center cursor-pointer py-1.5 px-3 rounded-lg hover:text-[#FF0000] duration-300 ease-out">
                        <FaRegTrashCan size="17" className="mr-1"/> Remove
                    </button>
                    <button type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setShowDeleteButton(!showDeleteButton);
                            }}
                            className="md:hidden mr-1">
                        <BsThreeDotsVertical size="23"
                                             className={`${showDeleteButton ? 'text-[#FF0000]' : ''}`}/>
                    </button>
                    {showDeleteButton && (
                        <div
                            className="absolute right-1 top-8 z-10 bg-white rounded-md md:hidden p-4 shadow-sm">
                            <button type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        openRemoveModal();
                                    }}
                                    className="border border-[#3333331A] text-sm flex items-center cursor-pointer py-1.5 px-3 rounded-lg">
                                <FaRegTrashCan size="17" className="mr-1"/> Remove
                            </button>
                        </div>
                    )}
                </div>
            </Link>
            {showRemoveModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div
                        className="bg-white rounded-lg w-90 p-5 relative border border-[#33333333] shadow-[0px_12px_128px_0px_rgba(0,40,11,0.2)] animate-[fadeZoomIn_0.3s_ease-out]">
                        <button
                            onClick={closeRemoveModal}
                            className="absolute top-3 right-3 border border-[#3333331A] rounded-md p-1 cursor-pointer">
                            <AiOutlineClose size={18}/>
                        </button>
                        <div className="bg-[#F5F9FF] w-fit p-2 rounded-full mx-auto mb-4">
                            <FaRegTrashCan size={20} className="text-[#1B74E4]"/>
                        </div>
                        <div className="font-medium text-center">
                            Do you want to remove this task?
                        </div>
                        <div className="text-sm text-center text-[#0000008F] mb-5">
                            This vehicle will not post to the marketplace.
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
export default PostingSoonList;