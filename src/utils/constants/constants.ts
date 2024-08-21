export type MapConstants = {
  problems: Problem[];
}

export type Problem = {
  id: number;
  path: string;
  name: string;
  problemSets?: ProblemSet[];
}

export type ProblemSet = {
  id: number;
  name: string;
  rating: string;
  leetcodeUrl: string;
  solutionPath: string;
}

export class Convert {
  public static toMapConstants(json: string): MapConstants {
    return JSON.parse(json) as MapConstants;
  }

  public static mapConstantsToJson(value: MapConstants): string {
    return JSON.stringify(value);
  }
}

export const mapConstants: MapConstants = {
  problems: [
    { id: 0, path: "/arrays-and-hashmaps", name: "Arrays and Hashmaps" },
    { id: 1, path: "/two-pointers", name: "Two Pointers" },
    { id: 2, path: "/stack", name: "Stack" },
    { id: 3, path: "/binary-search", name: "Binary Search" },
    { id: 4, path: "/sliding-window", name: "Sliding Window" },
    { id: 5, path: "/linked-list", name: "Linked List" },
    { id: 6, path: "/trees", name: "Trees" },
    { id: 7, path: "/tries", name: "Tries" },
    { id: 8, path: "/heaps-and-priority-queue", name: "Heaps and Priority Queue" },
    { id: 9, path: "/graphs", name: "Graphs" },
    { id: 10, path: "/dynamic-programming", name: "Dynamic Programming" },
    { id: 11, path: "/backtracking", name: "Backtracking" },
  ],
};
