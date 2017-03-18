import React from 'react';
import TaskList from './Tasklist.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                Totally Nodal, aye!
                <TaskList />
            </div>
        );
    }
};

export default App;
