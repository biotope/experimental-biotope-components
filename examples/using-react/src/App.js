/* 
  DEV NOTE
  please remember to run `yarn link` on the parent directory
  and `yarn link biotope` on ./examples/using-react/ aftewards
  to create the symlink
*/
import React, { Component } from 'react';
import 'biotope';

import Slider from './components/Slider/Slider';
import Slide from './components/Slider/Slide';

class App extends Component {
  state = { 
    selected: 0, 
    slides: [0, 1, 2, 3, 4]
  }

  componentDidMount() {
    document.addEventListener('slideChange', this.syncState);
  }

  componentWillUnmount() {
    document.removeEventListener('slideChange', this.syncState);
  }

  syncState = e => this.setState({ selected: e.detail })

  render() {
    const { selected, slides } = this.state;

    return (
      <Slider data={{ selected }}>
        {slides.map(el => (
          <Slide key={el}>
            {el}
          </Slide>
        ))}
      </Slider>
    );
  }
}

export default App;
