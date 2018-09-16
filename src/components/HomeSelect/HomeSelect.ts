import Component from '@biotope/element';
import { template } from './HomeSelect.tpl';

interface HomeSelectProps {
  title: string;
}
interface HomeSelectState {

}

export class HomeSelect extends Component<HomeSelectProps, HomeSelectState> {
  static componentName = 'home-select';
  static _attributes = ['title'];
  render() {
    console.log(this.props);
    template(this.html, {
      name: this.props.title
    })
  }
}
