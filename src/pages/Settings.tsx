import {useState} from "react";
import {FiSearch} from "react-icons/fi";
import {SettingsDescription, SettingsLocation, SettingsPrice, SettingsProcessing} from "../components";

const Settings = () => {
    const [activeKey, setActiveKey] = useState<string>("");

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
                <div className="border-b border-b-[#EBEBEB] pb-2 mb-6">
                    <div className="text-[#01011D] font-medium text-lg md:text-[22px] leading-sss">
                        Manage Settings
                    </div>
                    <div className="text-[#575757] text-sm md:text-base">
                        Automation rules for Unique Leverage
                    </div>
                </div>
                <div className="border-b border-b-[#EBEBEB] pb-3 mb-4 transition-all">
                    <div className="flex justify-between">
                        <div
                            className={`${(activeKey === "" || activeKey === "location") ? "text-[#01011D]" : "text-[#717171]"} font-medium`}>
                            Ad Posting Location
                        </div>
                        {activeKey === 'location' ? (
                            <button type="button"
                                    onClick={() => setActiveKey("")}
                                    className="text-[#222222] font-semibold text-sm underline cursor-pointer">
                                Cancel
                            </button>
                        ) : (
                            <button type="button"
                                    onClick={() => setActiveKey("location")}
                                    disabled={activeKey !== ""}
                                    className={`${(activeKey === "") ? "text-[#222222] cursor-pointer" : "text-[#717171]"} font-semibold text-sm underline`}>
                                Edit
                            </button>
                        )}
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeKey === 'location' ? "max-h-[999px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                        <SettingsLocation setActiveKey={setActiveKey}/>
                    </div>
                    {activeKey !== 'location' && (
                        <div className="text-[#717171] text-sm font-light mt-2 transition-opacity duration-300 opacity-100">
                            Detroit, Michigan
                        </div>
                    )}
                </div>
                <div className="border-b border-b-[#EBEBEB] pb-3 mb-4 transition-all">
                    <div className="flex justify-between">
                        <div
                            className={`${(activeKey === "" || activeKey === "price") ? "text-[#01011D]" : "text-[#717171]"} font-medium`}>
                            Fixed Price
                        </div>
                        {activeKey === 'price' ? (
                            <button type="button"
                                    onClick={() => setActiveKey("")}
                                    className="text-[#222222] font-semibold text-sm underline cursor-pointer">
                                Cancel
                            </button>
                        ) : (
                            <button type="button"
                                    onClick={() => setActiveKey("price")}
                                    disabled={activeKey !== ""}
                                    className={`${(activeKey === "") ? "text-[#222222] cursor-pointer" : "text-[#717171]"} font-semibold text-sm underline`}>
                                Edit
                            </button>
                        )}
                    </div>
                    <div className="text-[#717171] text-sm font-light">
                        Overwrite your feed data with one set value.
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeKey === 'price' ? "max-h-[999px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                        <SettingsPrice setActiveKey={setActiveKey}/>
                    </div>
                </div>
                <div className="border-b border-b-[#EBEBEB] pb-3 mb-4 transition-all">
                    <div className="flex justify-between">
                        <div
                            className={`${(activeKey === "" || activeKey === "description") ? "text-[#01011D]" : "text-[#717171]"} font-medium`}>
                            Update Description Templates
                        </div>
                        {activeKey === 'description' ? (
                            <button type="button"
                                    onClick={() => setActiveKey("")}
                                    className="text-[#222222] font-semibold text-sm underline cursor-pointer">
                                Cancel
                            </button>
                        ) : (
                            <button type="button"
                                    onClick={() => setActiveKey("description")}
                                    disabled={activeKey !== ""}
                                    className={`${(activeKey === "") ? "text-[#222222] cursor-pointer" : "text-[#717171]"} font-semibold text-sm underline`}>
                                Edit
                            </button>
                        )}
                    </div>
                    <div className="text-[#717171] text-sm font-light">
                        Replace existing ad descriptions with updated templates.
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeKey === 'description' ? "max-h-[999px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                        <SettingsDescription/>
                    </div>
                </div>
                <div className="border-b border-b-[#EBEBEB] pb-3 mb-4 transition-all">
                    <div className="flex justify-between">
                        <div
                            className={`${(activeKey === "" || activeKey === "processing") ? "text-[#01011D]" : "text-[#717171]"} font-medium`}>
                            App Processing Order
                        </div>
                        {activeKey === 'processing' ? (
                            <button type="button"
                                    onClick={() => setActiveKey("")}
                                    className="text-[#222222] font-semibold text-sm underline cursor-pointer">
                                Cancel
                            </button>
                        ) : (
                            <button type="button"
                                    onClick={() => setActiveKey("processing")}
                                    disabled={activeKey !== ""}
                                    className={`${(activeKey === "") ? "text-[#222222] cursor-pointer" : "text-[#717171]"} font-semibold text-sm underline`}>
                                Edit
                            </button>
                        )}
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeKey === 'processing' ? "max-h-[999px] opacity-100 py-3" : "max-h-0 opacity-0 py-0"}`}>
                        <SettingsProcessing/>
                    </div>
                    {activeKey !== 'processing' && (
                        <div className="text-[#717171] text-sm font-light">
                            Delete, Update, Post
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;