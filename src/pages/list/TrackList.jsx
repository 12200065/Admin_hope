import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Tracktable from '../../components/datatable/Tracktable'

const TrackList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Tracktable/>
      </div>
    </div>
  )
}

export default TrackList