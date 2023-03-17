import fs from 'fs';

export const deleter = (path: string): void => {
    fs.rmSync(path);
}