import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Create } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';


class LisaaruokaMUI extends Component {

  constructor(props) {
      super(props);
      this.state = { lisaaruoka: '' };
  }

  muuta = (e) => {
    this.setState( { [e.target.name]: e.target.value } );
  }

  lisaa = (e) => {
    e.preventDefault();
  }



  render() {
    const { classes } = this.props;
    return (

      <form>
      <label>
        liharuoka
        <input
          name="liharuoka"
          type="checkbox"
          checked={this.state.liharuoka}
          onChange={this.handleInputChange} />
          </label>
          <label>
            kasvisruoka
            <input
              name="kasvisruoka"
              type="checkbox"
              checked={this.state.kasvisruoka}
              onChange={this.handleInputChange} />
      </label>
      <TextField label='Ruoka' name='lisaaruoka' value={ this.state.lisaaruoka }
             onChange={ this.muuta }  margin='normal' required
             className={ classes.field } />

          <Button onClick={this.lisaa} variant='contained' color='secondary' className={ classes.button }><Create /> Lisää ruoka</Button>


    </form>


         );
           }

       }
const styles = {
  field: { display: 'block'},
  button: { marginRight: 20}
}
export default withStyles(styles)(LisaaruokaMUI);
