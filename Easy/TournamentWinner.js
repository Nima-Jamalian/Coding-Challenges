/* Question
Difficulty: Easy
Category: Arrays

Tournament Winner

There's an algorithms tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible. Teams
compete in a round robin, where each team faces off against all other teams. Only two
teams compete against each other at a time, and for each competition, one team is
designated the home team, while the other team is the away team. In each competition
there's always one winner and one loser; there are no ties. A team receives 3 points if it
wins and O points if it loses. The winner of the tournament is the team that receives the
most amount of points.

Given an array of pairs representing the teams that have competed against each other
and an array containing the results of each competition, write a function that returns
the winner of the tournament. The input arrays are named "competitions" and
"results", respectively. The "competitions" array has elements in the form of
[homeTeam, awayTeam] , where each team is a string of at most 30 characters
representing the name of the team. The results array contains information about
the winner of each corresponding competition in the "competitions" array.
Specifically, "results[1]"" denotes the winner of "competitions[i]" where a l in
the "results" array means that the home team in the corresponding competition won
and a 0 means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will
compete against all other teams exactly once. It's also guaranteed that the tournament
will always have at least two teams.

Sample Input
competition = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
]

results = [0, 0, 1]

Sample Output
"Python"
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points 
// C# -  3 points
// Python -  6 points
*/
//-----------------------------------------------------------------------------------------------
//Read this section if you could not solve the problem.
/* Hints + Optimal Space & Time Complexity
Hint 1
Don't overcomplicate this problem. How would you solve it by hand? Consider that approach,
 and try to translate it into code.

Hint 2
Use a hash table to store the total points collected by each team, with the team names as
keys in the hash table. Once you know how many points each team has, how can you determine
which one is the winner?

Hint 3
Loop through all of the competitions, and update the hash table at every iteration. For each competition, 
consider the name of the winning team; if the name already exists in the hash table, update that entry 
by adding 3 points to it. If the team name doesn't exist in the hash table, add a new entry in the hash table 
with the key as the team name and the value as 3 (since the team won its first competition). While looping through 
all of the competitions, keep track of the team with the highest score, and at the end of the algorithm, return the 
team with the highest score.

Optimal Space & Time Complexity
O(n) time | O(k) space - where n is the number of competitions and k is the number of teams
*/
//-----------------------------------------------------------------------------------------------
//You can use these test cases to validate your solution
//Better to check this after you have attempted the challenge and confident in your answer
/* Test cases
Test Case 1
{
  "competitions": [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0, 0, 1]
}
Test Case 2
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0, 1, 1]
}
Test Case 3
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
  ],
  "results": [0, 1, 1, 1, 0, 1]
}
Test Case 4
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ],
  "results": [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
}
Test Case 5
{
  "competitions": [
    ["Bulls", "Eagles"]
  ],
  "results": [1]
}
Test Case 6
{
  "competitions": [
    ["Bulls", "Eagles"],
    ["Bulls", "Bears"],
    ["Bears", "Eagles"]
  ],
  "results": [0, 0, 0]
}
Test Case 7
{
  "competitions": [
    ["Bulls", "Eagles"],
    ["Bulls", "Bears"],
    ["Bulls", "Monkeys"],
    ["Eagles", "Bears"],
    ["Eagles", "Monkeys"],
    ["Bears", "Monkeys"]
  ],
  "results": [1, 1, 1, 1, 1, 1]
}
Test Case 8
{
  "competitions": [
    ["AlgoMasters", "FrontPage Freebirds"],
    ["Runtime Terror", "Static Startup"],
    ["WeC#", "Hypertext Assassins"],
    ["AlgoMasters", "WeC#"],
    ["Static Startup", "Hypertext Assassins"],
    ["Runtime Terror", "FrontPage Freebirds"],
    ["AlgoMasters", "Runtime Terror"],
    ["Hypertext Assassins", "FrontPage Freebirds"],
    ["Static Startup", "WeC#"],
    ["AlgoMasters", "Static Startup"],
    ["FrontPage Freebirds", "WeC#"],
    ["Hypertext Assassins", "Runtime Terror"],
    ["AlgoMasters", "Hypertext Assassins"],
    ["WeC#", "Runtime Terror"],
    ["FrontPage Freebirds", "Static Startup"]
  ],
  "results": [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
}
Test Case 9
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ],
  "results": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
}
Test Case 10
{
  "competitions": [
    ["A", "B"]
  ],
  "results": [0]
}
*/
//-----------------------------------------------------------------------------------------------
//Test Cases Solution, check after completing the challenge 
/*  Test Cases Result
Test Case 1 passed!
Expected Output
Python
Your Code's Output
Python

Input(s)
{
  "competitions": [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0, 0, 1]
}
Test Case 2 passed!
Expected Output
Java
Your Code's Output
Java

Input(s)
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ],
  "results": [0, 1, 1]
}
Test Case 3 passed!
Expected Output
C#
Your Code's Output
C#

Input(s)
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"]
  ],
  "results": [0, 1, 1, 1, 0, 1]
}
Test Case 4 passed!
Expected Output
C#
Your Code's Output
C#

Input(s)
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ],
  "results": [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
}
Test Case 5 passed!
Test Case 6 passed!
Expected Output
Eagles
Your Code's Output
Eagles

Input(s)
{
  "competitions": [
    ["Bulls", "Eagles"],
    ["Bulls", "Bears"],
    ["Bears", "Eagles"]
  ],
  "results": [0, 0, 0]
}
Test Case 7 passed!
Expected Output
Bulls
Your Code's Output
Bulls

Input(s)
{
  "competitions": [
    ["Bulls", "Eagles"],
    ["Bulls", "Bears"],
    ["Bulls", "Monkeys"],
    ["Eagles", "Bears"],
    ["Eagles", "Monkeys"],
    ["Bears", "Monkeys"]
  ],
  "results": [1, 1, 1, 1, 1, 1]
}
Test Case 8 passed!
Expected Output
AlgoMasters
Your Code's Output
AlgoMasters

Input(s)
{
  "competitions": [
    ["AlgoMasters", "FrontPage Freebirds"],
    ["Runtime Terror", "Static Startup"],
    ["WeC#", "Hypertext Assassins"],
    ["AlgoMasters", "WeC#"],
    ["Static Startup", "Hypertext Assassins"],
    ["Runtime Terror", "FrontPage Freebirds"],
    ["AlgoMasters", "Runtime Terror"],
    ["Hypertext Assassins", "FrontPage Freebirds"],
    ["Static Startup", "WeC#"],
    ["AlgoMasters", "Static Startup"],
    ["FrontPage Freebirds", "WeC#"],
    ["Hypertext Assassins", "Runtime Terror"],
    ["AlgoMasters", "Hypertext Assassins"],
    ["WeC#", "Runtime Terror"],
    ["FrontPage Freebirds", "Static Startup"]
  ],
  "results": [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
}
Test Case 9 passed!
Expected Output
SQL
Your Code's Output
SQL

Input(s)
{
  "competitions": [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
    ["C#", "Python"],
    ["Java", "C#"],
    ["C#", "HTML"],
    ["SQL", "C#"],
    ["HTML", "SQL"],
    ["SQL", "Python"],
    ["SQL", "Java"]
  ],
  "results": [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
}
Test Case 10 passed!
Expected Output
B
Your Code's Output
B

Input(s)
{
  "competitions": [
    ["A", "B"]
  ],
  "results": [0]
}
*/
//-----------------------------------------------------------------------------------------------
//Solution
function tournamentWinner(competitions, results) {
  var resultTable = new Map();
  for (let i = 0; i < results.length; i++) {
      if (results[i] == 0) {
          if (resultTable.get(competitions[i][1]) != undefined) {
              resultTable.set(competitions[i][1], (resultTable.get(competitions[i][1])) + 1);
          } else {
              resultTable.set(competitions[i][1], 1);
          }
      } else {
          if (resultTable.get(competitions[i][0]) != undefined) {
              resultTable.set(competitions[i][0], (resultTable.get(competitions[i][0])) + 1);
          } else {
              resultTable.set(competitions[i][0], 1);
          }
      }

  }
  var resultSorted = new Map([...resultTable.entries()].sort((a, b) => b[1] - a[1]));
  const iterator = resultSorted.keys();
  return iterator.next().value;
}

var competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

var results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));