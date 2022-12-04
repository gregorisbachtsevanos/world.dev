import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRouter = ({ user }) => {
    console.log(user)
    return user ? <Outlet /> : <Navigate to='/login' />
}
