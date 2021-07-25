import "./homepage.scss";
// import Banner from "../../components/Banner/Banner";
import Row from "../../components/Row/Row";
// import Credits from "../../components/Credits/Credits";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Homepage = () => {
  const rows = useRetrieveData("movies");
  console.log("rows", rows);

  return (
    <motion.div
      className="Homepage"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* <Banner /> */}
      {rows && rows.map((props: any) => <Row key={props.id} {...props} />)}
      {/* <Credits /> */}
    </motion.div>
  );
};

export default Homepage;
