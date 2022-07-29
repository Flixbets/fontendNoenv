import React from "react";
import { useNavigate } from "react-router-dom";

import entersiteimg from "../../image/entersiteimg.png";

function Entersite() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/th")}>
        <img src={entersiteimg} alt="entersite" />
      </button>
    </div>
  );
}

export default Entersite;
