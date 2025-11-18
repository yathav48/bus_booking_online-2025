import appinstall from '../assets/appInstall.png';

export default function RedbusApplink() {
    return (
        <div>
            <div className="flex my-2">
                <div className="text-black font-bold text-xl">Get the redbus App</div>
            </div>
            <div className='bg-white dark:bg-black/20 rounded-2xl shadow-lg'>
                <div className='flex flex-col gap-4 md:flex-row px-4 py-2 justify-between w-full'>
                    <div className='flex flex-row items-center gap-4'>
                        <div>
                            <img src={appinstall} alt="redbus app" className='w-18 h-18' />
                        </div>
                        <div className='flex flex-col ml-2'>
                            <span className='font-bold'>Rated 4.5 on Play Store</span>
                            <span className='text-gray-600 text-sm'>Download for existing offers</span>
                        </div>
                    </div>
                    <div className='flex items-center py-2'>
                        <div className='flex w-full md:w-auto'>
                            <button className='bg-pink-300 px-4 py-2 w-full !rounded-full text-center'>Download app</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}