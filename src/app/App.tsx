import { Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useTheme } from '@/app/providers/theme-provider'

export const App = () => {
    const { toggleTheme } = useTheme()
    return (
        <Suspense fallback={<div>loading</div>}>
            <Link to='/profile'> profile</Link>
            <Link to='/'> sign in </Link>
            <button onClick={toggleTheme}>test2</button>
            <Outlet />
        </Suspense>
    )
}
