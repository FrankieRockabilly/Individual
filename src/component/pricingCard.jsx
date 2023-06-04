import Pricing from "./pricing.json"
import Card from "./card"

export default function PricingCard(){
    return(
        <>
        <div>
            <div className="md:flex justify-around bg-black">
            {Pricing.map((v,i)=>{
                return(
                <Card 
                    jenis = {v.jenis}
                    harga = {v.harga}
                    fitur = {v.featured}
                    hari = {v.hari}
                    pages = {v.pages}
                />
                )
            })}
            </div>
            <p className="text-white bg-black text-center pb-10 font-bold">-</p>
        </div>
        </>
    )
}