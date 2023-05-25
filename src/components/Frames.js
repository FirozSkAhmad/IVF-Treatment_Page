const Frame = ({ frameData }) => {

    const { url } = frameData

    return (
        <div className="w-[530px] h-[300px] z-10 border-4 border-[#ff8630]">
            <iframe className="w-full h-full" src={url} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

const data = [
    {
        url: "https://www.youtube.com/embed/Bjwt8aroCHM"

    },
    {
        url: "https://www.youtube.com/embed/4jzB_JZ9WKM"
    },
    {
        url: "https://www.youtube.com/embed/srN4ONny2AE"
    },
    {
        url: "https://www.youtube.com/embed/Wkyu4tk0PG0"
    }
]

const Frames = () => {
    return (
        <div className="h-[750px] my-8 flex flex-col items-center gap-5">
            <h1 className="text-[#ff8630] font-sans text-4xl font-semibold mb-2">See How We're Turning Your Hopes Into Your Bundles Of Joy</h1>
            <div className="w-5/6 h-[650px] flex flex-wrap gap-5 justify-center items-center -z-20">
                {data.map((data, ind) => <Frame key={ind} frameData={data} />)}
            </div>
        </div>
    )
}

export default Frames