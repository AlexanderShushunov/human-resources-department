// @flow
import * as React from 'react';
import './app-layout.css';

type AppLayoutProps = {
    LeftMenu: React.ComponentType<{}>,
    Content: React.ComponentType<{}>
}

export const AppLayout = ({LeftMenu, Content}: AppLayoutProps) => (
    <div className="app-layout">
        <h1 className="app-layout__header">
            Human Resources Department
        </h1>
        <div className="app-layout__body">
            <div className="app-layout__left-menu">
                <LeftMenu />
            </div>
            <div className="app-layout__content">
                <Content />
            </div>
        </div>
    </div>
);
