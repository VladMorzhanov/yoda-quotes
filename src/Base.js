import React from 'react'
import {Provider} from 'mobx-react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import App from './components/App'
import RootStore from './stores/RootStore'
import AppMUITheme from "./utils/AppMUITheme";

class Base extends React.Component {

    render() {
        return (
            <Provider rootStore={RootStore}>
                <MuiThemeProvider muiTheme={getMuiTheme(AppMUITheme())}>
                    <App/>
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default Base
