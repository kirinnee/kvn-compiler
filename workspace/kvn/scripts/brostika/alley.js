let alleyscene =  new Scene("brostika_alley",
[new Frame(function(){
	brostika.bringCharacter(charles);
	brostika.bringCharacter(sophie);
	brostika.bringCharacter(tristan);
	brostika.display(null,1,0,function() {
		brostika.changeBackground('alley',1,800,function() {
			brostika.displayText('--Village of Brostika--',400,null,null,true,'2.5vw','white');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.setTextColor('white');
	charles.setTextColor('white');
	tristan.setTextColor('white');
	tristan.changeName('???');
	tristan.setFontSize('2.0vw');
	tristan.changeBold();
	charles.preMove(5);
	sophie.preMove(5);
	charles.animate();
	sophie.animate(null,function() {
		sophie.changeSprite('default',function() {
			sophie.appear(500);
			charles.appear(500);
			sophie.changeSprite('curious_speak');
			charles.changeSprite('serious');
			sophie.preSpeak(function() {
				sophie.speak('Turn left into the alley... and-');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	footsteps.play();
	footsteps.rate(0.75);;
	footsteps.fadeIn(2000);
		charles.changeSprite('mildtakenaback');
		sophie.changeSprite('surprised');
		charles.wait(1000,function() {
			charles.preSpeak(function() {
				charles.setFontSize('1.2vw');
				charles.setItalic();
				charles.changeSprite('serious_speak');
				charles.speak('Someone\'s coming...',function() {
					sophie.changeSprite('scared');
					charles.changeSprite('serious');
				});
			});
		});
}, function(){return null})
,new Frame(function(){
	tristan.appear(null,function() {
		brostika.wait(425,function() {
			charles.setNormalText();
			charles.setFontSize('1.7vw');
			charles.changeSprite('serious_speak');
			charles.speak('Careful!');
		});
		tristan.move(-20,null,1000,function() {
			footsteps.stop();
		},easeOut,false);
		charles.bringToFront(function() {
			sophie.wait(675,function() {
				sophie.move(-5,null,100);
			});
			charles.wait(550,function() {
				charles.move(5,null,150,function() {
					charles.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.setFontSize('1.35vw');
	tristan.changeSprite('struggle_speak');
	tristan.preSpeak(function() {
		tristan.speak('H-',function() {
			tristan.wait(400,function() {
				tristan.contSpeaking('Help...',null,null,null,null,false);
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	tristan.speak('Arachne...!',function() {
		tristan.changeSprite('struggle');
	},1000);
}, function(){return null})
,new Frame(function(){
	sophie.disappear(100);
	tristan.disappear(100);
	charles.disappear(100);
	brostika.unDisplay(100,function() {
		brostika.closeTextBox();
	});
}, function(){return null})
]);