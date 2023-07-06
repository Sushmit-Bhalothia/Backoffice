import "../../css/main.css";
import { useState, useEffect } from "react";
function Addfilter() {
  const [active, setactive] = useState("1");

  useEffect(() => {
    // Add your logic here to handle rendering or perform any actions based on the active state
    console.log("Active state:", active);
  }, [active]);

  const handleFilterClick = (filter) => {
    setactive(filter);
  };

  return (
    <>
      <div style={{ display: "flex", cursor: "pointer" }}>
        {/* <div> */}
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("1")}
        >
          Star
          <div
            className={active === "1" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        {/* </div> */}
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("2")}
        >
          Sapphire
          <div
            className={active === "2" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("3")}
        >
          Ruby
          <div
            className={active === "3" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("4")}
        >
          Emerald
          <div
            className={active === "4" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("5")}
        >
          Diamond
          <div
            className={active === "5" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("6")}
        >
          Presidental Diamond
          <div
            className={active === "6" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("7")}
        >
          Royal Diamond
          <div
            className={active === "7" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
        <div
          className="additionalFilter"
          onClick={() => handleFilterClick("8")}
        >
          Ambassador
          <div
            className={active === "8" ? "activeAdditionalFilter" : ""}
            style={{
              marginTop: "2vh",
              // //backgroundColor: "blue",
              height: "1px",
              width: "100%",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          //margin: "3vh",
          //marginLeft: "2vw",
          margin: "0 0 2vw 2vw",
          width: "95%",
          height: "0.25px",
          background: "grey",
          // marginTop: "0",
        }}
      ></div>
    </>
  );
}
export default Addfilter;
