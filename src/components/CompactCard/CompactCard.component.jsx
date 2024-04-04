import './CompactCard.styles.css';
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {motion} from 'framer-motion';

// CompactCard
const CompactCard = ({params, setExpanded}) => {
  const Png = params.png;
  return (
    <motion.div className="CompactCard" 
    style={{
      background: params.color.backGround,
      boxShadow: params.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId='expandableCard'
    >
      <div className="radialBar">
        <CircularProgressbar value={params.barValue} text={`${params.barValue}%`} />
        <span>{params.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${params.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  )
}

export default CompactCard;