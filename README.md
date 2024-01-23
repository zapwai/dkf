# dkf
Donkey Kong Forum High Score Scraper

Has this ever happened to you?
You're playing Donkey Kong on Twitch, when some user whose name you forget says hello in chat.
Sure, you could i) go to donkey kong forum, ii) pull up the high score list, iii) look at the source, iv) search for that user, and v) figure out their real name to say "Hello <name>"
There HAS to BE a BETTER WAY!

Introducing dkf: Just type './dkf user' to pull user's record from the Donkey Kong forum.

Let's see some examples!
Convert a twitch username (or a list of them) to a real name, or pull up scores from the donkey kong forum.

./dkf ser
1 1,272,700 Y John McCurdy 2021-01-11 serphintizer

./dkf ser ray wes
1 1,272,700 Y John McCurdy 2021-01-11 serphintizer
3 1,235,500 Y Justin Elliott 2021-12-14 rayfinkel
4 1,218,000 Y Wes Copeland 2016-05-05 wescopeland

Use the -n flag to view any records associated with a given first or last name:
./dkf -n tom
126 827,800 Y Carsten Tommy Lauridsen 2019-02-24 
255 296,900  Tom Lindberg 2003-04-05 
350 172,500  Tom Kane 2012-05-10 
393 130,400  Tom Collier 2008-02-27 
608 1,700  Tom Nobel 2017-11-11
