# String indexing and slicing
# Explanation: Use indexes and slices to get parts of a string.
cody = "condeng"
print(cody[0])
print(cody[1])
print(cody[:5])
print(cody[2:5])
print(cody[-6:-4])
# Output:
# c
# o
# conde
# nde
# nd

# Length of string
# Explanation: len() returns the number of characters.
cody = "condeng"
print(len(cody))
# Output:
# 7

# Strip
# Explanation: strip() removes leading and trailing whitespace.
cody = "   condeng   "
print(cody)
print(cody.strip())
# Output:
#    condeng   
# condeng

# Split
# Explanation: split() breaks a string into a list by whitespace.
cody = "condeng pangit"
print(cody.split())
# Output:
# ['condeng', 'pangit']

# Replace
# Explanation: replace() substitutes matching text.
cody = "condeng pangit"
print(cody.replace("pangit", "ganda"))
# Output:
# condeng ganda

# Concatenation
# Explanation: + joins strings; add a space if needed.
a = "condeng"
b = "pangit"
print(a + b)
print(a + " " + b)
# Output:
# condengpangit
# condeng pangit

# Format
# Explanation: format() fills placeholders in a string.
name = "condeng"
preposition = "is"
adjective = "pangit"
print("{} {} {}".format(name, preposition, adjective))
print("{0} {1} {2}".format(name, preposition, adjective))
print("{name} {preposition} {adjective}".format(name=name, preposition=preposition, adjective=adjective))
# Output:
# condeng is pangit
# condeng is pangit
# condeng is pangit

# Escape quotes
# Explanation: Use backslash to include quotes inside a string.
cody = "Cody said you are \"baho\""
print(cody)
# Output:
# Cody said you are "baho"
