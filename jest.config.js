module.exports = {
    testEnvironment: "jest-environment-jsdom",
    setupFiles: ["<rootDir>/setupTests.js"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
}
