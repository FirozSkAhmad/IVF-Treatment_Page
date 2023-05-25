import facebookImg from '../../utils/images/facebook.png'
import twitterImg from '../../utils/images/twitter.png'
import whatsappImg from '../../utils/images/whatsapp.png';
import linkedinImg from '../../utils/images/linkedin.png'


const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-3/4 m-16 flex justify-center items-center relative">
                <img className="absolute z-10 top-15 left-16 w-96 h-72" alt="hospital-logo" src="https://altiushospital.com/wp-content/uploads/2023/03/a-2.png" />
                <div className="w-3/4 bg-[#fcbc8e] rounded-[70px] h-[412px] p-10 ml-96">
                    <div className="ml-40 flex flex-col gap-3">
                        <h2 className=" font-sans text-4xl font-bold text-[#000000C2] mb-3">About Us</h2>
                        <div className="h-52  overflow-y-auto text-[#000000C2] scrollbar-thin scrollbar-track-orange-500 scrollbar-thumb-white rounded-lg">
                            <p>Altius Hospitals, Bangalore, has evolved as a leader in the healthcare system because of its integrated model that combines all services under one roof. From Cardiology and 24/7 emergency care to dialysis treatment and outpatient treatments – Altius offers it all! Our world-class chain of multi-specialty hospitals aims to treat people, not diseases. We use cutting-edge technology and harness health for all our patients so they can live their best lives possible. The Altius team has the best medical professionals providing excellent care, coupled with their rich experience and expertise using state-of-the-art technology. The hospital also offers comprehensive heart care, diagnostics, and treatment. The patients can now avail  cardiac care with our state-of-the-art GE – IGS 520 cath lab.</p>
                        </div>
                        <button className='bg-[#ff8630] text-white px-5 w-32 py-2 rounded-sm hover:bg-[#131f48] cursor-pointer'>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className=" flex flex-col items-center gap-3 mb-5">
                <h3 className="text-lg font-semibold text-[#000000C2]">Share this:</h3>
                <div className='h-14'>
                    <div className='flex gap-2'>
                        <img className='hover:scale-110 cursor-pointer' src={facebookImg} />
                        <img className='hover:scale-110 cursor-pointer' src={twitterImg} />
                        <img className='hover:scale-110 cursor-pointer' src={whatsappImg} />
                        <img className='hover:scale-110 cursor-pointer' src={linkedinImg} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact