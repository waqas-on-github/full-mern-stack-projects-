import { BrowserRouter, Route, Routes  , Navigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Bookings from "./pages/Bookings"
import Cabins from "./pages/Cabins"
import User from "./pages/User"
import Setting from "./pages/Setting"
import Account from "./pages/Account"
import PageNotFound from "./pages/PageNotFound"
import GlobalStyles from "./styles/GlobleStyles"
import AppLayout from "./ui/AppLayout"


const App = () => {
  return (
    <> 
    <GlobalStyles/>
    <BrowserRouter>
    <Routes>
       <Route element={<AppLayout/>} > 
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="cabins" element={<Cabins />} />
        <Route path="users" element={<User />} />
        <Route path="settings" element={<Setting />} />
      </Route>
        <Route path="account" element={<Account />} />
        <Route path="*" element ={<PageNotFound/>}/>

    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App