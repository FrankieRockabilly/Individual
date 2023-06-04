import Sidebar from "./sidebar"
import PricingCard from "./pricingCard"
import WorkCard from "./workCard"
import Tools from "./tools"

export default function Portfolio(){
    return(
        <>
        <section style={{backgroundImage : "url('https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80')",
            backgroundSize:"cover"}}
            className="h-full">
                <div className="text-center text-emerald-600 pt-32 pb-11 md:py-52">
                    <h1 className="font-bold text-4xl">FRENGKI - REACT PERSONAL <span className="text-black">PORTFOLIO </span> </h1>
                    <p className="text-white font-light text-2xl">Personal  portfolio ReactJS build with ReactJs and TailwindCSS</p>
                    <div className="flex items-center justify-center gap-4">
                        <button className="bg-emerald-600 text-black rounded-md py-2 px-7 my-5"><a href="#portfolio">View</a></button>
                        <button className="bg-black text-white rounded-md py-2 px-7 my-5"><a href="#pricing">Pricing</a> </button>
                    </div>
                </div>
            
        </section>
            <Tools />
        <div id="portfolio" className="bg-black">
            <WorkCard />
        </div>
        <div id="pricing">
            <PricingCard />
        </div>

        </>
    )
}