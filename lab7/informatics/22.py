import math

n = int(input())
ans = 0

if (n == 0 or n == 1):
    print('undefined')
    exit()

for i in range(2, n):
    if (n % i == 0):
        ans += 1

if (ans == 0): print('prime')
else: print('non-prime')