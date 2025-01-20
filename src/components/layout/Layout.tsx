import Loader from '../uikit/Loader'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Layout = () => {
    const { isLoading } = useSelector((state: any) => state?.loader);
    return (
        <>
            {isLoading && <Loader />}
            <Outlet />
        </>
    )

}

export default Layout