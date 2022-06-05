import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Adopttable from '../../components/datatable/Adopttable'

const AdoptList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Adopttable/>
      </div>
    </div>
  )
}

export default AdoptList