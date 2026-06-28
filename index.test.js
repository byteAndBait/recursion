import {fibs,fibsRec,mergeSort} from "./index.js"

test("Fibs Iteration",()=>{
    expect(fibs(8)).toEqual([0,1,1,2,3,5,8,13])
})

test("Fibs Recrusive",()=>{
    expect(fibsRec(8)).toEqual([0,1,1,2,3,5,8,13])
})


describe('mergeSort', () => {
  test('returns an empty array when given an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('returns the same array when given a single element', () => {
    expect(mergeSort([73])).toEqual([73]);
  });

  test('returns an already sorted array unchanged', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('sorts an unsorted array with duplicate values', () => {
    expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });

  test('sorts another unsorted array', () => {
    expect(mergeSort([105, 79, 100, 110])).toEqual([
      79, 100, 105, 110,
    ]);
  });
});


// mergeSort.test.js
describe("mergeSort()", () => {
  describe("Basic cases", () => {
    test("sorts an unsorted array", () => {
      expect(mergeSort([5, 2, 8, 1, 9])).toEqual([1, 2, 5, 8, 9]);
    });

    test("sorts an already sorted array", () => {
      expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test("sorts a reverse sorted array", () => {
      expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });

    test("sorts an array with duplicate numbers", () => {
      expect(mergeSort([4, 2, 4, 1, 2, 3])).toEqual([1, 2, 2, 3, 4, 4]);
    });
  });

  describe("Edge cases", () => {
    test("returns empty array when given empty array", () => {
      expect(mergeSort([])).toEqual([]);
    });

    test("returns single element array unchanged", () => {
      expect(mergeSort([42])).toEqual([42]);
    });

    test("sorts two elements", () => {
      expect(mergeSort([2, 1])).toEqual([1, 2]);
    });

    test("sorts two equal elements", () => {
      expect(mergeSort([7, 7])).toEqual([7, 7]);
    });
  });

  describe("Negative numbers", () => {
    test("sorts negative numbers", () => {
      expect(mergeSort([-5, -1, -10, -3])).toEqual([-10, -5, -3, -1]);
    });

    test("sorts positive and negative numbers", () => {
      expect(mergeSort([-3, 5, 0, -1, 10])).toEqual([-3, -1, 0, 5, 10]);
    });
  });

  describe("Floating point numbers", () => {
    test("sorts decimal numbers", () => {
      expect(mergeSort([3.14, 2.71, 1.41, 1.73])).toEqual([
        1.41,
        1.73,
        2.71,
        3.14,
      ]);
    });

    test("sorts integers and decimals together", () => {
      expect(mergeSort([5, 2.5, 3, 1.2])).toEqual([1.2, 2.5, 3, 5]);
    });
  });

  describe("Large values", () => {
    test("sorts very large numbers", () => {
      expect(
        mergeSort([
          Number.MAX_SAFE_INTEGER,
          0,
          -100,
          Number.MIN_SAFE_INTEGER,
        ])
      ).toEqual([
        Number.MIN_SAFE_INTEGER,
        -100,
        0,
        Number.MAX_SAFE_INTEGER,
      ]);
    });
  });

  describe("Repeated values", () => {
    test("sorts array with many duplicates", () => {
      expect(
        mergeSort([5, 5, 5, 2, 2, 3, 1, 1, 1])
      ).toEqual([1, 1, 1, 2, 2, 3, 5, 5, 5]);
    });

    test("sorts array where every element is identical", () => {
      expect(mergeSort([8, 8, 8, 8, 8])).toEqual([8, 8, 8, 8, 8]);
    });
  });

  describe("Immutability", () => {
    test("does not modify original array", () => {
      const arr = [5, 3, 1, 4];
      const copy = [...arr];

      mergeSort(arr);

      expect(arr).toEqual(copy);
    });

    test("returns a new array", () => {
      const arr = [3, 2, 1];
      const result = mergeSort(arr);

      expect(result).not.toBe(arr);
    });
  });

  describe("Randomized tests", () => {
    test("matches JavaScript's native sort for random arrays", () => {
      for (let i = 0; i < 100; i++) {
        const arr = Array.from(
          { length: Math.floor(Math.random() * 50) },
          () => Math.floor(Math.random() * 200 - 100)
        );

        const expected = [...arr].sort((a, b) => a - b);

        expect(mergeSort(arr)).toEqual(expected);
      }
    });
  });

  describe("Long arrays", () => {
    test("sorts an array of 1000 random numbers", () => {
      const arr = Array.from(
        { length: 1000 },
        () => Math.floor(Math.random() * 10000)
      );

      const expected = [...arr].sort((a, b) => a - b);

      expect(mergeSort(arr)).toEqual(expected);
    });
  });

  describe("Special ordering", () => {
    test("sorts alternating high/low values", () => {
      expect(mergeSort([10, 1, 9, 2, 8, 3, 7, 4])).toEqual([
        1, 2, 3, 4, 7, 8, 9, 10,
      ]);
    });

    test("sorts values with zeros", () => {
      expect(mergeSort([0, -1, 3, 0, 2])).toEqual([
        -1, 0, 0, 2, 3,
      ]);
    });
  });

  describe("Stress tests", () => {
    test("handles a large descending array", () => {
      const arr = Array.from({ length: 5000 }, (_, i) => 5000 - i);

      const expected = [...arr].sort((a, b) => a - b);

      expect(mergeSort(arr)).toEqual(expected);
    });

    test("handles many random arrays", () => {
      for (let i = 0; i < 500; i++) {
        const length = Math.floor(Math.random() * 100);

        const arr = Array.from(
          { length },
          () => Math.floor(Math.random() * 1000 - 500)
        );

        expect(mergeSort(arr)).toEqual(
          [...arr].sort((a, b) => a - b)
        );
      }
    });
  });
});