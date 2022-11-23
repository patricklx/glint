/* eslint-disable ember/no-classic-components, ember/require-tagless-components */
import Component from '@ember/component';

export default class Qux extends Component {
  name = 'QUX';
}

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Qux: typeof Qux;
  }
}
