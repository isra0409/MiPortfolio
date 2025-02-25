import { motion } from "framer-motion";
import Banner from "./Banner";
import miImg from "../../assets/img-cv.png"

const BannerAnimated = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <Banner
        backgroundImage="https://i.gifer.com/3aQ.gif"
        // backgroundImage="https://images.unsplash.com/photo-1542831371-29b0f74f9713?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaWdvJTIwaHRtbHxlbnwwfHwwfHx8MA%3D%3D"
        corporateImage={miImg}
        textContent={{
          
          title1: "Israel Miranda",
          title2: "Frontend Developer - UX/UI",
          description:
            "Me dedico a crear soluciones de software, esteticas y funcionales :)"
            ,
          description2: 
            ""
        }}
      />
    </motion.div>
  );
};

export default BannerAnimated;
