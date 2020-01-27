

import React from 'react';

import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import LastPageIcon from '@material-ui/icons/LastPage';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';

import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const useStyles1 = makeStyles(theme => ({
    root_footer: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

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
    footer: {
        flexShrink: '0',
        width: '100%',
        minWidth: '100%',
        background: '#d3d3d3',
    },  
    cell: {
        fontSize: '8pt',
        border: '1px solid grey',
        align: 'center',
    },
    row_header: {
        fontSize: '8pt',
        fontWeight: 'bold',
        border: '1px solid grey',
    },
    tableRow: {
        backgroundcolor:'#aafafa',
        background: '#d3d3d3',
    },
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


function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
    return (
        <div className={classes.root_footer}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count:          PropTypes.number.isRequired,
    onChangePage:   PropTypes.func.isRequired,
    page:           PropTypes.number.isRequired,
    rowsPerPage:    PropTypes.number.isRequired,
};

function DrawStaticCell(props) {
    const classes = useStyles();

    return (
        <TableCell className={classes.cell}
            key={props.text}
            align='center'
            style={{ minWidth: 30, maxWidth: 30 }}
        >
            {props.text}
        </TableCell>
    );
}

function DrawStaticCellRowHeader(props) {
    const classes = useStyles();

    return (
        <TableCell className={classes.row_header}
            key={props.text}
            align='center'
            style={{ minWidth: 30, maxWidth: 30 }}
        >
            {props.text}
        </TableCell>
    );
}

function DrawTablePlayerRow(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.tableRow}>
                <DrawStaticCellRowHeader text={props.Result[0]} />
                <DrawStaticCell text={props.Result[1]} />
                <DrawStaticCell text={props.Result[3]} />
                <DrawStaticCell text={props.Result[5]} />
                <DrawStaticCell text={props.Result[7]} />
                <DrawStaticCell text={props.Result[9]} />
                <DrawStaticCell text={props.Result[11]} />
            </TableRow>
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
            <TableRow>
                <DrawStaticCellRowHeader text={Total} />
                <DrawStaticCell text={props.Result[2]} />
                <DrawStaticCell text={props.Result[4]} />
                <DrawStaticCell text={props.Result[6]} />
                <DrawStaticCell text={props.Result[8]} />
                <DrawStaticCell text={props.Result[10]} />
                <DrawStaticCell text={props.Result[12]} />
            </TableRow>
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

    var page = props.Page;
    var rowsPerPage = props.RowsPerPage;

    return (
        (rowsPerPage > 0
            ? props.Results.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props.Results
        ).map(result => (
            <DrawTableRow Result={result} />)
        )
    );
    //return (
    //    <React.Fragment>
    //        {
    //            props.Results.map((result, index, ...rest) =>
    //                <DrawTableRow Result={result} />)
    //        }
    //    </React.Fragment>
    //);
}

function DrawTableHeader() {

    const classes = useStyles();

    const columns = [
        { id: 'Player', label: "Player", minWidth: 30, maxWidth: 30, align: 'center' },
        { id: 'QB', label: "QB", minWidth: 30, maxWidth: 30, align: 'center' },
        { id: 'RB', label: "RB", minWidth: 30, maxWidth: 30, align: 'center' },
        { id: 'WR', label: "WR", minWidth: 30, maxWidth: 30, align: 'center' },
        { id: 'TE', label: "TE", minWidth: 30, maxWidth: 30, align: 'center' },
        { id: 'DF', label: "DF", minWidth: 30, maxWidth: 30, align: 'center' },
        { id: 'KI', label: "KI", minWidth: 30, maxWidth: 30, align: 'center' },
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

function DrawTableFooter(props) {
    return (
        <TableRow>
            <TablePagination
                rowsPerPageOptions={[3, 6]}
                count={props.Results.length}
                rowsPerPage={props.RowsPerPage}
                page={props.Page}
                SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                }}
                onChangePage={props.handleChangePage}
                onChangeRowsPerPage={props.handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
            />
        </TableRow>
    );
}


function DrawTable() {
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event, newPage) => {
        alert(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper className={classes.root} aria-label="sticky table">
            <TableContainer className={classes.container}>
                <Table stickyheader='true' size='small' >
                    <TableHead className={classes.header}>
                        <DrawTableHeader />
                    </TableHead>
                    <TableBody >
                        <DrawRows
                            Results={ResultsData}
                            RowsPerPage={rowsPerPage}
                            Page={page}
                        />
                    </TableBody>
                    <TableFooter className={classes.footer}>
                        <DrawTableFooter
                            Results={ResultsData}
                            RowsPerPage={rowsPerPage}
                            Page={page}
                            handleChangePage={(event,newPage) => handleChangePage(event,newPage)}
                            handleChangeRowsPerPage={(event) => handleChangeRowsPerPage(event)}
                        />
                    </TableFooter>
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