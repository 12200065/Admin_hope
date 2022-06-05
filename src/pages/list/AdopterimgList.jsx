import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Adopterimg from '../../components/datatable/Adopterimg'

const AdopterimgList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Adopterimg/>
      </div>
    </div>
  )
}

export default AdopterimgList