#                                 Answer 1 using index

# def reverse(string):
#     string = string[::-1]
#     return string


# b = "oliver"

# print(reverse(b))

#                              Answer 2 using for in loop

# def reverse(s):
#     str=""
#     for i in s:
#         str = i + str
#     return str

# s = "GeeksForGeeks"

# print(reverse(s))

#                               Answer 3 using recursion

# def reverse(s):
#     if len(s)==0:
#         return s
#     else:
#         return s[1:] + s[0]

# s="bird"

# print(reverse(s))

#                               Answer 4 using recursion

# def reverse(string):
#     string = "".join(reversed(string))

#     return string

# water = "blue"

# print(reverse(water))


#                               Answer 5 using recursion


def reverse(string):
    string = list(string)
    string.reverse()
    return "".join(string)


b = "wako"

print(reverse(b))
