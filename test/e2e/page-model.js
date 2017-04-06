import { Selector } from 'testcafe';

export default class IndexPage {
    constructor () {
        this.content = Selector('.card-content');
		this.header = Selector('.card-header');

    }
}
