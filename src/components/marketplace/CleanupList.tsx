import routerPaths from "../../routerPaths.tsx";
import carExample1 from "../../assets/carExample1.jpg";
import {Link} from "react-router-dom";

const CleanupList = () => {
    return (
        <div>
            <Link to={routerPaths.vehicle_deleting}
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

                <div
                    className="ml-auto bg-[#FF0000] text-white font-medium py-1 px-3 rounded-lg text-[10px] md:text-xs lg:text-sm cursor-default">
                    Deleting
                </div>
            </Link>
        </div>
    );
};
export default CleanupList;