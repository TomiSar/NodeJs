//npm run test, npm test, npx jest
test('Square root and to Upper() sample test with Jest', () => {
    let testInput = "testing with Jest"
    expect(Math.sqrt(9)).toBe(3);
    expect(testInput.toUpperCase()).toBe("TESTING WITH JEST");
});