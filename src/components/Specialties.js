const Specialtie = ({ singleSpecitieData }) => {

    const { title, url } = singleSpecitieData

    return (
        <div className="h-36 w-52 flex flex-col items-center gap-5">
            <img className="h-[60px] w-[60px]" alt="Specialtie-log" src={url} />
            <h2 className=" w-[225px] text-xl text-[#152136] font-semibold text-center">{title}</h2>
        </div>
    )
}

const SpecialtiesData = [
    {
        title: "In Vitro Fertilisation (IVF)",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/3.svg"
    },
    {
        title: "Intracytoplasmic Sperm Injection (ICSI)",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/4.svg"
    },
    {
        title: "Egg Donation",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/5.svg"
    },
    {
        title: "Intrauterine Insemination (IUI)",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/6.svg"
    },
    {
        title: "Semen Banking",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/11.svg"
    },
    {
        title: "Blastocyst Transfer",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/7.svg"
    },
    {
        title: "Frozen Embryo Transfer (FET)",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/8.svg"
    },
    {
        title: "Surrogacy",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/9.svg"
    },
    {
        title: "Laser-Assisted Hatching (LAH)",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/10.svg"
    },
    {
        title: "Semen Donation",
        url: "https://altiushospital.com/wp-content/uploads/2022/03/12.svg"
    },

]


const Specialties = () => {
    return (

        <div className="h-[600px] py-8 bg-[#192a48] flex flex-col items-center gap-10">
            <h2 className="text-white font-sans text-4xl font-medium">Our World-Class Specialties</h2>
            <div className="h-[450px] w-[1180px] bg-white flex flex-wrap justify-center items-center gap-2">
                {
                    SpecialtiesData.map((data, ind) => <Specialtie key={ind} singleSpecitieData={data} />)
                }
            </div>
        </div>

    )
}

export default Specialties