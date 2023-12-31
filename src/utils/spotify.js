import SpotifyWebApi from 'spotify-web-api-node';

// Create the api object with the credentials
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});


async function getSpotifySongLink(songName, artistName) {

  const data = await spotifyApi.clientCredentialsGrant();
  // const artistName = '3df3XLKuqTQ6iOSmi0K3Wp';
  const rawSongName = songName.replace(/\s*\([^)]*\)$/, '');
  const search = rawSongName + " " + artistName;

  // spotifyApi.setAccessToken(data.body['access_token']);
  // const searchResult = await spotifyApi.searchTracks(`track:${songName}}`);

  const token = data.body['access_token'];
  const type = 'track';
  const offset = 0;
  const limit = 20;


  // const url = `https://api.spotify.com/v1/search?query=${encodeURIComponent(search)}&type=${type}&offset=${offset}&limit=${limit}`;
  const url = `https://api.spotify.com/v1/search?query=track:${encodeURIComponent(rawSongName)}%20artist:${encodeURIComponent(artistName)}&type=${type}&offset=${offset}&limit=${limit}`;
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const searchResult = await response.json();

  console.log(searchResult)

  if (searchResult.tracks.items.length > 0) {
    const songLink = searchResult?.tracks?.items?.[0]?.id ?? null;
    // const songLink = searchResult.tracks.items[0].external_urls;

    return songLink;
  } else {
    return "";
  }
}


module.exports = {getSpotifySongLink};