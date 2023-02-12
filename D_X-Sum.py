
def upLeft(row,col):
    summ=0
    while row>=0 and col>=0:
        summ+=grid[row][col]
        row-=1
        col-=1
    return summ
def upRight(row,col):
    summ=0
    while row>=0 and col<columns:
        summ+=grid[row][col]
        row-=1
        col+=1
    return summ
def downLeft(row,col):
    summ=0
    while row<rows and col>=0:
        summ+=grid[row][col]
        row+=1
        col-=1
    return summ
def downRight(row,col):
    summ=0
    while row<rows and col<columns:
        summ+=grid[row][col]
        row+=1
        col+=1
    return summ
t=int(input())
for _ in range(t):
    rows,columns=list(map(int,input().split()))
    grid=[]
    for _ in range(rows):
        grid.append(list(map(int,input().split())))
    maxSum=0
    for row in range(rows):
        for col in range(columns):
            curSum=upLeft(row,col)+downLeft(row,col)+upRight(row,col)+downRight(row,col)-3*(grid[row][col])
            maxSum=max(maxSum,curSum)
    print(maxSum)

