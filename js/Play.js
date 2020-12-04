Modelo.Play = function(game){}
var vidas = 3;
var vidasBoss = 3;
var vidasTxt;
var lifeLostTxt;
var cor = { font: "bold 25px Arial", fill: "#ff0000"};//Murillo, aumentei o tamanho da fonte
var pontos = 0;//Murillo, criei a variavel pontos
var nivel = 2;
var ammo = 0;
var bullets;


var fireRate = 430;
var nextFire = 0;

Modelo.Play.prototype={

    
create:function(){
    
  
                    //SOM
	//musicaMenu.stop();					//Murillo, tirei a POHA DESSA MUSICA CARALHENTA
	musicaBg = game.add.audio ('musicaBg');
    musicaBg.play();
    musicaBg.loopFull(0.4);
    
   // surgeBoss = game.add.audio ('surgeBoss');// - Murillo, adicionei a musica de "entrada" da Boss
    batalha = game.add.audio ('batalha'); 
                    //fundo
    bg = game.add.tileSprite(0, -10, 800, 600, 'bg');
    bg0 = game.add.tileSprite(0,200,800,300,'bg0');
                //som da arma
    disparo = game.add.sound('disparo',[0.2]);
    
       
    

    
                
                //player
    player = game.add.sprite(50,530, 'player', 0);//Murillo, mudei aqui
    player.anchor.setTo(.5);  
    player.scale.setTo(.4); // tamanho do personagem em porcentagem da sua imagem original. Murillo, mexi aqui	
    
    vida1 = game.add.sprite(125,25, 'vida',0)
    vida1.anchor.setTo('.5');
    vida1.scale.setTo(.4);
    vida2 = game.add.sprite(75,25, 'vida',0)
    vida2.anchor.setTo('.5');
    vida2.scale.setTo(.4);
	vida3 = game.add.sprite(25,25, 'vida',0)//Murillo, adicionei outra vida
    vida3.anchor.setTo('.5');
    vida3.scale.setTo(.4);

                //Power-up
    arma = game.add.sprite(400,600,'arma',0);
    /*arma.anchor.setTo('.5');
    arma.scale.setTo(0.1,0.1);
    arma.checkWorldBounds = true;
    arma.outOfBoundsKill = true;
    arma.visible = true; */ 
            
    mira = game.add.sprite(300, 300,'mira',0);
    mira.anchor.setTo('.5');
    mira.scale.setTo(.3,.3);
    mira.visible = false;   

    muniçao1 = game.add.sprite(25,67, 'muniçao', 0)
    muniçao1.anchor.setTo('.5');
    muniçao1.scale.setTo(.6,.6);
    muniçao1.visible = false;
    muniçao2 = game.add.sprite(45,67, 'muniçao', 0)
    muniçao2.anchor.setTo('.5');
    muniçao2.scale.setTo(.6,.6);
    muniçao2.visible = false;
    muniçao3 = game.add.sprite(65,67, 'muniçao', 0)
    muniçao3.anchor.setTo('.5');
    muniçao3.scale.setTo(.6,.6);
    muniçao3.visible = false;
    muniçao4 = game.add.sprite(85,67, 'muniçao', 0)
    muniçao4.anchor.setTo('.5');
    muniçao4.scale.setTo(.6,.6);
    muniçao4.visible = false;
    muniçao5 = game.add.sprite(105,67, 'muniçao', 0)
    muniçao5.anchor.setTo('.5');
    muniçao5.scale.setTo(.6,.6);
    muniçao5.visible = false;
    muniçao6 = game.add.sprite(125,67, 'muniçao', 0)
    muniçao6.anchor.setTo('.5');
    muniçao6.scale.setTo(.6,.6);
    muniçao6.visible = false;
   
    bullets = game.add.group();
    bullets.enableBody = true;

    bullets.createMultiple(50, 'bullet');
    bullets.setAll('checkWorldBounds', true);
    bullets.setAll('outOfBoundsKill', true);
    
    game.time.events.loop(Phaser.Timer.SECOND*8, this.powerUp, this);


                //Boss
	Boss = game.add.sprite(300,-49, "Boss");//Murillo, add Boss
	Boss.anchor.setTo(.5);
	Boss.scale.setTo(.4);
	Boss.visible = false;
	Boss.animations.add("fly", [0,1], 10, true);
   /* box = game.add.sprite(700,325, 'box', 0);
    box.anchor.setTo('0.5');
    box.scale.setTo(0.4,0.4); */
    /*Boss = game.add.sprite(100,100,'Boss', 0);
    Boss.anchor.setTo('.5');
    Boss.scale.setTo(1);
    Boss.visible = false;*/
    
    

       
    
        
                //inputs
    player.animations.add('andarF',  [1,2,3,4], 10, true) ;
    player.animations.add('andarArma', [9,10,11], 10, true);

    espaco = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);//Murillo, ataque
		//player.animations.add('atk', [4], 10, false);

    //keyDown = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);//Murillo, mudei para o player novo
		player.animations.add('escorregar', [7], 10, false);
  
    //keyUp = game.input.keyboard.addKey(Phaser.Keyboard.UP); //MURILLO, NÃO TEM SPRITE DE ATAQUE AINDA
    this.cursors = this.input.keyboard.createCursorKeys();
	
                //cenario
    plataforma = game.add.tileSprite(200,590, 1200,45, 'plataforma');
    plataforma.anchor.setTo('.5');
    plataforma.scale.setTo(2,1);

    
        //FISICA
    
    game.physics.enable([player, plataforma, arma, bullets]); 
    //box.body.collideWorldBounds = true; //colisao com as bordas
  /*  box.body.checkWorldBounds = true; 
    box.body.outOfBoundsKill = true;*/
    //arma.body.setSize(100,600, 0, 200);
    player.body.setSize(170,180, 0, 10);
    player.body.gravity.y = 1500;
	player.body.collideWorldBounds = true;
    //player.body.setSize(14, 5, 122, 244);//Murillo, madicionei body.SetSize

    plataforma.body.immovable = true;   
                            //UI
    //vidasTexto = game.add.text(10,8, 'Vidas ', cor);//Murillo, tirei a palavra vidas
    //vidasText = game.add.text(88, 8, 'Vidas: '+vidas, cor);
    //vidasText.anchor.set(1,0);
    //vidasText.visible = false;

    lifeLostText = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Você Perdeu', cor);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;
    distancia = 0;
	distanciaImage = game.add.image(300,8, "distancia");
    distaciaText = game.add.text(400, 9, /*"Distacia: "*/ + distancia, cor);// mudar a fonte - Murillo, deixei só o número

    
                //gerar inimigos
  //  var timerEventRNDInimigos = this.time.events.loop(1000, this.inimigoRND, this);//Murillo, criei esse loop pra fazer o aleatorio dos inimigos, usa pra gerar os consumiveis também
	
	this.Enemies = this.add.group()//gera Enemy/Ghoul
    this.Enemies.createMultiple(20, 'enemy');
    this.physics.enable(this.Enemies);
    for(i = 0; i<1; i++)
        this.novoEnemy(i);
    
	var timerEventEnemy = this.time.events.loop(2450, this.novoEnemy, this);
        
    this.batsAlto = this.add.group()
    this.batsAlto.createMultiple(20, 'bat');
    this.physics.enable(this.batsAlto);
    for(i = 0; i<1; i++)
        this.novoBatAlto(i);
    
	var timerEventBatAlto = this.time.events.loop(1850, this.novoBatAlto, this);//Murillo, dividi os morcego em 2 grupos distintos por causa de um bug

    /*this.batsBaixo = this.add.group()
    this.batsBaixo.createMultiple(20, 'bat');
    this.physics.enable(this.batsBaixo);
    for(i = 0; i<1; i++)
        this.novoBatAlto(i);
    
	var timerEventBatBaixo = this.time.events.loop(3000, this.novoBatBaixo, this);*/

    this.bombas = this.add.group()
    this.bombas.createMultiple(1, 'caixa');
    this.physics.enable(this.bombas);
    for(i = 0; i<1; i++)
        this.Contagem(i);
    	
	var timerEventContagem = this.time.events.loop(2000, this.Contagem, this);//Murillo, mudei o jeito de contar pra seguir um tempo certinho (acrescenta 10 a casa 1 seg)

                //Pause
   window.onkeydown = function() {
    if (game.input.keyboard.event.keyCode == '13'){
        game.paused = !game.paused;
        if (game.paused == true){
        Pause = game.add.image(game.world.centerX, game.world.centerY, 'pause');
            //Pause = game.add.text(game.world.centerX, game.world.centerY, "JOGO PAUSADO", cor);
        Pause.anchor.set(0.5, 0.5);
        Pause.scale.setTo(1.3,1.3);                   
    }
    else{
        Pause.destroy();
    }
 }
}



},


  
Contagem:function(){//Murillo, contagem nova
	distancia+=10;
	pontos+=10;
},

repeteAtaque:function(){//Murillo, aleatorio do Boss, ele vai para um ponto e solta um ataque
	if(vidasBoss>0)
	var positionX = this.rnd.pick ([1,2,3]);
	
		if(positionX==1){
			game.physics.arcade.moveToXY(Boss, 100, 250, 10, 1000);
			this.time.events.repeat(3000, 1, this.ataqueBoss, this);
		}
		if(positionX==2){
			game.physics.arcade.moveToXY(Boss, 700, 270, 10, 1000);
			this.time.events.repeat(3000, 1, this.ataqueBoss, this);
		}
		if (positionX==3){
			game.physics.arcade.moveToXY(Boss, 400, 300, 10, 1000);
			this.time.events.repeat(3000, 1, this.ataqueBoss, this);
		}
		//var timerEventBoss = this.time.events.add(0, this.ataqueBoss, this);//Murillo, chama o ataque da Boss
		//timedEvent.reset({delay: Phaser.Math.Between(100,5000), callback:repeteAtaque, callbackScope:this, repeat:1});
		//game.physics.arcade.moveToXY (sprite, 126, 160, speed);		
	/*var posicao = [//Murillo, posições do Boss
		{x:200,y:300},
		{x:300,y:300},
		{x:400,y:300},
		{x:500,y:300},
		{x:600,y:300}
	];
		
	this.Boss.moveTo(posicao.x, posicao.y);
	//let rndPosition = posicao[Math.floor(Math.random()*3}];
	//Boss.position.x = rndPosition[0];
	//Boss.position.y = rndPosition[1];*/
},

ataqueBoss:function(dir){//Murillo, fiz o ataque do boss
	if (vidasBoss >0 && Boss.visible==true){
        var bomba = this.bombas.getFirstDead();
        if (!bomba)
            return; 
		
       	//bomba = game.add.sprite(Boss.position.x, Boss.position.y, "Boss");
        bomba.anchor.setTo(.5);
        bomba.scale.setTo(1.3);
        bomba.animations.add('atk', [0,1,2], 10, true);
		
        bomba.animations.play('atk');
        bomba.body.gravity.y = 500;
		bomba.body.gravity.x = this.rnd.pick ([-100, -200, -300, 100, 200, 300]);
		bomba.body.collide = true;
        bomba.checkWorldBounds = true;
        bomba.outOfBoundsKill = true;
        bomba.rotation = this.game.physics.arcade.moveToObject(bomba, Boss, 500);	
        bomba.reset(Boss.position.x, Boss.position.y);
}},
inimigoRND:function(){//Murillo, aleatorio dos inimigos, da pra usar nos consumiveis também, só acrescentar outro if com uma var de tempo, q nem as que estão ai
	var rndInimigo = this.rnd.pick ([1,2,3,4,5]);//Murillo, quanto mais numeros, menos chance de aparecer inimigos, e menos chance de vir 2 morcegos, não possibilitando o jogador desviar
	
	if(rndInimigo==1){
		var timerEventEnemy = this.time.events.add(2932, this.novoEnemy, this);//Murillo, tempo diferente é ruim, buga
	}
	if(rndInimigo==2){
		var timerEventBatAlto = this.time.events.add(5147, this.novoBatAlto, this); 
	}
	if(rndInimigo==3){
		var timerEventBatBaixo = this.time.events.add(1000, this.novoBatBaixo, this);	
	}
},
novoBatAlto:function(dir){//Murillo, separei os morcego pra não bugar
        var batAlto = this.batsAlto.getFirstDead();
        if (!batAlto)
            return; 
        
        batAlto.anchor.setTo(.5);
        batAlto.body.gravity.x = -500;
        batAlto.body.collide = true;
        batAlto.body.setSize(200,117, 0, 70);
        batAlto.checkWorldBounds = true;
        batAlto.outOfBoundsKill = true;
        batAlto.scale.setTo("0.2");
		batAlto.animations.add("voar", [2,1,3], 7, true);//Murillo - add animação do morcego/box
		batAlto.animations.play("voar");//Murillo - animação de voar


        if(dir == undefined)
           
        batAlto.reset(800,480);
        batAlto.body.velocity.x -=1.3;  
},

novoEnemy:function(dir){//Murillo, adicionei o Ghoul
        var Enemy = this.Enemies.getFirstDead();
        if (!Enemy)
            return; 
        
        Enemy.anchor.setTo(.5);
        Enemy.body.gravity.x = -100;
        Enemy.body.collide = true;
        Enemy.body.setSize(150,165, 20, 38);
        Enemy.checkWorldBounds = true;
        Enemy.outOfBoundsKill = true;
        Enemy.scale.setTo(.4);
		Enemy.animations.add("atacar", [2,1,3], 7, true);//Murillo - add animação do enemy
		Enemy.animations.play("atacar");//Murillo - animação de atacar
        
        
        if(dir == undefined)
              
        Enemy.reset(800,525);
        Enemy.body.velocity.x -=1;
},
powerUp: function(){
    // arma = game.add.sprite(400,100,'arma',0);
     arma.anchor.setTo('.5');
     arma.scale.setTo(0.4,0.4);
     arma.checkWorldBounds = true;
     arma.outOfBoundsKill = true;
     arma.reset(800,555)
    
 },


update:function(){
   // this.bomba.animations.play('atk');
   
    if(mira.visible==false){player.animations.play('andarF');}

	mira.x = game.input.mousePointer.x;
    mira.y = game.input.mousePointer.y;
    
    if (game.input.activePointer.isDown &&  ammo >0 &&player.visible==true)// MUDAR PARA player.animations('comArma') == true
    {
       
        fire();
        
        
    } 

    function fire() {
      
        if (game.time.now > nextFire && bullets.countDead() > 0)
        {
            nextFire = game.time.now + fireRate;
    
            var bullet = bullets.getFirstDead();
    
            bullet.anchor.setTo(.5);

            bullet.scale.setTo(.4)

            bullet.reset(player.x + 20, player.y - 7);
            
            bullet.rotation = this.game.physics.arcade.moveToObject(bullet, mira, 500);

            disparo.play();
            
            game.physics.arcade.moveToPointer(bullet, 300);
            ammo --;
            if (ammo == 5){
                muniçao6.kill();
            }
            if(ammo==4){
                muniçao5.kill();
            }
            if(ammo==3) {
                muniçao4.kill();
            }
            if(ammo==2) {
                muniçao3.kill();
            }
            if(ammo==1) {
                muniçao2.kill();
            }
            if(ammo==0) {
                muniçao1.kill();
                mira.visible = false;
                
            }
        }}
    distaciaText.text = ' '+distancia;   
    
   arma.body.velocity.x -=1.3 
   
   plataforma.tilePosition.x -= 1.8
    bg.tilePosition.x -= .8 // mapa anda continuamente
    bg0.tilePosition.x -= 2   
   // this.cameras.main.startFollow(this.player);   
            //inimigos
 //   box.body.velocity.x -= 1.5;
    //Murillo, adicionei colisões e overlaps
    game.physics.arcade.collide(player, plataforma, ); //fisica
	game.physics.arcade.collide(plataforma, this.Enemies, );
    game.physics.arcade.collide(bullets, this.Enemies, quebraEnemy );
    game.physics.arcade.collide(bullets, this.batsAlto, mataBat);
    game.physics.arcade.overlap(bullets, Boss, mataBoss);
    game.physics.arcade.overlap(player, this.batsAlto, mataPlayerAlto);
    
    game.physics.arcade.overlap(player, arma, poder);
	game.physics.arcade.overlap(player, this.bombas, acertaBomba);
	game.physics.arcade.overlap(plataforma, this.bombas, quebraBomba);
	
	game.physics.arcade.overlap(player, this.Enemies, mataPlayerEnemy);
   
   
     // animacao de andar
	
    //Boss.animations.play("voando");//animação voando da boss
	
    /*if (espaco.isDown && player.body.touching.down){ //pulo
		player.body.velocity.y = -500;
        
    } 
     
    if(S.isDown){   //deslizar
        //var timerEvent = this.time.events.loop(2000, this.playerDeslizar, this);

        player.frame = 7;
        
        }
   
    if(A.isDown){ // ataque
        player.frame = 4;//MURILLO, NÃO TEM FRAME DE ATAQUE AINDA
    }
    
    
    if(!player.body.touching.down){ //frame pulo
		player.frame = 5; //Murillo, mudei para o do player novo
	}*/
		
        if(this.cursors){//MURILLO, FICA MELHOR COM OS CURSORES PRA MOVER E O SPACE PRA ATACAR, NÃO MUDA, VAI POR MIM Q VC PASSA DE ANO
            if(this.cursors.left.isDown) {
                player.body.velocity.x = -200; 
            }
            else
			if(this.cursors.right.isDown) {
                player.body.velocity.x = 200;
            }
			else{
				player.body.velocity.x = 0;
			}
			if(this.cursors.down.isDown){
               player.frame = 7;
                
			}
			else
            if(this.cursors.up.isDown && player.body.touching.down){
                player.body.velocity.y = -565;
            }
        }
	if(!player.body.touching.down){ //frame pulo
		player.frame = 5; //Murillo, mudei para o do player novo*/
	}

    if(pontos==70){
	    musicaBg.fadeOut(1500);
        batalha.loopFull(0.4);

       // batalha.fadeIn(1500);
        
        Boss.visible = true;
		this.physics.enable(Boss);
		Boss.animations.play("fly");
		nivel++;
       // this.batsAlto.callAll('destroy');
       this.batsAlto.callAll('destroy');
		this.time.events.repeat(nivel*1000, 3, this.repeteAtaque, this);
		
		
				
	}
	if(Boss.position.x<=90||Boss.position.x>=710){//Murillo, movimento da Boss buga um pouco, isso aq evita ela sair da tela
		Boss.body.velocity.x = 0;
    }


function quebraBomba(plataforma, bombas){//Murillo, não fui eu q pedi isso, foi o Jonathas, por mim as caixas/ataque da Boss ficada quicando q nem aquele poder de fogo do Mario Bros
	 bombas.kill();//O ataque quebra quando cai
}	
function acertaBomba(player, bombas){//Murillo, ataque do Boss mata o player
	 player.kill();
    
    if (vidas == 3){
        vida1.kill();
    }
	if(vidas==2){
		vida2.kill();
	}
	if(vidas==1) {
        vida3.kill();
    }     
	
	if (!player.body.alive ){
    vidas --; 
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, playerRespawn, this);
	}
}
function mataPlayerEnemy(player, Enemies){//Murillo, Ghoul mata o player
	player.kill();
	
	if (vidas == 3){
        vida1.kill();
    }
	if(vidas==2){
		vida2.kill();
	}
	if(vidas==1) {
        vida3.kill();
    }
  

         
 if (!player.body.alive ){
    vidas --; 
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, playerRespawn, this);
        // player.reset(player.body.x + 16, player.y - 16);

    }		
}
function quebraEnemy(bullets, Enemies){
        Enemies.kill();
        bullets.kill();
        distancia += 10;
        
}
function mataBat(bullets, batsAlto){
         batsAlto.kill();
         bullets.kill();
         distancia += 15;
}

function mataBoss(Boss, bullets){
   vidasBoss --;  
   flash();
   bullets.kill();
   if (vidasBoss == 0){
     Boss.kill();
     distancia += 100;
     batalha.fadeOut(1500);
     
     game.time.events.add(Phaser.Timer.SECOND * 1.6, voltaMusica, this);
    } 
        // volta();
//game.time.events.add(Phaser.Timer.SECOND * 1.6, volta, this);
}
function flash() {

    game.camera.flash(0xff0000, 500);

}
function voltaMusica (){
    musicaBg.play();
    musicaBg.volume = 0.4
   }    
/*function mataPlayerBaixo(player, batsBaixo) {
	player.kill();
	
    if (vidas == 3){
        vida1.kill();
    }
	if(vidas==2){
		vida2.kill();
	}
	if(vidas==1) {
        vida3.kill();
    }
   

         
 if (!player.body.alive ){
    vidas --; 
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, playerRespawn, this);
        // player.reset(player.body.x + 16, player.y - 16);

    }	
}*/
function mataPlayerAlto(player, batsAlto) {
	if(player.frame==7){
	player.reset(player.x, player.y);//Murillo, usei frame 7 pra desviar, é mais facil q usar o body.SetSize(esse buga), mas não aceitou um comando if vazio, então coloquei esse comando só pro player não morrer quando "abaixar"
	}
	else{
	player.kill();
	
    if (vidas == 3){
        vida1.kill();
    }
	if(vidas==2){
		vida2.kill();
	}
	if(vidas==1) {
        vida3.kill();
    }


         
 if (!player.body.alive ){
    vidas --; 
    game.time.events.repeat(Phaser.Timer.SECOND * 1, 1, playerRespawn, this);
        // player.reset(player.body.x + 16, player.y - 16);

    }	
}
}
function playerRespawn(){
    player.reset(50,521);
  
}
function poder(player, arma){
    arma.kill();

   if(muniçao1.visible == false){
        muniçao1.visible = true;}
   if(muniçao2.visible == false){
        muniçao2.visible = true;}
    if(muniçao3.visible == false){ 
        muniçao3.visible = true;}
    if(muniçao4.visible == false){ 
        muniçao4.visible = true;}
    if(muniçao5.visible == false){ 
        muniçao5.visible = true;}
    if(muniçao6.visible == false){ 
        muniçao6.visible = true;}


    ammo += 6;
    if(ammo>6){
        ammo=6;
    }
    player.animations.paused =true;
    player.animations.play('andarArma'); // COLOCAR AQUI A ANIMAÇAO DO PLAYER CORRENDO COM ARMA
    mira.visible = true
   
}
if(vidas == 0) {
    //musicaMenu.play();Murillo, tirei a música
    musicaBg.stop();
	batalha.pause();
    vidas +=3
	pontos =0
	distancia=0
	nivel=0
	this.state.start('End');	
}

},
/*render:function() {
    game.debug.soundInfo(batalha, 20, 32);
  //  game.debug.bodyInfo(player, 32, 32);

   // game.debug.body(player);
    game.debug.body(arma);
    //game.debug.body(Enemy);

}*/


}