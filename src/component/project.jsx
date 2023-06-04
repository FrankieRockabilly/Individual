import { Link } from "react-router-dom"

export default function Project({judul, ket,img}){
    return(
        <>
        <div className="py-5 px-3">
            <div className="text-white bg-gray-900 py-2 px-2 md:w-96 ">
                <img src={img} alt="workspace" className="mx-auto md:w-80 h-48"/>
                <h2 className="font-bold text-xl my-3">{judul} </h2>
                <p className="text-sm">{ket} </p>
                <button className="bg-yellow-600 py-1 px-10 my-2 text-black hover:bg-gray-700 hover:text-white duration-200 mt-3 rounded-sm">
                Detail </button>
            </div>
        </div>
        </>
    )
}