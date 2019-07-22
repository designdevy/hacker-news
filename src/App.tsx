import React from 'react';
import './App.css';

import Button from '@material-ui/core/Button';

const App: React.FC = () => {
    return (
        <div className='App'>
            <header className='App-header'>
                <Button variant='contained' color='primary'>
                    Hello World
                </Button>
            </header>
        </div>
    );
};

export default App;
