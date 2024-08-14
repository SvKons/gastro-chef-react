import React, { useState } from 'react';
import Programs from '../components/Programs';
import Days from '../components/Days';
import Menu from '../components/Menu';
import { days } from '../components/Days/utils';
import { programs } from '../components/Programs/util';
import { menuLists } from '../components/Menu/utils';

const MainPage = () => {
    const [selectedDay, setSelectedDay] = useState<string>('ПН');
    const [selectedProgram, setSelectedProgram] = useState<string>('Express Fit');

    const menu = menuLists[selectedProgram]?.[selectedDay] || [];

    return (
        <div className="main-page">
            <Programs programs={programs} selectedProgram={selectedProgram} onSelect={setSelectedProgram} />
            <Days days={days} selectedDay={selectedDay} onSelect={setSelectedDay} />
            <Menu menu={menu} />
        </div>
    );
};

export default MainPage;
