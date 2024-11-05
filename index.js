import RelationMap from "./relationmap/relationmap.js";
import assets from "./data/assets.js"

const cvs = document.getElementById('cvs');
const rm = new RelationMap(cvs);
var isMouseDown = false;

onload=()=>{
    for (let i = 0; i < assets.length; i++) {
        rm.addItem( { ...assets[i] });
    }
    const startPos = { x:10, y:10 };
    const maxDist = { w:0, h:0 };
    rm.arrange_items(rm.items[0][0], startPos, maxDist);
    rm.draw();
};