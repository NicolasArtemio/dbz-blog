import { Outlet } from "react-router-dom"

export const HomePage = () => {
    return(
        <>
          <h2>Desde Home</h2>
          <Outlet />
        </>
    )
}

