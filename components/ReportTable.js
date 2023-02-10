import {hours, hourlySales, locations, hourlySalesTotalRender, hourlyTotals} from './data'

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
                        <td className="border border-gray-700">{location}</td>
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