import { AiOutlineDown } from 'react-icons/ai'

const Header = () => {
    return (
        <div className=' h-24 bg-white flex justify-around items-center sticky top-0 z-20'>
            <img alt='logo' width='120px' className='w-28 hover:cursor-pointer' src="https://altiushospital.com/wp-content/uploads/2021/01/cropped-Altius-05-300x190.png" />
            <ul className='flex gap-3'>
                <li className='flex items-center gap-1 hover:text-[#ff8630] cursor-pointer'>About Us<AiOutlineDown /></li>
                <li className='flex items-center gap-1 hover:text-[#ff8630] cursor-pointer'>Specialties<AiOutlineDown /></li>
                <li className='flex items-center gap-1 hover:text-[#ff8630] cursor-pointer'>Care Services <AiOutlineDown /></li>
                <li className='flex items-center gap-1 hover:text-[#ff8630] cursor-pointer'>Value Adds <AiOutlineDown /></li>
                <li className='flex items-center gap-1 hover:text-[#ff8630] cursor-pointer'>Locations <AiOutlineDown /></li>
                <li className='flex items-center gap-1 hover:text-[#ff8630] cursor-pointer'>Resources <AiOutlineDown /></li>
            </ul>
            <div className=' flex gap-4'>
                <button className='bg-[#ff8630] text-white px-5 py-2 rounded-sm hover:bg-[#131f48] cursor-pointer'>Get in touch</button>
                <button className='bg-[#ff8630] text-white px-5 py-2 rounded-sm hover:bg-[#131f48] cursor-pointer'>Call 1800 4122 2120</button>
            </div>

        </div>
    )
}

export default Header