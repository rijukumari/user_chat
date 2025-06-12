// import React from "react";

// function Loading() {
//   return (
//     <>
//     <div className="flex h-screen items-center justify-center bg-slate-600">
//       <div className="flex w-52 flex-col gap-4">
//         <div className="skeleton h-32 w-full"></div>
//         <div className="skeleton h-4 w-28"></div>
//         <div className="skeleton h-4 w-full"></div>
//         <div className="skeleton h-4 w-full"></div>
//       </div>
//     </div>
    
//     </>
//   );
// }

// export default Loading;
import React from "react";

function Loading() {
  return (
    <div className="flex h-[80vh] sm:h-screen items-center justify-center bg-slate-600">
      <div className="flex w-11/12 max-w-sm flex-col gap-4">
        <div className="skeleton h-32 w-full rounded-xl"></div>
        <div className="skeleton h-4 w-28 rounded"></div>
        <div className="skeleton h-4 w-full rounded"></div>
        <div className="skeleton h-4 w-full rounded"></div>
      </div>
    </div>
  );
}

export default Loading;
