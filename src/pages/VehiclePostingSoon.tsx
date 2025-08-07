import carExample1 from "../assets/carExample1.jpg";
import drivenIcon from "../assets/driven_icon.png";
import transmissionIcon from "../assets/transmission_icon.png";
import coloringIcon from "../assets/coloring_icon.png";
import fuelIcon from "../assets/fuel_icon.png";
import statusIcon from "../assets/status_icon.png";
import cleanIcon from "../assets/clean_icon.png";

import {useState} from 'react';
import {FiSearch} from "react-icons/fi";
import {FaChevronLeft} from "react-icons/fa";
import {Link} from "react-router-dom";
import routerPaths from "../routerPaths.tsx";

import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType} from 'swiper/types';
import {Navigation, Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {TbArrowNarrowLeftDashed, TbArrowNarrowRightDashed} from "react-icons/tb";
import {PiDot} from "react-icons/pi";
import {FaRegTrashCan} from "react-icons/fa6";
import {AiOutlineClose} from "react-icons/ai";
import {BsEmojiSmile} from "react-icons/bs";

const VehiclePostingSoon = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const [showRemoveModal, setShowRemoveModal] = useState(false);
    const openRemoveModal = () => {
        setShowRemoveModal(true);
    };
    const closeRemoveModal = () => {
        setShowRemoveModal(false);
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const openEditModal = () => {
        setShowEditModal(true);
    };
    const closeEditModal = () => {
        setShowEditModal(false);
    };

    const handleSave = () => {
        setSavedText(tempText);
        setShowEditModal(false);
    };

    const defaultText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;
    const [savedText, setSavedText] = useState(defaultText);
    const [tempText, setTempText] = useState(savedText);

    return (
        <div className="w-full h-full">
            <div className="border-b border-[#EBEBEB] h-[56px] hidden md:flex items-center pl-5 lg:pl-8 w-full fixed top-0 md:left-[70px] lg:left-[225px] bg-white z-20">
                <div className="relative flex-grow max-w-sm mr-3">
                    <input
                        type="text"
                        className="form-input pl-3 pr-9 py-2 rounded-lg border border-[#EBEBEB] placeholder-[#4B4B62] text-sm font-light w-full focus:outline-none"
                        placeholder="Search inventory, listings, and more..."
                        name="search"
                        id="search"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <FiSearch className="text-[#4B4B62]" size="20"/>
                    </div>
                </div>
            </div>

            <div className="py-5 px-4 md:px-6 md:mt-[56px] lg:px-8">
                <Link to={routerPaths.marketplace}
                      className="bg-[#F5F5F5] border border-[#EBEBEB] w-fit p-1.5 rounded-md block">
                    <FaChevronLeft size={15}/>
                </Link>
                <div className="mt-4 max-w-3xl md:flex">
                    <div className="md:w-[350px] md:mr-5">
                        <Swiper
                            modules={[Navigation, Thumbs]}
                            thumbs={{swiper: thumbsSwiper}}
                            navigation={{
                                prevEl: '#custom-prev',
                                nextEl: '#custom-next',
                            }}
                            className="rounded-xl relative"
                        >
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-xl w-full h-[200px] object-cover"/>
                            </SwiperSlide>
                            <button
                                className="absolute top-1/2 left-3 z-10 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-md cursor-pointer"
                                id="custom-prev"
                            >
                                <TbArrowNarrowLeftDashed size={18} className="text-[#01011D]"/>
                            </button>
                            <button
                                className="absolute top-1/2 right-3 z-10 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-md cursor-pointer"
                                id="custom-next"
                            >
                                <TbArrowNarrowRightDashed size={18} className="text-[#01011D]"/>
                            </button>
                        </Swiper>

                        <Swiper
                            modules={[Thumbs]}
                            onSwiper={setThumbsSwiper}
                            slidesPerView={5.5}
                            spaceBetween={10}
                            className="mt-3"
                        >
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={carExample1} alt="car example"
                                     className="rounded-lg w-[60px] h-[60px] object-cover"/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="h-[1.5px] w-full bg-[#EBEBEB] mt-4 mb-3 md:hidden"/>
                    <div className="">
                        <div className="text-[#01011D] font-medium text-lg md:text-xl lg:text-2xl md:mb-2">
                            2016 Dodge Challenger SXT Plus
                        </div>
                        <div className="text-[#1B74E4] text-xl md:text-2xl lg:text-[28px] mb-3 md:mb-4">
                            $17,995
                        </div>
                        <div className="text-[#65686C] text-sm mb-3 md:mb-3.5">
                            {savedText}
                        </div>
                        <div className="flex">
                            <button type="button"
                                    onClick={openRemoveModal}
                                    className="bg-[#FAFAFA] border border-[#3333331A] flex items-center cursor-pointer py-1.5 px-3 rounded-lg mr-2 hover:text-[#FF0000] duration-300 ease-out">
                                <FaRegTrashCan size="20" className="mr-1"/> Remove
                            </button>
                            <button type="button"
                                    onClick={openEditModal}
                                    className="border border-[#EEEEEE] cursor-pointer py-1.5 px-3 font-medium rounded-lg">
                                Edit
                            </button>
                        </div>
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
                        {showEditModal && (
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div
                                    className="bg-white rounded-lg p-5 w-90 md:w-[425px] relative border border-[#33333333] shadow-[0px_12px_128px_0px_rgba(0,40,11,0.2)] animate-[fadeZoomIn_0.3s_ease-out]">
                                    <button
                                        onClick={closeEditModal}
                                        className="absolute top-3 right-3 border border-[#3333331A] rounded-md p-1 cursor-pointer">
                                        <AiOutlineClose size={18}/>
                                    </button>
                                    <div className="font-medium text-xl mb-5">
                                        Edit Description
                                    </div>
                                    <div className="text-center">
                                        <div className="border border-[#3333334D] pt-3 px-3 rounded-xl">
                                            <textarea
                                                className="w-full h-[240px] md:h-[200px] text-sm text-[#333333] resize-none focus:outline-none"
                                                value={tempText}
                                                onChange={(e) => setTempText(e.target.value)}>
                                            </textarea>
                                            <div
                                                className="border-t border-t-[#33333333] mt-2 flex justify-between items-center py-3">
                                                <BsEmojiSmile size={25}/>
                                                <button type="button"
                                                        onClick={handleSave}
                                                        className="bg-[#1B74E4] text-white flex items-center cursor-pointer py-1.5 px-6 rounded-lg">
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="h-[1.5px] w-full bg-[#EBEBEB] mt-5 md:hidden"/>
                </div>
                <div className="mt-3 md:mt-7">
                    <div className="text-[#01011D] font-medium md:text-lg mb-3">
                        About this vehicle
                    </div>
                    <div className="flex items-center mb-2 md:mb-2.5">
                        <div className="mr-2 md:mr-2.5">
                            <img src={drivenIcon} alt="driven"/>
                        </div>
                        <div className="text-[#080809] text-sm md:text-base">
                            Driven 348,000 miles
                        </div>
                    </div>
                    <div className="flex items-center mb-2 md:mb-2.5">
                        <div className="mr-2 md:mr-2.5">
                            <img src={transmissionIcon} alt="transmission"/>
                        </div>
                        <div className="text-[#080809] text-sm md:text-base">
                            Automatic transmission
                        </div>
                    </div>
                    <div className="flex items-center mb-2 md:mb-2.5">
                        <div className="mr-2 md:mr-2.5">
                            <img src={coloringIcon} alt="color"/>
                        </div>
                        <div className="text-[#080809] text-sm md:text-base">
                            Exterior color: Grey <PiDot className="inline"/> Interior color: Grey
                        </div>
                    </div>
                    <div className="flex items-center mb-2 md:mb-2.5">
                        <div className="mr-2 md:mr-2.5">
                            <img src={fuelIcon} alt="fuel"/>
                        </div>
                        <div className="text-[#080809] text-sm md:text-base">
                            Fuel type: Diesel
                        </div>
                    </div>
                    <div className="flex items-center mb-2 md:mb-2.5">
                        <div className="mr-2 md:mr-2.5">
                            <img src={statusIcon} alt="status"/>
                        </div>
                        <div className="text-[#0064D1] text-sm md:text-base md:font-semibold">
                            Good condition
                        </div>
                    </div>
                    <div className="flex items-start mb-2 md:mb-2.5">
                        <div className="mr-2 md:mr-2.5 mt-1">
                            <img src={cleanIcon} alt="clean title"/>
                        </div>
                        <div>
                            <div className="text-[#080809] text-sm md:text-base">
                                Clean title
                            </div>
                            <div className="text-[#65686C] text-xs">
                                This vehicle has no significant damage or problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehiclePostingSoon;