import React from "react";
import resume from "../../resume";

function Resume() {
    return (
        <div className="flex flex-col md:flex-row justify-center p-2 h-full"> 
            {resume.map((rm, index) => (
                <div key={index} className="w-full md:w-1/2 p-4"> 
                    {/** About Me */}
                        <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">ABOUT ME</h3>
                    <div className="space-y-4">
                        <p>{rm.profile}</p>
                    </div>
                    {/** Technical Skills */}
                    <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">TECHNICAL SKILLS</h3>
                    <div className="space-y-2">
                        <p><span className="font-semibold">Front-End:</span> {rm.technicalSkills.frondend}</p>
                        <p><span className="font-semibold">Back-End:</span> {rm.technicalSkills.backend}</p>
                        <p><span className="font-semibold">Databases:</span> {rm.technicalSkills.database}</p>
                        <p><span className="font-semibold">Version Control:</span> {rm.technicalSkills.versionControl}</p>
                        <p><span className="font-semibold">Other Skills:</span> {rm.technicalSkills.otherSkills}</p>
                    </div>
                    
                    {/** Education */}
                    <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">EDUCATION</h3>
                    <div className="space-y-2">
                        {rm.education.map((edu, i) => (
                            <p key={i}>{edu.name} ({edu.year}) - {edu.school}</p>
                        ))}
                    </div>
                    
                    {/** Languages */}
                    <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">LANGUAGES</h3>
                    <div className="text-center space-y-2">
                        {rm.languages.map((lang, i) => (
                            <p key={i}>{lang.name} - {lang.level}</p>
                        ))}
                    </div>
                </div>
                ))}
            
                {resume.map((rm, index) => (
                <div key={index} className="w-full md:w-1/2 p-4"> 
                    {/** Projects */}
                    <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">PROJECTS</h3>
                    <div className="space-y-2">
                        {rm.projects.map((project, i) => (
                            <div key={i}>
                                <h4 className="text-l font-semibold">{project.name}</h4>
                                <p>{project.description}</p>
                                <a href={project.link} className="text-blue-500 hover:underline text-sm" target="_blank">View on GitHub</a>
                            </div>
                        ))}
                    </div>
                    
                    {/** Work Experience */}
                    <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">WORK EXPERIENCE</h3>
                    <div className="space-y-4">
                        {rm.workExperience.map((work, i) => (
                            <div key={i}>
                                <h4 className="text-l font-semibold">{work.name} ({work.year}) - {work.employer}</h4>
                                {work.description.map((desc, j) => (
                                    <p key={j}>{desc.a || desc.b}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    
                    {/** Additional Information */}
                    <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">ADDITIONAL INFORMATION</h3>
                    <div className="space-y-2">
                        {rm.additionalInfomation.map((info, i) => (
                            <p key={i}>{info.a || info.b || info.c}</p>
                        ))}
                    </div>
                    
                    {/** References */}
                    {/* <h3 className="text-xl text-center font-semibold shadow-lg shadow-gray-700 p-3 rounded-lg">REFERENCE</h3>
                    <div className="text-center space-y-2">
                        <p>{rm.reference.employer}</p>
                        <p>{rm.reference.phone}</p>
                        <p>{rm.reference.email}</p>
                    </div> */}
                </div>
            ))}
        </div>
    );
}

export default Resume;
