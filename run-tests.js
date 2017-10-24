import Mocha from 'mocha';

export default () => {
    const mocha = new Mocha();
    mocha.addFile('./tests.js');
    mocha.run();
}
