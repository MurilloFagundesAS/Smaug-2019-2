Modelo.End = function(game){}

Modelo.End.prototype={
    create:function(){
        derrotaEnd = game.add.audio ('derrotaEnd');//Murillo - adiciona música do menu
		derrotaEnd.play();
		//derrotaEnd.loopFull(0.4);
		
        this.menu = this.add.image(400, 300, 'menu');
        this.menu.anchor.setTo('0.5');

		this.GameOver = this.add.sprite(400,300, "gameover", 0);//Murillo, adiciona e configura "gameover"
		this.GameOver.anchor.setTo(.5);
		this.GameOver.animations.add("piscar", [0,1,2], 10, true);		
		
		voltarMenu = this.add.button(400, 400, "voltar", this.voltaMenu, this, 1,0,2);//Murillo adiciona botão voltar
		voltarMenu.anchor.setTo(.5);
		voltarMenu.scale.setTo(1);
		

    },
	update: function(){
		this.GameOver.animations.play("piscar");
	},
	voltaMenu: function(){
		derrotaEnd.stop();
		this.state.start("Menu");
	},
    /*start: function(){
        
        this.state.start('Menu');
    }*/
}