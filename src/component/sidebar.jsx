import { BiUserCircle } from "react-icons/bi";
import { AiFillHome,AiOutlineDoubleRight } from "react-icons/ai";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = ()=>{
    return(
        <>
        <div className="sticky top-0 opacity-[0.2] hover:opacity-100">
             {/* sidebar start */}
            <div className="z-10 bg-[rgba(0,0,0,0.48)] hover:bg-slate-800 absolute left-0 top-16 p-2 rounded-full mx-2 text-white md:invisible hover:scale-110 duration-500">
                    <div className="group relative my-3">
                        <Link to="/"><AiFillHome className="w-5 hover:scale-125 duration-300"/></Link>
                        <div className="absolute top-0 left-8 hidden group-hover:block">
                            <h2 className="text-sm block ">Home</h2>
                        </div>
                    </div>

                    <div className="reative group my-3">
                        <div className="relative">
                            <Link to="/portfolio"><BiUserCircle className="w-5 hover:scale-125 duration-300"/></Link>
                            <div className="absolute top-0 left-8 hidden group-hover:block">
                                <h2 className="text-sm block">Profil</h2>
                            </div>
                        </div>
                    </div>

                    <div className="reative group my-3">
                        <div className="relative">
                            <Link to="/contact"><FaListUl className="w-5 hover:scale-125 duration-300"/></Link>
                            <div className="absolute top-0 left-8 hidden group-hover:block">
                                <h2 className="text-sm block">Contact</h2>
                            </div>
                        </div>
                    </div>
                </div>
            {/* sidebar end */}
        </div>
        </>
    )
}

export function LeftBar (){
    return(
        <>
        <div className="bg-[rgba(0,0,0,0.5)] h-[100vh]  w-28 text-white absolute text-center py-5 duration-500 left-0 ">
                <div className="group">
                    <a href="" className="text-red"><AiOutlineDoubleRight /></a>
                    <div className="group-hover:left-10 flex flex-col gap-10 ">
                        <a href="" className="hover:bg-gray-700 rounded-sm py-3">Home</a>
                        <a href="" className="hover:bg-gray-700 rounded-sm py-3">Portfolio</a>
                        <a href="" className="hover:bg-gray-700 rounded-sm py-3">Contact</a>
                    </div>
                </div>
        </div>
    </>
    )
}



export default Sidebar