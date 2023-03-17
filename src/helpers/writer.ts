import fs from 'fs';

export const writer = (path: string, content: string): void => {
    fs.writeFileSync(path, content);
}