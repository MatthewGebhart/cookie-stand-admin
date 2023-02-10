export default function CreateForm(props){
    return(
        <form className='w-3/4 p-2 mx-auto my-auto rounded-md border border-emerald-500 bg-emerald-200' onSubmit={props.locationCreateHandler}>
        {/* <h2 className='text-center text-2xl font-semibold p-2'>Create Cookie Stand</h2> */}
        <div className="flex justify-evenly items-end my-1">
          <div className=" block w-3/4 p-2 mx-4">
          <label className='block mb-2 text-center font-semibold'>Add Location</label>
          <input name='locationName' id='locationName' className='block w-full ml-2 pl-1' placeholder="Cookie Stand Location"/>
          </div>
          <button className='block w-1/2 mx-4 p-2 font-semibold rounded-md bg-emerald-500 hover:bg-blue-300'>Create Stand</button>
        </div>
        <div className='flex items-stretch justify-evenly'>
          <div className='p-1 rounded-md'>
            <label className='block p-1 text-center font-semibold'>Min Customers per Hour</label>
            <input name="minCustomers" className='block w-full m-1 pl-1 font-semibold' id='minCustomers' placeholder="0"/>
          </div>
          <div className='p-1 rounded-md'>
            <label className='block p-1 text-center font-semibold'>Max Customers per Hour</label>
            <input name="maxCustomers" className='block w-full m-1 pl-1 font-semibold' id='maxCustomers'placeholder="0"/>
          </div>
          <div className='p-1 rounded-md'>
            <label className='block p-1 text-center font-semibold'>Avg Cookies Per Sale</label>
            <input name="avgCookiesPerSale" className='block w-full m-1 pl-1 font-semibold' id='avgCookiesPerSale'placeholder="0"/>
          </div>

        </div>
      </form>

    )

}