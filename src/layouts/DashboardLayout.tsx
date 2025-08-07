import {Outlet} from 'react-router-dom';
import {Sidebar} from '../components';

const DashboardLayout = () => {
    return (
        <div className="md:flex">
            <Sidebar/>
            <main className="md:flex flex-1 flex-col md:h-screen w-full pl-0 md:pl-[70px] lg:pl-[225px]">
                <Outlet/>
            </main>
        </div>
    );
};

export default DashboardLayout;