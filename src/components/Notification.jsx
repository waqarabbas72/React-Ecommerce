// import React, { useState } from "react";
// const Notification = () => {
//     const [flag, setFlag] = useState(true);
//     // setTimeout(() => {
//     //     setFlag(!flag)
//     // }, 1000)
//     return (
//         <div>
//             <div role="alert" className={flag ? "lg:w-5/12 mx-auto absolute top-20 right-2 sm:right-5 left-auto sm:w-8/12 md:w-3/5 w-[95%] justify-between w-4/12 bg-white  dark:bg-gray-800 shadow-lg rounded flex items-center pr-3 flex-row transition duration-150 ease-in-out translate-show" : "translate-hide"}>

//                 <div className="sm:px-6 sm:p-2 flex sm:mt-0 items-center justify-center bg-green-400 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} fill="currentColor">
//                         <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
//                     </svg>
//                 </div>
//                 <div className="">
//                     <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold">Item Added Successfully!</p>
//                 </div>
//                 <div className="">
//                     <div className="">
//                         <span className="sm:text-sm text-xs text-green-400 font-bold sm:mr-4 sm:mr-0 cursor-pointer">View</span>
//                     </div>
//                 </div>
//             </div>


//             <style>
//                 {`
//                 .translate-show{
//                     transform : translateX(0%);
//                 }
//                 .translate-hide{
//                     transform : translateX(150%);
//                 }
//                 `}
//             </style>
//         </div>
//     );
// };
// export default Notification;