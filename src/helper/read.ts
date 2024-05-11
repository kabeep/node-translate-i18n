import LineByLine from 'n-readlines';
import { type LocaleOption } from '../shared/index.js';

function read(filepath: string) {
    const liner = new LineByLine(filepath);

    let line;
    let lineNumber = 0;
    const list: LocaleOption[] = [];

    while ((line = liner.next())) {
        const record: LocaleOption = {
            original: '',
            key: '',
            value: '',
            toTrans: false,
            lineNumber: 0,
            status: true,
        };

        const content = line.toString();
        record.original = content;
        record.lineNumber = lineNumber;

        const regex = /['"]?(\S+)['"]?:\s?["']([^"']+)["']/g;
        const pair = regex.exec(content);
        if (pair?.length) {
            record.key = pair[1];
            record.value = pair[2];
            record.toTrans = true;
        }

        list.push(record);
        lineNumber++;
    }

    return list;
}

export default read;
