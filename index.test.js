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