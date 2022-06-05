import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Donorimg from '../../components/datatable/Donorimg'

const DonorimgList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Donorimg/>
      </div>
    </div>
  )
}

export default DonorimgList