import React, { useState } from "react";
import Heading from "./heading.jsx";
import Footer from "./footer.jsx";
import Note1 from "./note.jsx"//props usage(2 call)
import Input from "./Input"
function App(){
    const [note,setNote]=useState([]);
    function jj(e){
        setNote([...note,e])
    }
    return <div>
              <Heading/>
              {note.map(Note1)}
              <Input jj={jj}></Input>
             <Footer />
    </div>;
 }
 export default App;