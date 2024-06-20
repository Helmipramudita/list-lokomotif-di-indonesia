import React, { useState } from "react";
import lokomotifJSON from "../data/lokomotif.json";
import LokomotifItem from "./LokomotifItem";
import "./LokomotifList.css";

const LokomotifList = () => {
  const [lokomotifs] = useState(lokomotifJSON);

  return (
    <div className="list-lokomotif">
      {lokomotifs.map((lok) => (
        <LokomotifItem key={lok.id} lokomotif={lok} />
      ))}
    </div>
  );
};

export default LokomotifList;
