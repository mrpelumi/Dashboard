import './Cards.styles.css';
import { CardsData } from '../../Data/Data';
import Card from '../Card/Card.component';

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, index) => {
        return (
          <div className="parentContainer">
            <Card 
            title={card.title}
            color= {card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards;