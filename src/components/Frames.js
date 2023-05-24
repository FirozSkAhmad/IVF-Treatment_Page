const Frame = () => {
    return (
        <div className="w-[530px] h-[300px] z-10 border-4 border-[#ff8630]">
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/4jzB_JZ9WKM" title="Bundle Of Joy Delivered At Altius Hospitals Bangalore | All OK" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const Frames = () => {
    return (
        <div className="h-[750px] my-8 flex flex-col items-center gap-5">
            <h1 className="text-[#ff8630] font-sans text-4xl font-semibold mb-2">See How We're Turning Your Hopes Into Your Bundles Of Joy</h1>
            <div className="w-5/6 h-[650px] flex flex-wrap gap-5 justify-center items-center -z-20">
                {Array(4).fill("").map((ele,ind)=><Frame key={ind}/>)}
            </div>
        </div>
    )
}

export default Frames