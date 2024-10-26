import footerLogo from '../../asset/logo-footer.png'
import newsbg from '../../asset/bg-shadow.png'

const Footer = () => {
    return (
        
        <div className=" ">
<div className=" relative w-10/12 mx-auto bg-cover bg-no-repeat mb-10  h-[300px] rounded-3xl " style={{ backgroundImage: `url(${newsbg})` }}>
        
        <div className='flex flex-col justify-center items-center text-center mt-44 py-14 space-y-5 '>
        <h2 className='text-4xl '>Subscribe to our Newsletter</h2>
        <p className='text-2xl text-gray-700 font-semibold'>Get the latest updates and news right in your inbox!</p>
        
       <div className='flex justify-around items-center gap-4'>
       <input className='p-5 md:w-[400px] border rounded-2xl' type="email" name="" id="" placeholder='Enter your email' />
       <button className=' bg-pink-500 py-4 px-10 rounded-2xl  text-white text-2xl  font-semibold '>Subscribe</button>
       </div>
        </div>
        </div>

    <div>
                <div className='flex justify-center bg-[#06091A]'>
                <img src={footerLogo} alt="" />
            </div>
            <footer className="footer bg-[#06091A] text-neutral-content p-10 md:pl-72">
  <nav>
    <h6 className="footer-title">About Us</h6>
    <p>We are a passionate team
        <br /> 
        dedicated to providing the best 
        <br />
        services to our customers.</p>
  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <ul className='text-white '>
        <li className='flex flex-col'>
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </li>
    </ul>
  </nav>
  <nav>
    <h6 className="footer-title">Subscribe</h6>
   <p className='text-gray-400'>Subscribe to our newsletter for the latest updates.</p>
   <div className='flex justify-around items-center gap-4'>
       <input className='p-5  border rounded-2xl' type="email" name="" id="" placeholder='Enter your email' />
       <button className=' bg-pink-500 py-4 px-3 rounded-2xl  text-white text-2xl  font-semibold '>Subscribe</button>
       </div>
  </nav>
</footer>
    </div>
            
            
        </div>
    );
};

export default Footer;