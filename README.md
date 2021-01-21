HSA Final Project - BACKEND Description

1. users: contains user ID and some basic user information

2. artists: contains artist ID and name (we can add more information after API implementation)

3. songs: contains song ID, title, genre, and artist ID (limitation: currently a song can only have one artist; there is no two-way table)

4. usersongs: contains a user ID and the song ID that the user likes (currently, there are some redundancies due to the random generator)

5. userartists: contains a user ID and the song ID that the user likes (currently, there are some redundancies due to the random generator)

6. usergenres: contains a user ID and a genre the user likes (the genre is just a string)

7. matches: contains user IDs matched to one another (currently, there is only 1 match per user, and most matches are not injective yet)

GraphQL mutations and queries have also been written, with examples in the text file
