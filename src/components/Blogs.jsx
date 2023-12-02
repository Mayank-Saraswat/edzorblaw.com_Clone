import React from "react";

const Blogs = () => {
  return (
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
          Blogs
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
  );
};

export default Blogs;