import React from 'react';
import { useState, useEffect } from 'react';
// import './App.css';
import HeadNav from './HeadNav';
import Form111 from './Form111';
import DirectiveList from './DirectiveList';



function App() {
  function handleCopy() {
    selBody = document.body;
    selBody.style.background = 'linear-gradient(#f05fa6, #ed1654)';
    setTimeout(revertBody, 100);
  }
  function revertBody(){
    selBody = document.body;
    selBody.style.background = 'linear-gradient(#f6f6f6, #E7E5DF)';
  }

  const [ directive111Data, setDirective111Data ] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data')
    .then((resp) => resp.json())
    .then((data) => setDirective111Data(data))
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/data", {
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
              selectDelete: event.target.selectDelete.value
          },
          square2: {
              xyPt1: event.target.sq2Pt1.value,
              xyPt2: event.target.sq2Pt2.value,
              xyPt3: event.target.sq2Pt3.value,
              xyPt4: event.target.sq2Pt4.value,
              height: event.target.sq2Height.value
          },
          ec2: {
              colorShirt: event.target.colorShirt.value,
              colorEye: event.target.colorEye.value
          },
          emailContent: event.target.emailContent.value,
          error: event.target.error.value
        })
    }).then(response => response.json())
      .then(newDirective111Data => setDirective111Data([...directive111Data, newDirective111Data]));
}

  return (
    <>
      <HeadNav />
      <div className="wrapper" onCopy={handleCopy}>
        <div>
          <Form111 handleSubmit={handleSubmit} directive111Data={directive111Data} />
          <div id='directive' className='container'>
            <DirectiveList directive111Data={directive111Data} />
          </div>   
        </div>
      </div>
    </>
  );
};

export default App;
