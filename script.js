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
  },
  methods: {
    getActive(i) {
      this.currentActive = i;
    },
  },
  created() {
    axios.get(albumUri).then((res) => {
      this.albums = res.data;
    });
  },
});

app.mount("#root");
