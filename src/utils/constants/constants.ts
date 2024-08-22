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
  solutionPath: string;
  leetcodeUrl: string;
  tags: string[];
  status: string;
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
    {
      id: 0, path: "/arrays-and-hashmaps", name: "Arrays and Hashmaps",
      problemSets: [
        {
          id: 1, name: "Two Sum", rating: "Easy", solutionPath: "/two-sum", leetcodeUrl: "https://leetcode.com/problems/two-sum/", tags: ["arrays", "hashmap"], status: "Completed"
        },
        {
          id: 2, name: "3Sum", rating: "Medium", solutionPath: "/3sum", leetcodeUrl: "https://leetcode.com/problems/3sum/", tags: ["arrays", "hashmap"], status: "Incomplete"
        },
        {
          id: 3, name: "Group Anagrams", rating: "Medium", solutionPath: "/group-anagrams", leetcodeUrl: "https://leetcode.com/problems/group-anagrams/", tags: ["arrays", "hashmap"], status: "Incomplete"
        },
        {
          id: 4, name: "Longest Consecutive Sequence", rating: "Medium", solutionPath: "/longest-consecutive-sequence", leetcodeUrl: "https://leetcode.com/problems/longest-consecutive-sequence/", tags: ["arrays", "hashmap"], status: "Incomplete"
        }
      ],
    },
    {
      id: 1, path: "/two-pointers", name: "Two Pointers",
      problemSets: [
        {
          id: 5, name: "Container With Most Water", rating: "Medium", solutionPath: "/container-with-most-water", leetcodeUrl: "https://leetcode.com/problems/container-with-most-water/", tags: ["two-pointers"], status: "Incomplete"
        },
        {
          id: 6, name: "Trapping Rain Water", rating: "Hard", solutionPath: "/trapping-rain-water", leetcodeUrl: "https://leetcode.com/problems/trapping-rain-water/", tags: ["two-pointers"], status: "Incomplete"
        },
        {
          id: 7, name: "Valid Palindrome", rating: "Easy", solutionPath: "/valid-palindrome", leetcodeUrl: "https://leetcode.com/problems/valid-palindrome/", tags: ["two-pointers"], status: "Completed"
        }
      ],
    },
    {
      id: 2, path: "/stack", name: "Stack",
      problemSets: [
        {
          id: 8, name: "Valid Parentheses", rating: "Easy", solutionPath: "/valid-parentheses", leetcodeUrl: "https://leetcode.com/problems/valid-parentheses/", tags: ["stack"], status: "Completed"
        },
        {
          id: 9, name: "Min Stack", rating: "Medium", solutionPath: "/min-stack", leetcodeUrl: "https://leetcode.com/problems/min-stack/", tags: ["stack"], status: "Incomplete"
        },
        {
          id: 10, name: "Daily Temperatures", rating: "Medium", solutionPath: "/daily-temperatures", leetcodeUrl: "https://leetcode.com/problems/daily-temperatures/", tags: ["stack"], status: "Incomplete"
        }
      ],
    },
    {
      id: 3, path: "/binary-search", name: "Binary Search",
      problemSets: [
        {
          id: 11, name: "Binary Search", rating: "Easy", solutionPath: "/binary-search", leetcodeUrl: "https://leetcode.com/problems/binary-search/", tags: ["binary-search"], status: "Completed"
        },
        {
          id: 12, name: "Find Minimum in Rotated Sorted Array", rating: "Medium", solutionPath: "/find-minimum-in-rotated-sorted-array", leetcodeUrl: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", tags: ["binary-search"], status: "Incomplete"
        },
        {
          id: 13, name: "Search in Rotated Sorted Array", rating: "Medium", solutionPath: "/search-in-rotated-sorted-array", leetcodeUrl: "https://leetcode.com/problems/search-in-rotated-sorted-array/", tags: ["binary-search"], status: "Incomplete"
        }
      ],
    },
    {
      id: 4, path: "/sliding-window", name: "Sliding Window",
      problemSets: [
        {
          id: 14, name: "Minimum Window Substring", rating: "Hard", solutionPath: "/minimum-window-substring", leetcodeUrl: "https://leetcode.com/problems/minimum-window-substring/", tags: ["sliding-window"], status: "Incomplete"
        },
        {
          id: 15, name: "Sliding Window Maximum", rating: "Hard", solutionPath: "/sliding-window-maximum", leetcodeUrl: "https://leetcode.com/problems/sliding-window-maximum/", tags: ["sliding-window"], status: "Incomplete"
        },
        {
          id: 16, name: "Longest Substring Without Repeating Characters", rating: "Medium", solutionPath: "/longest-substring-without-repeating-characters", leetcodeUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", tags: ["sliding-window"], status: "Incomplete"
        }
      ],
    },
    { id: 5, path: "/linked-list", name: "Linked List" },
    { id: 6, path: "/trees", name: "Trees" },
    { id: 7, path: "/tries", name: "Tries" },
    { id: 8, path: "/heaps-and-priority-queue", name: "Heaps and Priority Queue" },
    { id: 9, path: "/graphs", name: "Graphs" },
    { id: 10, path: "/dynamic-programming", name: "Dynamic Programming" },
    { id: 11, path: "/backtracking", name: "Backtracking" },
  ],
};
