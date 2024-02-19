import { Navigate, Outlet } from 'react-router-dom'

export const PrivateLayout = () => {
    // const { visibility } = useHeaderNavigate();
    // const { data, isLoading } = useMeQuery();
    // const [logOut] = useLogOutMutation();
    // const isLog = useAppSelector(state => state.app.isLogOut);
    // const { setLogOut } = useActions(appActions);
    // const { i18n } = useTranslation();
    //
    // useEffect(() => {
    //     if (isLog) {
    //         logOut();
    //         setLogOut({ isLogOut: false });
    //     }
    // }, [isLog]);
    //
    // useEffect(() => {
    //     if (data?.settings) {
    //         localStorage.setItem('i18nextLng', data.settings.languageCode);
    //         i18n.changeLanguage(data.settings.languageCode).catch(error => errorCommonHandler(error));
    //     }
    // }, [data?.settings]);
    //
    // if (isLoading) {
    //     return null;
    // }

    let data = true
    return data ? (
        <div style={{ backgroundColor: 'red' }}>
            <Outlet />
        </div>
    ) : (
        <Navigate to={'/'} />
    )
}
