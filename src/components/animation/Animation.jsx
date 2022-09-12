import "./animation.css";

function Animation() {
  return (
    <div className="Animation">
      <div className="runningLine">
        <div className="one">
          <span>
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
          </span>
        </div>
        <div className="one two">
          <span>
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
            <img src={require("./nike-logo.webp")} alt="" className="imges" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Animation;
