import Cards from '../Cards/Cards.component';
import Table from '../Table/Table.component';
import './MainDash.styles.css';

const MainDash = () => {
  return (
    <div className='MainDash'>
     <h1>Dashboard</h1>
     <Cards />
     <Table />
    </div>
  )
}

export default MainDash;