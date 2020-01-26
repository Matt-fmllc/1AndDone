

import React from 'react';

import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '90%',
        position: 'absolute',
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


const ResultsData = [
    ['Bob', 'qb1', '0', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7' ],
    ['Steve', 'qb1', '12', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Bell', 'qb1', '0', 'rb1', '10', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Biv', 'qb1', '0', 'rb1', '0', 'wr1', '5', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['DeVoe', 'qb1', '0', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['John', 'qb1', '0', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Mary', 'qb1', '0', 'rb1', '0', 'wr1', '15', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Greta', 'qb1', '20', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Tiffany', 'qb1', '0', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Dorothy', 'qb1', '0', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
    ['Jennifer', 'qb1', '0', 'rb1', '0', 'wr1', '0', 'te1', '0', 'df1', '0', 'ki1', '7'],
];

function DrawStaticCell(props) {
    const classes = useStyles();

    return (
        <TableCell className={classes.cell}
            key={props.text}
            align='center'
            style={{ minWidth: 50, maxWidth: 50 }}
        >
            {props.text}
        </TableCell>
    );
}

function DrawTablePlayerRow(props) {

    return (
        <React.Fragment>
            {
                <TableRow>
                    <DrawStaticCell text={props.Result[0]} />
                    <DrawStaticCell text={props.Result[1]} />
                    <DrawStaticCell text={props.Result[3]} />
                    <DrawStaticCell text={props.Result[5]} />
                    <DrawStaticCell text={props.Result[7]} />
                    <DrawStaticCell text={props.Result[9]} />
                    <DrawStaticCell text={props.Result[11]} />
                </TableRow>
            }
        </React.Fragment>
    );
}

function DrawTableScoreRow(props) {

    var Total = parseInt(props.Result[2], 10)
            + parseInt(props.Result[4], 10)
            + parseInt(props.Result[6], 10)
            + parseInt(props.Result[8], 10)
            + parseInt(props.Result[10], 10)
            + parseInt(props.Result[12], 10);

    return (
        <React.Fragment>
            {
                <TableRow>
                    <DrawStaticCell text={Total} />
                    <DrawStaticCell text={props.Result[2]} />
                    <DrawStaticCell text={props.Result[4]} />
                    <DrawStaticCell text={props.Result[6]} />
                    <DrawStaticCell text={props.Result[8]} />
                    <DrawStaticCell text={props.Result[10]} />
                    <DrawStaticCell text={props.Result[12]} />
                </TableRow>
            }
        </React.Fragment>
    );
}


function DrawTableRow(props) {
    return (
        <React.Fragment>
            <DrawTablePlayerRow Result={props.Result} />
            <DrawTableScoreRow Result={props.Result} />
        </React.Fragment>
    );
}



function DrawRows(props) {
    return (
        <React.Fragment>
            {
                props.Results.map((result, index, ...rest) =>
                    <DrawTableRow Result={result} />)
            }
        </React.Fragment>
    );
}

function DrawTableHeader() {

    const classes = useStyles();

    const columns = [
        { id: 'Player', label: "Player", minWidth: 80, maxWidth: 80, align: 'center' },
        { id: 'QB', label: "QB", minWidth: 50, maxWidth: 50, align: 'center' },
        { id: 'RB', label: "RB", minWidth: 50, maxWidth: 50, align: 'center' },
        { id: 'WR', label: "WR", minWidth: 50, maxWidth: 50, align: 'center' },
        { id: 'TE', label: "TE", minWidth: 50, maxWidth: 50, align: 'center' },
        { id: 'DF', label: "DF", minWidth: 50, maxWidth: 50, align: 'center' },
        { id: 'KI', label: "KI", minWidth: 50, maxWidth: 50, align: 'center' },
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
                        <DrawRows Results={ResultsData} />
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items,
        }
    }
    render() {
        return (
            <DrawTable />
        );
    }
}