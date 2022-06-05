import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Donortable from '../../components/datatable/Donortable'

const DonorList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Donortable/>
      </div>
    </div>
  )
}

export default DonorList