const albumUri = "http://localhost/php-dischi-json/data.php";

const app = Vue.createApp({
  name: "SpotifyAlbum",
  data() {
    return {
      albums: [],
      currentActive: null,
    };
  },
  computed: {
    isActive() {
      return this.currentActive;
    },
    albumsGenres() {
      const genres = this.albums.map((album) => {
        return album.genre;
      });
      return [...new Set(genres)];
    },
  },
  methods: {
    getActive(i) {
      this.currentActive === null
        ? (this.currentActive = i)
        : (this.currentActive = null);
    },
  },
  created() {
    axios.get(albumUri).then((res) => {
      this.albums = res.data;
    });
  },
});

app.mount("#root");
