import React from "react";

const Card = (props) => {
  return (
    <div className="col-sm-12 col-lg-3 my-2">
      <div className="div card shadow mx-auto" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{props.date}</h5>
          <p className="card-text">
            {props.min_t} {props.max_t}
          </p>

          {/*<p className="card-text"> {props.hour.map((e) => e.time)}</p>

             <p className="card-text">{e.temp_c}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
