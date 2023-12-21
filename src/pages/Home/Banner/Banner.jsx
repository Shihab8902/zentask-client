import banner from '../../../assets/banner.svg';


const Banner = () => {
    return <div className="h-screen flex items-center justify-between container mx-auto px-5 gap-6 flex-col-reverse lg:flex-row">

        <div className='flex-1'>



            <h1 className='text-xl md:text-3xl lg:text-6xl font-bold lg:leading-snug'>Boost your productivity with Zen<span className='text-blue-600'>Task.</span></h1>
            <p className='my-5 text-sm lg:text-base text-gray-500'>Unleashing the Potential of Your Daily Tasks, Guiding You Toward Success, One Strategic Move at a Time.</p>

            <button className='btn hover:text-black bg-blue-600 text-white px-8 py-3 rounded-full font-semibold '>Let's Explore</button>

        </div>


        <div className='flex-1'>
            <img className='w-full h-full' src={banner} alt="" />
        </div>



    </div>
}

export default Banner