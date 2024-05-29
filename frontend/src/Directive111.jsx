import React, { useState, useEffect } from "react";
import Form111 from "./Form111";
import DirectiveList from "./DirectiveList";
import guidePg6 from './assets/images/850-2018_wosewick_A4_Guides-X01-Set_111.jpg';


function Directive111() {
    
      const [ directive111Data, setDirective111Data ] = useState([]);
      useEffect(() => {
        fetch('http://localhost:3000/111')
        .then((resp) => resp.json())
        .then((data) => setDirective111Data(data))
      }, []);
    
      function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3000/111", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              id: '',
              name: event.target.massName.value,
              creator: event.target.creator.value,
              ec1Name: event.target.ec1Name.value,
              ec1Points: {
                  xyPt1: event.target.ec1Pt1.value,
                  xyPt2: event.target.ec1Pt2.value,
                  xyPt3: event.target.ec1Pt3.value,
                  xyPt4: event.target.ec1Pt4.value,
                  xyPt5: event.target.ec1Pt5.value,
                  xyPt6: event.target.ec1Pt6.value
              },
              ec1Height: event.target.ec1Height.value,
              maelstrom: {
                  centerPt: event.target.centerPt.value,
                  radius1: event.target.radius1.value,
                  radius2: event.target.radius2.value,
                  callAngle: event.target.callAngle.value
              },
              tweenCurve: "", 
              square1: {
                  xyPt1: event.target.sq1Pt1.value,
                  xyPt2: event.target.sq1Pt2.value,
                  xyPt3: event.target.sq1Pt3.value,
                  xyPt4: event.target.sq1Pt4.value,
                  height: event.target.sq1Height.value
              },
              guide: {
                  xyzPt1: event.target.guidePt1.value,
                  xyzPt2: event.target.guidePt2.value,
                  length: ""
              },
              wirecut: {
                  depth: event.target.cutDepth.value,
                  selectDelete: ""
              },
              square2: {
                  xyPt1: "",
                  xyPt2: "",
                  xyPt3: "",
                  xyPt4: "",
                  height: ""
              },
              ec2: {
                  colorShirt: event.target.colorShirt.value,
                  colorEye: event.target.colorEye.value
              },
              emailContent: event.target.emailContent.value,
              error: ""
            })
        }).then(response => response.json())
          .then(newDirective111Data => setDirective111Data([...directive111Data, newDirective111Data]));
    }
    
    return (
        <>
            <Form111 handleSubmit={handleSubmit} directive111Data={directive111Data} />
            <div id='directive' >
                {/* <embed  className='images' src={guidePg6} alt="guide image" frame='none' /> */}
                <img className='images' src={guidePg6} alt="guide image"  />
                <DirectiveList directive111Data={directive111Data} />
            </div>
        </>   
    )
}

export default Directive111;