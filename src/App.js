import React from "react";
import ReactDOM from 'react-dom/client'
import '../index.css'
import Header from "./components/Header";
import GetInTouch from "./components/GetInTouch";
import Frames from "./components/Frames";
import Specialties from "./components/Specialties";
import SlotBooking from "./components/SlotBooking";
import AboutIVF from "./components/AboutIVF"
import Fertilisation from "./components/Fertilisation";
import ForMe from "./components/ForMe";
import IVFWork from "./components/IVFWork";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Story from "./components/Story";
import Maps from "./components/Maps";
import Enquiry from "./components/Enquiry";
import Contact from "./components/Contact";
import Footer from "./components/Footer"


const App = () => {
    return (
        <>
            <Header />
            <GetInTouch />
            <Frames />
            <Specialties />
            <SlotBooking />
            <AboutIVF />
            <Fertilisation />
            <ForMe />
            <IVFWork />
            <About />
            <Doctors />
            <Story />
            <Maps />
            <Enquiry />
            <Contact />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)