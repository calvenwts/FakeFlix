import "./homepage.scss";
import Row from "../../components/Row/Row";
// import Credits from "../../components/Credits/Credits";
import { useRetrieveData } from "../../hooks/useRetrieveData";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "../../motionUtils";
import Banner from "../../components/Banner/Banner";

const Homepage = () => {
  const rows = useRetrieveData("movies");

  return (
    <motion.div
      className="Homepage"
      variants={defaultPageFadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Banner />
      {rows && rows.map((props: any) => <Row key={props.id} {...props} />)}
      {/* <Credits /> */}
    </motion.div>
  );
};

export default Homepage;
