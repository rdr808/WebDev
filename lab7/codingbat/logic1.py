def cigar_party(cigars, is_weekend):
  return (is_weekend and cigars >= 40) or (not is_weekend and 40 <= cigars <= 60)

def date_fashion(you, date):
  if you <= 2 or date <= 2:
    return 0
  elif you >= 8 or date >= 8:
    return 2
  else:
    return 1

def squirrel_play(temp, is_summer):
  return (is_summer and 60 <= temp <= 100) or (not is_summer and 60 <= temp <= 90)

def caught_speeding(speed, is_birthday):
  if (is_birthday and speed <=65) or (not is_birthday and speed <=60):
    return 0
  if (is_birthday and 65 < speed <=85) or (not is_birthday and 60 < speed <=80):
    return 1
  return 2

def sorta_sum(a, b):
  if a + b in range(10, 20):
    return 20
  return a + b

def alarm_clock(day, vacation):
  if vacation:
    if 1 <= day <= 5:
      return '10:00'
    if day == 0 or 6:
      return 'off'
  if not vacation:
    if 1 <= day <= 5:
      return '7:00'
    if day == 0 or 6:
      return '10:00'

def love6(a, b):
  return (a == 6 or b == 6) or (a + b == 6) or (abs(a - b)== 6)

def near_ten(num):
  if num % 10 <= 2 or num % 10 >= 8:
    return True
  return False