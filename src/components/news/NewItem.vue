<template>
    <div class="new-item shadow-2xl rounded ">
        <img class="object-cover h-48 w-full" :src="this.mockData.urlToImage"/>
        <div class="content p-10">
        <h1 class="text-xl">{{mockData.title}}</h1>
        <p class="description">
        {{mockData.description}}
        </p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'NewItem',
    data() {
        return {
            mockData: {
            // 'source': {
            //     "id": "engadget"
            //     "name": "Engadget"
            // },
            author: "https://www.engadget.com/about/editors/valentina-palladino",
            title: "This week's best deals: Get two Echo Dots for $50 ahead of Amazon Prime Day",
            description: "Here are the week's best tech deals including early Amazon Prime Day 2021 deals on Echo Dots and the Echo Show 5, and the Beats Flex earbuds for $39..",
            url: "https://www.engadget.com/weekly-tech-deals-early-amazon-prime-day-2021-deals-echo-dot-echo-show-5-beats-flex-earbuds-154501984.html",
            urlToImage: "https://s.yimg.com/os/creatr-uploaded-images/2020-10/b8416fc0-14e3-11eb-bcf7-a9951d87a21f",
            publishedAt: "2021-06-18T15:45:01Z",
            content: "With Amazon Prime Day only a few days away, there are a bunch of early deals that Prime members can take advantage of. Two Echo Dots will cost you only $50 right now, while the Echo Show 5 is down to… [+6593 chars]"
        }
        }
    },
    components: {
        
    }

}
</script>

<style>

</style>