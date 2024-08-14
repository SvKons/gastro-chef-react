import './Days.scss';

interface DaySelectorProps {
    days: string[];
    selectedDay: string;
    onSelect: (day: string) => void;
}

const Days = ({ days, selectedDay, onSelect }: DaySelectorProps) => {
    return (
        <ul className="days-list">
            {days.map(day => (
                <li className={`days-list__btn ${selectedDay === day ? 'days-list__btn_active' : ''}`} key={day} onClick={() => onSelect(day)}>
                    {day}
                </li>
            ))}
        </ul>
    );
};

export default Days;
