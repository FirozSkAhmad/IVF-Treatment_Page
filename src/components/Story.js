import { useEffect, useState } from "react"
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

const Story = () => {

    const data = [
        {
            story: "I can say Lil Feet by Altius is one of the best maternity hospitals I have ever visited. The way things are explained about the treatment by doctors and nurses is amazing, they tend to understand the patient first and explain it in a way that they don't get afraid of the issue they are facing. Every procedure that needs to be done gets explained thoroughly before anything happens which I really appreciated. Kudos to all the Doctors and staff of Dr. Ramesh",
            name: "Nethravathi"

        },
        {
            story: "I visited Altius to undergo a laparoscopy procedure. The hospital is very hygienic and well-maintained, The Doctors, nurses, and staff are very professional and caring. The surgery was well-performed with excellent post-operative care. I am very satisfied with the services offered by Altius. A big thanks to Dr. Ramesh and his extremely experienced team. I was well-cared for during my stay at the hospital. Keep going, Team Altius.",
            name: "Prathibha VM"
        },
        {
            story: "I can say Lil Feet by Altius is one of the best maternity hospitals I have ever visited. The way things are explained about the treatment by doctors and nurses is amazing, they tend to understand the patient first and explain it in a way that they don't get afraid of the issue they are facing. Every procedure that needs to be done gets explained thoroughly before anything happens which I really appreciated. Kudos to all the Doctors and staff of Dr. Ramesh.					",
            name: "Geeta Sachin"
        }
    ]

    const [ind, setInd] = useState(0)


    function leftArrowHandler() {
        setInd((prevInd) => (prevInd === 0) ? 2 : prevInd - 1)
    }

    function rightArrowHandler() {
        setInd((prevInd) => (prevInd === 2) ? 0 : prevInd + 1)
    }

    useEffect(() => {

            const interval = setInterval(() => setInd((prevInd) => (prevInd === 2) ? 0 : prevInd + 1), 3000)

            return (() => clearInterval(interval))
    }, [])

    return (
        <div className="flex justify-center my-10">
            <div className="w-3/4 flex flex-col gap-8 items-center">
                <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">See Why Our Patients Love Us</h2>
                <div className="flex justify-center items-center">
                    <AiOutlineLeft onClick={leftArrowHandler} className="cursor-pointer" />
                    <p className="text-lg text-center w-10/12">{data[ind]?.story}</p>
                    <AiOutlineRight onClick={rightArrowHandler} className="cursor-pointer" />
                </div>
                <h2 className="text-[#ff8630] font-sans text-3xl font-semibold">{data[ind]?.name}</h2>
            </div>
        </div>
    )
}

export default Story