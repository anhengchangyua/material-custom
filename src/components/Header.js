import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = () => ({
    item: {
        fontFamily: 'Roboto-Medium',
        color: 'rgba(209,209,209,1)',
        textTransform: 'none',
    },
})


const Header = ({classes: s, value, onChange, onButtonClick,}) => (
    <div>
        <AppBar color="inherit">
            <Toolbar>
                <IconButton onClick={onButtonClick}>
                    <MenuIcon/>
                </IconButton>
                <Typography variant="headline" color="inherit">
                    Timefiles
                </Typography>
            </Toolbar>
            <Tabs fullWidth indicatorColor="primary" textColor="primary" onChange={(e, index) => onChange(index)}
                  value={value}>
                <Tab className={s.item} label="美图"/>
                <Tab className={s.item} label="风景"/>
            </Tabs>
        </AppBar>
    </div>
)

Header.propTypes = {
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onButtonClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
