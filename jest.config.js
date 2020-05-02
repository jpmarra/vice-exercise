module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["<rootDir>/setupTests.js"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    preset: "ts-jest",
    transform: {
        "\\.(jpg|jpeg|png)$": "<rootDir>/fileTransformer.js",
        "^.+\\.(js|jsx)?$": "babel-jest",
    },
}
