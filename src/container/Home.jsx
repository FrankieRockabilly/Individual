import React, {Component} from "react";
import Header, { Footers } from "../component/Header";
import JsonGua from '../component/ListItem';
import Sidebar from "../component/sidebar";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

class Home extends Component {
    render(){
        return (
            <>
                <Header />
                {/* <Sidebar/> */}
                <div style={{backgroundImage :"url('https://cdn.pixabay.com/photo/2015/10/31/14/36/dark-1015830_960_720.jpg')", backgroundSize :'cover' }} className=" bg-gradient-to-r from-black to-slate-800 h-[100vh] px-28 py-28">
                    <div className="text-white md:text-center">
                        <h2 className="text-white font-bold text-2xl">Hello, im <span className="text-green-800">Frengky</span> </h2>
                        <h2 className="text-5xl font-bold font-sans">Web Developer</h2>
                        <div className="text-center mt-36 mb-10 md:mb-28">
                            <p className="mt-10">follow me on:</p>
                            <div className=" my-2 flex justify-center items-center gap-3 text-2xl">
                                <a href="" ><AiFillFacebook /></a>
                                <a href="" ><AiFillInstagram /></a>
                                <a href="" ><BsTwitter /></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-white  text-center">
                        <button className="bg-yellow-600 py-1 px-10 rounded hover:bg-yellow-800">
                        <Link to="./contact"> Contact  Me</Link></button>
                    </div>
                </div>
                <Footers />
            </>
        )
    }
}



export default Home