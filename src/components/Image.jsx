import illustration from '../images/illustration-dashboard.png'
import './Image.css'

const Img = () => {
    return (
        <div className='data_chart_container'>
            <img src={illustration} alt="data chart" className='data_chart'/>
        </div>
    )
}

export default Img