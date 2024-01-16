# fetch song link with title 
song = input("Enter song name: ")
url = "https://song.panditsiddharth.repl.co/song?song=" + song

import requests as r
print(r.get(url).text)

# @Python_Codes_Pro