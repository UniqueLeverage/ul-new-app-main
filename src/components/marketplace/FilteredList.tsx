import {useState, useRef, DragEvent} from "react";
import {FaCaretDown} from "react-icons/fa";
import {MdDragIndicator} from "react-icons/md";

type HeaderKey =
    | "index"
    | "stock"
    | "year"
    | "make"
    | "model"
    | "trim"
    | "mileage"
    | "price"
    | "vin"
    | "engine"
    | "transmission"
    | "photoUrls";

const FilteredList = () => {
    const headersInitial: { key: HeaderKey; label: string }[] = [
        {key: "index", label: ""},
        {key: "stock", label: "STOCK"},
        {key: "year", label: "YEAR"},
        {key: "make", label: "MAKE"},
        {key: "model", label: "MODEL"},
        {key: "trim", label: "TRIM"},
        {key: "mileage", label: "MILEAGE"},
        {key: "price", label: "PRICE"},
        {key: "vin", label: "VIN"},
        {key: "engine", label: "ENGINE"},
        {key: "transmission", label: "TRANSMISSION"},
        {key: "photoUrls", label: "PHOTO URLS"},
    ];

    const [headers, setHeaders] = useState(headersInitial);
    const [activeHeader, setActiveHeader] = useState<HeaderKey | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const dragItemIndex = useRef<number | null>(null);
    const dragOverItemIndex = useRef<number | null>(null);

    const handleHeaderClick = (key: HeaderKey) => {
        if (!isDragging) {
            setActiveHeader(key);
        }
    };

    const handleDragStart = (e: DragEvent<HTMLTableHeaderCellElement>, index: number) => {
        e.dataTransfer.effectAllowed = "move";
        dragItemIndex.current = index;
        setIsDragging(true);

        setTimeout(() => {
            (e.target as HTMLElement).classList.add("opacity-50");
        }, 0);
    };

    const handleDragEnter = (e: DragEvent<HTMLTableHeaderCellElement>, index: number) => {
        e.preventDefault();
        dragOverItemIndex.current = index;
    };

    const handleDragOver = (e: DragEvent<HTMLTableHeaderCellElement>) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    const handleDragEnd = (e: DragEvent<HTMLTableHeaderCellElement>) => {
        e.preventDefault();
        (e.target as HTMLElement).classList.remove("opacity-50");

        if (dragItemIndex.current === null || dragOverItemIndex.current === null) return;

        const copyHeaders = [...headers];
        const dragItem = copyHeaders[dragItemIndex.current];

        if (dragItemIndex.current !== dragOverItemIndex.current) {
            copyHeaders.splice(dragItemIndex.current, 1);
            copyHeaders.splice(dragOverItemIndex.current, 0, dragItem);

            setHeaders(copyHeaders);
        }

        dragItemIndex.current = null;
        dragOverItemIndex.current = null;
        setIsDragging(false);
    };
    return (
        <div className="h-full flex flex-col">
            <div className="text-[#01011D]">Dealer Center File (35)</div>
            <div className="overflow-x-auto mt-2 flex-grow">
                <table className="min-w-full max-w-full text-xs">
                    <thead className="bg-[#F5F9FF] text-left select-none">
                    <tr>
                        {headers.map(({key, label}, index) => (
                            <th
                                key={key}
                                onClick={() => handleHeaderClick(key)}
                                draggable={key !== "index"}
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnter={(e) => handleDragEnter(e, index)}
                                onDragOver={handleDragOver}
                                onDragEnd={handleDragEnd}
                                onDragLeave={(e) => e.preventDefault()}
                                className={`group py-2 pl-4.5 pr-6 font-medium border border-[#CFCFCF] cursor-pointer transition-all duration-200 ease-in-out relative ${
                                    activeHeader === key && label !== "" ? "bg-[#1B74E440]" : ""
                                } ${isDragging ? "transition-none" : ""}`}
                            >
                                {key !== "index" && (
                                    <MdDragIndicator
                                        size={16}
                                        className="text-[#05050580] absolute top-1/2 transform -translate-y-1/2 left-0.5 cursor-move opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                        title="Drag to reorder"
                                    />
                                )}
                                {label}
                                {activeHeader === key && label !== "" && (
                                    <FaCaretDown
                                        size={15}
                                        className="absolute top-1/2 transform -translate-y-1/2 right-0.5"
                                    />
                                )}
                            </th>
                        ))}
                    </tr>
                    </thead>

                    <tbody>
                    {Array.from({length: 35}).map((_, rowIndex) => {
                        const rowCells = {
                            index: (
                                <td
                                    key="index"
                                    className="py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out"
                                >
                                    {rowIndex + 1}
                                </td>
                            ),
                            stock: (
                                <td
                                    key="stock"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "stock" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    R84379
                                </td>
                            ),
                            year: (
                                <td
                                    key="year"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "year" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    2014
                                </td>
                            ),
                            make: (
                                <td
                                    key="make"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "make" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    BMW
                                </td>
                            ),
                            model: (
                                <td
                                    key="model"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "model" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    3 Series
                                </td>
                            ),
                            trim: (
                                <td
                                    key="trim"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "trim" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    328i xDrive Sedan 4D
                                </td>
                            ),
                            mileage: (
                                <td
                                    key="mileage"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "mileage" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    125802
                                </td>
                            ),
                            price: (
                                <td
                                    key="price"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "price" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    7999
                                </td>
                            ),
                            vin: (
                                <td
                                    key="vin"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "vin" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    WBA3B3G52ENR84379
                                </td>
                            ),
                            engine: (
                                <td
                                    key="engine"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "engine" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    3.6L V6 MPI Dohc VVT Flex
                                </td>
                            ),
                            transmission: (
                                <td
                                    key="transmission"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out ${
                                        activeHeader === "transmission" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    Automatic
                                </td>
                            ),
                            photoUrls: (
                                <td
                                    key="photoUrls"
                                    className={`py-2 pl-3 pr-6 border border-[#CFCFCF] duration-300 ease-out text-[#1B74E4] ${
                                        activeHeader === "photoUrls" ? "bg-[#1B74E440]" : ""
                                    }`}
                                >
                                    <a href="#">https://imagesdl.dealercenter.net...</a>
                                </td>
                            ),
                        };

                        return (
                            <tr
                                key={rowIndex}
                                className={`whitespace-nowrap ${
                                    rowIndex % 2 === 0 ? "bg-[#FFF6F6]" : "bg-white"
                                }`}
                            >
                                {headers.map(({key}) => rowCells[key])}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FilteredList;