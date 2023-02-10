import Link from 'next/link';

export default function Header(props) {
    return (
        <header className=' flex content-evenly bg-emerald-500'>
            <div className='w-3/4' >
            <h1 className='text-3xl text-center font-semibold'>Cookie Stand Admin</h1>
            </div>
            <div className=' w-1/4'>
            <Link href='/overview' className=' px-2 rounded-md bg-white hover:bg-blue-300'>"TD loggin user"</Link>
            <Link href='/overview' className=' px-2 rounded-md bg-emerald-800 text-white hover:bg-blue-300'>Sign Out</Link>
            <Link href='/overview' className=' px-2 rounded-md bg-white hover:bg-blue-300'>Overview</Link>
            </div>
            {/* <button className=' px-2 rounded-md bg-white hover:bg-blue-500'>Overview</button> */}
        </header>
    )

}