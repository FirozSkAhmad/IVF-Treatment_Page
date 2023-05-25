import { useState } from "react"
import { AiFillCaretRight, AiFillCaretDown } from "react-icons/ai"

const IVFWork = () => {

    const [isVissible, setIsVissible] = useState({
        step1: false, step2: false, step3: false, step4: false, step5: false, step6: false, step7: false, step8: false
    })

    function visibleHandler(event) {

        const { id } = event.target

        setIsVissible(
            {
                ...isVissible,
                [id]: !isVissible[id]
            }
        )
    }

    return (
        <div className=" py-8 bg-[#f9f9f9] flex justify-center">
            <div className="w-3/4 m-5 flex flex-col gap-3">
                <div className="flex flex-col gap-5 mb-10">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">How does IVF work For Women?</h2>
                    <p className="text-lg">IVF techniques can differ from clinic to clinic, often depending on your individual circumstances. A typical treatment may involve:</p>
                </div>
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step1" onClick={visibleHandler}>{(isVissible.step1) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 1</h2>
                {(isVissible.step1) ? <p>As a first step you may be given a drug to suppress your natural cycle. Treatment is given as a daily injection. This continues for about two weeks.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step2" onClick={visibleHandler}>{(isVissible.step2) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 2</h2>
                {(isVissible.step2) ? <p>After the natural cycle is suppressed you are given a fertility hormone called FSH (or Follicle Stimulating Hormone). This is usually taken as a daily injection for around 12 days. This hormone will increase the number of eggs you produce – meaning that more eggs can be fertilised. With more fertilised eggs, the clinic has a greater choice of embryos to use in your treatment.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step3" onClick={visibleHandler}>{(isVissible.step3) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 3</h2>
                {(isVissible.step3) ? <p>Throughout the drug treatment, the clinic will monitor your progress. This is done by vaginal ultrasound scans and, possibly, blood tests. 34–38 hours before your eggs are due to be collected you have a hormone injection to help your eggs mature treatment.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step4" onClick={visibleHandler}>{(isVissible.step4) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 4</h2>
                {(isVissible.step4) ? <p>Eggs are usually collected by ultrasound guidance under sedation. This involves a needle being inserted into the scanning probe and into each ovary. The eggs are, in turn, collected through the needle. Cramping and a small amount of vaginal bleeding can occur after the procedure.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step5" onClick={visibleHandler}>{(isVissible.step5) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 5</h2>
                {(isVissible.step5) ? <p>Your eggs are mixed with your partner’s or the donor’s sperm and cultured in the laboratory for 16–20 hours. They are then checked to see if any have fertilised. Those that have been fertilised (now called embryos) are grown in the laboratory incubator for another one to two days before being checked again. The best one or two embryos will then be chosen for transfer. After egg collection, you are given medication to help prepare the lining of the womb for embryo transfer. This is given as pessaries, injection or gel.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step6" onClick={visibleHandler}>{(isVissible.step6) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 6</h2>
                {(isVissible.step6) ? <p>For women under the age of 40, one or two embryos can be transferred. If you are 40, or over, a maximum of three can be used. The number of embryos is restricted because of the risks associated with multiple births. Remaining embryos may be frozen for future IVF attempts, if they are suitable.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step7" onClick={visibleHandler}>{(isVissible.step7) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 7</h2>
                {(isVissible.step7) ? <p>Some clinics may also offer blastocyst transfer, where the fertilised eggs are left to mature for five to six days and then transferred.</p> : null}
                <hr />
                <h2 className="text-[#ff8630] font-sans text-2xl font-bold flex items-center cursor-pointer" id="step8" onClick={visibleHandler}>{(isVissible.step8) ? <AiFillCaretDown /> : <AiFillCaretRight />}Step 8</h2>
                {(isVissible.step8) ? <p>Around the time your partner’s eggs are collected, you are asked to produce a fresh sample of sperm. This is stored for a short time before the sperm are washed and spun at a high speed. This is so the healthiest and most active sperm can be selected</p> : null}
                <hr />
            </div>
        </div>
    )
}

export default IVFWork