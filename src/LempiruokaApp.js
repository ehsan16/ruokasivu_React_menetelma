import React, { Component } from 'react';

import TabitMUI from "./navigation/TabitMUI"

const lempruuat = [

];

class LempiruokaApp extends Component {
  render() {
    return (
      <div>

<TabitMUI ruokataulukko={lempruuat}/>
      </div>
    );
  }
}

export default LempiruokaApp;
