const Specialtie = () => {
    return (
        <div className="h-52 w-52 flex flex-col items-center justify-center">
            <img className="h-[60px] w-[60px]" alt="Specialtie-log" src="https://altiushospital.com/wp-content/uploads/2022/03/3.svg" />
            <h2 className=" w-11/12 text-xl text-[#152136] font-semibold text-center">In Vitro Fertilisation (IVF)</h2>
        </div>
    )
}

const Specialties = () => {
    return (

        <div className="h-[600px] py-8 bg-[#192a48] flex flex-col items-center gap-10">
            <h2 className="text-white font-sans text-4xl font-medium">Our World-Class Specialties</h2>
            <div className="h-5/6 w-[1130px] bg-white flex flex-wrap justify-center">
                {
                    Array(10).fill("").map(() => <Specialtie />)
                }
            </div>
        </div>

    )
}

export default Specialties