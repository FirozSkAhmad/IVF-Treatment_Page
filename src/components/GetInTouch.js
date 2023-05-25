import bgImg from '../../utils/images/mom-baby.jpg'



const GetInTouch = () => {
    return (
        <div className="h-96 flex justify-center items-center gap-5 relative">
            <div className="bg-[#131f48ba] bg-cover w-full absolute h-full -z-10"></div>
            <img className='absolute -z-20 w-full h-full' src={bgImg} />
            <div className="w-5/12 flex flex-col gap-5">
                <h2 className="text-4xl text-white font-sans font-bold">Bangalore's Most Trusted Fertility Hospital.</h2>
                <p className="text-lg text-white font-sans mb-3">Providing World-class Treatments With 1,00,000+ Successful Procedures Making Your Dream of Parenthood a Reality.</p>
                <h2 className="text-2xl text-white font-sans font-bold">Your First Fertility Consultation Will Be FREE</h2>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-[#ff8630] font-sans text-4xl font-semibold mb-2">Get in Touch</h2>
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Name" className="p-2 w-72" />
                    <input type="text" placeholder="Email" className="p-2 w-72" />
                    <input type="text" placeholder="Phone Number" className="p-2 w-72" />
                    <input type="text" placeholder="Message" className="p-2 w-72" />
                </form>
                <button className='bg-[#ff8630] text-white px-5 py-2 rounded-sm hover:bg-[#131f48] cursor-pointer'>Send</button>
            </div>
        </div>
    )
}

export default GetInTouch