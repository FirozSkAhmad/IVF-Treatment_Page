import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineArrowRight } from 'react-icons/ai'



const MapCard = ({ locationData }) => {

    const { location, address } = locationData

    return (
        <div className="w-[600px] py-12 px-8 bg-[#131f48] flex flex-col justify-between gap-5">
            <h2 className='bg-[#ff8630] text-white w-12 h-12 flex justify-center items-center rounded-[50%]'>
                <FaMapMarkerAlt />
            </h2>
            <h2 className="text-white text-xl font-semibold">{location}</h2>
            <p className="text-white h-24">{address}</p>
            <div className="text-white">
                <h2>Phone: +911800 4122 2481</h2>
                <h2>Email : care@altiushospital.com</h2>
            </div>
            <button className=" bg-[#ff8630] text-white py-2 px-5 cursor-pointer flex items-center justify-center text-lg font-semibold hover:bg-white hover:text-[#ff8630]">
                Get Directions<AiOutlineArrowRight />
            </button>
        </div>
    )
}

const locationsData = [
    {
        location: "Rajajinagar",
        address: "# 6/63, 59th Cross, 4th Block, Rajajinagar Entrance, Opp. MEI Polytechnic, Near Ram Mandir, Bengaluru - 560 010",
    },
    {
        location: "Rajarajeswari Nagar",
        address: "# 915, First Floor Danush Palza, Ideal Homes Township, Rajarajeshwarinagar, Bengaluru - 560098",
    },
    {
        location: "HBR Layout",
        address: "#511,Outer ring road,4th Block HBR layout, Bengaluru",
    },
    {
        location: "Yelahanka",
        address: "Ground Floor, Amenities Building, North Gate Phase 2, Yelahanka, Bengaluru - 560064",
    },

]

const Maps = () => {
    return (
        <div className="py-8 flex justify-center">
            <div className="w-[1300px] m-5 flex gap-5 justify-center">
                {locationsData.map((data, ind) => <MapCard key={ind} locationData={data} />)}
            </div>
        </div>
    )
}

export default Maps