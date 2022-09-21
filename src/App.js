import { Routes, Route } from "react-router-dom";
import User from "./Components/User";
import ShowUserDetails from "./Components/ShowUserDetails";

function App() {
  return (
    <>
      <div className=" h-36">
        <p className="flex justify-center p-12 text-3xl font-bold text-black bg-sky-500 ">
          Github User Details
        </p>
      </div>
      <div className="flex justify-center ">
        <Routes>
          <Route path="/*" element={<User />}></Route>
          <Route path="/ShowUserDetails" element={<ShowUserDetails />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
