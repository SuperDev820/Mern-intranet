import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardHeader: {
        paddingBottom: 0
    },
    cardContent: {
        padding: 0,
    },
    cardFooter: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    listImg: {
        height: '50px',
        width: '50px',
        borderRadius: '10px',
        backgroundColor: '#222d4b',
        marginRight: '10px'
    }
});

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
        <CardHeader title="Departments" className={classes.cardHeader} />
        <CardContent className={classes.cardContent}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <img className={classes.listImg} src="favicon.ico" />
                    <ListItemText primary="Human Resources" secondary="A space dedicated to all your human resources needs and questions."/>
                </ListItem>
                <ListItem button>
                    <img className={classes.listImg} src="favicon.ico" />
                    <ListItemText primary="Internal Communications" secondary="The space for accessing all of the company's internal communications." />
                </ListItem>
                <ListItem button>
                    <img className={classes.listImg} src="favicon.ico" />
                    <ListItemText primary="Informtion Technology" secondary="Submit your help desk and tech questions here."/>
                </ListItem>
                <ListItem button>
                    <img className={classes.listImg} src="favicon.ico" />
                    <ListItemText primary="Company Announcements" secondary="Get the latest company news, updates, and announcements." />
                </ListItem>
            </List>
        </CardContent>
        <CardActions className={classes.cardFooter}>
            <Button size="small" className={classes.viewMore}>View more</Button>
        </CardActions>
    </Card>
  );
}