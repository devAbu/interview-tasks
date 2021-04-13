# NUMBER FROM 1 TO 100
# CALCULATE FIZZ, BUZZ, FIZZBUZZ AMOUNT and TOTAL

fizz = 0
buzz = 0
fizzbuzz = 0

for i in range(1, 100):
    if i % 3 == 0 and i % 5 == 0:
        print("FIZZBUZZ")
        fizzbuzz += 1
    elif i % 3 == 0:
        print("FIZZ")
        fizz += 1
    elif i % 5 == 0:
        print("BUZZ")
        buzz += 1
    else:
        print(i)

print("FIZZ: ", fizz, " BUZZ: ", buzz, " FIZZBUZZ", fizzbuzz)
print("TOTAL: ", fizz + buzz + fizzbuzz)
