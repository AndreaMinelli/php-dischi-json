const albumUri = "http://localhost/php-dischi-json/data.php";

const app = Vue.createApp({
  name: "SpotifyAlbum",
  data() {
    return {
      albums: [],
    };
  },
  created() {
    axios.get(albumUri).then((res) => {
      this.albums = res.data;
    });
  },
});

app.mount("#root");
