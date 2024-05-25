import React from "react";
import { useState, useEffect } from "react";


function DirectiveList({ directive111Data }) {
    return (
        <>
            {directive111Data.map(mass => 
            <div key={mass.id}>
                <ul>
                    <li title="Mass Name">{mass.name}</li>
                    <li title="Creator">{mass.creator}</li>
                    <li title="EC-1 Name">{mass.ec1Name}</li>
                    <li>EC-1 Points</li>
                    <ul>
                        <li title="EC-1 Pt 1">{mass.ec1Points.xyPt1}</li>
                        <li title="EC-1 Pt 2">{mass.ec1Points.xyPt2}</li>
                        <li title="EC-1 Pt 3">{mass.ec1Points.xyPt3}</li>
                        <li title="EC-1 Pt 4">{mass.ec1Points.xyPt4}</li>
                        <li title="EC-1 Pt 5">{mass.ec1Points.xyPt5}</li>
                        <li title="EC-1 Pt 6">{mass.ec1Points.xyPt6}</li>
                    </ul>
                    <li title="EC-1 Height">{mass.ec1Height}</li>
                    <li>Maelstrom</li>
                    <ul>
                        <li title="Center Pt">{mass.maelstrom.centerPt}</li>
                        <li title="Center Pt">{mass.maelstrom.radius1}</li>
                        <li title="Center Pt">{mass.maelstrom.radius2}</li>
                        <li title="Center Pt">{mass.maelstrom.callAngle}</li>
                    </ul>
                    <li>Square 1 Points</li>
                    <ul>
                        <li title="Square 1 Pt 1">{mass.square1.xyPt1}</li>
                        <li title="Square 1 Pt 2">{mass.square1.xyPt2}</li>
                        <li title="Square 1 Pt 3">{mass.square1.xyPt3}</li>
                        <li title="Square 1 Pt 4">{mass.square1.xyPt4}</li>
                        <li title="Square 1 Height">{mass.square1.height}</li>
                    </ul>
                    <li>Guide Points</li>
                    <ul>
                        <li title="Guide Pt 1">{mass.guide.xyzPt1}</li>
                        <li title="Guide Pt 2">{mass.guide.xyzPt2}</li>
                    </ul>
                    <li>Wirecut</li>
                    <ul>
                        <li title="Depth">{mass.wirecut.depth}</li>
                        <li title="Delete: A or B">{mass.wirecut.selectDelete}</li>
                    </ul>
                    <li>Square 2 Points</li>
                    <ul>
                        <li title="Square 2 Pt 1">{mass.square2.xyPt1}</li>
                        <li title="Square 2 Pt 2">{mass.square2.xyPt2}</li>
                        <li title="Square 2 Pt 3">{mass.square2.xyPt3}</li>
                        <li title="Square 2 Pt 4">{mass.square2.xyPt4}</li>
                        <li title="Square 2 Height">{mass.square2.height}</li>
                    </ul>
                    <li>EC-2</li>
                    <ul>
                        <li title="Shirt Color">{mass.ec2.colorShirt}</li>
                        <li title="Eye Color RGB Values">{mass.ec2.colorEye}</li>
                    </ul>
                </ul>
                </div>
            )}
        </>
    )
};

export default DirectiveList;