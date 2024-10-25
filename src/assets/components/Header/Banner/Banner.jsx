import bg from '../../../asset/bg-shadow.png'
import mainBg from '../../../asset/banner-main.png'

const Banner = () => {
    return (
        <div className=" w-10/12 mx-auto bg-cover  h-[600px] rounded-xl bg-black" style={{ backgroundImage: `url(${bg})` }}>
            <div className='flex  justify-center '>
            <img  src={mainBg} alt="" />
            
            </div>
            <div className='text-center'>
            <h2 className='text-4xl text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
            <p className='text-2xl text-gray-300 font-semibold'>Beyond Boundaries Beyond Limits</p>
            <button className='btn bg-pink-500 text-white font-semibold '>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;