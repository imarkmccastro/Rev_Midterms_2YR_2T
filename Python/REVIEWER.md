# Python Reviewer

Short, readable notes with code, output, and a quick explanation.

## Quick Links
- [Dictionaries](#dictionaries)
- [Data Types](#data-types)
- [Comparisons](#comparisons)
- [Membership](#membership)
- [Bit Shifts](#bit-shifts)
- [Loops](#loops)
- [Strings](#strings)
- [File I/O](#file-io)
- [Old-Style Formatting](#old-style-formatting)
- [Table Formatting](#table-formatting)
- [Binary Files](#binary-files)
- [Sets](#sets)

## Topic Files
- [topics/dictionaries.py](topics/dictionaries.py)
- [topics/data_types.py](topics/data_types.py)
- [topics/comparisons.py](topics/comparisons.py)
- [topics/membership.py](topics/membership.py)
- [topics/bit_shifts.py](topics/bit_shifts.py)
- [topics/loops.py](topics/loops.py)
- [topics/strings.py](topics/strings.py)
- [topics/file_io.py](topics/file_io.py)
- [topics/formatting_percent.py](topics/formatting_percent.py)
- [topics/formatting_table.py](topics/formatting_table.py)
- [topics/binary_files.py](topics/binary_files.py)
- [topics/sets.py](topics/sets.py)

---

## Dictionaries
**Idea:** Use `{key: value}` pairs and access by key.

**Code:**
```python
b = {1: "one", 2: "two"}
print(b[1])
```

**Output:**
```
one
```

**Why:** Key `1` maps to the value `"one"`.

---

## Data Types
**Idea:** `type()` shows the data type of a value.

**Code:**
```python
a = 1 + 2j
print(type(a))
```

**Output:**
```
<class 'complex'>
```

**Why:** Numbers with `j` are complex numbers in Python.

---

## Comparisons
**Idea:** `==` checks value equality.

**Code:**
```python
a1 = 1
a2 = 2
print(a1 == a2)
```

**Output:**
```
False
```

**Why:** `1` is not equal to `2`.

---

## Membership
**Idea:** `in` and `not in` test membership in a collection.

**Code:**
```python
items = ["a", "b"]
print("a" in items)
print("z" not in items)
```

**Output:**
```
True
True
```

**Why:** `"a"` is in the list, and `"z"` is not in the list.

---

## Bit Shifts
**Idea:** `<<` shifts left (multiply), `>>` shifts right (divide).

**Code:**
```python
print(10 << 2)  # 40
print(10 >> 2)  # 2
```

**Output:**
```
40
2
```

**Why:** Left shift by 2 multiplies by $2^2$, right shift by 2 divides by $2^2$.

---

## Loops
**Idea:** Use `range()` for counting.

**Code:**
```python
print(*range(1, 5))
```

**Output:**
```
1 2 3 4
```

**Why:** `range(1, 5)` generates 1 through 4; `print(*)` prints them on one line.

---

## Strings
**Idea:** Use slicing to get part of a string.

**Code:**
```python
text = "condeng"
print(text[:5])
```

**Output:**
```
conde
```

**Why:** `text[:5]` slices from the start up to index 5 (not included).

---

## File I/O
**Idea:** Use `open()` with a mode and close it (or use `with`).

**Code:**
```python
with open("example.txt", "w", encoding="utf-8") as f:
    f.write("sample text")
```

**Output:**
```
(creates or overwrites example.txt with "sample text")
```

**Why:** `"w"` writes text to a file, creating it if it does not exist.

---

## Old-Style Formatting
**Idea:** `%s`, `%d`, `%.4f` work with the `%` operator.

**Code:**
```python
name = "Cody"
age = 7
gpa = 90.7

s2 = "Your name is %s age is %d and gpa is %.4f" % (name, age, gpa)
print(s2)
```

**Output:**
```
Your name is Cody age is 7 and gpa is 90.7000
```

**Why:** `%s` formats a string, `%d` an integer, and `%.4f` a float with 4 digits.

---

## Table Formatting
**Idea:** Use width and alignment with f-strings.

**Code:**
```python
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
```

**Output:**
```
---------------------------------------------
ID     NAME                     PRICE
---------------------------------------------
123    Apple                      35.75
128    Orange                     38.50
132    Mango                      50.25
145    Banana                      9.75
151    Strawberry                100.00
```

**Why:** `<` left-aligns, `>` right-aligns, and `.2f` sets 2 decimal places.

---

## Binary Files
**Idea:** Write bytes and read them back with `rb` and `wb` modes.

**Code:**
```python
nums = [1, 2, 3, 4, 5]
print_bytes = bytearray(nums)

with open("nums.bin", "wb") as f:
    f.write(print_bytes)

with open("nums.bin", "rb") as f:
    print_bytes = f.read()

nums = list(print_bytes)
print(nums)
```

**Output:**
```
[1, 2, 3, 4, 5]
```

**Why:** `bytearray` converts numbers 0-255 to bytes; `read()` returns bytes.

---

## Sets
**Idea:** `difference`, `intersection`, `issubset`, `issuperset`.

**Code:**
```python
setA = set("abcdeg")
setB = set("bdfghi")

print(setB.difference(setA))
print(setA.difference(setB))

setA = set("abcdeg")
setB = set("bdfghi")

print(setA.intersection(setB))

setA = set("abcd")
setB = set("abc")

print(setA.issubset(setB))
print(setA.issuperset(setB))
```

**Output:**
```
{'f', 'd', 'h', 'i'}
{'a', 'c', 'e', 'g'}
{'b', 'd', 'g'}
False
True
```

**Why:** `difference` shows items only in the first set, `intersection` shows common items.
