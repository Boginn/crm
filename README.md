# loke-crm
(c) Finnbogi Jökull Pétursson, 2021.

<i>When this project is deployed on Netlify the v-tabs tags in the app-bar do not render properly.</i>

<p>There's quite a bit of repeating code that I would have liked to extract and refactor better. To do that I think it would be best to start over with all of that in mind.</p>

<p>I played around with the API for a bit but having already finished the project I didn't want to rewrite it to use the API since I'm happy with how it works as is. I wrote examples that get injected, once (...well almost), into the state store when the app gets created.</p>

<p>Users have three bools: active, admin and delegate. Admins have access to the roster page where they can set permissions and add/remove users. They can also edit or delete anything that allows for it. Users with 'delegate' set as true can assign tasks to any other user.</p>

# username: 'fannar', password: 'ntv' is an active user with delegation privilige.

# username: 'ibbi', password: 'asd' is an active administrator with delegation privilige.