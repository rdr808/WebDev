import math
a = int(input())
b = int(input())

for i in range(a, b+1):
    if math.trunc(math.sqrt(i))*math.trunc(math.sqrt(i)) == i : print(i, end=' ')