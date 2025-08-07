import {BrowserRouter, Routes, Route} from "react-router-dom";
import {
    Home,
    Marketplace,
    VehicleNotListed,
    VehiclePostingSoon,
    VehicleListed,
    VehiclePriceUpdate,
    VehicleDeleting,
    Settings
} from "./pages";
import {AuthLayout, DashboardLayout} from "./layouts";
import routerPaths from "./routerPaths";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>

                <Route element={<AuthLayout/>}>
                    <Route path="/" element={<DashboardLayout/>}>
                        <Route path={routerPaths.marketplace} element={<Marketplace/>}/>
                        <Route path={routerPaths.vehicle_not_listed} element={<VehicleNotListed/>}/>
                        <Route path={routerPaths.vehicle_posting_soon} element={<VehiclePostingSoon/>}/>
                        <Route path={routerPaths.vehicle_listed} element={<VehicleListed/>}/>
                        <Route path={routerPaths.vehicle_update_price} element={<VehiclePriceUpdate/>}/>
                        <Route path={routerPaths.vehicle_deleting} element={<VehicleDeleting/>}/>
                        <Route path={routerPaths.settings} element={<Settings/>}/>
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;