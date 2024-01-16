def string_to_hex(string):
    hex_string = ""
    for char in string:
        hex_string += hex(ord(char))[2:] + " "
    return hex_string.upper()
strr = input("Enter string: ")
print("\nYou Entered:\n" + strr)
hex_string = string_to_hex(strr)
print("\nAscii(hex) value:\n" + hex_string)