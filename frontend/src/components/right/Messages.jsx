// import React from "react";
// import Message from "./Message";
// import useGetMessage from "../../components/context/useGetMessage.js";
// import Loading from "../../components/Loading.jsx";

// function Messages() {
//   const { messages, loading } = useGetMessage(); // default: []
//   console.log("All Messages: ", messages);

//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         messages.length > 0 &&
//         messages.map((message) => (
//           <Message key={message._id} message={message} />
//         ))
//       )}

//       <div style={{ minHeight: "calc(88vh - 12vh)" }}>
//         {!loading && messages.length === 0 && (
//           <div>
//             <p className="text-center font-bold font-sans mt-[20%] ">Say! Hi</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Messages;
// import React from "react";
// import Message from "./Message";
// import useGetMessage from "../../components/context/useGetMessage.js";
// import Loading from "../../components/Loading.jsx";

// function Messages() {
//   const { messages, loading } = useGetMessage(); // default: []
//   console.log("All Messages: ", messages);

//   return (
//     <div
//       className="flex-1 overflow-y-auto px-2 sm:px-4 py-4 space-y-2"
//       style={{ minHeight: "calc(88vh - 12vh)" }}
//     >
//       {loading ? (
//         <Loading />
//       ) : messages.length > 0 ? (
//         messages.map((message) => (
//           <Message key={message._id} message={message} />
//         ))
//       ) : (
//         <div className="flex items-center justify-center h-full">
//           <p className="text-center font-bold text-gray-400 text-lg">Say Hi 👋</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Messages;
import React from "react";
import Message from "./Message";
import useGetMessage from "../../components/context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";

function Messages() {
  const { messages, loading } = useGetMessage(); // default: []
  console.log("All Messages: ", messages);

  return (
    <div
      className="flex-1 overflow-y-auto px-2 sm:px-4 py-3 space-y-2 scroll-smooth"
      style={{ minHeight: "calc(88vh - 12vh)" }}
    >
      {loading ? (
        <Loading />
      ) : messages.length > 0 ? (
        messages.map((message) => (
          <Message key={message._id} message={message} />
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-center font-semibold text-gray-400 text-base sm:text-lg">
            Say Hi 👋
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
