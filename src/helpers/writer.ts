import fs from 'fs';

export const writer = (path: string, content: string) => {
    fs.writeFile(path, content, () => {});
}