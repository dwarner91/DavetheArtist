
var playerHealth = 100;

var enemyHealth = 100;

var maxHealth = "/100";

let enemyName;
let alt;
let enemy;
let dragon;
let attackName;
let target;
let currentEnemy;

var score = 0;


function spawnEnemy() {
    enemy = Math.floor(Math.random() * 4);
    if(currentEnemy === enemy){
        if(currentEnemy <= 2) {
        currentEnemy = enemy+1;
        } else {
            currentEnemy = 0;
        }
    } else {
        currentEnemy = enemy
    }
    if (currentEnemy == 0) {
        enemyName = "Cthulhu"
        alt = "cthulhu"
        $("main").append("<img src= 'enemies/cthulhu.png' alt='Cthulhu' style='transform: rotateY(180deg)' id='cthulhu'>")

    } else if (currentEnemy == 1) {
        enemyName = "The Destroyer"
        alt = "destroyer"
        $("main").append("<img src= 'enemies/destroyer.jpg' alt='Destroyer' id='destroyer'>")

    } else if (currentEnemy == 2) {
        enemyName = "The Spider Queen"
        alt = "spider"
        $("main").append("<img src= 'enemies/spider queen.png' alt='Spider Queen' style='transform: rotateY(180deg)' id= 'spider'>")
        
    } else if (currentEnemy == 3) {
        enemyName = "The Storm Giant"
        alt = "giant"
        $("main").append("<img src= 'enemies/storm giant.png' alt='Storm Giant' id= 'giant'>")
        
    } 
    var button = document.getElementById("fireball")
    if ($("#battletext").length) {
        $("#battletext").remove()
    }
    $("footer").append(`<h1 id= 'battletext'>Your enemy is ${enemyName}.</h1>`)
    
    
    setTimeout(function(){
        if (!button) {
            $("#battletext").remove()
            $("footer").append(`<h1 style = 'color: white' id= 'player'>${playerHealth + maxHealth}</h1>
                <h1 style = 'color: white' id= 'enemy'>${enemyHealth + maxHealth}</h1>
                <br>
                <button id = 'fireball'>Fireball</button> <button id  = 'rod'>Rod of Asclepius</button> <button id='lightning'>Lightning Storm</button> <button id= 'hole'>Black Hole</button>`)
            } else {
                $("#battletext").remove()
                $('button').css({display: "inline"})
            }
    }, 3000)

}

function enemyMoveset() {
    target = "you"
    if (currentEnemy == 0) {
        cthulhuMoves()

    } else if (currentEnemy == 1) {
        destroyerMoves()

    } else if (currentEnemy == 2) {
        spiderMoves()
        
    } else if (currentEnemy == 3) {
        giantMoves()
        
    } 

}

function cthulhuMoves() {
    caster = enemyName;
    var move = Math.floor(Math.random() * 3);
    if (move == 0) {
        $("body").css({"background-image": "url(effects/madness.gif)"})
        attackName = "Madness";
        battle();
        setTimeout(function(){
            $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
        }, 3000)
        
    } else if (move == 1) {
        $("body").css({"background-image": "url(effects/tsunami.gif)"})
        attackName = "Tsunami";
        battle();
        setTimeout(function(){
            $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
        }, 3000)
    } else if (move == 2) {
        $("body").append("<img src='effects/dark-ball.gif' alt='fireball' id='dark'>")
        $("#dark").animate({left: "-=80%"}, 1000, function(){$(this).remove();
        });
        attackName = "Dark Ball"
        battle();
    }
    setTimeout(function(){
        if (!(playerHealth == 0)) {
            $('button').css({display: "inline"})
            }
    }, 3000) 

}

function destroyerMoves() {
    caster = enemyName;
    var move = Math.floor(Math.random() * 3);
    if (move == 0) {
        $("body").css({"background-image": "url(effects/nuke.gif)"})
        attackName = "Nuke";
        battle();
        setTimeout(function(){
            $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
        }, 3000)
    } else if (move == 1) {
        $("body").append("<img src='effects/missile.gif' alt='missile' id='missile' style='transform: rotateY(180deg)'>")
        $("#missile").animate({left: "-=60%"}, 1000, function(){$(this).remove();
        });
        attackName = "Missile";
        battle();
    } else if (move == 2) {
        $("body").append("<img src='effects/laser.gif' alt='laser' id='laser' style='transform: rotateY(180deg)'>")
        setTimeout(function(){
            $("#laser").remove()
        }, 3000)
        attackName = "Laser Beam";
        battle();
    }
    setTimeout(function(){
        if (!(playerHealth == 0)) {
            $('button').css({display: "inline"})
            }
    }, 4000) 

}

function spiderMoves() {
    caster = enemyName;
    var move = Math.floor(Math.random() * 3);
    if (move == 0) {
        $("body").css({"background-image": "url(effects/web.jpeg)"})
        attackName = "Web";
        battle();
        setTimeout(function(){
            $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
        }, 3000)
    } else if (move == 1) {
        $("body").css({"background-image": "url(effects/poison.gif)"})
        attackName = "Poison";
        battle(); 
        setTimeout(function(){
            $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
        }, 3000)
    } else if (move == 2) {
        $("body").append("<img src='effects/bite.gif' alt='teeth biting' id='bite'>")
        $("#bite").animate({left: "-=80%"}, 1000, function(){$(this).remove();
        });
        attackName = "Bite";
        battle();
    }
    
    setTimeout(function(){
        if (!(playerHealth == 0)) {
        $('button').css({display: "inline"})
        }
    }, 3000) 

}

function giantMoves() {
    caster = enemyName;
    var move = Math.floor(Math.random() * 3);
    if (move == 0) {
        $("body").css({"background-image": "url(effects/lightning.gif)"})
        attackName = "Lightning Storm";
        battle();
        setTimeout(function(){
            $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
        }, 3000)
    } else if (move == 1) {
        $("body").append("<img src='effects/warhammer.png' alt='warhammer' id='warhammer' style='transform: rotateY(180deg)'>")
        $("#warhammer").animate({left: "-=80%" , rotate: "-=1000deg"}, 1000, function(){$(this).remove();
        });
        attackName = "Warhammer Toss";
        battle();
    } else if (move == 2) {
        $("body").append("<img src='effects/impact.gif' alt='strike' id='strike'>")
        attackName = "Warhammer Strike";
        battle();
        setTimeout(function(){
            $("#strike").remove();
         }, 1000)
    }
    setTimeout(function(){
        if (!(playerHealth == 0)) {
            $('button').css({display: "inline"})
            }
    }, 3000) 

}

$("img").click(function(){
    $("nav").css({display: "none"})
    $("img, header").not(this).remove();
    $(this).not("#dragon1 , #dragon3").animate({width: "35%", height: "45%"})
    $("#dragon1").animate({width: "17%", height: "22%"})
    $("#dragon3").animate({width: "25%", height: "40%"})
    dragon = this.id;
    spawnEnemy(); 
    
    if (!$("#score").length) {
        $("body").append(`<h1 id= "score">Score: ${score}</h1>`)
    }
    
});



$(document).on("click", "#fireball" , function(){
    caster = "You";
    target = enemyName;
    attackName = "Fireball";
    $("body").append("<img src='effects/fireball-fire.gif' alt='fireball' id='fire'>")
    $("#fire").animate({left: "+=80%"}, 1000, function(){$(this).remove();
    });
    $('button').css({display: "none"})
    setTimeout(function(){
        battle();
    }, 2000)
        
});

$(document).on("click", "#rod" , function(){
    caster = "You";
    attackName = "Rod of Asclepius"
    $("main").append("<img src= 'effects/rod.png' alt='Rod of Asclepius' id= 'heal'>")
    $(document).ready(function(){
    $("#heal").animate({left: "25%"}).animate({rotate: "-45deg"})
    setTimeout(function(){
        $('#heal').remove();
    }, 1500)
    });
    $('button').css({display: "none"})
    setTimeout(function(){
        heal();
    }, 2000)
});

$(document).on("click", "#lightning" , function(){
    caster = "You";
    target = enemyName;
    attackName = "Lightning Storm"
    $("body").css({"background-image": "url(effects/lightning.gif)"})
    $('button').css({display: "none"})
    setTimeout(function(){
        battle();
    }, 2000)
    setTimeout(function(){
        $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
    }, 3000)
});

$(document).on("click", "#hole" , function(){
    caster = "You";
    target = enemyName;
    attackName = "Black Hole"
    $("body").css({"background-image": "url(effects/hole.gif)"})
    $('button').css({display: "none"})
    setTimeout(function(){
        battle();
    }, 2000)
    setTimeout(function(){
        $("body").css({"background-image": "url(backgrounds/palace.jpeg)"})
    }, 3000)
});


function damageCalculation() {
//    return Math.floor(Math.random() * (2000 - 1000 + 1) ) + 1000;
   return Math.floor(Math.random() * (20 - 10 + 1) ) + 10; 
}

function healCalculation() {
    return Math.floor(Math.random() * (20 - 18 + 1) ) + 18;
 }


function battle() {
    var damage = damageCalculation();
    $("footer").append(`<h1 id= 'battletext'>${caster} used ${attackName} to deal ${damage} damage to ${target}.`)
    if (caster == "You") {
        if ((enemyHealth - damage) > 0) {
        enemyHealth = enemyHealth - damage;
        $("#enemy").text(enemyHealth + maxHealth);
        setTimeout(function(){
            $("#battletext").remove()
            enemyMoveset();
        }, 3000)
        } else {
            setTimeout(function(){
                $("#enemy").css({display: "none"});
                $(`#${alt}`).animate({opacity: "-1"}, 2000, function(){$(this).remove();
                });
                $("#battletext").remove()
                $("footer").append(`<h1 id= 'battletext'>You vanquished ${enemyName}!`)
                setTimeout(function(){
                    playerHealth = 100;
                    $("#player").text(playerHealth + maxHealth);
                    enemyHealth = 100;
                    $("#enemy").text(enemyHealth + maxHealth);
                    $("#score").text("Score: " + ++score);
                    spawnEnemy();
                    $("#enemy").css({display: "inline"});
                }, 3000)
            }, 3000)
            
        }
    } else {
        if ((playerHealth - damage) > 0) {
            playerHealth = playerHealth - damage;
            $("#player").text(playerHealth + maxHealth);
            setTimeout(function(){
                $("#battletext").remove()
            }, 3000)
            } else {
                setTimeout(function(){
                playerHealth = 0;
                $("#player").text(playerHealth + maxHealth);
                $(".dragons").animate({opacity: "-1"}, 2000, function(){$(this).remove();
                });
                setTimeout(function(){
                    $("#battletext").remove()
                    $("footer").append(`<h1 id= 'battletext'>You have been vanquished...`)
                    $("nav").css({display: "flex"})
                    $("nav").prepend("<a href='index.html'>Return to Main Menu</a>")
                }, 3000)
            }, 3000)
                
            }
    }
}

function heal() {
    var health = healCalculation();
    if (((playerHealth + health) == 100) || ((playerHealth + health) > 100)){
        $("footer").append(`<h1 id= 'battletext'>You used Rod of Asclepius to heal to max health.`)
        playerHealth = 100;
    } else { 
        playerHealth = playerHealth + health;
    $("footer").append(`<h1 id= 'battletext'>You used Rod of Asclepius to heal yourself for ${health}.`)
    }
    $("#player").text(playerHealth + maxHealth)
    setTimeout(function(){
        $("#battletext").remove()
         enemyMoveset();
    }, 3000)
}

