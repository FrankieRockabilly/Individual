import PricingCard from "./pricingCard"

export default function Card({jenis, harga, pages,hari,fitur}){
    return(
        <>
        <div className="bg-black  py-5">
            <div className="my-10 text-center bg-black border border-white text-white rounded-sm w-[50%] md:w-72 md:h-[70vh] mx-auto py-5 ">
                <h1 className="my-8 uppercase">{jenis}</h1>
                <p className="my-10">-</p>
                <h2 className="font-bold text-4xl my-10">{harga} </h2>
                <div className="my-10">
                    <h2 className="my-3">{hari} </h2>
                    <p>{pages} </p>
                    <h2 className="my-3">{fitur} </h2>
                </div>
                <button className="bg-yellow-600 py-1 px-10 my-10 md:my-5 uppercase text-black duration-200 hover:bg-gray-600 hover:text-white">Purchase Now</button>
            </div>
        </div>
        </>
    )
}