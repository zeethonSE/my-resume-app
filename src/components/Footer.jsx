import React from "react";

function Footer(){
    return(
        <div className="bg-black text-center text-cyan-500 rounded-lg">
            <footer>
                Copyright © {new Date().getFullYear()} Sai Sai Resume
            </footer>
        </div>
    )
}
export default Footer;