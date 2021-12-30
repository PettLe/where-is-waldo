This project uses Firebase, Firestore and React. I am creating a classic Where's Waldo game.

---

Getting Firebase started is still a major struggle. Something just makes it so hard. I feel like I still have no idea what kind of scripts I need
(and where) etc. But once again I managed to get it up and running.

---

Creating answer box div which opens on a click was simple. I had the right idea how to get the and save the coordinates etc, but struggled a bit because I was trying to use clientX instead of pageX.

Saving coordinates into the Firestore was of course easy, nothing speacial there. Getting them not so complicated either. I just had to find the basic syntax how to use
db, collection and snapshots to get stuff. Using that data to determine if player has found a character was simple, mostly because I built the functions first using
hardcoded arrays. Had to just update Firestore to take place of the array.
