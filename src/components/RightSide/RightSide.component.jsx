import './RightSide.styles.css';
import Updates from '../Updates/Updates.component';
import CustomerReview from '../CustomerReview/CustomerReview.component';

const RightSide = () =>{
  return(
    <div className="RightSide">
      <div>
        <h3>Updates</h3>
        <Updates />
      </div>
      <div>
        <h3>Customer Review</h3>
        <CustomerReview />
      </div>
    </div>
  )
}

export default RightSide;