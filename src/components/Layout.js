import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import InboxIcon from '@material-ui/icons/Inbox'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import {withStyles} from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = theme => ({
    list: {
        width: 204,
    },
    wrapper: {
        textAlign: 'center',
    },
    avatar: {
        width: 70,
        height: 70,
        margin: '8px auto',
        marginTop: theme.spacing.unit * 4,
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit,
        right: theme.spacing.unit,
    },
});


const userInfo = (w, a) => (
    <div className={w}>
        <Avatar className={a} src="/img/peter.png"/>
        <Typography variant="title"> Wanyummy </Typography>
        <Typography variant="caption">React Dev</Typography>
    </div>
)


const list = (className) => (
    <List className={className}>
        <ListItem button>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="美图"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary="风景"/>
        </ListItem>
    </List>
)


const Layout = ({children, classes: s, open, onDrawerClose}) => (
    <div>
        <Drawer open={open} onClose={onDrawerClose}>{userInfo(s.wrapper, s.avatar)} {list(s.list)}</Drawer>
        {children}
        <Button variant="fab" color="primary" className={s.fab}>
            <SearchIcon/>
        </Button>
    </div>
)

Layout.propTypes = {
    open: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    children: PropTypes.object.isRequired,
    onDrawerClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(Layout)