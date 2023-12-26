import '../scss/components/Menu.scss';

function Menu() {
    return (
        <div className='navbar'>
            <p className='logo'>LOGO</p>
            <p className='menu home'>Home</p>
            <p className='menu service'>Услуги</p>
            <p className='menu cases'>Кейсы</p>
            <p className='menu contacts'>Контакты</p>
        </div>
    );
}

export default Menu;
