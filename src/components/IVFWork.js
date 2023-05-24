import { useState } from "react"
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai"

const IVFWork = () => {

    const [isVissible, setIsVissible] = useState(false)

    function visibleHandler() {
        setIsVissible(!isVissible)
    }

    return (
        <div className="h-[650px] py-8 bg-[#f9f9f9] flex justify-center">
            <div className="h-[530px] w-3/4 m-5 flex flex-col gap-8">
                <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">How does IVF work For Women?</h2>
                <p className="text-lg">IVF techniques can differ from clinic to clinic, often depending on your individual circumstances. A typical treatment may involve:</p>
                <h2 className="text-[#ff8630] font-sans text-3xl font-semibold flex items-center" onClick={visibleHandler}>{(isVissible) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 1</h2>
                {(isVissible) ? <p>As a first step you may be given a drug to suppress your natural cycle. Treatment is given as a daily injection. This continues for about two weeks.</p> : null}
            </div>
        </div>
    )
}

export default IVFWork