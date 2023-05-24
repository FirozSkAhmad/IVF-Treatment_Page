const ForMe = () => {
    return (
        <div className="h-[350px] flex justify-center">
            <div className="w-3/4 m-10 flex flex-col gap-8">
                <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Is IVF for me?</h2>
                <h3 className="text-[#000000C2] font-bold text-lg">A clinic may recommend IVF as your best treatment option if:</h3>
                <ul className="list-disc  list-inside text-lg">
                    <li>Tubal factor infertility.</li>
                    <li>Severe endometriosis.</li>
                    <li>Failed multiple cycles of OI, IUI.</li>
                    <li>Unexplained infertility, etc.</li>
                    <li>Male factor infertility- very low counts, motility.</li>
                </ul>
            </div>
        </div>
    )
}

export default ForMe