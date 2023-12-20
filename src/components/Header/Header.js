import './Header.scss';

const Header = () => {
    return (
        <div className='header__wrap'>
            <ul className='header__ul'>
                <li><button>Cars</button> </li>
                <li><button>Flats</button></li>
                <li><button>Food</button></li>
                <li><button>Shoes</button></li>
                <li><button>Pants</button></li>
            </ul>
        </div>
    )
}

export default Header;