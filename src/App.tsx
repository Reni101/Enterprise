import {Link, Outlet} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "@/common/theme";

export const App = () => {
    const { toggleTheme} = useTheme();
    return (
        <div >
            client:{process.env.REACT_APP_CLIENT_ID}
            <Link to='/'> main</Link>
            <Link to='/about'> about </Link>
                <button onClick={toggleTheme}>test</button>
            <Suspense fallback={<div>loading</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
};


