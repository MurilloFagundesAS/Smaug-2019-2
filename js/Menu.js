Modelo.Menu = function(game){}

Modelo.Menu.prototype={
    create:function(){

		
        this.menu = this.add.image(400, 300, 'menu');
        this.menu.anchor.setTo('0.5');

		jogar = this.add.button(400, 320, "jogar", this.Iniciar, this, 2,1,0);//Murillo, adiciona botão clicavel "play"
		jogar.scale.setTo(1.5);
		jogar.anchor.setTo(.5);
		
		tutorial1 = this.add.button(400, 420, "tutorial1", this.Turorial1, this, 2,1,0);//Murillo, adiciona botão "tutorial"
		tutorial1.scale.setTo(1.5);
		tutorial1.anchor.setTo(.5)		
		
		brasil = this.add.button(766, 22, "brasil", this.Portugues, this, 1,0,2);//Murillo adiciona botão idioma pt
		brasil.scale.setTo(2);
		brasil.anchor.setTo(.5);
		
		eua = this.add.button(702,22,"eua", this.Ingles, this, 1,0,2);//Murillo, adiciona botão idioma inglês
		eua.scale.setTo(1.5);
		eua.anchor.setTo(.5);	
    },
	update: function(){

	},
	Iniciar: function(){//função do botão "play"
		//Murillo, pausa a musicaMenu
		this.state.start('Cutscene');
	},
	Portugues: function(){//fução botão idioma portugues
		
		jogar = this.add.button(400, 320, "jogar", this.Iniciar, this, 2,1,0);//Murillo, adiciona botão clicavel "play"
		jogar.scale.setTo(1.5);
		jogar.anchor.setTo(.5);
		
	},
	Ingles: function(){//Murillo, para fazer o jogo inglês, é só fazer outro Estado, copia do original, só q com foto das palavras em inglês, bem facil
		play = this.add.button(400, 320, "play", this.Iniciar, this, 2,1,0);//Murillo, adiciona botão clicavel "play"
		play.scale.setTo(1.5);
		play.anchor.setTo(.5);
		
		tutorial2 = this.add.button(400, 420, "tutorial2", this.Turorial2, this, 2,1,0);//Murillo, adiciona botão "tutorial"
		tutorial2.scale.setTo(1.5);
		tutorial2.anchor.setTo(.5)	
	},
	Turorial1: function(){
		this.MenuTutorial1 = this.add.image(400, 300, 'menututorial');
        this.MenuTutorial1.anchor.setTo('0.5');		
		
		voltarTutorial = this.add.button(10, 10, "voltar", this.create, this, 1,0,2);//Murillo adiciona botão voltar pt
		voltarTutorial.scale.setTo(.7);
		
		//Murillo, adiciona e configura os sprites/animações dos controles/Tutoriais
		abaixando = this.add.sprite(100, 320, "player");
		abaixando.anchor.setTo(.5);
		abaixando.scale.setTo(.5);
		abaixando.animations.add("abaixar",[0,1,7], 5, true);
		abaixando.animations.play("abaixar");

		setaBaixo = this.add.sprite(100, 450, "setas");
		setaBaixo.anchor.setTo(.5);
		setaBaixo.scale.setTo(1);
		setaBaixo.animations.add("clicaBaixo",[0,4], 3, true);
		setaBaixo.animations.play("clicaBaixo");
		
		pulando = this.add.sprite(700, 320, "player");
		pulando.anchor.setTo(.5);
		pulando.scale.setTo(.5);
		pulando.animations.add("pular",[1,2,3,4, 6,5], 5, true);
		pulando.animations.play("pular");
		
		setaCima = this.add.sprite(700, 450, "setas");
		setaCima.anchor.setTo(.5);
		setaCima.scale.setTo(1);
		setaCima.animations.add("clicaCima",[0,3], 2, true);
		setaCima.animations.play("clicaCima");
		
		correndo = this.add.sprite(400, 400, "player");
		correndo.anchor.setTo(.5);
		correndo.scale.setTo(.5);
		correndo.animations.add("pular",[1,2,3,4], 5, true);
		correndo.animations.play("pular");
		
		setaDirEsq = this.add.sprite(400, 530, "setas");
		setaDirEsq.anchor.setTo(.5);
		setaDirEsq.scale.setTo(1);
		setaDirEsq.animations.add("clicaDirEsq",[0,1,2], 2, true);
		setaDirEsq.animations.play("clicaDirEsq");
		
	},
	Turorial2: function(){
		this.MenuTutorial2 = this.add.image(400, 300, 'menututorial');
        this.MenuTutorial2.anchor.setTo('0.5');		
		
		returnTutorial = this.add.button(10, 10, "return", this.create, this, 1,0,2);//Murillo adiciona botão voltar pt
		returnTutorial.scale.setTo(.7);

		//Murillo, adiciona e configura os sprites/animações dos controles/Tutoriais
		abaixando = this.add.sprite(100, 320, "player");
		abaixando.anchor.setTo(.5);
		abaixando.scale.setTo(.5);
		abaixando.animations.add("abaixar",[0,1,7], 5, true);
		abaixando.animations.play("abaixar");

		setaBaixo = this.add.sprite(100, 450, "setas");
		setaBaixo.anchor.setTo(.5);
		setaBaixo.scale.setTo(1);
		setaBaixo.animations.add("clicaBaixo",[0,4], 3, true);
		setaBaixo.animations.play("clicaBaixo");
		
		pulando = this.add.sprite(700, 320, "player");
		pulando.anchor.setTo(.5);
		pulando.scale.setTo(.5);
		pulando.animations.add("pular",[1,2,3,4, 6,5], 5, true);
		pulando.animations.play("pular");
		
		setaCima = this.add.sprite(700, 450, "setas");
		setaCima.anchor.setTo(.5);
		setaCima.scale.setTo(1);
		setaCima.animations.add("clicaCima",[0,3], 2, true);
		setaCima.animations.play("clicaCima");
		
		correndo = this.add.sprite(400, 400, "player");
		correndo.anchor.setTo(.5);
		correndo.scale.setTo(.5);
		correndo.animations.add("pular",[1,2,3,4], 5, true);
		correndo.animations.play("pular");
		
		setaDirEsq = this.add.sprite(400, 530, "setas");
		setaDirEsq.anchor.setTo(.5);
		setaDirEsq.scale.setTo(1);
		setaDirEsq.animations.add("clicaDirEsq",[0,1,2], 2, true);
		setaDirEsq.animations.play("clicaDirEsq");		
	}
}