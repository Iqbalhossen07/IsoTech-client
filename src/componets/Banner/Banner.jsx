import banner from '../../assets/bg.jpg';

const Banner = () => {
    return (
        <div className="hero h-40 md:h-80 lg:min-h-screen relative">
        <img className='h-full w-full object-cover' src={banner} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-neutral-content">
            <div>
                 <div className='flex items-center gap-2'>
                    <img className='w-12 ' data-aos="fade-up-right" alt="" />
                    <p className='italic mb-5 text-2xl text-[#54e2d2]' data-aos="fade-right">Offer! Offer!</p></div>
                <h1 className="mb-5 text-2xl md:text-3xl lg:text-6xl font-medium" data-aos="fade-left">Sale <span className='text-[#54e2d2]'>20%</span> Off
On Everything</h1>
                <p className='italic mb-5' data-aos="flip-left"></p>
                
            </div>
        </div>
    </div>
    );
};

export default Banner;
