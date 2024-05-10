export interface Context {
    rewrite: boolean;
    directory: string;
    code: string;
    suffix: string;
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
