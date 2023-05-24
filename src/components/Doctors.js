import { AiOutlineArrowRight } from 'react-icons/ai'

const Doctors = () => {
    return (
        <div className="flex justify-center bg-[#131f48]">
            <div className="w-3/4 m-10 flex flex-col gap-8">
                <div className="text-white text-4xl font-semibold">
                    <h2 >Our Specialized</h2>
                    <h2>Team Of IVF Experts</h2>
                </div>
                <button className="w-1/5 bg-[#ff8630] text-white py-3 cursor-pointer flex items-center justify-center text-lg font-semibold hover:bg-white hover:text-[#ff8630]">
                  View All Doctors <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Doctors