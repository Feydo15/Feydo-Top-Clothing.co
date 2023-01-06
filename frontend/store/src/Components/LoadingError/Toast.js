import React from "react";

const Toast = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newstOnTop={false}
        closeOnclick
        rtl={false}
      />
      {/* {Same as} */}
      <ToastContainer />
    </div>
  );
};

export default Toast;
