import './App.css';
import { motion } from 'framer-motion';
import { CiSettings } from "react-icons/ci";
import { PiWrenchThin } from "react-icons/pi";
import { IoLogoElectron } from "react-icons/io5";
import { FaWind, FaWindows } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { IoFlaskOutline } from "react-icons/io5";

function App() {
  
  let handleDownload = () => {
    console.log("downloading")
    toast('Download Initiated', {
      duration: 2000,
      position: 'top-left',
    
      // Styling
      style: {backgroundColor: "#1f1f1f", color: 'white'},
      className: '',
    
      // Custom Icon
      icon: '✅',
    
      // Change colors of success/error/loading icon
      iconTheme: {
        primary: '#1f1f1f',
        secondary: '#1f1f1f',
      },
    
      // Aria
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    
      // Additional Configuration
      removeDelay: 5000,
    });
  }

  return (
    <>
      <Toaster />

      {/* Green Gradient Bar */}
      <motion.div
        className="w-full bg-gradient-to-r from-green-200 via-green-500 to-green-700 h-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
      </motion.div>

      {/* Main Content Container */}
      <div className="p-5 max-w-[1200px] mx-auto">

        {/* Header Section */}
        <motion.div 
          className="px-5 flex justify-between"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div>
            <h1 className="text-base sm:text-base text-stone-500 font-medium">
              Tech Services
            </h1>
          </div>
          <div>
            <h1 className="text-base sm:text-base text-stone-500 font-medium">
              Food Safety
            </h1>
          </div>
        </motion.div>

        {/* Neogen Fuse Title */}
        <motion.div 
          className="mb-10 mt-5 flex justify-center items-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-9xl text-green-200 font-medium bg-gradient-to-r from-green-300 via-green-400 to-green-300 text-transparent bg-clip-text leading-normal">
            Neogen Fuse
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-center text-stone-400">
            <span className='font-bold italic text-green-200 hover:text-green-300 transition-all duration-700'>Neogen Fuse</span> is a dedicated desktop software solution for managing and <span className='font-bold italic text-green-200 mr-1 hover:text-green-300 duration-700 transition-all'>enhancing</span> the LM1 electronic instrument. Whether you're looking to update firmware, modify device settings, or read data from the EEPROM, Neogen Fuse offers a <span className='font-bold italic text-green-200 hover:text-green-300 transition-all duration-700'>Simple</span> and <span className='font-bold italic text-green-200 hover:text-green-300 duration-700 transition-all'>efficient</span> way to maintain and <span className='font-bold italic text-green-200 hover:text-green-300 duration-700 transition-all'>Optimize</span> the LM1 instrument.
          </p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="flex justify-center items-center mb-5 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button onClick={handleDownload} className='cursor-pointer text-white rounded animate-pulse duration-700 flex items-center justify-center'>
            <span className='mr-2'>Download</span>
            <FaWindows className='text-white' />
          </button>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className='px-5'
        >
          <h1 className="flex justify-center text-2xl py-10 sm:py-5 sm:flex sm:justify-start text-stone-300">Key Features</h1>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="mb-15 grid sm:grid-cols-3 gap-2 hover:text-white transition-all px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="border-1 border-stone-600 rounded p-5 hover:border-green-300 transition duration-700">
            <h1 className="font-bold pb-2 flex items-center justify-between text-stone-400"><span>Firmware Updates</span> <span className='text-green-200'><IoLogoElectron className='h-6 w-6'/></span></h1>
            <p className='text-stone-400'> Keep the LM1 instrument up to date with the latest firmware updates, improving performance, adding new features, and ensuring reliability.</p>
          </div>
          <div className="border-1 border-stone-600 rounded p-5 hover:border-green-300 transition duration-700">
            <h1 className="font-bold pb-2 flex items-center justify-between text-stone-400"><span>EEPROM Read/Write</span> <span className='text-green-200'><CiSettings className='h-6 w-6'/></span></h1>
            <p className='text-stone-400'>Directly access and modify the EEPROM to manage device configurations, settings, and parameters for fine-tuned control over the LM1.</p>
          </div>
          <div className="border-1 border-stone-600 rounded p-5 hover:border-green-300 transition duration-700">
            <h1 className="font-bold pb-2 flex items-center justify-between text-stone-400"><span>Device Modifications</span> <span className='text-green-200'><IoFlaskOutline className='h-6 w-6'/></span></h1>
            <p className='text-stone-400'>Easily adjust key settings and parameters to customize the LM1 instrument for your specific needs, improving functionality and usability.</p>
          </div>
        </motion.div>

        {/* Final Description */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
        >
          <p className="text-center text-stone-400">
            With Neogen Fuse, you can ensure the LM1 instrument stays at the peak of performance with minimal effort. Designed for both professionals and enthusiasts, Neogen Fuse provides all the necessary tools to get the most out of the LM1.
          </p>
        </motion.div>

      </div>
    </>
  );
}

export default App;
