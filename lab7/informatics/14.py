a = int(input())
b = int(input())

cnt = 0;
while a>0:
    if(a%10==b):cnt+=1
    a=a/10
print(cnt)


