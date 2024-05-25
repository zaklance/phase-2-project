import React from "react";
import { useEffect, useState } from "react";
import { RgbColorPicker } from "react-colorful";

function Form111({ handleSubmit, directive111Data }) {
    const [color, setColor] = useState({ r: 66, g: 103, b: 209 });
    const colorArrayValues = Object.values(color);
    const [ counter, setCounter ] = useState(0);
    const [ clickOffsetXY1, setClickOffsetXY1 ] = useState([]);
    const [ clickOffsetXY2, setClickOffsetXY2 ] = useState([]);
    const [ clickOffsetXY3, setClickOffsetXY3 ] = useState([]);
    const [ clickOffsetXY4, setClickOffsetXY4 ] = useState([]);
    const [ clickOffsetXY5, setClickOffsetXY5 ] = useState([]);
    const [ clickOffsetXY6, setClickOffsetXY6 ] = useState([]);
    const [ ec1Height, setEc1Height ] = useState(0)
    const [ clickMaelstromPt, setClickMaelstromPt ] = useState([]);
    const [ clickMaelstromRad1, setClickMaelstromRad1 ] = useState();
    const [ clickMaelstromRad2, setClickMaelstromRad2 ] = useState();
    const [ sq1CenterPt, setSq1CenterPt ] = useState([]);
    const [ sq1Width, setSq1Width ] = useState();
    const [ rotateAngle, setRotateAngle ] = useState();
    const [ clickGuidePt1, setClickGuidePt1 ] = useState([0, 0]);
    const [ clickGuidePt2, setClickGuidePt2 ] = useState([0, 0]);
    const [ sq1CalcPts, setSq1CalcPts ] = useState([]);
    
    function handleClick(event) {
        setCounter(counter + 1);       
        if(counter === 0){ setClickOffsetXY1([event.nativeEvent.offsetX, event.nativeEvent.offsetY]); 
        } if (counter === 1){ setClickOffsetXY2([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 2){ setClickOffsetXY3([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 3){ setClickOffsetXY4([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 4){ setClickOffsetXY5([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 5){ setClickOffsetXY6([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 6){ setClickMaelstromPt([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 7){ setSq1CenterPt([(event.nativeEvent.offsetX - (sq1Width / 2)), (event.nativeEvent.offsetY - (sq1Width / 2))]);
        } if (counter === 8){ setClickGuidePt1([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        } if (counter === 9){ setClickGuidePt2([event.nativeEvent.offsetX, event.nativeEvent.offsetY]);
        }
    };

    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }
    // h = x, k = y, L = length of side, theta = radians
    function calculatePoints(h, k, L, theta) {
        let points = [];
        // Calculate each point and push it to the array
        points.push([(h + 0.5 * L * Math.sin(theta)).toFixed(2), (k + 0.5 * L * Math.cos(theta)).toFixed(2)]);
        points.push([(h - 0.5 * L * Math.cos(theta)).toFixed(2), (k + 0.5 * L * Math.sin(theta)).toFixed(2)]);
        points.push([(h - 0.5 * L * Math.sin(theta)).toFixed(2), (k - 0.5 * L * Math.cos(theta)).toFixed(2)]);
        points.push([(h + 0.5 * L * Math.cos(theta)).toFixed(2), (k - 0.5 * L * Math.sin(theta)).toFixed(2)]);
        return points;
    }

    return (
        <form id="form111" onSubmit={handleSubmit} >
                <h3>Mass Modeler</h3>
                <h4 className="formHeader">Identifier</h4>
                <label>
                    <input type="text" name="massName" placeholder="Mass Name"/>
                </label>
                <h4 className="formHeader">Creator</h4>
                <label>
                    <input type="text" name="creator" placeholder="Creator Full Name"/>
                </label>
                <h4 className="formHeader">EC-1 Layer Name</h4>
                <label>
                    <input type="text" name="ec1Name" placeholder="Layer Name"/>
                </label>
                <h4 className="formHeader">EC-1 Points</h4>
                <label className="slimLabel">
                    <input id="ec1Pt1" type="text" name="ec1Pt1" placeholder="Point 1 (x, y)" value={clickOffsetXY1} onChange={event => setClickOffsetXY1([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <label className="slimLabel">
                    <input id="ec1Pt2" type="text" name="ec1Pt2" placeholder="Point 2 (x, y)" value={clickOffsetXY2} onChange={event => setClickOffsetXY2([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <label className="slimLabel">
                    <input id="ec1Pt3" type="text" name="ec1Pt3" placeholder="Point 3 (x, y)" value={clickOffsetXY3} onChange={event => setClickOffsetXY3([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <label className="slimLabel">
                    <input id="ec1Pt4" type="text" name="ec1Pt4" placeholder="Point 4 (x, y)" value={clickOffsetXY4} onChange={event => setClickOffsetXY4([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <label className="slimLabel">
                    <input id="ec1Pt5" type="text" name="ec1Pt5" placeholder="Point 5 (x, y)" value={clickOffsetXY5} onChange={event => setClickOffsetXY5([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <label className="slimLabel">
                    <input id="ec1Pt6" type="text" name="ec1Pt6" placeholder="Point 6 (x, y)" value={clickOffsetXY6} onChange={event => setClickOffsetXY6([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <div id="drawArea">
                    <svg id="drawBox" onClick={handleClick}>
                        {/* Points */}
                        <circle className="dot" cx={clickOffsetXY1[0]} cy={clickOffsetXY1[1]} r="2" />
                        <circle className="dot" cx={clickOffsetXY2[0]} cy={clickOffsetXY2[1]} r="2" />
                        <circle className="dot" cx={clickOffsetXY3[0]} cy={clickOffsetXY3[1]} r="2" />
                        <circle className="dot" cx={clickOffsetXY4[0]} cy={clickOffsetXY4[1]} r="2" />
                        <circle className="dot" cx={clickOffsetXY5[0]} cy={clickOffsetXY5[1]} r="2" />
                        <circle className="dot" cx={clickOffsetXY6[0]} cy={clickOffsetXY6[1]} r="2" />
                        {/* Lines */}
                        <line x1={clickOffsetXY1[0]} y1={clickOffsetXY1[1]} x2={clickOffsetXY2[0]} y2={clickOffsetXY2[1]} />
                        <line x1={clickOffsetXY2[0]} y1={clickOffsetXY2[1]} x2={clickOffsetXY3[0]} y2={clickOffsetXY3[1]} />
                        <line x1={clickOffsetXY3[0]} y1={clickOffsetXY3[1]} x2={clickOffsetXY4[0]} y2={clickOffsetXY4[1]} />
                        <line x1={clickOffsetXY4[0]} y1={clickOffsetXY4[1]} x2={clickOffsetXY5[0]} y2={clickOffsetXY5[1]} />
                        <line x1={clickOffsetXY5[0]} y1={clickOffsetXY5[1]} x2={clickOffsetXY6[0]} y2={clickOffsetXY6[1]} />
                        <line x1={clickOffsetXY6[0]} y1={clickOffsetXY6[1]} x2={clickOffsetXY1[0]} y2={clickOffsetXY1[1]} />
                        {/* Maelstrom */}
                        <circle id="radius1" cx={clickMaelstromPt[0]} cy={clickMaelstromPt[1]} r={clickMaelstromRad1} />
                        <circle id="radius2" cx={clickMaelstromPt[0]} cy={clickMaelstromPt[1]} r={clickMaelstromRad2} />
                        {/* Square 1 */}
                        <rect id="square1" x={sq1CenterPt[0]} y={sq1CenterPt[1]} width={sq1Width} height={sq1Width} style={{ transform: `rotate(${rotateAngle}deg)`}}/>
                        {/* Guide */}
                        <circle className="dot-purple" cx={clickGuidePt1[0]} cy={clickGuidePt1[1]} r="3" />
                        <circle className="dot-purple" cx={clickGuidePt2[0]} cy={clickGuidePt2[1]} r="3" />
                        <line id="guide" x1={clickGuidePt1[0]} y1={clickGuidePt1[1]} x2={clickGuidePt2[0]} y2={clickGuidePt2[1]} />
                    </svg>
                    <p className="smallText">Click the points of your polyline in the square above. 6 clicks: 1 acute angle, 1 obtuse, and one right angle.</p>
                </div>
                <h4 className="formHeader">EC-1 Height</h4>
                <label>
                    <input type="number" name="ec1Height" placeholder="Height" value={ec1Height} onChange={event => setEc1Height(event.target.value)}/>
                </label>
                <h4 className="formHeader">Maelstrom</h4>
                <label className="slimLabel">
                    <input type="text" name="centerPt" placeholder="Center Point" value={clickMaelstromPt} onChange={event => setClickMaelstromPt([event.nativeEvent.offsetX, event.nativeEvent.offsetY])} />
                </label>
                <label className="slimLabel">
                    <input type="number" name="radius1" placeholder="Radius 1" onChange={event => setClickMaelstromRad1(event.target.value)}/>
                </label>
                <label className="slimLabel">
                    <input type="number" name="radius2" placeholder="Radius 2" onChange={event => setClickMaelstromRad2(event.target.value)}/>
                </label>
                <label className="slimLabel">
                    <input type="number" name="callAngle" placeholder="Call Angle"/>
                </label>
                <h4 className="formHeader">Square 1 Points</h4>
                <label>
                    <input type="number" name="sq1Width" placeholder="Square Width" onChange={event => setSq1Width(event.target.value)} />
                </label>
                <label>
                    <input type="number" name="sq1RotateAngle" placeholder="Rotate Angle" onChange={event => setRotateAngle(event.target.value)} />
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq1Pt1" placeholder="Point 1 (x, y)" value={calculatePoints(sq1CenterPt[0], sq1CenterPt[1], sq1Width, degreesToRadians(rotateAngle))[0]} onChange={event => setSq1CalcPts([]).push(event.target.value)} />
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq1Pt2" placeholder="Point 2 (x, y)" value={calculatePoints(sq1CenterPt[0], sq1CenterPt[1], sq1Width, degreesToRadians(rotateAngle))[1]} onChange={event => setSq1CalcPts([]).push(event.target.value)} />
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq1Pt3" placeholder="Point 3 (x, y)" value={calculatePoints(sq1CenterPt[0], sq1CenterPt[1], sq1Width, degreesToRadians(rotateAngle))[2]} onChange={event => setSq1CalcPts([]).push(event.target.value)} />
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq1Pt4" placeholder="Point 4 (x, y)" value={calculatePoints(sq1CenterPt[0], sq1CenterPt[1], sq1Width, degreesToRadians(rotateAngle))[3]} onChange={event => setSq1CalcPts([]).push(event.target.value)} />
                </label>
                <h4 className="formHeader">Square 1 Height</h4>
                <label>
                    <input type="number" name="sq1Height" placeholder="Height" value={ec1Height} onChange={event => setEc1Height(event.target.value)}/>
                </label>
                <h4 className="formHeader">Guide Line Points</h4>
                <label className="slimLabel">
                    <input type="text" name="guidePt1" placeholder="Point 1 (x, y, z)" value={`${clickGuidePt1},0`} onChange={event => setClickGuidePt1(event.target.value)} />
                </label>
                <label className="slimLabel">
                    <input type="text" name="guidePt2" placeholder="Point 2 (x, y, z)"value={`${clickGuidePt1},${ec1Height}`} onChange={event => setClickGuidePt2(event.target.value)} />
                </label>
                <h4 className="formHeader">Wirecut</h4>
                <label className="slimLabel">
                    <input type="number" name="cutDepth" placeholder="cut depth"/>
                </label>
                <label className="slimLabel">
                    <input type="text" name="selectDelete" placeholder="Delete: A or B"/>
                </label>
                <h4 className="formHeader">Square 2 Points</h4>
                <label className="slimLabel">
                    <input type="text" name="sq2Pt1" placeholder="Point 1 (x, y)"/>
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq2Pt2" placeholder="Point 2 (x, y)"/>
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq2Pt3" placeholder="Point 3 (x, y)"/>
                </label>
                <label className="slimLabel">
                    <input type="text" name="sq2Pt4" placeholder="Point 4 (x, y)"/>
                </label>
                <h4 className="formHeader">Square 2 Height</h4>
                <label>
                    <input type="number" name="sq2Height" placeholder="Height"/>
                </label>
                <h4 className="formHeader">Shirt Color</h4>
                <label>
                    <input type="text" name="colorShirt" placeholder="Color of Shirt"/>
                </label>
                <h4 className="formHeader">Eye Color</h4>
                <label>
                    <input type="text" name="colorEye" placeholder="RGB Values 0-255 (r,g,b)" value={colorArrayValues} onChange={event => event.target.value}/>
                </label>
                <div className="small">
                    <RgbColorPicker color={color} onChange={setColor} />
                </div>
                <h4 className="formHeader">Email Text Content</h4>
                <label>
                    <input type="text" name="emailContent" placeholder="Text, if they entered a message"/>
                </label>
                <h4 className="formHeader">Error</h4>
                <label>
                    <input type="text" name="error" placeholder="Error Info"/>
                </label>
                <input id="submit" type="submit" value="Submit Mass"/>
        </form>
    )
}

export default Form111;