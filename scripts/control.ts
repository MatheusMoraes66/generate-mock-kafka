import { createMock } from './createMock';
import { recordFile } from './recordFile';

export function control(filename: string, count: number, type: string) {
    const list = createMock(count);
    const file = filename + '.' + type;
    recordFile(file, list);
}
