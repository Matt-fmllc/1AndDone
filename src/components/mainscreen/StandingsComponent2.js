



import React from 'react';
import "./../MainScreen.css"

import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import { makeStyles } from '@material-ui/core/styles';

const Players = [
     'Bobba OReilly',
     'Bell',
     'Biv',
     'Devoe',
     'jimi',
     'John',
     'Tiffany',
     'Dorothy',
]

const Standings = [
    'First',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    'Last',
]

const Scores = [
    '12',
    '34',
    '56',
    '78',
    '90',
    '21',
    '43',
    '65',
]


const useStyles = makeStyles({
    root: {
        width: '90%',
        position: 'relative',
        top: '5%',
        left: '5%',
    },
    container: {
        position: 'relative',
        height: '100%',
        width: '100%',
    },
    header: {
        fontSize: '36pt',
    },
    header_cell: {
        padding: '2px',
        fontSize: '16pt',
    },
    cell: {
        fontSize: '8pt',
    },
    dyncell: {
        padding: '2px',
        mr: '2px',
        align: 'center',
        border: '1px solid black',
    },
    downarrowbutton: {
        color: 'white',
        width: '100px',
        maxWidth: '15px',
        backgroundColor: '#00bcd4',
        '&:hover': {
            backgroundColor: '#00bcd4',
        },

    }
});

function DrawStaticCell(props) {
    const classes = useStyles();

    return (
        <TableCell className={classes.cell}
            key={props.text}
            align='center'
            style={{ minWidth: 80, maxWidth: 80 }}
        >
            {props.text}
        </TableCell>
    );
}

function DrawTableRow(props) {
    return (
        <TableRow>
            <DrawStaticCell text={props.Standing[0]} />
            <DrawStaticCell text={props.Standing[1]} />
            <DrawStaticCell text={props.Standing[2]} />
        </TableRow>
    );
}

function DrawRows(props) {

    var numOfPlayers = props.Player.length;
    var RenderData = [];
    for (var x = 0; x < numOfPlayers; x++) {
        //RenderData.push([ { 'place': props.Place[x], 'player': props.Player[x], 'score': props.Score[x]} ] );
        RenderData.push([ props.Place[x], props.Player[x], props.Score[x] ]);
    }

    return (
        <React.Fragment>
            {
                RenderData.map((standing, index, ...rest) =>
                    <DrawTableRow Standing={standing} />)
            }
        </React.Fragment>
    );
}

    
function DrawTableHeader() {

    const classes = useStyles();

    const columns = [
        { id: 'Standing', label: "Standing", minWidth: 80, maxWidth: 80, align: 'center' },
        { id: 'Player', label: "Player", minWidth: 80, maxWidth: 80, align: 'center' },
        { id: 'Score', label: "Score", minWidth: 80, maxWidth: 80, align: 'center' },
    ]

    return (
        <TableRow>
            {columns.map(column => (
                <TableCell className={classes.header_cell}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function DrawTable() {
    const classes = useStyles();

    return (
        <Paper className={classes.root} aria-label="sticky table">
            <TableContainer className={classes.container}>
                <Table stickyheader='true' size='small' >
                    <TableHead className={classes.header}>
                        <DrawTableHeader />
                    </TableHead>
                    <TableBody>
                        <DrawRows Place={Standings} Player={Players} Score={Scores} />
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default class StandingsComponent2 extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick.bind(this);
    }

    handleClick = () => {
        alert("Clicked");
        return null;
    }

    render() {
        return (
            <DrawTable />
        );
    }
}

