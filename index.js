import RelationMap from "./relationmap/relationmap.js";
import assets from "./data/assets.js"
console.log(assets);

onload=()=>{
    const cvs = document.getElementById('cvs');
    const rm = new RelationMap(cvs);
    for (let i = 0; i < assets.length; i++) {
        rm.addItem( { ...assets[i] });
    }
    rm.draw();
};