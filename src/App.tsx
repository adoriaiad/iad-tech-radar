import React, { useEffect, useRef } from 'react';
import './App.css';
import { radarConfiguration } from './data/config';
import { buildGraph } from './modules/graph';
import { radar_visualization } from './modules/radar';

interface IProps {
  
}

interface IState {
  
}

class App extends React.Component<IProps, IState> {
  ref!: SVGSVGElement;
  
  componentDidMount() {
    // activate   
    radar_visualization(radarConfiguration, this.ref)
  }

  render() {
    return (<div>
      <svg id={'svg#radar'} ref={(ref: SVGSVGElement) => this.ref = ref}></svg>
    </div>);
  }
}

export default App;
