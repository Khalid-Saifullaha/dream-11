import logo from '../../asset/logo.png'
const Header = () => {
    return (
            <div className='w-10/12 mx-auto flex justify-between items-center flex-col md:flex-row p-8 border-b sticky top-0 z-50 bg-white'>
            <img src={logo} alt="" />
            <ul className='flex  gap-8 items-center text-2xl font-semibold '>
                <li>
                    <a href="">Fixture</a>
                </li>
                <li>
                    <a href="">Teams</a>
                </li>
                <li>
                    <a href="">Schedules</a>
                </li>
                <button className='btn text-2xl'>0 Coin <i className="fa-brands fa-bitcoin text-2xl text-yellow-500"></i></button>
            </ul>
            </div>
           
      
    );
};

export default Header;