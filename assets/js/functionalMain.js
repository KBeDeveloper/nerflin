//Fill the main container
function fillContainer(layout, logo, desc, link){
    $("#containerSet").html("");
    $("#containerSet").append
    (
        "<div class='container-fluid background content-center' style='margin-top: 50px; background-image: url(\""+layout+"\");'>"+
            "<div class='row'>"+
                "<div class='traslucent-col col-md-4'>"+
                    "<div class='row holder'>"+
                        "<img class='col-md main-logo' style='margin-top: 50px;' src='"+logo+"'>"+
                    "</div>"+
                    "<div class='row'>"+
                        "<p style='margin-top: 30px;' class='text-justify col-md'>"+desc+"</p>"+                        
                    "</div>"+
                    "<div class='row container-fluid' style='position: absolute; bottom: 0;'>"+
                        "<button type='button' onclick='window.open(\""+link+"\",\"_blank\")' class='btn btn-danger col-md btn-space'>Watch now</button>"+
                        "<button type='button' class='btn btn-outline-light col-md btn-space'>Add to list</button>"+                      
                    "</div>"+
                "</div>"+
            "</div>"+
        "</div>"
    );   
    $("html, body").animate({scrollTop: $("html").offset().top}, 900);
}
//

//Fill movieSet form
var genders = ["Action","Adveture","Animation","Comedy","Crime","Epic","Horror","Musical","Sci Fi","Western","Historic","Fantasy","Drama", "Romance"]
var rank = ["1.0","1.5","2.0","2.5","3.0","3.5","4.0","4.5","5.0"]

function fillForm(){    
    genders.forEach(e => {
        $("#gender").append('<option value="'+e+'">'+e+'</option>')
    });
    rank.forEach(e => {
        $("#rank").append('<option value="'+e+'">'+e+'</option>')
    });           
}
//

//Show/Hide movieSet form actions
$("#add-item").on("click", function(){
    $("#movieSet").show().slideDown(500);
    $("html, body").animate({scrollTop: $("#movieSet").offset().top - $("nav").height()}, 500);
});
$("#btn-hide").on("click", function(){
    $("#movieSet").slideUp(500);
    $("html, body").animate({scrollTop: $("html").offset().top}, 500);
})
//

//Load movie
var movies = 
[
    {
        "Title"      :"Kimi no na Wa",
        "Layout"     :"https://images2.alphacoders.com/743/743487.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"http://i.imgur.com/ctjejqM.png",
        "Description":"Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        "Rank"       :4.5,
        "Year"       :2016,
        "Duration"   :106,
        "Gender"     :["Animation","Drama","Romance"]
    },
    {
        "Title"      :"Kaguyahime no Monogatari",
        "Layout"     :"https://i.imgur.com/oTBZ9bl.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMTcwODI0MzEwOF5BMl5BanBnXkFtZTgwNjkyNTEwMTE@._V1_UY268_CR4,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/api/download.php?type=download&image=86178&section=3",
        "Description":"Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.",
        "Rank"       :4.0,
        "Year"       :2013,
        "Duration"   :137,
        "Gender"     :["Animation","Drama"]
    },
    {
        "Title"      :"Loving Vincent",
        "Layout"     :"https://ksr-ugc.imgix.net/assets/001/631/459/50181360a1047f0ddcb6fa6f00ea4978_original.jpg?w=680&fit=max&v=1392317128&auto=format&q=92&s=26c62105ed30cd985537fc512c4de09b",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMTU3NjE2NjgwN15BMl5BanBnXkFtZTgwNDYzMzEwMzI@._V1_UY268_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://www.mbe.co.uk/lovingvincent/i/lv-logo.png",
        "Description":"In a story depicted in oil painted animation, a young man comes to the last hometown of painter Vincent van Gogh to deliver the troubled artist's final letter and ends up investigating his final days there.",
        "Rank"       :3.5,
        "Year"       :2017,
        "Duration"   :94,
        "Gender"     :["Drama"]
    },
    {
        "Title"      :"Higashi no Eden Gekijôban II: Paradise Lost",
        "Layout"     :"http://1.bp.blogspot.com/-OXps7TI70kI/TrFkj4JIUOI/AAAAAAAABGY/ZeKIdAQnwSE/s1600/Eden_Of_The_East_Movie_2-_Paradise_Lost_Eden+still+5.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BY2U5Y2FiMjktYmJhMi00YmI0LWI1ZDgtMThmZTk0NjFmMzZmXkEyXkFqcGdeQXVyNTk1ODMyNjA@._V1_UY268_CR4,0,182,268_AL_.jpg",
        "Logo"       :"http://img11.hostingpics.net/pics/545363HigashinoEdenlogo.png",
        "Description":"The game is finally coming to a conclusion. The authorities are closing in on Saki and her friends, while the Seleçaos' maneuvering start to bring us closer to the truth about Mr. Outside. Also, we finally learn the truth about how and why Akira wants to become the King of Eden.",
        "Rank"       :3.5,
        "Year"       :2010,
        "Duration"   :90,
        "Gender"     :["Action", "Animation", "Comedy"]
    },
    {
        "Title"      :"Hereafter",
        "Layout"     :"https://images8.alphacoders.com/793/thumb-1920-793821.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMjE2MzU3Nzk4M15BMl5BanBnXkFtZTcwODcxNTI5Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/movies/44603/hdmovielogo/hereafter-52f3e563cc8be.png",
        "Description":"A drama centered on three people - a blue-collar American, a French journalist and a London school boy - who are touched by death in different ways.",
        "Rank"       :3.0,
        "Year"       :2010,
        "Duration"   :129,
        "Gender"     :["Drama","Fantasy"]
    },
    {
        "Title"      :"The Adventures of Tintin",
        "Layout"     :"https://i.pinimg.com/originals/83/8e/86/838e864779ee4ac2171bef8f66bf0bc6.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"http://3.bp.blogspot.com/-LGzilG2RBMA/T7QQMRH2M7I/AAAAAAAAIqU/PK07U9tXuVU/s1600/T_A_o_Tintin_logo_305.png",
        "Description":"Intrepid reporter Tintin and Captain Haddock set off on a treasure hunt for a sunken ship commanded by Haddock's ancestor.",
        "Rank"       :4.0,
        "Year"       :2011,
        "Duration"   :107,
        "Gender"     :["Action","Adventure","Animation"]
    },
    {
        "Title"      :"It",
        "Layout"     :"https://wallpapersite.com/images/pages/pic_w/9111.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IT_%282017_film%29_logo.svg/1000px-IT_%282017_film%29_logo.svg.png",
        "Description":"In the summer of 1989, a group of bullied kids band together to destroy a shapeshifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
        "Rank"       :4.0,
        "Year"       :2017,
        "Duration"   :135,
        "Gender"     :["Drama","Horror"]
    },
    {
        "Title"      :"Sword Art Online: Ordinal Scale",
        "Layout"     :"https://i.pinimg.com/originals/8d/0e/fc/8d0efc6109841d0f6a0476daef329a6c.png",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX182_CR0,0,182,268_AL_.jpghttps://ia.media-imdb.com/images/M/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://akiratv.tk/wp-content/uploads/2017/05/logo-site-sao.png",
        "Description":"Kirito uncovers a conspiracy within Ordinal Scale, a popular VR game developed for a new system called, The Augma.",
        "Rank"       :4.0,
        "Year"       :2017,
        "Duration"   :119,
        "Gender"     :["Action","Adventure","Animation"]
    },
    {
        "Title"      :"Jumanji: Welcome to the Jungle",
        "Layout"     :"http://www.listofdownload.com/wp-content/uploads/2017/12/2017-Jumanji-Welcome-to-the-Jungle-Movie-Wallpaper-HD-1920x1080.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"http://www.jumanjimovie.com/discanddigital/img/movie-tt.png",
        "Description":"Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
        "Rank"       :4.0,
        "Year"       :2017,
        "Duration"   :119,
        "Gender"     :["Action","Adventure","Comedy"]
    },
    {
        "Title"      :"Interstellar",
        "Layout"     :"https://media.senscritique.com/media/000009438875/960/Interstellar.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/movies/157336/hdmovielogo/interstellar-5397480552cda.png",
        "Description":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Rank"       :4.5,
        "Year"       :2014,
        "Duration"   :169,
        "Gender"     :["Adventure","Drama","Sci Fi"]
    },
    {
        "Title"      :"You don't mess with the Zohan",
        "Layout"     :"https://media.timeout.com/images/103690410/image.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/api/download.php?type=download&image=64928&section=3",
        "Description":"An Israeli Special Forces Soldier fakes his death so he can re-emerge in New York City as a hair stylist.",
        "Rank"       :3.0,
        "Year"       :2008,
        "Duration"   :113,
        "Gender"     :["Action","Comedy"]
    },
    {
        "Title"      :"Saving Private Ryan",
        "Layout"     :"http://filmyfantastyczne.pl/wp-content/uploads/2017/01/Szeregowiec-Ryan-Kulisy.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY268_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/movies/857/hdmovielogo/saving-private-ryan-5116acb3c256f.png",
        "Description":"Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "Rank"       :4.5,
        "Year"       :1998,
        "Duration"   :169,
        "Gender"     :["Action","Drama"]
    },
    {
        "Title"      :"Finding Dory",
        "Layout"     :"https://img3.goodfon.ru/original/1440x900/e/c7/v-poiskah-dori-finding-dory.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BNzg4MjM2NDQ4MV5BMl5BanBnXkFtZTgwMzk3MTgyODE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://static1.squarespace.com/static/51cdafc4e4b09eb676a64e68/t/577e9dfdbebafb0330871d6a/1467915782569/",
        "Description":"The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
        "Rank"       :4.0,
        "Year"       :2016,
        "Duration"   :97,
        "Gender"     :["Adventure","Animation","Comedy"]
    }
];

$("#addForm").submit(function(movie){
    var data = $(this).serializeObject();
    movies.push(data);
    loadMovie();
    return false;
});

function loadRecentMovies(){
    $("#recentAdded").html("");
    for (var i = 0; i < 6; i++) { 
        $("#recentAdded").append
        (
            "<div class=\"col-md-2\">"+
                "<img style=\"height: 70%; width: 100%;\" onclick=\"fillContainer('"+movies[i].Layout+"','"+movies[i].Logo+"','"+movies[i].Description+"')\" src=\""+movies[i].Cover+"\" alt=\""+movies[i].Title+"\">"+
                "<p class=\"text-left\">"+movies[i].Title+"</p>"+
            "</div>"
        )
    }
}

function loadExtraMovies(){
    $("#seeAlso").html("");
    for (var i = 6; i < movies.length; i++) { 
        $("#seeAlso").append
        (
            '<div class="col-md-2">'+
                '<img style="height: 70%; width: 100%;" onclick="fillContainer(\''+movies[i].Layout+'\',\''+movies[i].Logo+'\',\''+movies[i].Description+'\')" src="'+movies[i].Cover+'" alt="'+movies[i].Title+'">'+
                '<p class="text-left">'+movies[i].Title+'</p>'+
            '</div>'
        );
    }
}

$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function(){
        if (o[this.name]){
            if (!o[this.name].push){
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
//

//Execute 
$(document).ready(function(){
    fillContainer("https://images2.alphacoders.com/743/743487.jpg", "http://i.imgur.com/ctjejqM.png", "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?", "https://www.animeyt.tv/ver/kimi-no-na-wa-sub-espanol");
})

fillForm();
loadRecentMovies();
loadExtraMovies();