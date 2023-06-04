import listTool from "./alat.json"
import ShowTool from "./showTool"

export default function Tools(){
    return(
        <>
        <div className=" bg-gradient-to-b from-slate-800 to-black pb-20">
            <div className="text-white text-center">
                <h1 className="uppercase py-5 font-bold tracking-widest text-2xl">Tools</h1>
            </div>
            <div className="md:flex justify-around py-5">
                {
                    listTool.map((v,i)=>{
                        return(
                            <ShowTool 
                                nama = {v.nama}
                                img = {v.img}
                                ket = {v.ket}
                            />
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}