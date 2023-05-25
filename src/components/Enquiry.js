const Enquiry = () => {
    return (
        <div className="flex justify-center">
            <div className="w-3/4 m-10 flex justify-between items-center gap-5">
                <div className="flex flex-col gap-3 items-center w-2/4">
                    <h2 className=" font-sans text-4xl font-semibold mb-2">Make a Quick Enquiry</h2>
                    <p className="text-lg mb-8">Fill in your details and we will get in touch with you.</p>
                    <form className="flex flex-col gap-3 w-full">
                        <input type="text" placeholder="Name" className="p-2 border-2" />
                        <input type="text" placeholder="Email" className="p-2 border-2" />
                        <input type="text" placeholder="Phone Number" className="p-2 border-2" />
                        <input type="text" placeholder="Message" className="p-2 border-2" />
                    </form>
                    <button className='bg-[#ff8630] text-white w-full px-5 py-2 rounded-sm hover:bg-[#131f48] cursor-pointer'>Send</button>
                </div>
                <div>
                    <img alt="hospital-img" src="https://altiushospital.com/wp-content/uploads/2021/12/11.webp" />
                </div>
            </div>
        </div>
    )
}

export default Enquiry