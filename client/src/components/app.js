import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StreamShow from './streams/stream_show';
import StreamList from './streams/stream_list';
import StreamCreate from './streams/stream_create';
import StreamEdit from './streams/stream_edit';
import StreamDelete from './streams/stream_delete';


const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/show" exact component={StreamShow} />
                    <Route path="/streams/delete" exact component={StreamDelete} />

                </div>
            </Router>
        </div>
    )
}

export default App;