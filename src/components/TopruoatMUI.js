import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


let id = 0;
function createData(name, ruokatyyppi) {

  id += 1;
  return { id, name, ruokatyyppi };
}

const rows = [
  createData('Lasagnette', "liharuoka"),
  createData('Lihapullat riisillä', "liharuoka"),
  createData('Hernekeitto', "Kasvisruoka"),
  createData('Poronkäristys', "liharuoka"),
  createData('Kanapasta', "liharuoka")
];

function TopruoatMUI(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <CustomTableCell>Ruoka</CustomTableCell>
           <CustomTableCell align="right">Ruokatyyppi</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">{row.name}  </CustomTableCell>
              <CustomTableCell align="right">{row.ruokatyyppi}</CustomTableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

TopruoatMUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopruoatMUI);
