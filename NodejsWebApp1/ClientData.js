//A Database that contains data that exist but even data that dont exist on the server so that we make both correct and
// incorect requests checking all use cases this way
class ClientData {
    constructor() {
        this.Names = [
            "reddit.com"
            , "imgur.com"
            , "google.com"
            , "youtube.com"
            , "yahoo.com"
            , "hotmail.com"
            , "bing.com"
            , "digg.com"
            , "theonion.com"
            , "hush.com"
            , "gamespot.com"
            , "ign.com"
            , "cracked.com"
            , "sidereel.com"
            , "github.com"
            , "facebook.com"
            , "twitter.com"
            , "tumblr.com"
            , "livejournal.com"
            ,"dreamwidth.com"];

        this.Ips = [
            "72.247.244.88"
            , "173.231.140.219"
            , "74.125.157.99"
            , "74.125.65.91"
            , "98.137.149.56"
            , "65.55.72.135"
            , "65.55.175.254"
            , "64.191.203.30"
            , "97.107.137.164"
            , "65.39.178.43"
            , "216.239.113.172"
            , "69.10.25.46"
            , "98.124.248.77"
            , "144.198.29.112"
            , "207.97.227.239"
            , "31.13.77.36"
            , "199.59.149.230"
            , "174.121.194.34"
            , "209.200.154.225"
            ,"69.174.244.50"];
    }
}

module.exports = ClientData;