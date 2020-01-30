import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ClearAllIcon from '@material-ui/icons/FormatAlignLeft';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
import './Navbar.css'

const useStyles = makeStyles({
    list: {
        width: 200
    },
    fullList: {
        width: "auto"
    }
});

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (side, open) => event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div

            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List >

                <Link id='links' to="/"  style={{color:'black'}}>
                    <ListItemText primary="Home" />
                </Link>
                <Link id='links' to="/business" style={{color:'black'}} >
                    <ListItemText primary="Business" />
                </Link>
                <Link id='links' to="/personal"  style={{color:'black'}}>
                    <ListItemText primary="Personal" />
                </Link>
                <Link id='links' to="/contact"  style={{color:'black'}}>
                    <ListItemText primary="Contact" />
                </Link>

            </List>
            <Divider />
            {/* <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index === 1 ? <InboxIcon /> : <HomeIcon />}
                        </ListItemIcon>
                        <Link to="/" >
                            <ListItemText primary={text} />
                        </Link>

                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const fullList = side => (
        <div
            style={{ position: 'absolute', marginLeft: '140px' }}
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {["Home", "Business", "Personal", "Contact"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <HomeIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <HomeIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Button id='sbar' style={{ color: 'white', float: 'right', marginTop: '10px' }} onClick={toggleDrawer("left", true)}><ClearAllIcon /></Button>
            <Drawer open={state.left} onClose={toggleDrawer('left', false)} style={{textAlign:'center', textDecoration:'none', color:'black'}}>
                <div style={{backgroundColor:'black', color:'white', fontSize:'34px',height:'55px'}}>
                    OutSpread
                </div>
                {sideList('left')}
            </Drawer>
            {/* <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer> */}
        </div>
    );
}
