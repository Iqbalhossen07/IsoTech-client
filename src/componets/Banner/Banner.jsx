import banner from '../../assets/bg.jpg';

const Banner = () => {
    return (
        <div className="hero h-72 md:min-h-screen relative">
        <img className='h-full w-full object-cover' src={banner} alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-neutral-content">
            <div>
                 <div className='flex items-center gap-2'>
                    <img className='w-12 ' data-aos="fade-up-right" alt="" />
                    <p className='italic mb-5 text-pink-600' data-aos="fade-right">Ekahne kichu likhet hobe</p></div>
                <h1 className="mb-5 text-2xl md:text-3xl lg:text-6xl font-medium" data-aos="fade-left">Sale 20% Off
On Everything</h1>
                <p className='italic mb-5' data-aos="flip-left"></p>
                
            </div>
        </div>
    </div>
    );
};

export default Banner;
