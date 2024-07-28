import React from "react";
import heumanI from "../../assets/imge/icons8-human.png";
import { Link } from "react-router-dom";
function LandSup() {
  return (
    <>
      <div id="p-LS">
        <Link>
          <div id="SignUp">
            <img src={heumanI} alt="" /> <p>ثبت نام</p>
          </div>
        </Link>
        <Link><div id="Login"><p>ورود</p></div></Link>
      </div>
    </>
  );
}

export default LandSup;
