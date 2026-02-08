# Table formatting with format() and f-strings
# Explanation: :<5 left-aligns width 5, :>10.2f right-aligns float width 10 with 2 decimals.
items = [
    (123, "Apple", 35.75),
    (128, "Orange", 38.5),
    (132, "Mango", 50.25),
    (145, "Banana", 9.75),
    (151, "Strawberry", 100.00),
]

print("-" * 45)
print(f"{'ID':<7}{'NAME':<25}{'PRICE':>10}")
print("-" * 45)

for item in items:
    print(f"{item[0]:<7}{item[1]:<25}{item[2]:>10.2f}")

# Output:
# ---------------------------------------------
# ID     NAME                     PRICE
# ---------------------------------------------
# 123    Apple                      35.75
# 128    Orange                     38.50
# 132    Mango                      50.25
# 145    Banana                      9.75
# 151    Strawberry                100.00
