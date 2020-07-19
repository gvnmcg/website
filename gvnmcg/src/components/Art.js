import React from 'react';


const Art = () => (
    <div className="art">
      {["dnd", "campaign", "planes", "MM", "street flesh", "water", "snortin", "big"].map((pic) => (
        <img src={require("../style/myart/" + pic + ".jpg")} alt={pic} key={pic} />
      ))}
    </div>
  );

export default Art;