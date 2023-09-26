import Generate from "generate-password-browser"

export const generateRandomPassword = (length: number): string => {
    return Generate.generate({
        length,
        numbers: true,
        lowercase: true,
        uppercase: true,
        symbols: true,
        excludeSimilarCharacters: true,
        strict: true,
    });
}

