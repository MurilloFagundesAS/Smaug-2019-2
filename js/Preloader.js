Modelo.Preloader = function(game){}

Modelo.Preloader.prototype={
    preload:function(){
    var carregando = this.add.sprite(this.world.centerX, this.world.centerY, 'carregando');
    carregando.anchor.setTo(.5);
    this.load.setPreloadSprite(carregando);

    game.load.image('bg', 'assets/images/bg.png');
    game.load.image('bg0', 'assets/images/bg0.png')
    game.load.image('pause', 'assets/images/pause.png');
    game.load.image('plataforma', 'assets/images/plataforma.png');
    game.load.image('menu', 'assets/images/menu.png');
	game.load.image("menututorial", "assets/images/menututorial.png");
    game.load.image('muniçao', 'assets/images/ammoBox.png');
    game.load.image("distancia", "assets/images/distancia.png");//Murillo, adicionei a palavra "distancia"
    game.load.image("distancia2", "assets/images/distancia2.png");//Murillo, adicionei a palavra "distancia" em inglês
    game.load.image('arma', 'assets/images/gun.png', 40,40);
    game.load.image('mira', 'assets/images/mira.png', 10,10);
    game.load.image('bullet', 'assets/images/bullets.png', 52,14);
    game.load.bitmapFont('letra', 'assets/Font/arcade.png', 'assets/Font/arcade.fnt');
    game.load.spritesheet('player', 'assets/images/player.png', 150,200);
    game.load.spritesheet('Boss', 'assets/images/boss.png', 196 ,266);//Murillo mudei para a Catharina
    game.load.spritesheet('bat', 'assets/images/bat.png', 250,210);//Murillo, mudei para ficar o morcego no lugar da box
	game.load.spritesheet('enemy', 'assets/images/enemy.png', 210,217);//Murillo, adicionei os enemy/Ghoul
	game.load.spritesheet("caixa", "assets/images/caixa.png", 79, 87);//Murillo, adicionei o "ataque/caixa"
    game.load.spritesheet('vida', 'assets/images/vida.png', 91,91);
	game.load.spritesheet("espaco","assets/images/espaço.png",250,50);//Murillo, adiciona o botão espaço
	game.load.spritesheet("space","assets/images/espaço2.png",250,50);//Murillo, adiciona o botão espaço ing
	game.load.spritesheet("setas","assets/images/setas.png", 160,100);//Murillo, adiciona o botão setas
	game.load.spritesheet("brasil","assets/images/brasil.png", 24, 12);//Murillo, adiciona botão brasil(idioma português)
	game.load.spritesheet("eua", "assets/images/eua.png", 24,12);//Murillo, adiciona botão eua (idioma inglês)
	game.load.spritesheet("gameover", "assets/images/gameover.png", 500,150);//Murillo, adiciona game over
	game.load.spritesheet("play", "assets/images/play.png",100,57);//Murillo, adiciona botão play
	game.load.spritesheet("jogar", "assets/images/jogar.png", 100,57);//Murillo, adiciona botão play(inglês)
	game.load.spritesheet("tutorial1", "assets/images/tutorial.png", 100,57)//Murillo, adiciona botão tutorial português
	game.load.spritesheet("tutorial2", "assets/images/tutorial.png", 100,57)//Murillo, adiciona botão tutorial inglês
	game.load.spritesheet("voltar","assets/images/voltar.png", 100,57);//Murillo, adiciona botão voltar
	game.load.spritesheet("return","assets/images/return.png", 100,57);//Murillo, adiciona botão voltar	
	game.load.spritesheet("pronto","assets/images/pronto.png", 500, 150);//Murillo, adiciona "pronto?"
    game.load.spritesheet("cenas", "assets/images/cenas.png",800,600);
    game.load.audio('musicaBg', ['assets/audio/musica.ogg', 'assets/audio/musica.mp3']);
    game.load.audio('musicaMenu', ['assets/audio/titulo.ogg', 'assets/audio/titulo.mp3']);
    game.load.audio('surgeBoss', ['assets/audio/surgir.ogg', 'assets/audio/surgir.mp3']);
    game.load.audio('derrotaEnd', ['assets/audio/derrota.ogg', 'assets/audio/derrota.mp3']);
    game.load.audio('batalha', ['assets/audio/batalha.ogg','assets/audio/batalha.ogg']);
    game.load.audio('disparo','assets/audio/disparo.wav');            
        

    },
    create: function(){ 
        musicaMenu = game.add.audio ('musicaMenu'); 
        musicaMenu.play()
        musicaMenu.loopFull(0.9);
        this.time.events.add(Phaser.Timer.SECOND * 1.5, this.start, this);
        
    },

    start: function(){
      //  if (this.cache.isSoundDecoded('musicaMenu'));

        this.state.start('Menu');
        
    },
    
}