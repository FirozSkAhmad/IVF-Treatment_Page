import { useState } from "react"

const Story = () => {
    const data = [{
        story: "I can say Lil Feet by Altius is one of the best maternity hospitals I have ever visited. The way things are explained about the treatment by doctors and nurses is amazing, they tend to understand the patient first and explain it in a way that they don't get afraid of the issue they are facing. Every procedure that needs to be done gets explained thoroughly before anything happens which I really appreciated. Kudos to all the Doctors and staff of Dr. Ramesh",
        name: "Nethravathi"

    }]

    const [singleStory, SetSingleStory] = useState(data[0])

    return (
        <div className="flex justify-center my-10">
            <div className="w-3/4 flex flex-col gap-8 items-center">
                <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">See Why Our Patients Love Us</h2>
                <p className="text-lg text-center">{singleStory.story}</p>
                <h2 className="text-[#ff8630] font-sans text-3xl font-semibold">{singleStory.name}</h2>
            </div>
        </div>
    )
}

export default Story