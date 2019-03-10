import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Home, Create, List } from "@material-ui/icons";
import TopruoatMUI from "../components/TopruoatMUI";
import LisaaruokaMUI from "../components/LisaaruokaMUI";
import Etusivu from "../components/Etusivu"
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {

  constructor(props) { super(props); this.state = {value:0, ruokataulukko: this.props.ruokataulukko};}


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Etusivu" icon={ <Home />}/>
            <Tab label="Ruokalista" icon={<List />}/>
            <Tab label="Lisää Ruoka" icon={<Create />}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Etusivu /></TabContainer>}
        {value === 1 && <TabContainer><TopruoatMUI ruoat={this.state.ruokataulukko}/></TabContainer>}
        {value === 2 && <TabContainer><LisaaruokaMUI /></TabContainer>}

      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
