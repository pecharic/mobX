import * as React from 'react';
import {observer} from "mobx-react";
import user from './stores/uistores';

@observer
class App extends React.Component <{}, {}> {

    public handleClick = () => {
        user.setname();
    }

    public render() {
        return (
            <div className="App">
                <h1>{user.total}</h1>
                {user.name}
                <div>
                    <button onClick={this.handleClick}>ddddddddddd</button>
                </div>
            </div>
        );
    }
}

export default App;
