# ytmixer

This is a little app I made for myself to help with a couple annoyances I have with YouTube Music.

* Shuffle uses an alorithm that only YouTube knows and tends to play the same songs over and over
* Playlist doesn't completely load, and instead you have to scroll down to trigger next set of tracks
* No ability to sort playlists

This app helps with those issues.



## Installation

You can try running this at https://ytmixer.netlify.app or install locally.

Clone the repository:

```
git clone git@github.com:theyak/ytmixer.git
```

Install dependencies:

```
npm install
```

Build the application:

```
npm run dev
```

Visit https://localhost:5137

## Running

### Logging In

Google makes this very annoying and you will have to be familiar with your browser's
developer tools to get everything working. One would think you could just log in with
your Google account and do everything from there. But, due to application usage limits
that Google imposes, this doens't work, as just creating a couple playlists will exhaust
Google's allowed resource limit. So, we have to kind of do a work around.

The following steps are for Google Chrome. Similar steps should likely work in
other browsers.

Please note that we don't store any authentication information. Your login credentials
are stored in your browser's localStorage. However, if you use the application on
Netlify (https://ytmixer.netlify.app), those credentials are sent to the backend to
make requests to YouTube. I doubt Netlify is paying any attention to this traffic,
but if you have concerns, you should run this from your local machine instead of on Netlify.

1. Open https://localhost:5137 (or https://ytmixer.netlify.app).
2. Open a new tab and open developer tools for the new tab.
3. Click the Network tab.
4. Filter to only display Fetch/XHR.
5. Open https://music.youtube.com.
6. If you are not logged in, login with a Google account.
    * If you are a new YouTube Music user or don't have any playlists, make some playlists.
7. Click on any shown playlist.
8. In dev tools, click on a request that starts with `browse`.
9. Click `Headers`.
10. Scroll down to the `Request Headers` section.
11. Copy the value of the cookie.
12. Scroll down a bit more and make note of the `x-goog-authuser` value.
13. In the tab with the ytmixer app, paste the cookie into the login form.
14. Enter the value of the `x-goog-authuser`.
15. Click `Login`.

If all the above was done correctly, you should now see your playlists.

### Usage

1. Click a playlist - a list of tracks in the playlist should appear.
2. Click the headers of the table to sort tracks.
3. Click `Shuffle` to make a random shuffling of the tracks.
4. Click `Save` to save the newly ordered tracks to a new playlist.
