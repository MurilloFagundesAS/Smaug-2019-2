Modelo.Cutscene = function(game){}

Modelo.Cutscene.prototype={
    create:function(){
		cenas = game.add.sprite(game.world.centerX, game.world.centerY,'cenas')
		cenas.anchor.setTo(.5)
		cenas.scale.setTo(1);
		
		cenas.animations.add('proximo', [0,1,2,3,4,5], 1, false);
		cenas.animations.currentAnim.speed = .4

		game.time.events.repeat(Phaser.Timer.SECOND * 15, 1, this.jogo, this)
    },
	update: function(){
		cenas.animations.play('proximo');
	},
jogo: function(){
	musicaMenu.pause();
	this.state.start('Play');
}
		
		//game.state.start('Menu');
	
}