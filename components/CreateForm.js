export default function CreateForm(props){
    return(
        <form className='w-3/4 p-2 mx-auto my-auto rounded-md bg-emerald-300' onSubmit={props.locationCreateHandler}>
        <h2 className='text-center text-2xl font-semibold p-2'>Create Cookie Stand</h2>
        <div className="flex justify-evenly p-3 my-1">
          <label className='font-semibold'>Location</label>
          <input name='locationName' id='location' className='flex-auto ml-2 pl-1'/>
        </div>
        <div className='flex justify-evenly'>
          <div className='p-1 rounded-md bg-emerald-200'>
            <label className='block p-1 text-center font-semibold'>Min Customers per Hour</label>
            <input name="minCustomers" className='block m-1 pl-1 font-semibold' id='minCustomers'/>
          </div>
          <div className='p-1 rounded-md bg-emerald-200'>
            <label className='block p-1 text-center font-semibold'>Max Customers per Hour</label>
            <input name="maxCustomers" className='block m-1 pl-1 font-semibold' id='maxCustomers'/>
          </div>
          <div className='p-1 rounded-md bg-emerald-200'>
            <label className='block p-1 text-center font-semibold'>Avg Cookies Per Sale</label>
            <input name="avgCookiesPerSale" className='block m-1 pl-1 font-semibold' id='avgCookiesPerSale'/>
          </div>
        <button className='px-28 font-semibold rounded-md bg-emerald-500 hover:bg-blue-300'>Create</button>
        </div>
      </form>

    )

}