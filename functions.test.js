const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log("DB init");
// const closeDatabase = () => console.log("DB closed");
const nameCheck = () => console.log("checking names");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is jeff", () => {
    const user = "jeff";
    expect(user).toBe("jeff");
  });

  test("User is jeff", () => {
    const user = "karen";
    expect(user).toBe("karen");
  });
});

//toBe (para datos prmitivos)
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
//not
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});
//toBeNull
test("should be null", () => {
  expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});
//toEqual
test("user should be Lexfer Ramirez object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Lexfer",
    lastName: "Ramirez",
  });
});

//less than and greater than
test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//Regex
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

//array
test("Admin should be in username", () => {
  usernames = ["john", "Karen", "admin"];
  expect(usernames).toContain("admin");
});

//working with async data
//Async await
test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
//Promise
// test("user fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });
