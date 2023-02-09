import CreateForm from '@/components/CreateForm';
import ReportTable from '@/components/ReportTable';

export default function Main(props) {
    return(
        <main className='py-6 bg-emerald-100'>
        <CreateForm locationCreateHandler={props.locationCreateHandler}/>
        <ReportTable locations={props.locations}/>
      </main >
    )
}