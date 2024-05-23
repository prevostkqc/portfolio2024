<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'Kévin Prévost - Développeur Front-end',
  mounted() {
    document.title = "Kévin Prévost - Développeur Front-end";
    const meta = document.createElement('meta');
    meta.name = 'robots';
    // meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
  }
}
</script>