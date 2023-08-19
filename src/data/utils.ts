import { pronouns } from './pronouns';

export const InitialResult = [
    {
        title: 'Words',
        value: 0,
    },
    {
        title: 'Characters',
        value: 0,
    },
    {
        title: 'Sentences',
        value: 0,
    },
    {
        title: 'Paragraphs ',
        value: 0,
    },
    {
        title: 'Pronouns',
        value: 0,
    },
];

export const BottomResult = [
    {
        title: 'Average Reading Time:',
        value: '-',
    },
    {
        title: 'Longest word:',
        value: '-',
    },
];

export const getWordCount = (s: string) => {
    return s.trim().split(/\s+/).length;
}

export const getCharacterCount = (s: string) => {
    const regex = /[a-zA-Z0-9]/g;
    // @ts-ignore
    return s.length > 0 ? s.match(regex).length || 0 : 0;
};

export const getSentenceCount = (s: string) => {
    const regex = /[^ \r\n][^!?\.\r\n]+[\w!?\.]+/g;
    // @ts-ignore
    return s.length > 0 ? s.match(regex).length || 0 : 0;
};

export const getParagraphCount = (s: string) => {
    const regex = /[\r\n]+/g;
    // @ts-ignore
    return s.length > 0 ? s.match(regex).length || 0 : 0;
};

export const getPronounsCount = (s:string) => {
    let count = 0;
    pronouns.forEach(item => {
        if(s.toLowerCase().includes(item.toLowerCase()))
            count += 1;
    });
    return count;
};
export const longestWord = (s:string) => {
    return s.replace(/[^\w\s]/gi, '').replace(/\r?\n/g, ' ').split(' ').sort((a, b) => b.length - a.length)[0]
}