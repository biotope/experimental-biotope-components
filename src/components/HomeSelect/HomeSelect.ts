import BioElement from '@biotope/element';
import { template } from './HomeSelect.tpl';

interface HomeSelectProps {
  title: string;
}
interface HomeSelectState {

}

export class HomeSelect extends BioElement<HomeSelectProps, HomeSelectState> {
  static componentName = 'home-select';
  static bioAttributes = ['title'];
  render() {
    console.log(this.props);
    template(this.html, {
      name: this.props.title
    })
  }
}
