def robotWalk(X):
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # N, E, S, W
    x, y = 0, 0
    direction_idx = 0
    path = [(0, 0)]

    for steps in X:
        dx, dy = directions[direction_idx]
        for _ in range(steps):
            x, y = x + dx, y + dy
            if (x, y) in set(path):
                return [x - dx, y - dy], path[:-1]  # Return the position before revisit and the path
            path.append((x, y))
        direction_idx = (direction_idx + 1) % 4

    return [x, y], path

# Example usage
examples = [
    [1, 2, 4],
    [1, 2, 4, 1, 5],
]

for X in examples:
    result = robotWalk(X)
    print(f"Input: X = {X}")
    print(f"Output: {result}\n")

def print_path(path):
    min_x = min(x for x, _ in path)
    max_x = max(x for x, _ in path)
    min_y = min(y for _, y in path)
    max_y = max(y for _, y in path)

    grid = [[" " for _ in range(max_x - min_x + 1)] for _ in range(max_y - min_y + 1)]

    for i, (x, y) in enumerate(path):
        grid[y - min_y][x - min_x] = str(i)

    for row in reversed(grid):
        print(' '.join(row))

def run_example(X):
    print(f"\nInput: X = {X}")
    result = robotWalk(X)
    print(f"Result: {result}")
    print(f"Type of result: {type(result)}")

    if isinstance(result, tuple) and len(result) == 2:
        final_position, path = result
        print(f"Final position: {final_position}")
        print(f"Path: {path}")
        print(f"Type of path: {type(path)}")
        if isinstance(path, (list, tuple)):
            print("Path:")
            print_path(path)
        else:
            print("Error: Path is not a list or tuple")
    else:
        print("Error: Unexpected result format from robotWalk")

def main():
    print("Robot Walker Demonstration")
    print("==========================")

    # Predefined examples
    examples = [
        [1, 2, 4],
        [1, 2, 4, 1, 5],
        [2, 3, 2, 1, 1, 2],
    ]

    # Run predefined examples
    for i, example in enumerate(examples, 1):
        print(f"\nExample {i}:")
        run_example(example)

    # Allow user to input custom instructions
    while True:
        user_input = input("\nEnter custom instructions (comma-separated integers) or 'q' to quit: ")
        if user_input.lower() == 'q':
            break
        try:
            custom_X = [int(x.strip()) for x in user_input.split(',')]
            run_example(custom_X)
        except ValueError:
            print("Invalid input. Please enter comma-separated integers.")

    print("\nThank you for using Robot Walker!")

if __name__ == "__main__":
    main()
