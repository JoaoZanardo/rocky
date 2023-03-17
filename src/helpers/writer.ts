import fs from 'fs';

export const writer = (path: string, content: string) => {
    fs.writeFileSync(path, content);
}