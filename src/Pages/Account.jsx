import SideNavbar from "../Components/SideNavbar";
import { Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

function Account() {
  // to store user data
  const [user, setUser] = useState({username: "",email: ""});

  // to save userdata if changed
  const [newdata, setNewdata] = useState({username: "",email: ""});

  function handleSave() {
    // updating localStorage and user
    setUser(newdata);
    localStorage.setItem("user", JSON.stringify(newdata));
  }

  useEffect(() => {
    // storing data to user and newdata from localStorage
    let data = JSON.parse(localStorage.getItem("user")) || {username: "",email: ""};
    setUser(data);
    setNewdata(data);
  }, []);

  return (
    <SideNavbar>
      <h3 className="text-[#7E22CE] text-[40px] font-bold my-4">
        Account Settings
      </h3>
      <div className="flex gap-5 items-center my-4">
        <img
        className="w-[100px] h-[100px]"
          src="/dummyProfile.svg"
          alt="profile image"
        />
        <div className="flex-1 ">
          <form className="grid grid-cols-2 gap-x-5">
            <label className="font-bold" htmlFor="username">
              User Name
            </label>
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <Input
              value={newdata?.username}
              type="text"
              id="username"
              onChange={(e) =>
                setNewdata((prev) => ({ ...prev, username: e.target.value }))
              }
            />
            <Input
            value={newdata?.email}
              type="text"
              id="email"
              onChange={(e) =>
                setNewdata((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </form>
        </div>
      </div>
      
      {/* conditinally render sav button if saved and changed data mismatch */}
      {user?.username != newdata?.username || user?.email != newdata?.email ? (
        <div className="flex justify-end">
          <button onClick={handleSave} className="bg-[#7E22CE] py-1 px-5 text-white text-[20px] rounded-md">Save</button>
        </div>
      ) : null}

      <h3 className="text-[#7E22CE] my-4 text-[40px] font-bold">
        Subscriptions
      </h3>
      <div className="bg-gradient-to-r from-[#7E22CE] to-[#460281] my-4 text-white rounded-md p-[20px] flex justify-between items-center text-[25px]">
        <h4>
          You are currently on the{" "}
          <span className=" font-bold underline ">Ques AI Basic Plan!</span>
        </h4>
        <button className="bg-white rounded-md text-[#7E22CE] py-1 px-3 font-semibold">
          Upgrade
        </button>
      </div>
      <p className="text-[red] underline font-semibold cursor-pointer">Cancel Subscription</p>
    </SideNavbar>
  );
}

export default Account;
