<template>
  <div class="embed">
    <VideoPlayer
      v-if="!loading"
      :video="video"
      :embedded="true"
      class="video-player-p"
    ></VideoPlayer>
  </div>
</template>

<script>
import Commons from '@/plugins/commons.js';
import VideoPlayer from '@/components/videoplayer/VideoPlayer';

export default {
  name: 'embed-video',
  data: () => ({
    loading: true,
    video: {},
    commons: Commons
  }),
  components: {
    VideoPlayer
  },
  beforeRouteEnter(to, from, next) {
    const videoId = to.params.id;
    fetch(`${Commons.getApiUrl()}videos/${videoId}`, {
      cache: 'force-cache',
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        next(vm => vm.loadData(data));
      })
      .catch(error => {
        console.error(error);
      });
  },
  beforeRouteUpdate(to, from, next) {
    const videoId = to.params.id;
    fetch(`${Commons.getApiUrl()}videos/${videoId}`, {
      cache: 'force-cache',
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.loadData(data);
        next();
      })
      .catch(error => {
        console.error(error);
        next();
      });
  },
  methods: {
    loadData(data) {
      this.video = data;
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.embed {
  height: 100%;
  width: 100%;
}
</style>
