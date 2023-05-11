Vue.component('osubutton', {
    props: ['src'],
    data: function() {
        return {
            isClicked: false,
            isNotAnim: false,
        }
    },
    methods: {
        click: function() {
            this.isClicked = true;
            this.$emit("osubtnclicked");
        }
    },
    template: `
    <div id="logo-container" style="position: relative">
        <img v-bind:class="{noAnim: isNotAnim}" id="logo" @click="click" v-bind:src="src"></img>
    </div>
    `
})

Vue.component('clubmembers', {
    props: ['role', 'avatar', 'username', 'name', 'blurb', 'discord', 'email', 'osu'],
    data: function() {
        return {}
    },
    methods: {},
    template: `
    <div class="card" style="width: 22vw;">
        <div id="role" class="card-header">
            <h5>{{role}}</h5>
        </div>
        <div id="avatarWrapper">
            <img id="avatar" v-bind:src="avatar" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{username}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{name}}</h6>
            <p class="card-text">{{blurb}}</p>
            <div class="card-footer text-muted">
                <a v-bind:href="osu" class="card-link" target="_blank">
                    <img class="osuIcon" src="resources/osuIcon.png"></img>
                </a>
                <a href="https://discord.gg/umqqtjR" class="card-link" v-bind:class="{noDiscord: discord === undefined}">
                    <i class="fab fa-discord"></i>
                    <span class="discordtooltip"> {{discord}} </span>
                </a>
                <a v-bind:href="'mailto:' + email" class="card-link" v-bind:class="{noEmail: email === undefined}">
                    <i class="fas fa-envelope"></i>
                    <span class="emailtooltip"> {{email}} </span>
                </a>
            </div>
        </div>
    </div>    
    `
})

new Vue({
    el: "#main",
    data: {
        src: "resources/logoNoText.png",
        execs: [{
            role: "President",
            avatar: "https://a.ppy.sh/6925441?1681861691.png",
            username: "jiaxunjason",
            blurb: "3rd year CS student, DT1 hater. One of the 17 Jasons in osu!uWaterloo.",
            discord: "jiaxunjason#1686",
            osu: "https://osu.ppy.sh/users/6925441"
        }, {
            role: "Vice President",
            avatar: "https://a.ppy.sh/2012453?1679275649.jpeg",
            username: "PikaPwn",
            blurb: "3rd year Geomatics student. High accuracy plays only!",
            discord: "PikaPwn#4548",
            osu: "https://osu.ppy.sh/users/2012453"
        }, {
            role: "Tournament Host",
            avatar: "https://a.ppy.sh/12055633?1679324423.jpeg",
            username: "KLOCWISE",
            blurb: "2nd year Civ Eng student, plays osu! for fun among many many other games. \"Join the club and play in Waterloo osu! Cup!!!\"",
            discord: "KLOCWISE#4288",
            osu: "https://osu.ppy.sh/users/12055633"
        }, {
            role: "Contest Host",
            avatar: "https://a.ppy.sh/10538842?1636705674.jpeg",
            username: "danielq987",
            blurb: "3rd year Tron student who will never get to 4 digit. Enjoys Celeste, jigsaw puzzles, and good public transit.",
            discord: "blobbyliu#9508",
            osu: "https://osu.ppy.sh/users/10538842"
        },  {
            role: "Treasurer",
            avatar: "https://a.ppy.sh/8050865?1674325881.jpeg",
            username: "twatziki",
            blurb: "4th year ECE student who is hardstuck in taiko",
            discord: "twatziki#0727",
            osu: "https://osu.ppy.sh/users/8050865"
        }],
        members: []
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }
})