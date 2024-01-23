# dkf
Donkey Kong Forum High Score Scraper

Has this ever happened to you?
You're playing Donkey Kong on Twitch, when some user whose name you forget says hello in chat.
Sure, you could i) go to the Donkey Kong forum, ii) pull up the high score list, iii) look at the source, iv) search for that user, and v) figure out their real name to say "Hello $name"

There HAS to BE a BETTER WAY!

Introducing dkf: Just type './dkf user' to pull user's record from the Donkey Kong forum.

Let's see some examples!
dkf will convert a twitch username (or a list of them) to a real name, and pull up their high scores from the Donkey Kong forum.

```
$ ./dkf ser

1 1,272,700 Y John McCurdy 2021-01-11 serphintizer
```

```
$ ./dkf ser lake ray wes

1 1,272,700 Y John McCurdy 2021-01-11 serphintizer
2 1,271,100 Y Robbie Lakeman 2020-09-22 lakeman421
3 1,235,500 Y Justin Elliott 2021-12-14 rayfinkel
4 1,218,000 Y Wes Copeland 2016-05-05 wescopeland
```
Use the -n flag to view records associated with a given first or last name:
```
$ ./dkf -n tom

126 827,800 Y Carsten Tommy Lauridsen 2019-02-24 
255 296,900  Tom Lindberg 2003-04-05 
350 172,500  Tom Kane 2012-05-10 
393 130,400  Tom Collier 2008-02-27 
608 1,700  Tom Nobel 2017-11-11
```
Use the -ns flag for a case-sensitive name search.
```
./dkf -ns icha

65 962,500 Y Michael Massaro 2021-08-26 dkmikey77
88 892,900 Y Michael Kibbey 2022-08-05 kibbey
98 877,300 Y Michael Edwards 2021-11-21 bonerforce75
217 369,800  Michael Dietrich 2016-07-03 
261 285,900  Michael Thelen 2008-05-16 
367 158,100  Michael Williams 2008-10-08 
414 116,300  Dwayne Richard 2005-10-30 
527 45,400  Michael Collins 2010-01-01 
538 40,900  Michael Bruhn 2011-11-26 
553 29,800  Richard Ord 2008-05-09
```
Use the -r flag with a list or range to display ranks.
```
./dkf -r 6 8 10
6 1,210,800 Y J.P. Buergers 2023-05-29 wflimusic
8 1,206,800 Y Dean Saglio 2013-10-04 up2ng
10 1,171,900 Y Phil Tudose 2021-06-03 tudose
```
```
./dkf -r 1-5
1 1,272,700 Y John McCurdy 2021-01-11 serphintizer
2 1,271,100 Y Robbie Lakeman 2020-09-22 lakeman421
3 1,235,500 Y Justin Elliott 2021-12-14 rayfinkel
4 1,218,000 Y Wes Copeland 2016-05-05 wescopeland
5 1,214,300 Y Matt Tecchio 2023-07-31 lyriell
```