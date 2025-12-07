// ENUM
// Enums allows you set of  named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

enum Direction  {
    Up = 1, 
    Down, 
    Right,
    Left
}

// Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

enum E {
    A = "A",
    B // must the assign the value here
}