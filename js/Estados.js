var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');

game.state.add('Boot', Modelo.Boot);
game.state.add('Preloader', Modelo.Preloader);
game.state.add('Menu', Modelo.Menu);
game.state.add('Cutscene', Modelo.Cutscene);
game.state.add('Play', Modelo.Play);
game.state.add('End', Modelo.End);

game.state.start('Boot');