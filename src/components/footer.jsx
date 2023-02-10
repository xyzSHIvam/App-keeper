import React from "react";
let y=new Date();
let year=y.getFullYear();
function Footer(){
    return <footer>
        <p>Copyright ©️ {year}</p>
           </footer>;
}
export default Footer;