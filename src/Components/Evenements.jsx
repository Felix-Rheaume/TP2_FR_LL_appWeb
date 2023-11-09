import React from "react";
import EvenementCarte from "./EvenementCarte";

function Evenements(props) {
  return props.evenements ? (
    <div>
      <div className='mt-5 mx-auto'>
        <div className='cards-container scrollbar scrollbar-primary'>
          {props.evenements.map((event, index) => (
            <EvenementCarte key={index} evenement={event} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
}

export default Evenements;
