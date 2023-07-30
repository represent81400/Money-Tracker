import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <div className={"header"}>
      {total > 0 && money - total !== 0 && (
        <span>
          Amount remaining{" "}
           <span className={"money"}>${moneyFormat(money - total)}</span>{" "}
          Account balance
         </span>
      )}
      {total === 0 && (
        <span>
          Money amount <span className={"money"}>${moneyFormat(money)}</span>{" "}
          
        </span>
      )}
      {money - total === 0 && (
        <span>
          {" "}
          <span className={"money"}>${moneyFormat(total)}</span> You have no amount left{" "}
        </span>
      )}
    </div>
  );
};

export default Header;
