export interface Context {
    /** Overwrite indicator */
    rewrite: boolean;
    /** Work directory */
    directory: string;
    /** Source language code of ISO 639-1 */
    code: string;
    /** File name suffix, like `.locale.ts` in `en-US.locale.ts` */
    suffix: string;
    /** File extension without dot */
    extension: 'js' | 'ts' | 'json';
}

const store: Context = {
    rewrite: false,
    directory: '',
    code: '',
    suffix: '',
    extension: 'js',
};

export default store;
