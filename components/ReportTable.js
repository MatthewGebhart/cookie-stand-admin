import {hours, hourlySales, locations, hourlySalesTotalRender, hourlyTotals} from './data'
import Link from "next/link"

export default function ReportTable(props){
    return(
        // props.locations.length > 0 ? (
            <table className="w-3/4 mx-auto my-5">
            <thead>
                <tr className="border border-gray-700 bg-emerald-500">
                    <th className="border border-gray-700 text-center">Location</th>
                    {hours.map((hour) => {
                        return <th key={hour.id} className="border border-gray-700 text-center">{hour}</th>
                    })}
                    <th>Totals</th>
                </tr>
            </thead>
            <tbody>
                {locations.map((location) => {
                    return (
                    <tr key={location.id} className=" border border-gray-700 odd:bg-emerald-200 even:bg-emerald-400 ">
                        <td className=" border border-gray-700">{location} <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg></Link> 
</td>
                        {hourlySales.map((hour) => {
                            return <td key={hour.id} className="border border-gray-700 text-center">{hour}</td>
                        })}
                        {/* <td className='text-center'>{hourlySalesTotalRender}</td> */}
                        <td className='text-center'>{hourlySales.reduce((sum, value) => sum + value, 0)}</td>
                    </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className=' text-center font-semibold border border-gray-700 bg-emerald-500'>
                    <tf>Totals</tf>
                    {hourlyTotals.map((total) => {
                            return <td key={total.id} className="border border-gray-700 text-center">{total}</td>
                        })}
                    <tf>4560</tf>
                </tr>
            </tfoot>
            </table>
        // ) : (
        //     <h2 className="text-center my-5 font-bold text-2xl ">No Cookie Stands Available</h2>
        // )
    )
}