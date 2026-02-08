# Bit shift examples
# Explanation: Left shift multiplies by powers of 2, right shift divides by powers of 2.
# Binary view for 10:
# 10 (decimal) = 1010 (binary)
# Left shift by 2: 1010 << 2 = 101000 (binary) = 40 (decimal)
# Right shift by 2: 1010 >> 2 = 10 (binary) = 2 (decimal)
a = 10
b = 2
print(a << b)

c = 10
d = 2
print(c >> d)
# Output:
# 40
# 2

# Calculation
# 2^5, 2^4, 2^3, 2^2, 2^1, 2^0
# 1x2^5 + 1x2^4 + 1x2^3 + 0x2^2 + 1x2^1 + 0x2^0
# =
# 32 + 16 + 8 + 0 + 2 + 0 = 58

# Additional bit shift examples
x = 5  # Binary: 101
y = 1
print(x << y)  # Left shift by 1: 1010 (binary) = 10 (decimal)
print(x >> y)  # Right shift by 1: 10 (binary) = 2 (decimal)
# Output:
# 10
# 2

# other integer to binary samples
num = 18

# 18 ÷ 2 = 9 remainder 0
# 9 ÷ 2 = 4 remainder 1
# 4 ÷ 2 = 2 remainder 0
# 2 ÷ 2 = 1 remainder 0
# 1 ÷ 2 = 0 remainder 1
# Read upward: 10010 → bin(18) gives 0b10010.

print(bin(num))  # Output: 0b10010
num2 = 7

print(bin(num2))  # Output: 0b111


