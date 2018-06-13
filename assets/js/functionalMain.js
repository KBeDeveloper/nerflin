//Fill the main container
function fillContainer(layout, logo, desc, link){
    $("#containerSet").html("");
    $("#containerSet").append(
        "<div class='container-fluid background content-center' style='margin-top: 50px; background-image: url(\""+layout+"\");'>"+
            "<div class='row'>"+
                "<div class='traslucent-col col-md-4'>"+
                    "<div class='row holder'>"+
                        "<img class='col col-md main-logo' style='margin-top:50px;max-width:100%;' src='"+logo+"'>"+
                    "</div>"+
                    "<div class='row'>"+
                        "<p style='margin-top: 30px;' class='col text-justify col-md'>"+desc+"</p>"+                        
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
        "Gender"     :["Anime"],
        "Link"       :"https://www.animeyt.tv/ver/kimi-no-na-wa-sub-espanol"
    },
    {
        "Title"      :"Kaguyahime no Monogatari",
        "Layout"     :"https://i.pinimg.com/originals/11/bd/b0/11bdb07dbdb3ae4dd30b43fe67d5c6d6.png",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMTcwODI0MzEwOF5BMl5BanBnXkFtZTgwNjkyNTEwMTE@._V1_UY268_CR4,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/movies/149871/hdmovielogo/the-tale-of-princess-kaguya-5444dd1df2fa6.png",
        "Description":"Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her, but ultimately she must confront her fate, the punishment for her crime.",
        "Rank"       :4.0,
        "Year"       :2013,
        "Duration"   :137,
        "Gender"     :["Anime"],
        "Link"       :"https://animeflv.ru/ver/60664/kaguya-hime-no-monogatari-2013-hd-720p"
    },
    {
        "Title"      :"Loving Vincent",
        "Layout"     :"https://ksr-ugc.imgix.net/assets/001/631/459/50181360a1047f0ddcb6fa6f00ea4978_original.jpg?w=680&fit=max&v=1392317128&auto=format&q=92&s=26c62105ed30cd985537fc512c4de09b",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMTU3NjE2NjgwN15BMl5BanBnXkFtZTgwNDYzMzEwMzI@._V1_UY268_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://www.mbe.co.uk/lovingvincent/i/lv-logo.png",
        "Description":"In a story depicted in oil painted animation, a young man comes to the last hometown of painter Vincent van Gogh to deliver the troubled artist`s final letter and ends up investigating his final days there.",
        "Rank"       :3.5,
        "Year"       :2017,
        "Duration"   :94,
        "Gender"     :["Drama"],
        "Link"       :"https://es.onmovies.to/film/ftR/Loving-Vincent"
    },
    {
        "Title"      :"Higashi no Eden II: Paradise Lost",
        "Layout"     :"https://static.zerochan.net/Takizawa.Akira.full.155338.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BY2U5Y2FiMjktYmJhMi00YmI0LWI1ZDgtMThmZTk0NjFmMzZmXkEyXkFqcGdeQXVyNTk1ODMyNjA@._V1_UY268_CR4,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/tv/88721/clearlogo/EdenoftheEast-88721.png",
        "Description":"The game is finally coming to a conclusion. The authorities are closing in on Saki and her friends, while the Seleçaos` maneuvering start to bring us closer to the truth about Mr. Outside. Also, we finally learn the truth about how and why Akira wants to become the King of Eden.",
        "Rank"       :3.5,
        "Year"       :2010,
        "Duration"   :90,
        "Gender"     :["Anime"],
        "Link"       :"https://animeflv.ru/anime/5089/higashi-no-eden-movie-ii-paradise-lost-2010-subbed"
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
        "Gender"     :["Drama"],
        "Link"       :"http://www.cinetux.io/pelicula/ver-hereafter-mas-alla-de-la-vida-online/"
    },
    {
        "Title"      :"The Adventures of Tintin",
        "Layout"     :"https://i.pinimg.com/originals/83/8e/86/838e864779ee4ac2171bef8f66bf0bc6.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"http://3.bp.blogspot.com/-LGzilG2RBMA/T7QQMRH2M7I/AAAAAAAAIqU/PK07U9tXuVU/s1600/T_A_o_Tintin_logo_305.png",
        "Description":"Intrepid reporter Tintin and Captain Haddock set off on a treasure hunt for a sunken ship commanded by Haddock`s ancestor.",
        "Rank"       :4.0,
        "Year"       :2011,
        "Duration"   :107,
        "Gender"     :["Adventure"],
        "Link"       :"https://www.repelis.net/pelicula/9662/las-aventuras-de-tintin.html"
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
        "Gender"     :["Horror"],
        "Link"       :"https://poseidonhd.com/movies/it-2017-i/"
    },
    {
        "Title"      :"Sword Art Online: Ordinal Scale",
        "Layout"     :"https://i.pinimg.com/originals/8d/0e/fc/8d0efc6109841d0f6a0476daef329a6c.png",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX182_CR0,0,182,268_AL_.jpghttps://ia.media-imdb.com/images/M/MV5BZGE4M2M2OTYtZDgwMy00NGYwLWE0YTYtYzkyMDFjYWFhN2QzXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://vignette.wikia.nocookie.net/sao/images/8/8d/Ordinal_Scale_Logo.png/revision/latest?cb=20160612153723&path-prefix=es",
        "Description":"Kirito uncovers a conspiracy within Ordinal Scale, a popular VR game developed for a new system called, The Augma.",
        "Rank"       :4.0,
        "Year"       :2017,
        "Duration"   :119,
        "Gender"     :["Anime"],
        "Link"       :"https://www.animeyt.tv/sword-art-online-movie-ordinal-scale"
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
        "Gender"     :["Adventure"],
        "Link"       :"http://www.cuevana3.com/4084/ver-jumanji-welcome-to-the-jungle-online-vgp7"
    },
    {
        "Title"      :"Interstellar",
        "Layout"     :"https://media.senscritique.com/media/000009438875/960/Interstellar.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/movies/157336/hdmovielogo/interstellar-5397480552cda.png",
        "Description":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity`s survival.",
        "Rank"       :4.5,
        "Year"       :2014,
        "Duration"   :169,
        "Gender"     :["Sci Fi"],
        "Link"       :"http://cinemitas.com/2018/01/interstellar/"
    },
    {
        "Title"      :"You don't mess with the Zohan",
        "Layout"     :"https://media.timeout.com/images/103690410/image.jpg",
        "Cover"      :"https://ia.media-imdb.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
        "Logo"       :"https://fanart.tv/fanart/movies/10661/hdmovielogo/you-dont-mess-with-the-zohan-530b983875657.png",
        "Description":"An Israeli Special Forces Soldier fakes his death so he can re-emerge in New York City as a hair stylist.",
        "Rank"       :3.0,
        "Year"       :2008,
        "Duration"   :113,
        "Gender"     :["Comedy"],
        "Link"       :"https://www.pelispedia.tv/pelicula/no-te-metas-con-zohan/"
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
        "Gender"     :["War"],
        "Link"       :"https://www.pelispedia.tv/pelicula/salvar-al-soldado-ryan/"
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
        "Gender"     :["Adventure"],
        "Link"       :"http://www.cuevana3.com/1042/ver-finding-dory-online"
    }
];

//Fill movieSet form
var genders = ["Action","Adveture","Animation","Anime","Comedy","Crime","Epic","Horror","Musical","Sci Fi","Western","Historic","Fantasy","Drama", "Romance", "War"]
var rank = ["1.0","1.5","2.0","2.5","3.0","3.5","4.0","4.5","5.0"]
function fillForm(){    
    genders.forEach(element => {
        $("#gender").append('<option name="'+element+'" value="'+element+'">'+element+'</option>')
    });
    rank.forEach(element => {
        $("#rank").append('<option value="'+element+'">'+element+'</option>')
    });           
}
//

//Show-Hide movieSet form actions
$("#add-item").on("click", function(){
    $("#movieSet").show().slideDown(500);
    $("html, body").animate({scrollTop: $("#movieSet").offset().top - $("nav").height()}, 500);
});
$("#btn-hide").on("click", function(){
    $("#movieSet").slideUp(500);
    $("html, body").animate({scrollTop: $("html").offset().top}, 500);
})
//

function hideForm(){
    $("#movieSet").slideUp(500);
    $("html, body").animate({scrollTop: $("html").offset().top}, 500);
}
//

// Movie arrays methods
var auxArray = [];

$("#addForm").submit(function(movie){
    var data = $(this).serializeObject();
    movies.push(data);
    auxArray.push(data);
    loadAddedMovies();
    hideForm();    
    return false;
});

function loadAddedMovies(){    
    if (auxArray.length==0) {
        //$("#recentAdded").append("<h5 class=\"col-md-12 text-center\" style=\"color: gray;\">You haven't added movies yet to this list.</h5>");
        $("#recentAdded").hide();
    }else{
        $("#recentAdded").show();
        $("#recentAdded").html("");
        $("#recentAdded").append("<h3>Recently added</h3>");
        for (var i = 0; i < auxArray.length; i++){
            $("#recentAdded").append(
                "<div class=\"col-6 col-md-2\" onclick=\"fillContainer('"+auxArray[i].Layout+"','"+auxArray[i].Logo+"','"+auxArray[i].Description+"','"+auxArray[i].Link+"')\" style=\"margin-bottom:20px;\">"+
                    "<img style=\"height: auto; width: 100%;\" src=\""+auxArray[i].Cover+"\" alt=\""+auxArray[i].Title+"\">"+
                    "<div class=\"container\" style=\"height:140px;background-color:rgba(0,0,0,0.4);padding-top:1px;padding-bottom:1px;\">"+      
                        "<p class=\"text-left\" style=\"font-size:14px;\">"+auxArray[i].Title+"</p><br/>"+
                        "<div style=\"position:absolute;bottom:0;\">"+
                            "<p class=\"text-left\" style=\"color:gray;font-size:10px;\">"+"Rank:&nbsp;"+auxArray[i].Rank+"<br/>Year:&nbsp;"+auxArray[i].Year+"<br/>"+"Gender: "+auxArray[i].Gender.toString()+"<br/>Duration:&nbsp;"+auxArray[i].Duration+"&nbsp;minutes"+"</p>"+
                        "</div>"+
                    "</div>"+
                "</div>"
            )
        }
    }   
}

function loadMovies(){
    $("#recomended").html("");
    for (var i = 0; i < 6; i++) { 
        $("#recomended").append(
            "<div class=\"col-6 col-md-2\" onclick=\"fillContainer('"+movies[i].Layout+"','"+movies[i].Logo+"','"+movies[i].Description+"','"+movies[i].Link+"')\" style=\"margin-bottom:20px;\">"+
                "<img style=\"height: auto; width: 100%;\" src=\""+movies[i].Cover+"\" alt=\""+movies[i].Title+"\">"+
                "<div class=\"container\" style=\"height:140px;background-color:rgba(0,0,0,0.4);padding-top:1px;padding-bottom:1px;\">"+      
                    "<p class=\"text-left\" style=\"font-size:14px;\">"+movies[i].Title+"</p><br/>"+
                    "<div style=\"width:100%;position:absolute;bottom:0;\">"+
                        "<p class=\"text-left\" style=\"color:gray;font-size:10px;\">"+"Rank:&nbsp;"+movies[i].Rank+"<br/>Year:&nbsp;"+movies[i].Year+
                        "<br/>Gender: "+movies[i].Gender.join(", ")+"<br/>Duration:&nbsp;"+movies[i].Duration+"&nbsp;minutes"+"</p>"+
                    "</div>"+
                "</div>"+
            "</div>"
        )
    }    
    $("#seeAlso").html("");
    for (var i = 6; i < movies.length; i++) { 
        $("#seeAlso").append(
            "<div class=\"col-6 col-md-2\" onclick=\"fillContainer('"+movies[i].Layout+"','"+movies[i].Logo+"','"+movies[i].Description+"','"+movies[i].Link+"')\" style=\"margin-bottom:20px;\">"+
                "<img style=\"height: auto; width: 100%;\" src=\""+movies[i].Cover+"\" alt=\""+movies[i].Title+"\">"+
                "<div class=\"container\" style=\"height:140px;background-color:rgba(0,0,0,0.4);padding-top:1px;padding-bottom:1px;\">"+      
                    "<p class=\"text-left\" style=\"font-size:14px;\">"+movies[i].Title+"</p><br/>"+
                    "<div style=\"position:absolute;bottom:0;\">"+
                        "<p class=\"text-left\" style=\"color:gray;font-size:10px;\">"+"Rank:&nbsp;"+movies[i].Rank+"<br/>Year:&nbsp;"+movies[i].Year+
                        "<br/>"+"Gender: "+movies[i].Gender.join(", ")+"<br/>Duration:&nbsp;"+movies[i].Duration+"&nbsp;minutes"+"</p>"+
                    "</div>"+
                "</div>"+
            "</div>"
        );
    }
}

// Add a movie
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
    fillContainer(movies[0].Layout, movies[0].Logo, movies[0].Description, movies[0].Link);
});
fillForm();
loadMovies();
loadAddedMovies();
//