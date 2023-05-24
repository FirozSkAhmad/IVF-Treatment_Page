const About = () => {
    return (
        <div className="flex justify-center">
            <div className="w-3/4 m-10 flex flex-col gap-8">
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Embryo Donation :</h2>
                    <p className="text-lg">Indicated in : There may be fertility problems such has neither of the partners would not be able to produce healthy gametes. In this case, the best option would be suggested for Embryo Donation.</p>
                    <h3 className="text-[#000000C2] font-bold text-lg">Other Indications :</h3>
                    <ul className="list-disc  list-inside text-lg">
                        <li>For menopausal or perimenopausal women with a sub-fertile partner.</li>
                        <li>Recurrent IVF failures.</li>
                        <li>Patients who are carriers of genetic disease or chromosomal abnormalities</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Embryo Freezing (cryopreservation) :</h2>
                    <p className="text-lg">Extra embryos if present in excess and of good quality are preserved so that they can be used later if the first cycle fails.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Sperm Freezing :</h2>
                    <p className="text-lg">Sperm freezing is an option for those males who might not be present on the day of ovum pick up or intrauterine insemination. It also helps those who fail to produce their sample on the particular day due to stress.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Laser Assisted Hatching :</h2>
                    <p className="text-lg">The procedure is based on the fact that an alteration in zona pellucida (outer covering of egg) either by drilling a hole through it or by thinning it, will promote hatching or implantation of embryos that are otherwise unable to escape intact from the zona pellucida.</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Sperm Retrieval Procedures :</h2>
                    <h3 className="text-[#000000C2] font-bold text-lg">The testicular / epididymal sperm retrieval techniques are:</h3>
                    <ul className="list-disc  list-inside text-lg">
                        <li>PESA – Percutaneous Epididymal Sperm Aspiration.</li>
                        <li>MESA – Microsurgical Epididymal Sperm Aspiration.</li>
                        <li>TESA – Testicular Sperm Aspiration.</li>
                        <li>TESE – Testicular Sperm Extraction.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Semen Banking :</h2>
                    <p className="text-lg">These facilities are available in Altius Hospital. The bank contains frozen sperm from voluntary donors with various backgrounds and physical characteristics to match with the individual needs. Donors are screened thoroughly to rule out transmission of any infectious or genetic diseases.</p>
                    <h3 className="text-[#000000C2] font-bold text-lg">Other treatment modalities for infertile patients</h3>
                    <ul className="list-disc  list-inside text-lg">
                        <li>Laparoscopic tubal recanalization.</li>
                        <li>Laparoscopic varicocele ligation in male patients.</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[#ff8630] font-sans text-4xl font-semibold">Our Achievements</h2>
                    <ul className="list-disc  list-inside text-lg">
                        <li>First IVF/ICSI Baby.</li>
                        <li>Success rates of 50-60%.</li>
                        <li>Successfully delivered babies through IVF.</li>
                        <li>Successfully delivered babies by ovum donation and embryo donation.</li>
                        <li>Successfully delivered babies through surrogacy.</li>
                        <li>Important contribution to overall pregnancy rates by embryo freezing.</li>
                        <li>High success rates with IUI treatment.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About