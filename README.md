This project uses Firebase, Firestore and React. I am creating a classic Where's Waldo game.

---

Getting Firebase started is still a major struggle. Something just makes it so hard. I feel like I still have no idea what kind of scripts I need
(and where) etc. But once again I managed to get it up and running.

---

Creating answer box div which opens on a click was simple. I had the right idea how to get the and save the coordinates etc, but struggled a bit because I was trying to use clientX instead of pageX.

Saving coordinates into the Firestore was of course easy, nothing speacial there. Getting them not so complicated either. I just had to find the basic syntax how to use
db, collection and snapshots to get stuff. Using that data to determine if player has found a character was simple, mostly because I built the functions first using
hardcoded arrays. Had to just update Firestore to take place of the array.

Getting serverTimestamp presented some issues, weird enough. After getting it to work I have no idea why it was so hard. It shouldn't be, and isn't.

Had big problems with determing player's score. I opted to do a simple calculation (serverTimestamp from beginning - serverTimestamp from end / 1000) and use that
as a score. It worked except when it didn't. But I figured it out. There was a problem with useEffects etc.

---

For some reason deploying was troublesome (unlike the last Firebase project). This time I had to use the web.app url in the package.json file's homepage section.
Last time I used GitHub repository's address and it worked just fine. Although now whole repository of that project claims it's a 100% HTML when it's not. At least it's not the case with this project's GH repository.

---

Few issues I'd still like to fix (if I have the time):
-High scores show momentarily as a double, unless you refresh.
-When player wins and inputs their name, it would be nice to immediately show hiScores.
-When game is over the front-end timer doesn't stop. (It doesn't affect the points though, they're all server based)
