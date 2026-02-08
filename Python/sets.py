# Set operations
# Explanation: difference, intersection, subset, and superset.
setA = set("abcdeg")
setB = set("bdfghi")

print(setB.difference(setA))
print(setA.difference(setB))
# Output:
# {'f', 'd', 'h', 'i'}
# {'a', 'c', 'e', 'g'}

setA = set("abcdeg")
setB = set("bdfghi")

print(setA.intersection(setB))
# Output:
# {'b', 'd', 'g'}

setA = set("abcd")
setB = set("abc")

print(setA.issubset(setB))
print(setA.issuperset(setB))
# Output:
# False
# True
