def check_row_X(boardx):
    for i in board:
        if i.count("X") == 3:
            return(f"Winner is X: {i}")


def check_row_O(board):
    for i in board:
        if i.count("O") == 3:
            return(f"Winner is O: {i}")

def check_column_X(board):

    for i in range(3):  
        column = [board[row][i] for row in range(3)]  
        if column.count("X") == 3:
            return(f"winner is X : {column}")

def check_column_O(board):
    for col in range(3): 
        column = [board[row][col] for row in range(3)]  
        if column.count("O") == 3:
            return(f"Winnwe is O: {column}")



board = [
    ["X", "X", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
]

print(check_row_X(board))
print(check_row_O(board))
print(check_column_X(board))
print(check_column_O(board))

# check_row_O(board)

# check_column_X(board)
# check_column_O(board)


