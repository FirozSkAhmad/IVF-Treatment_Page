import { MdFacebook } from 'react-icons/md'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { ImLinkedin } from 'react-icons/im'
import { AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="h-[420px] bg-[#131f48] p-20">
            <div className="flex gap-56">
                <img className="w-72 h-44" src="https://altiushospital.com/wp-content/uploads/2021/01/Altius-White-png.webp" />
                <div className="w-1/4 text-white flex flex-col gap-5">
                    <h2 className="text-2xl font-semibold">Head Office</h2>
                    <p className="font-semibold"># 6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI Polytechnic, Near Ram Mandir, Bengaluru - 560 010</p>
                    <h3>+91-8882799799</h3>
                    <h3>COVID - 19 FREE</h3>
                </div>
                <div className="w-2/4 text-white flex flex-col gap-5">
                    <h2 className="text-white text-2xl font-semibold">Recent Blog</h2>
                    <div className="flex gap-5">
                        <img className="w-56 h-16" src="https://altiushospital.com/wp-content/uploads/2023/05/Preparing-for-IUI-Treatment-Blog-Thumbnail-1.png" />
                        <div className="flex flex-col gap-1">
                            <h4>Preparing for IUI</h4>
                            <h4>Tips for Success.</h4>
                            <h4>18 May 2023</h4>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <img className="w-56 h-16" src="https://altiushospital.com/wp-content/uploads/2023/05/High-Risk-Pregnancy-Blog-Thumbnail.png" />
                        <div className="flex flex-col gap-1">
                            <h4>Preparing for IUI</h4>
                            <h4>Tips for Success.</h4>
                            <h4>18 May 2023</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center mt-8'>
                <h2 className='text-white'>Copyrights 2023 © Altius Sripada Hospitals LLP</h2>
                <div className='flex text-white gap-5 items-start'>
                    <MdFacebook />
                    <AiOutlineInstagram />
                    <AiFillYoutube />
                    <ImLinkedin />
                    <AiOutlineTwitter />
                </div>
            </div>
        </div>
    )
}

export default Footer