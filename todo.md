To Do...

[x]Create DB


[x]Set up a queries from `database.sql`

### Home Component:

[x] TODO: When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
[x] TODO: Have a way to get to the Add Movie Page
[x]Setup Dispatch from MovieItem
[x]Setup fetchAMovie saga
[x]Setup fetchAMovie function
[x]Add DetailReducer
[X]Add CombineReducer for movieDetail

[]### Details Page Component:
[x] Add MovieDetail component

[x]This should show all details **including ALL genres** for the selected movie. You will need to store this data in redux!
- TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page

### Add Movie Page

This should show:

[x] an input field (for the movie title)
[x] an input field (for the movie poster image URL))
[x]- a textarea (for the movie description)
[x] a dropdown (for the genres)

The Add Movie page should have the buttons:
[x]`Cancel` button, which should bring the user to the Home/List Page
[x]`Save` button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)
