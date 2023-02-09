import Link from 'next/link';

export default function Footer(props){
    return(
        <footer className='p-3 bg-emerald-500'>
      <p>{props.locations.length} Locations World Wide</p>

    </footer>

    )

}