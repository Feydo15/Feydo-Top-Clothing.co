import React from "react";
import Orders from "./Orders";

const Orders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      Orders
      {/* <div className='col-12 alert alert-info text-center mt-3'>  */}
      {/* No Orders */}
      {/* <Link className="btn btn-success mx-2 px-3 py-2" to="/" style={{fontSize: "12px"}}> */}
      {/* START SHOPPING */}
      {/* </Link> */}
      {/* </div> */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className={"alert-success"}>
              <td>
                <a href={`/`} className="link">
                  1
                </a>
              </td>
              <td>Paid</td>
              <td>Dec 12 2022</td>
              <td>ZAR234</td>
            </tr>
            {/* cancelled */}
            <tr className={"alert-danger"}>
              <td>
                <a href={`/`} className="link">
                  2
                </a>
              </td>
              <td>Not Paid</td>
              <td>Dec 12 2022</td>
              <td>ZAR23</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
