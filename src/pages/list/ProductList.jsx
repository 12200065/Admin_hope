import './productlist.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Producttable from '../../components/datatable/Producttable'

const ProductList = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Producttable/>
      </div>
    </div>
  )
}

export default ProductList