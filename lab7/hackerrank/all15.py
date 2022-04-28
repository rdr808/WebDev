print("Hello, World!")



import math
import os
import random
import re
import sys



a = int(input())

if a%2!=0:
    print("Weird")
elif a>=2 and a<=5:
    print("Not Weird")
elif a>=6 and a<=20:
    print("Weird")
elif a>=20:
    print("Not Weird")


a = int(input())
b = int(input())
print(a+b)
print(a-b)
print(a*b)


from __future__ import division

if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a//b)
    print(a/b)


a = int(input())

for i in range(a):
    print(i*i)


def is_leap(year):
    leap = False
    
    if (year % 4 == 0) and (year % 100 != 0) or (year % 400 == 0):
        leap = True
    
    return leap



from __future__ import print_function

if __name__ == '__main__':
    n = int(input())
    for i in range(1,n+1):
        print(i, end="")


def swap_case(s):
    out = ''
    for char in s:
        if(char.isupper()==True):
            out += (char.lower())
        elif(char.islower()==True):
            out += (char.upper())
        else:
            out += char
    return out

if __name__ == '__main__':
    s = input()
    result = swap_case(s)
    print (result)


def print_full_name(first, last):
    a = "Hello "+first+" "+last+"! You just delved into python."
    print (a)

if __name__ == '__main__':
    first_name = input()
    last_name = input()
    print_full_name(first_name, last_name)









