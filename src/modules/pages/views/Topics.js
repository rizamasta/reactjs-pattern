import React from 'react';
import { Link } from 'react-router-dom';
const Topics = ({ match }) => (
    <div className='main'>
        <h2>Topics</h2>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        {/* <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul> */}
    </div>
);
export default Topics;

