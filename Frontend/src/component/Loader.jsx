// import React from "react";
// import { Oval } from "react-loader-spinner";

// const Loader = () => {
//   return (
//     <div>
//       <Oval
//         visible={true}
//         height="80"
//         width="80"
//         color="#4fa94d"
//         ariaLabel="oval-loading"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </div>
//   );
// };

// export default Loader;


import React from "react";
import { TailSpin} from "react-loader-spinner";

const Loader = ({height, width}) => {
  return (
    <div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <TailSpin
      visible={true}
      height={height}
      width={width}
      color="#1d3557"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      />
    </div>)
  
  
};

export default Loader;