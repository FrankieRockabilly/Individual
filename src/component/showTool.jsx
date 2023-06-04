export default function ShowTool({nama, ket, img}){
    return(
        <>
        <div className="text-center text-white w-96 mx-auto py-3 my-8">
            <img src={img} alt="" className="h-20 w-20 bg-white rounded-full p-2 mx-auto mb-5"/>
            <h1 className="text-xl mb-5">{nama} </h1>
            <p>{ket} </p>
        </div>
        </>
    )
}