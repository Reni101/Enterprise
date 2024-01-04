import { Outlet } from 'react-router-dom'

export const PublicLayout = () => {
  // let data = false
  // return data ? (
  //     <div style={{backgroundColor: 'red'}}>
  //         <Outlet/>
  //     </div>
  // ) : (
  //     <Navigate to={'/'}/>
  // );
  return (
    <>
      <Outlet />
    </>
  )
}
