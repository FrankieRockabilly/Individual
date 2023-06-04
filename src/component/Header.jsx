import React,{ useState } from "react";
import Sidebar from "./sidebar"
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub,FaHome } from "react-icons/fa";
import { BsFacebook, BsInstagram,BsTelephone,BsTwitter,BsFilterRight } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { AiFillTwitterCircle,AiFillInstagram,AiOutlineLike,AiOutlineMail} from "react-icons/ai";
import { Link } from "react-router-dom";



export default function Header(){

    function handleClick(){
        document.getElementById("listMenu").classList.toggle("hidden")
    }

    return (
        <div className=" sticky top-0 w-[100%] bg-black py-4 border-b-[0.1px] border-slate-400 relative">
            {/* judul */}
            <div className="mx-5  md:mx-24 flex justify-between items-center text-center">
                <div>
                    <Link to="/">
                        <h1 className="font-bold  text-white ">Frengki iskandar</h1>
                    </Link>
                </div>
                <button id="btnClick" className="text-white ml-auto md:hidden cursor-pointer" onClick={handleClick}>
                    <BsFilterRight size={20}/>
                </button>

                <div className="hidden md:block md:flex justify-around gap-6">
                    <div className="text-white flex md:gap-x-10 font-bold invisible md:visible ">
                        <Link to="/"> <h2 className="hover:text-slate-400">Home</h2></Link>
                        <Link to="/portfolio"> <h2 className="hover:text-slate-400">About</h2></Link>
                        <Link to="/contact"> <h2 className="hover:text-slate-400">Contact</h2></Link>
                    </div>

                        {/* icons */}
                    <div className="flex justify-center text-center gap-x-4 text-white mt-1 invisible md:visible">
                        <a href="#"><FaFacebookSquare /> </a>
                        <a href="#"><FaWhatsapp /> </a>
                        <a href="#"><FaGithub /> </a>
                        <a href="#"><BsInstagram /> </a>
                    </div>
                </div>
            </div>

            <div id="listMenu" className="bg-black w-full text-white my-5 flex py-5 flex-col gap-5 absolute top-10 hidden">
                <Link to="/"> <h2 className="hover:bg-slate-600 w-auto rounded-sm px-5 py-2">Home</h2></Link>
                <Link to="/portfolio"> <h2 className="hover:bg-slate-600 w-auto  rounded-sm px-5 py-2">About</h2></Link>
                <Link to="/contact"> <h2 className="hover:bg-slate-600 w-auto  rounded-sm px-5 py-2">Contact</h2></Link>
            </div>
        </div>
    )
}

export function MainHome(){
    return(
        <>
        <Sidebar />
                <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_960_720.jpg)",
                            backkgroundSize:"cover"
                        }} 
                        className=" text-4xl h-[100vh] text-center py-8 px-3 xl:py-[5rem] xl:px-[15rem] md:h-[100vh]">
                    {/* im frengky iskandar */}
                    <div className="md:flex md:justify-around md:p-5 items-center px-10 mt-10">
                        <div className="mx-28 text-center">
                            <h1 className="font-bold text-green-500 text-center mx-0">I'm Frengky</h1>
                            <p className="uppercase font-mono text-white text-base mt-2">web developer</p>
                        </div>
                        <p className="text-white text-sm mt-5 "> Saya merupakan seorang web developer yang memulai karirnya mulai dari tahun 2023 setelah menamatkan pendidikan sarjananya di Universitas Pasir Pengaraian dan sekarang juga aktif dalam beberapa bidang yang lain termasuk dalam bidang kesenian 
                        <span className="text-green-600 font-bold uppercase"> And this is my Journey </span> </p>
                        <div className="absolute bottom-10"> 
                            <h2 className="text-white font-thin text-lg">follow me on:</h2>
                            <div className="text-white rounded-full mx-[5rem] flex gap-1 my-3">
                                <a href="#"> <BsFacebook  className="border border-white rounded-full p-2"/> </a>   
                                <a href="#"> <AiFillTwitterCircle  className="border border-white rounded-full p-2"/> </a>   
                                <a href="#"> <AiFillInstagram  className="border border-white rounded-full p-2"/> </a>   
                                <a href="#"> <FiLinkedin  className="border border-white rounded-full p-2"/> </a>   
                            </div>
                        </div>
                    </div>
                </div>
    </>
    )
}

export function Profile(){
    return(
        <div className=" md:flex my-10  mx-5 to">
            <div className="mx-5">
                <figure className="w-[150px] h-[150px] mx-auto">
                    <img src="../img/date.jpg" alt=""  className=" w-full"/>
                </figure>
            </div>

            <div>
                <p>Saya Frengki Iskandar dan saya adalah salah satu murid HariSenin.com dan mencoba untuk memulai karir dari sini</p>
                <p>Saya menamatkan pendidikan sarjana saya di Universitas Pasir Pengaraian dan saya fresh graduate</p>
                <p>Saya harap ini akan menjadi langkah awal baik bagi saya untuk dapat  menjadi seorang web developer handal dengan berbekal ilmu dari bootcamp hari senin</p>
            </div>
        </div>
    )
}

export function Dataa({jenis , isi, judul ,gambar,tanggal,suka}){
    const[like, setLike] = useState(Number(suka))
    const handleLike = ()=>{
    setLike(like + 1)
    console.log("clicked");
    }

    return(



        <div id="jenjang" className="flex justify-around items-center my-4 border py-2 px-5 bg-gray-200 rounded-md"> 
        <div className="">
            <img src={gambar} alt="" className="h-[120px] w-[210px]"/>
        </div>
            <div className="ml-7">
                <h2 className="font-bold uppercase">{jenis} </h2>
                <p className="font-semibold">{isi}</p>
                <p className="text-gray-500"> {tanggal} </p>
                <div className="flex justify-end items-center gap-2">
                    <p className="text-sm text-gray-500">sukai halaman ini </p>
                    <button onClick={handleLike }><AiOutlineLike /></button>
                    <p className="text-sm text-gray-500">{like} suka</p>
                </div>
            </div>
        </div>
    )
}

export function Footers(){
    return(
        <div className="footer bg-black text-white py-7 px-5"> 
            <div className="fc md:flex justify-center gap-x-28">
                <div className="left ">
                    <div className="flex py-2">
                        <FaHome size={20} style={{color :"#FFF", marginRight:"2rem"}} />
                        <div>
                            <p>Pasir Pengaraian , Rokan Hulu Riau</p>
                            <p>Indonesia</p>
                        </div>
                    </div>
                    <div className="flex py-2">
                        <BsTelephone size={20} style={{color :"#FFF", marginRight:"2rem"}} />
                        <div>
                            <p>(+62) 822 1566 0040 </p>
                        </div>
                    </div>
                    <div className="flex py-4">
                        <AiOutlineMail size={20} style={{color :"#FFF", marginRight:"2rem"}} />
                        <div>
                            <p>frankierockabilly@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="w-96">
                    <h4 className="text-xl font-bold">About Me</h4>
                    <p>This is me Frengki Iskandar, One of the students from HariSenin.com and i want to become a Professional Web Developer</p>
                    <div  className="flex gap-2 my-3">
                        <a href=""><FaFacebookSquare size={25}/></a>
                        <a href=""><FaWhatsapp size={25}/></a>
                        <a href=""><BsTwitter size={25}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}