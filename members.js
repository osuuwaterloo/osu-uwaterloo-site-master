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
                <a v-bind:href="osu" class="card-link">
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
            avatar: "https://a.ppy.sh/3805080?1638503842.png",
            username: "Devil_Oid",
            blurb: "Honours Math student who is essentially retired from osu!Standard. Mainly plays Catch the Beat, taking on maps way out of his skill range .\"just cause.\". Will occasionally make a random pp play.",
            discord: "Devil_Oid#0843",
            osu: "https://osu.ppy.sh/users/3805080"
        }, {
            role: "Vice President",
            avatar: "https://a.ppy.sh/5390121?1650570078.jpeg",
            username: "Piggy",
            blurb: "4th year CE student, mania player, occasionally dabbles in standard and taiko but sucks at all modes.",
            discord: "Piggy#2119",
            osu: "https://osu.ppy.sh/users/5390121"
        }, {
            role: "Tournament Host",
            avatar: "https://a.ppy.sh/8171404?1647014602.jpeg",
            username: "LumenLogic",
            blurb: "LumenLogic",
            osu: "https://osu.ppy.sh/users/8171404"
        }, {
            role: "Contest Host",
            avatar: "https://a.ppy.sh/15977117?1641070122.jpeg",
            username: "thepersonwhodie",
            blurb: "3rd year biochem student who likes puzzle games. Plays osu standard and only knows how to combo game.",
            discord: "thepersonwhodied#8285",
            osu: "https://osu.ppy.sh/users/15977117"
        },  {
            role: "Treasurer",
            avatar: "https://a.ppy.sh/16039046?1639447130.jpeg",
            username: "Redside",
            blurb: "4th year ECE student with nothing better to do also osu FA btw :yep:",
            osu: "https://osu.ppy.sh/users/16039046"
        }],
        members: []
    },
    methods: {
        goBack() {
            window.history.back();
        }
    }
})