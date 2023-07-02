import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./Components/Create"
import Users from "./Components/Users"
import Home from "./Components/Home"
import Update from "./Components/Update"

const App = () => {
    return (
        <BrowserRouter>
            <Home />
            <Routes>
                <Route element={<Create/>} path="/create"></Route>
                <Route element={<Users/>} path="/users"></Route>
                <Route element={<Update/>} path={`/update/:abc`}></Route>
               
            </Routes>
        </BrowserRouter>
    )
}
export default App