// import React, { useState, useEffect } from "react";
// import { useConversation } from "../../statemanage/useConversation";
// import axios from "axios";
// import Cookies from "js-cookie";

// function useGetMessage() {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//       setLoading(true);

//       if (selectedConversation && selectedConversation._id) {
//         try {
//           // const token = Cookies.get("jwt"); // ✅ Get token from cookies
//           const res = await axios.get(
//             `http://localhost:5006/message/get/${selectedConversation._id}`,
//             {
//               withCredentials: true, // 👈 यह MUST है
//             }
//           );

//           setMessages(res.data);
//           setLoading(false);
//         } catch (error) {
//           console.log("Error fetching messages:", error);
//         }
//       }
//     };

//     getMessages();
//   }, [selectedConversation, setMessages]);

//   return { messages, loading };
// }

// export default useGetMessage;

// import React, { useState, useEffect } from "react";
// import { useConversation } from "../../statemanage/useConversation";
// import axios from "axios";

// function useGetMessage() {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation, allConversations } =
//     useConversation();
//   // console.log("Selected conversation:", selectedConversation);
//   console.log("Messages in useGetMessage:", messages);
//   console.log("All Conversations:", allConversations);
//   console.log("Selected:", selectedConversation);

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!selectedConversation?._id) return;
//       console.log("Selected Conversation ID:", selectedConversation._id);

//       setLoading(true);
//       try {
//        const res = axios.get(`http://localhost:5006/message/get/${selectedConversation._id}`, {
//   withCredentials: true,
// });

//         // const res = await axios.get(
//         //   `http://localhost:5006/message/get/${selectedConversation._id}`,
//         //   {
//         //     withCredentials: true,
//         //   }
//         // );

//         // ⚠️ Check response shape
//         setMessages(res.data?.messages || []); // safer
//       } catch (error) {
//         console.log("Error fetching messages:", error);
//         setMessages([]); // on error, set empty messages
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMessages();
//   }, [selectedConversation, setMessages]);

//   return { messages: messages || [], loading }; // ✅ always array
// }

// export default useGetMessage;


// import React, { useState, useEffect } from "react";
// import { useConversation } from "../../statemanage/useConversation";
// import axios from "axios";

// function useGetMessage() {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!selectedConversation?._id) return;

//       console.log("Selected Conversation (User) ID:", selectedConversation._id);
//       setLoading(true);

//       try {
//         const res = await axios.get(
//           `http://localhost:5006/message/get/${selectedConversation._id}`,
//           {
//             withCredentials: true,
//           }
//         );

//         setMessages(res.data?.messages || []);
//       } catch (error) {
//         console.log("❌ Error fetching messages:", error);
//         setMessages([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMessages();
//   }, [selectedConversation, setMessages]);

//   return { messages, loading };
// }

// export default useGetMessage;
// import React, { useState, useEffect } from "react";
// import { useConversation } from "../../statemanage/useConversation";
// import axios from "axios";

// function useGetMessage() {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!selectedConversation?._id) return;

//       console.log("Fetching messages for ID:", selectedConversation._id);
//       setLoading(true);

//       try {
//         const res = await axios.get(
//           `http://localhost:5006/message/get/${selectedConversation._id}`,
//           { withCredentials: true }
//         );
//         console.log("res",res)

//         setMessages(res.data?.messages || []);
//       } catch (error) {
//         console.log("❌ Error fetching messages:", error.response?.data || error.message);
//         setMessages([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMessages();
//   }, [selectedConversation]);

//   return { messages, loading };
// }

// export default useGetMessage;
// import React, { useState, useEffect } from "react";
// import { useConversation } from "../../statemanage/useConversation";
// import axios from "axios";

// function useGetMessage() {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!selectedConversation?._id) return;

//       console.log("Fetching messages for ID:", selectedConversation._id);
//       setLoading(true);

//       try {
//         const res = await axios.get(
//           `http://localhost:5006/message/get/${selectedConversation._id}`,
//           { withCredentials: true }
//         );
//         console.log("✅ Messages fetched:", res.data);

//         setMessages(res.data || []);
//       } catch (error) {
//         console.log("❌ Error fetching messages:", error);
//         setMessages([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMessages();
//   }, [selectedConversation]);

//   return { messages, loading };
// }

// export default useGetMessage;



// import React, { useState, useEffect } from "react";
// import { useConversation } from "../../statemanage/useConversation";
// import axios from "axios";

// function useGetMessage() {
//   const [loading, setLoading] = useState(false);
//   const { messages, setMessages, selectedConversation } = useConversation();

//   useEffect(() => {
//     const getMessages = async () => {
//       if (!selectedConversation?._id) return;

//       console.log("📩 Frontend se message fetch ho raha hai for ID:", selectedConversation._id);
//       console.log("🧠 selectedConversation:", selectedConversation);

//       setLoading(true);

//       try {
//         const res = await axios.get(
//           `http://localhost:5006/message/get/${selectedConversation._id}`,
//           { withCredentials: true }
//         );

//         console.log("✅ Messages response:", res.data);
//         setMessages(res.data || []);
//       } catch (error) {
//         console.log("❌ Error fetching messages:", error.response?.data || error.message);
//         setMessages([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getMessages();
//   }, [selectedConversation]);

//   return { messages, loading };
// }

// export default useGetMessage;



// hooks/useGetMessage.js
import { useEffect, useState } from "react";
import axios from "axios";
import { useConversation } from "../../statemanage/useConversation";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, setMessages, messages } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5006/message/get/${selectedConversation._id}`,
          { withCredentials: true }
        );

        setMessages(res.data?.messages || []);
      } catch (err) {
        console.log("❌ Message fetch error:", err.response?.data || err.message);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation]);

  return { loading, messages };
}

export default useGetMessage;
