const albumUri = "http://localhost/php-dischi-json/data.php";

const app = Vue.createApp({
  name: "SpotifyAlbum",
  data() {
    return {
      albums: [],
      currentActive: null,
      genreFilter: "",
      genresList: [],
    };
  },
  computed: {
    isActive() {
      return this.currentActive;
    },
  },
  methods: {
    getGenresList() {
      const albums = [...this.albums];
      const genres = albums.map((album) => {
        return album.genre;
      });
      this.genresList = [...new Set(genres)];
    },
    getActive(i) {
      this.currentActive === null
        ? (this.currentActive = i)
        : (this.currentActive = null);
    },
    getFilter() {
      const config = {
        params: {
          "genre-type": this.genreFilter,
        },
      };
      axios.get(albumUri, config).then((res) => {
        this.albums = res.data;
      });
    },
  },
  created() {
    axios.get(albumUri).then((res) => {
      this.albums = res.data;
      this.getGenresList();
    });
  },
});

app.mount("#root");
