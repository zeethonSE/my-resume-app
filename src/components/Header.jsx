import React from "react";
import resume from "../../resume";

function Header(){
    return(
        <div className="flex items-center h-32 bg-black rounded-xl">
            <div className="h-32 w-1/2">
                <img className="h-28 rounded-xl" src="./icons/saisai_logo_transparent.png" alt="SAI SAI Developer Logo" />
            </div>
            {/** Address */}
            {resume.map((rm, index) => (
            <div key={index} className="w-1/2 content-center text-right tracking-widest md:text-xl md:tracking-wide p-2">
                <h3 className="text-lg font-stretch-150% font-semibold">{rm.name}</h3>
                <p className="text-[8px] font-stretch-100% ml-2">{rm.address.city}, {rm.address.country}</p>
                <p className=" text-[6px] font-stretch-100% ml-2">{rm.address.email}</p>
                <a href={rm.address.gitHub} className="text-[8px] text-blue-500 transition delay-150 duration-300 ease-in-out hover:underline" target="_blank">
                    GitHub
                </a>
                <a href={rm.address.linkedIn} className="text-[8px] ml-2 text-blue-500 transition delay-150 duration-300 ease-in-out hover:underline" target="_blank">
                    LindedIn
                </a>
            </div>
            ))}
        </div>
    )
}

export default Header;