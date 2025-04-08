import React from "react";

function Footer(){
    return(
        <div className="bg-black text-center text-cyan-500 rounded-lg">
            <footer>
                Sai Sai Resume © {new Date().getFullYear()}
            </footer>
        </div>
    )
}
export default Footer;