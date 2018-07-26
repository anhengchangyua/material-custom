import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

const BRAND = '#EE7E33'
const theme = createMuiTheme({})

theme.palette.primary.main = BRAND

theme.palette.background.default = '#fff'

theme.typography.headline = {
    fontSize: '20px',
    fontFamily: 'Roboto-Medium',
    color: 'rgba(84,85,85,1)',
}

theme.typography.title = {
    fontSize: '18px',
    fontFamily: 'Roboto-Regular',
    color: 'rgba(84,85,85,1)',
}
theme.typography.caption = {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    color: 'rgba(155,155,155,1)',
}

theme.typography.subheading = {
    fontSize: 16,
    fontFamily: 'Roboto-Regular',
    color: 'rgba(84,85,85,1)',
}


function withMui (Component) {
    function WithRoot (props) {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...props} />
            </MuiThemeProvider>
        )
    }

    return WithRoot
}

export default withMui