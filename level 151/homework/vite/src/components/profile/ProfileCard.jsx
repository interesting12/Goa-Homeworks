import { useState } from "react";
import Name from "./Name";
import Description from "./Description";
import Avatar from "./Avatar";

export default function ProfileCard({ name, description, image }) {
  const [follow, setFollow] = useState(false);

  return (
    <div className="w-80 p-5 shadow-lg rounded-2xl text-center border">
      <div className="flex justify-center mb-3">
        <Avatar image={image} />
      </div>

      <Name name={name} />
      <Description text={description} />

      <button
        onClick={() => setFollow(!follow)}
        className={`mt-4 px-4 py-2 rounded-xl text-white transition ${
          follow ? "bg-green-600" : "bg-blue-600"
        }`}
      >
        {follow ? "Following" : "Follow"}
      </button>
    </div>
  );
}