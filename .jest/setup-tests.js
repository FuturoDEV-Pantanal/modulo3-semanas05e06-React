import "@testing-library/jest-dom";

const piadasMockadas = [
  {
    id: 355,
    punchline: 'They always get stuck at "C".',
    setup: "Why do pirates not know the alphabet?",
    type: "general",
  },
  {
    id: 356,
    punchline: "Because they can't even.",
    setup: "Why are iPhone chargers not called Apple Juice?!",
    type: "general",
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(piadasMockadas),
  })
);
