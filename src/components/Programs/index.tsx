import './Programs.scss';

interface ProgramSelectorProps {
    programs: string[];
    selectedProgram: string;
    onSelect: (program: string) => void;
}

const Program = ({ programs, selectedProgram, onSelect }: ProgramSelectorProps) => {
    return (
        <ul className="programs">
            {programs.map(program => (
                <li className={`programs__item ${selectedProgram === program ? 'programs__item_active' : ''}`} key={program} onClick={() => onSelect(program)}>
                    <span className="programs__text">{program}</span>
                </li>
            ))}
        </ul>
    );
};

export default Program;
