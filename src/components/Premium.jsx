import React, { Fragment } from "react";

const Premium = () => {
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <h1
          style={{ textAlign: "center", display: "flex", alignItems: "center" }}
        >
          <img
            src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png"
            alt="leafImg"
            style={{ width: "115px", marginRight: "-45px" }}
          />
          <b style={{ marginTop: "130px", margin: "0 10px", fontSize: "45px" }}>
            Join Edzorb Law Premium+ Today
          </b>
          <img
            src="https://edzorblaw.com/wp-content/uploads/2023/03/fin-leaf-left.png"
            alt="leafImg"
            style={{
              width: "115px",
              marginLeft: "-45px",
              transform: "scaleX(-1)",
            }}
          />
        </h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            padding: "20px 20px 0 20px",
            boxShadow: "0 3px 16px -4px rgba(0,0,0, 0.3)",
            margin: "20px",
            borderRadius: "40px",
            textAlign: "center",
          }}
        >
          <h2>Pre + Mains</h2>
          <h3 style={{ color: "red" }}>Newly Launched</h3>
        </div>
        <div
          style={{
            padding: "20px 20px 0 20px",
            boxShadow: "0 3px 16px -4px rgba(0,0,0, 0.3)",
            margin: "20px",
            borderRadius: "40px",
            textAlign: "center",
          }}
        >
          <h2>Pre + Mains + Int</h2>
          <h3 style={{ color: "red" }}>Most Popular</h3>
        </div>
        <div
          style={{
            padding: "20px 20px 0 20px",
            boxShadow: "0 3px 16px -4px rgba(0,0,0, 0.3)",
            margin: "20px",
            borderRadius: "40px",
            textAlign: "center",
          }}
        >
          <h2>Pre + Mains + Int</h2>
          <h3 style={{ color: "red" }}>Ultimate</h3>
        </div>
      </div>
    </Fragment>
  );
};

export default Premium;