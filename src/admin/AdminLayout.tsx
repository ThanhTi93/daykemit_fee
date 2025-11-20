import { Outlet } from 'react-router-dom';
import HeaderAdmin from './layouts/HeaderAdmin';
import NavBarAdmin from './layouts/NavBarAdmin';
import CategoryPage from './pages/categories/CategoryPage';

function AdminLayout() {
    return (
        <div className='min-md:flex'>
            <NavBarAdmin />
             <div className='flex-1'>
                <HeaderAdmin />
                <Outlet />
             </div>
        </div>
    );
}

export default AdminLayout;