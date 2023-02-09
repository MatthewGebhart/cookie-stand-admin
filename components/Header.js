import Link from 'next/link';

export default function Header(props) {
    return (
        <header className=' flex items-center justify-between p-3 bg-emerald-500'>
            <h1 className='text-3xl font-semibold'>Cookie Stand Admin</h1>
            <Link href='/overview' className=' px-2 rounded-md bg-white hover:bg-blue-300'>Overview</Link>
            {/* <button className=' px-2 rounded-md bg-white hover:bg-blue-500'>Overview</button> */}
        </header>
    )

}