import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Sufiyan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a Software Developer, possessing extensive <br className='sm:block hidden' /> experience in the development of web applications, <br className='sm:block hidden' /> user interfaces, and much more.
          <br className='sm:block hidden' />
          <br className='sm:block hidden' />
          With a solid background in various <br className='sm:block hidden' /> programming languages and frameworks, <br className='sm:block hidden' />
          I excel in creating dynamic, user-friendly, and <br className='sm:block hidden' /> efficient digital solutions !
          </p>
          <div className="mt-5 flex space-x-4">
            <a href="https://www.linkedin.com/in/sufiyan-razi" target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-900 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-600 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                LinkedIn
              </button>
            </a>
            <a href="https://github.com/sufiyan3r" target="_blank" rel="noopener noreferrer">
              <button className="bg-gray-800 text-white py-3 px-6 rounded-full shadow-lg hover:bg-gray-600 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
                GitHub
              </button>
            </a>
          </div>
        </div>
        
      </div>
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;