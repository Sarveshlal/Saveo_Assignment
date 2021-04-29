import { useEffect, useState } from "react";
import "./top.css"
import "./left.css"
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
function Top(){
    let [location,setLocation] = useState("");
    let [location1,setLocation1] = useState([])
    let [latti1,setLatti1] = useState([]);
    let [longi1,setLongi1] = useState([]);
    let [latti,setLatti] = useState("");
    let [long,setLong] = useState("");
    let [button,setButton]= useState(true)
    let [show,setShow] = useState(true)
    let [markers, setMarkers] = useState([]);
    useEffect(()=>{
        if(location.length>0 && latti.length>0 && long.length>0)
        {
            setButton(false)
        }else{
            setButton(true)
        }
    },[location,latti,long])
    useEffect(()=>{
        if(location1.length>0)
            setShow(false)
        else
            setShow(true)
    },[location1])
    function submit(){
        setLocation1(location1.concat(location))
        setLatti1(latti1.concat(latti))
        setLongi1(longi1.concat(long))
        setLocation("");
        setLong("");
        setLatti("")
        setMarkers((current) => [...current,{
                lat: latti1,
                lng: longi1,
            },
        ]);
    }
    const mapContainerStyle = {
  height: "519px",
  width: "614px",
    };
    const center = {
  lat: 12.972442,
  lng: 77.580643,
};
    const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAYv_vo3vywTsUdfQvoWfetPizV9ISkJEU"
  });
    if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

    return(
        <div>
            <label htmlFor="location" id="loc">Location</label>
            <div className="rectangle6">
                <input type="text" placeholder="Location" value={location} onChange={(e)=>{setLocation(e.target.value)}} id="location" style={{border:"none",height:"30px",width:"170px",position:"relative",top:"5px",left:"5px",backgroundColor:"#f2faff"}}/>
            </div>
            <label htmlFor="lat" id="latt">Enter Latitude</label>
            <div className="rectangle2">
                <input type="text" placeholder="Lat" value={latti} onChange={(e)=>{setLatti(e.target.value)}} id="lat" style={{border:"none",height:"30px",width:"110px",position:"relative",top:"5px",left:"5px",backgroundColor:"#f2faff"}}/>
            </div>
            <label htmlFor="lon" id="long">Enter Longitude</label>
            <div className="rectangle7">
                <input type="text" placeholder="Lon" value={long} onChange={(e)=>{setLong(e.target.value)}} id="lon" style={{border:"none",height:"30px",width:"110px",position:"relative",top:"5px",left:"5px",backgroundColor:"#f2faff"}}/>
            </div>
            {
                (button)?(
                    <button type="button" className="rectangle4" disabled="true">submit</button>
                ):(
                    <button type="button" className="rectangle4" style={{opacity:"1"}} onClick={submit}>ADD</button>
                )
            }
            <div>
            <div className="rectangle8"></div>
            <p className="all">ALL Coordinates</p>
            <div className="my">My Coordinates</div>
            <div className="my" style={{left:"719px"}}>Latitude</div>
            <div className="my" style={{left:"827px"}}>Longitude</div>
            <div className="coor">
                {
                    location1.map((item,index)=>(
                        <div>
                            <p>{index+1}).{item}</p>
                        </div>
                    ))
                }
            </div>
            <div className="default">
                {
                    latti1.map((items)=>(
                        <div>
                            <p>{items}</p>
                        </div>
                    ))
                }
            </div>
            <div className="default2">
                {
                    longi1.map((elem)=>(
                        <div><p>{elem}</p></div>
                    ))
                }
            </div>
            {
                show?(
                    <button type="button" className="show" disabled="true"> Show Route</button>
                    ):(
                        <button type="button" className="show" style={{background:"#074770 0% 0% no-repeat padding-box",color:"#FFFFFF"}}> Show Route</button>
                )
            }
            <div className="map">
                <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={7}
                center={center}
            >
                {
                    markers.map((elem)=>(
                      <Marker key={`${elem.lat}-${elem.lng}`} position={{ lat: elem.lat, lng: elem.lng }}/>  
                    ))
                }
            </GoogleMap>
            </div> 
            <div className="pointer"></div>
        </div>
        </div>
    )
}
export default Top;