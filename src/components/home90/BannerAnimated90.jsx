import { motion } from "framer-motion";
import Banner90 from "./Banner90";
import miImg from "../../assets/img-cv.png"

const BannerAnimated90 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <Banner90
        backgroundImage="https://i.gifer.com/3aQ.gif"
        corporateImage={miImg}
        textContent={{
          
          title1: "Welcome to 90's",
          title2: "",
          description:
            "",
        }}
      />
    </motion.div>
  );
};

export default BannerAnimated90;
