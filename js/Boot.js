var Modelo = {
};

Modelo.Boot = function(game){}

Modelo.Boot.prototype={
    preload:function(){
         
        game.load.image('carregando','assets/images/menu.png');
    },
    create:function(){
        this.physics.startSystem(Phaser.Physics.ARCADE);
                
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        
        this.state.start('Preloader');
    }
}