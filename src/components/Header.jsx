import React from "react";
import resume from "../../resume";

function Header(){
    return(
        <div className="flex items-center bg-black rounded-xl">
            <div className="w-1/2">
                <img src="./src/assets/SAISAI-developer.png" alt="SAI SAI Developer Logo" />
            </div>
            {/** Address */}
            {resume.map((rm, index) => (
            <div key={index} className="text-right p-2 w-1/2">
                <h3 className="text-xxl font-semibold">{rm.name}</h3>
                <p className="ml-2">{rm.address.city}, {rm.address.country}</p>
                <p className="ml-2">{rm.address.phone}</p>
                <p className="ml-2">{rm.address.email}</p>
                <a href={rm.address.gitHub} className="text-sm text-blue-500 transition delay-150 duration-300 ease-in-out hover:underline" target="_blank">
                    GitHub
                </a>
                ""
                <a href={rm.address.linkedIn} className="text-sm text-blue-500 transition delay-150 duration-300 ease-in-out hover:underline" target="_blank">
                    LindedIn
                </a>
            </div>
            ))};
        </div>
    )
}

export default Header;