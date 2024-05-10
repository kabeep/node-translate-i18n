import Exception from '@kabeep/exception';

export default class Fail extends Exception {
    toString() {
        return this.info('#110f18.bg#ff6767');
    }
}
