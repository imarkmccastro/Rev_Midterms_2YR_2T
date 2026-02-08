# File open modes
# Explanation: Mode strings control how a file is opened.
OPEN_MODES = {
    "r": "read only",
    "r+": "read and write",
    "rb": "read only in binary mode",
    "rb+": "read and write in binary mode",
    "w": "write only (creates or truncates)",
    "w+": "write and read",
    "wb": "write only in binary mode",
    "wb+": "write and read in binary mode",
    "a": "append only",
    "a+": "append and reading",
    "ab": "append only in binary mode",
    "ab+": "append and reading in binary mode",
}

for mode, meaning in OPEN_MODES.items():
    print(mode + ": " + meaning)
# Output:
# r: read only
# r+: read and write
# rb: read only in binary mode
# rb+: read and write in binary mode
# w: write only (creates or truncates)
# w+: write and read
# wb: write only in binary mode
# wb+: write and read in binary mode
# a: append only
# a+: append and reading
# ab: append only in binary mode
# ab+: append and reading

# Example write and read
# Explanation: with auto-closes the file after the block.
# file_path = "example.txt"
# with open(file_path, "w", encoding="utf-8") as f:
#     f.write("sample text")
#
# with open(file_path, "r", encoding="utf-8") as f:
#     print(f.read())
# Output:
# sample text
