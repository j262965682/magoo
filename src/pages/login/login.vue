<template>
<div>
<navhearder></navhearder>
<loginfirst></loginfirst>

</div>
      
</template>

<script>
// import { login, getAdminInfo } from "@/api/getData";
// import { mapActions, mapState } from "vuex";
import navhearder from '@/components/navhearder'
import loginfirst from '@/components/loginfirst'
export default {
  name: 'login',
  components: { navhearder,loginfirst },
  data() {
    return {
      
    };
  },
  mounted() {},
  computed: {},
  methods: {
    
  },
  watch: {
    adminInfo: function(newValue) {}
  }
};
</script>