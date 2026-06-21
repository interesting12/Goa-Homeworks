def check_row(boardx):
    for i in board:
        if i.count("X") == 3:
            print(f"winner is X: {i}")
    for i in board:
        if i.count("O") == 3:
            print(f"winner is X: {i}")



board = [
    ["X", "X", "X"],
    ["O", "X", "O"],
    ["X", "X", "O"]
]
board1 = [
    ["X", "O", "X"],
    ["O", "O", "O"],
    ["X", "X", "O"]
]
board2 = [
    ["X", "O", "X"],
    ["X", "X", "O"],
    ["X", "X", "O"]
]
board3 = [
    ["X", "O", "O"],
    ["O", "O", "O"],
    ["X", "X", "O"]
]

      

print(check_row(board))
print(check_row(board1))
print(check_row(board2))
print(check_row(board3))


