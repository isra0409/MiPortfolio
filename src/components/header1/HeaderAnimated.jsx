import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";

const HeaderAnimated = () => {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
    
    <Header />

    </motion.nav>
  );
};

export default HeaderAnimated;
