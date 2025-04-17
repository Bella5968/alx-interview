def pascal_triangle(n):
    """Generates Pascal's triangle up to n rows."""
    if n <= 0:
        return []
    
    triangle = []
    for i in range(n):
        if i == 0:
            row = [1]
        else:
            prev_row = triangle[i - 1]
            row = [1]
            for j in range(len(prev_row) - 1):
                row.append(prev_row[j] + prev_row[j + 1])
            row.append(1)
        triangle.append(row)
    
    return triangle
