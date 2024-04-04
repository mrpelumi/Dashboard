import { useState } from 'react';
import './Card.styles.css';

import {AnimateSharedLayout} from 'framer-motion';
import CompactCard from '../CompactCard/CompactCard.component';
import ExpandedCard from '../ExpandedCard/ExpandedCard.component';

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {
        expanded? (
          <ExpandedCard params={props} setExpanded={() => setExpanded(false)} />
        ) : 
        <CompactCard params={props} setExpanded={()=>setExpanded(true)}/>
      }
    </AnimateSharedLayout>
  )
}


export default Card;