import Exception from '@kabeep/exception';

export default class Warn extends Exception {
    toString() {
        return this.info('#110f18.bg#ffca85');
    }
}
