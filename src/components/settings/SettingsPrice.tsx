import {IoLogoUsd} from "react-icons/io";

interface SettingsPriceProps {
    setActiveKey: (value: (((prevState: string) => string) | string)) => void
}

const SettingsPrice = ({setActiveKey}: SettingsPriceProps) => {
    return (
        <div>
            <div
                className="flex items-center rounded-lg border border-[#33333333] py-1.5 px-3 w-[96%] md:w-[50%]">
                <IoLogoUsd className="text-[#050505]" size="20"/>
                <div className="ml-1.5 flex-grow">
                    <div className="text-[#33333399] text-xs -mb-1">
                        Price
                    </div>
                    <input
                        type="text"
                        className="form-input placeholder-[#333333] text-[#333333] text-sm font-light w-full focus:outline-none font-medium"
                        placeholder="10,000"
                        name="search"
                        id="search"
                    />
                </div>
            </div>
            <div className="mt-3">
                <button type="button"
                        onClick={() => setActiveKey("")}
                        className="font-medium text-sm text-white bg-[#1B74E4] rounded-lg px-5 py-2 cursor-pointer">
                    Save
                </button>
            </div>
        </div>
    );
};
export default SettingsPrice;