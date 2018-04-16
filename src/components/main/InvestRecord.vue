<template>
<Header :headerTitle="headerTitle" :routerLink="routerLink"></Header>


</template>
<script >
import Header  from  "@/components/common/header"
export default {
     components:{
        Header
    },
    data () {
        return {
            headerTitle:"投资记录",
            routerLink:'/mainIndex'
        }
    }
}

</script>
<style scoped lang="scss">

</style>