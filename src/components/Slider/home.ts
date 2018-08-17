import BioElement from '@biotope/element';

class HomeSelect extends BioElement<any, any> {
  static bioAttributes = ['whatever'];
  render() {
    console.log(this.props);
    this.html`<p>hello world</p>`
  }
}

HomeSelect.register();
