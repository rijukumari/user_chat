import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function useGetAllUsers() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  //  console.log("All Conversations:", allConversations);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        console.log("Token from cookies:", token);

        const res = await axios.get("http://localhost:5006/user/getUserProfile", {
  withCredentials: true, // ✅ bas itna kaafi hai agar backend properly token read kar raha ho
});

        // const res = await axios.get(
        //   "http://localhost:5006/user/getUserProfile",
        //   {
        //     withCredentials: true, // ✅ correct way to send cookies
        //     headers: {
        //       Authorization: `Bearer ${token}`, // ✅ token header
        //     },
        //   }
        // );

        
        // setAllUsers(res.data.filteredUser); // ✅ make sure this matches backend
        setAllUsers(res.data.filteredUser || res.data || []);
        console.log("DEBUG - Full response:", res.data);


      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return [allUsers, loading];
}

export default useGetAllUsers;
