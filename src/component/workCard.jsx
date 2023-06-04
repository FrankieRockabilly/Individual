import projects from "./projects.json"
import Project from "./project"

export default function WorkCard(){
    return(
        <>
        <h2 className="font-bold text-white tracking-widest text-3xl text-center uppercase">portfolio</h2>
        <p className="text-white text-center font-bold">-</p>
        <div className="md:flex md:flex-wrap items-center justify-center">
            {projects.map((v, i)=>{
                return(
                    <Project 
                        judul = {v.judul}
                        ket = {v.ket}
                        img = {v.img}
                    />
                )
            })}
        </div>
        </>
    )
}