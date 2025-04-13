import Dashboard from "./pages/dashboard";
import { SignIN } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { BrowserRouter,Route, Routes} from "react-router-dom";

function App(){
  return <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIN/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
  </BrowserRouter>
}
export default App;