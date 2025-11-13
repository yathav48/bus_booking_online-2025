import appinstall from '../assets/appInstall.png';

export default function RedbusApplink() {
    return (
        <div className="px-2">
            <div className="flex p-2">
                <div className="text-black font-bold text-xl">Get the redbus App</div>
            </div>
            <div className='flex flex-col gap-2 md:flex-row px-4 border p-2 justify-between w-full'>
                <div className='flex flex-row items-center gap-4'>
                    <div>
                        <img src={appinstall} alt="redbus app" className='w-20 h-20' />
                    </div>
                    <div className='flex flex-col ml-2'>
                        <span>Rated 4.5 on Play Store</span>
                        <span>Download for existing offers</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='flex w-full md:w-auto'>
                        <button className='bg-pink-300 px-4 py-2 w-full !rounded-full text-center'>Download app</button>
                    </div>
                </div>
            </div>
        </div>
    )
}