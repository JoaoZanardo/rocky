export const formatCorruptedString = (str: string): string => {
    for (const letter of str) {
        if (letter === 'æ') {
            str = str.replace('æ', 'a');
        }
        if (letter === "ø") {
            str = str.replace('ø', 'o');
        }
    }

    return str;
}