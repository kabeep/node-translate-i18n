import LineByLine from 'n-readlines';
import { type LocaleOption } from '../shared/index.js';

function read(filepath: string) {
    const liner = new LineByLine(filepath);

    let line;
    let lineNumber = 0;
    const keys: string[] = [];
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

        const openBracketKey = /(\w+):\s?{$/.exec(content.trim())?.[1];
        if (openBracketKey) keys.push(openBracketKey);

        const isCloseBracket = content.trim().startsWith('}');
        if (isCloseBracket && keys.length > 0) keys.pop();

        const regex = /['"]?(\S+)['"]?:\s?["']([^"']+)["']/g;
        const pair = regex.exec(content);
        if (pair?.length) {
            record.key = [...keys, pair[1]].join('.');
            record.value = pair[2];
            record.toTrans = true;
        }

        list.push(record);
        lineNumber++;
    }

    return list;
}

export default read;
