import './Icons.css'

const Icons = () => {
    return (
        <div className='icons_main_container flex_column'>
            <div className='icons_container flex_row'>
                <div className='icon_border'>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className='icon_border'>
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <div className='icon_border'>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <small>@ Copyright Ping. All rights reserved.</small>
        </div>
    )
}

export default Icons