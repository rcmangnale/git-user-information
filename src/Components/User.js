import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Git() {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  function setUserInput(event) {
    setUserName(event.target.value);
  }
  function getUserInput() {
    fetch("https://api.github.com/users/" + userName).then((re) => {
      if (re.status === 200) {
        re.json().then((data) => {
          sessionStorage.setItem("User", JSON.stringify(data));
          navigate("./ShowUserDetails");
        });
      } else alert("User Not Found please enter correct username!!");
    });
  }

  return (
    <>
     <p className="flex justify-center pb-16 text-lg ">myuserName = rcmangnale</p>
      <div className="flex justify-center gap-10 pt-24">
       
        <input
          className="p-4 text-lg text-black bg-gray-300 border-2 border-black rounded-xl"
          onChange={setUserInput}
          placeholder="Enter github username"
          type="text"
        />
        <button
          onClick={getUserInput}
          className="flex justify-center gap-4 px-4 py-4 text-3xl font-bold text-black bg-white border border-blue-700 rounded hover:text-white hover:bg-blue-700"
        >
          Get User Details
        </button>
      </div>
    </>
  );
}

export default Git;
