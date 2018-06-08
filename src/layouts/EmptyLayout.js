import React from 'react';
import { empty } from '../config/routes';
import { RouteWithSubRoutes } from '../config/RouteWithSubRoutes';
const emptyLayout = () => (
    <div>
        {empty.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
);
export default emptyLayout;