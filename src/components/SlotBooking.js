import {AiOutlineArrowRight} from 'react-icons/ai'

const SlotBooking = () => {
    return (
        <>
            <h1 className="text-[#ff8630] font-sans text-4xl  font-semibold text-center mt-5 mb-2">Infertility Is Healable. Don’t Lose Hope.</h1>
            <div className="h-[650px] py-8 bg-[#f9f9f9] flex flex-col items-center">
                <div className="flex gap-5">
                    <div className="w-[530px] h-[300px] flex flex-col items-center justify-center gap-10">
                        <div className="flex gap-5 items-center">
                            <img className="w-24 h-24" src="https://psychiatry.ufl.edu/wordpress/files/2021/08/lactation-processed.png" />
                            <div className="text-center">
                                <h2 className="font-bold text-xl">10,000+</h2>
                                <h2 className=" text-xl">Happy Mothers & Newborn</h2>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center">
                            <img className="w-24 h-24" src="https://www.orangetreescreening.com/hubfs/2023%20Website/doctor%20icon1.svg" />
                            <div className="text-center">
                                <h2 className="font-bold text-xl text-[#000000C2]">18+</h2>
                                <h2 className=" text-xl text-[#000000C2] w-60">Years Serving Mothers & Their Babies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="w-[580px] h-[340px] z-10 border-4 border-[#ff8630] ">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/g48hS4LGtSY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <h2 className="text-[#ff8630] font-sans text-4xl  font-semibold text-center my-5">IVF Treatment At An Affordable Cost</h2>
                <p className="w-3/4 text-center text-[#000000C2] text-lg">
                    Infertility is a painful and difficult journey. It’s even more challenging when you are not sure what to do or where your next step should be, which can make the whole process seem overwhelming in general; but at Altius. we’ve got everything under control. Altius is a world-class Fertility center that has brought in the most advanced technology to ensure cost-effectiveness.
                </p>
                <button className="bg-[#ff8630] text-white px-6 py-3 rounded-sm hover:bg-[#131f48] cursor-pointer my-8 flex items-center shadow-md shadow-[#888888] text-lg font-semibold">
                    Book Your First Consultation <AiOutlineArrowRight/>
                </button>
            </div>
        </>

    )
}

export default SlotBooking