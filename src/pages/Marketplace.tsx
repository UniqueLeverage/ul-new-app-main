import {useEffect, useState} from "react";
import {FiSearch} from "react-icons/fi";
import {
    NotListedList,
    PostingSoonList,
    MyListingsList,
    PriceUpdatesList,
    CleanupList,
    FilteredList
} from "../components";
import {useLocation} from "react-router-dom";

type TabItem = {
    key: string;
    label: string;
    count: number;
};

const Marketplace = () => {
    const location = useLocation();

    const tabs: TabItem[] = [
        {key: "not_listed", label: "Not Listed", count: 5},
        {key: "posting_soon", label: "Posting Soon", count: 1},
        {key: "my_listings", label: "My Listings", count: 3},
        {key: "price_updates", label: "Price Updates", count: 1},
        {key: "cleanup", label: "Cleanup", count: 1},
        {key: "filtered", label: "Filtered", count: 35},
    ];
    const [activeKey, setActiveKey] = useState<string>("not_listed");

    useEffect(() => {
        if (location.state?.tab) {
            setActiveKey(location.state.tab);
        }
    }, [location.state]);

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

            <div className={`py-5 px-4 md:px-6 md:mt-[56px] lg:px-8 flex flex-col ${activeKey === 'filtered' ? 'pb-0' : ''}`}
                 style={{
                     height: activeKey === 'filtered'
                         ? 'calc(100vh - 72px)'
                         : '',
                 }}>
                <div className="border-b border-[#EBEBEB] pb-2.5">
                    <div className="flex justify-between mb-4">
                        <div>
                            <div className="text-[#01011D] text-lg md:text-[22px] lg:text-xl font-medium">
                                Facebook Marketplace
                            </div>
                            <div className="text-[#575757] text-sm md:text-base lg:text-sm">
                                Manage your listings
                            </div>
                        </div>
                        {activeKey === 'not_listed' && (
                            <div className="flex items-center space-x-2">
                                <div className="lg:text-sm cursor-default">Cruise</div>
                                <label className="relative inline-block w-[38px] h-[19px] cursor-pointer">
                                    <input type="checkbox" className="sr-only peer"/>
                                    <div
                                        className="w-full h-full bg-[#ECEDED] rounded-full peer-checked:bg-[#1B74E4] transition-colors duration-300"></div>
                                    <div
                                        className="absolute top-[1px] left-[1px] w-[17px] h-[17px] bg-white rounded-full shadow-md peer-checked:translate-x-[19px] transition-transform duration-300"></div>
                                </label>
                            </div>
                        )}
                    </div>
                    <div className="overflow-x-auto whitespace-nowrap no-scrollbar flex">
                        {tabs.map((tab) => {
                            const isActive = tab.key === activeKey;
                            return (
                                <div
                                    key={tab.key}
                                    className={`text-sm py-1 px-2 border border-[#3333331A] flex flex-nowrap items-center cursor-pointer rounded-sm mr-3 ${
                                        isActive ? "bg-[#E1EEFF] text-[#1B74E4] font-medium" : "bg-[#FBFBFB] text-[#575757] hover:bg-[#f7f7f7] duration-300 ease-out"
                                    }`}
                                    onClick={() => setActiveKey(tab.key)}
                                >
                                    {tab.label}{" "}
                                    <div
                                        className={`text-[10px] lg:text-xs text-inherit font-medium rounded-sm ml-1.5 w-[18px] h-[18px] flex items-center justify-center ${
                                            isActive ? "bg-white" : "bg-[#F0F0F0]"
                                        }`}
                                    >
                                        {tab.count.toString().padStart(2, "0")}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={`relative mt-5 min-h-[200px] ${activeKey === 'filtered' ? 'flex-grow' : ''}`}>
                    <div
                        className={`${activeKey === 'not_listed' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0 pointer-events-none'} absolute inset-0 transition-all duration-300 ease-in-out`}>
                        <NotListedList setActiveKey={setActiveKey}/>
                    </div>
                    <div
                        className={`${activeKey === 'posting_soon' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0 pointer-events-none'} absolute inset-0 transition-all duration-300 ease-in-out`}>
                        <PostingSoonList/>
                    </div>
                    <div
                        className={`${activeKey === 'my_listings' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0 pointer-events-none'} absolute inset-0 transition-all duration-300 ease-in-out`}>
                        <MyListingsList/>
                    </div>
                    <div
                        className={`${activeKey === 'price_updates' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0 pointer-events-none'} absolute inset-0 transition-all duration-300 ease-in-out`}>
                        <PriceUpdatesList/>
                    </div>
                    <div
                        className={`${activeKey === 'cleanup' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0 pointer-events-none'} absolute inset-0 transition-all duration-300 ease-in-out`}>
                        <CleanupList/>
                    </div>
                    <div
                        className={`${activeKey === 'filtered' ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0 pointer-events-none'} h-full absolute inset-0 transition-all duration-300 ease-in-out`}>
                        <FilteredList/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;