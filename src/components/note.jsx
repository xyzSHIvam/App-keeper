import React from "react";

import Mapnote from "./mapnote";//main html for props
function Note1(n){
    return <Mapnote key={n.key} title={n.title} content={n.content}/>;
}


export default Note1;