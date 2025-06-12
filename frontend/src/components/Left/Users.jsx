// import React from "react";
// import User from "./User";
// import useGetAllUsers from "../context/userGetAllUsers";

// function Users() {
//   const [allUsers, loading] = useGetAllUsers();
//   console.log("allUsers:", allUsers);
//   return (
//     <div
//       style={{ maxHeight: "calc(84vh )" }}
//       className=" py-2 flex-aman overflow-y-auto "
//     >
//       {allUsers.map((user, index) => {
//         return <User key={index} user={user} />;
//       })}
//     </div>
//   );
// }

// export default Users;


// import React from "react";
// import User from "./User";
// import useGetAllUsers from "../context/userGetAllUsers";

// function Users() {
//   const [allUsers, loading] = useGetAllUsers();

//   return (
//     <div
//       className="overflow-y-auto px-2 sm:px-4 py-2 space-y-1"
//       style={{ maxHeight: "calc(84vh)" }}
//     >
//       {loading ? (
//         <div className="text-center text-white py-4">Loading users...</div>
//       ) : (
//         allUsers.map((user, index) => <User key={user._id || index} user={user} />)
//       )}
//     </div>
//   );
// }

// export default Users;
import React from "react";
import User from "./User";
import useGetAllUsers from "../context/userGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();

  return (
    <div
      className=" px-2 sm:px-4 py-2 space-y-1"
      style={{ maxHeight: "calc(84vh)" }}
    >
      {loading ? (
        <div className="text-center text-white py-4">Loading users...</div>
      ) : (
        allUsers.map((user, index) => <User key={user._id || index} user={user} />)
      )}
    </div>
  );
}

export default Users;
