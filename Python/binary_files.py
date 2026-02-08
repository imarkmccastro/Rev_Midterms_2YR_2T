# Binary files with bytearray
# Explanation: bytearray turns numbers 0-255 into bytes; read() returns bytes.
nums = [1, 2, 3, 4, 5]
print_bytes = bytearray(nums)

with open("nums.bin", "wb") as f:
    f.write(print_bytes)

with open("nums.bin", "rb") as f:
    print_bytes = f.read()

nums = list(print_bytes)
print(nums)
# Output:
# [1, 2, 3, 4, 5]
