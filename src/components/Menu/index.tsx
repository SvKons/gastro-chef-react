import { MenuItem } from './utils';
import './Menu.scss';

interface MenuProps {
    menu: MenuItem[];
}

const Menu = ({ menu }: MenuProps) => {
    return (
        <ul className="menu">
            {menu.map((food, index) => (
                <li className="menu__item" key={index}>
                    <div className="menu__time">
                        <div className="menu__time_day">{food.timeOfDay}</div>
                        <div className="menu__time_hour">{food.time}</div>
                    </div>
                    <div className="menu__food">
                        <div className="menu__meal">{food.productName}</div>
                    </div>
                    <div className="menu__weight">
                        <div className="menu__weight_text">{food.productWeight}</div>
                        <div className="menu__weight_text">{food.productAmount}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
