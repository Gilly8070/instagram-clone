import Image from 'next/image';
import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon, } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/dist/client/router';
import { modalState } from '../atoms/modalAtom';
import { useRecoilState } from 'recoil';

function Header() {
    const { data: session } = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);

    // console.log(session)
    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className="flex justify-between max-w-5xl mx-5 lg:mx-auto items-center">
                {/* Header Left */}
                <div onClick={() => router.push('/')} className="relative hidden h-20 lg:inline-grid w-24 cursor-pointer">
                    <Image src='https://links.papareact.com/ocw' layout='fill' objectFit='contain' />
                </div>
                <div onClick={() => router.push('/')} className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer mt-2">
                    <Image src='https://links.papareact.com/jjm' layout='fill' objectFit='contain'
                    />
                </div>

                {/* Header Middle */}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <input type="text" className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md' placeholder='Search' />
                    </div>
                </div>
                {/* Header Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon onClick={() => router.push('/')} className='navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />

                    {session ? (
                        <>
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
                    </div>
                    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                            <img onClick={signOut} src={session?.user?.image} alt="Profile pic" className='h-10 w-10 rounded-full cursor-pointer' />
                            </>
                    ) : (
                            <button onClick={signIn}>Sign In</button>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Header
