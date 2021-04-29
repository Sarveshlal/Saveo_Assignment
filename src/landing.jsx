import "./landing.css";
import Top from "./top";
function Landing(){
    return(
        <div id="artbox">
            <div className="rectangle1"></div>
            <button type="button" className="butt">Home</button>
            <Top/>
        </div>
    )
}
export default Landing;