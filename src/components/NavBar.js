
import { FaBeer, FaAirbnb } from 'react-icons/fa';
import { GrTrain } from 'react-icons/gr';


import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar-container'>
      <a><FaBeer />Link 1</a>
      <a><FaAirbnb />Link 2</a>
      <a><GrTrain />Link 3</a>
    </div>
  );
};

export default NavBar;