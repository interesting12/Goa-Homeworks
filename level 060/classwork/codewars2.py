def number(lines):
    counter = 0
    result  = []
    for line in lines:
        counter += 1
        result.append(f"{counter}: {line}")
    return result