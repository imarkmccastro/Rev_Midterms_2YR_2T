# for range examples (horizontal)
# Explanation: range generates numbers; * prints them on one line.
print(*range(5))
print(*range(2, 4))
print(*range(1, 10, 2))
# Output:
# 0 1 2 3 4
# 2 3
# 1 3 5 7 9

# for-in with range
# Explanation: range(1, 5) gives 1 to 4.
print(*range(1, 5))
# Output:
# 1 2 3 4

# while loops
# Explanation: while repeats while the condition is True.
i = 1
while i < 5:
    print(i)
    i += 1

i = 1
while i <= 5:
    print(i)
    i += 2
# Output:
# 1
# 2
# 3
# 4
# 1
# 3
# 5

# continue example
# Explanation: continue skips the current loop iteration.
cody = list(range(1, 11))
for x in cody:
    if x == 7:
        continue
    print(x)
# Output:
# 1
# 2
# 3
# 4
# 5
# 6
# 8
# 9
# 10

# break example
# Explanation: break stops the loop completely.
condeng = list(range(1, 11))
for x in condeng:
    if x == 7:
        break
    print(x)
# Output:
# 1
# 2
# 3
# 4
# 5
# 6
