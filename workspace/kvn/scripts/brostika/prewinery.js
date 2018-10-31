window.Qns = new Options('Actually, why can\'t Princess Sophie just reveal her identity? Wouldn\'t that solve the problem?','Qns',function() {
	return false;
});
let prewinery =  new Scene("prewinery",
[new Frame(function(){
	brostika.bringCharacter(charles);
	charles.setTextColor('white');
	charles.preMove(15);
	brostika.display(0,null,0,function() {
		brostika.changeBackground('alley',1,1000);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('sad_speak');
	charles.appear(1000,function() {
		charles.preSpeak(function() {
			charles.speak('Sighh...',function() {
				charles.wait(500,function() {
					charles.speak('I can\'t believe our luck!');
				});
			},1000,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('disgusted_speak');
	charles.scale(1.1,1.1,200,null,null,false);
	charles.speak('Who would have expected the Princess to be locked up?',function() {
		charles.wait(400,function() {
			charles.changeSprite('impatient_speak');
			charles.speak('And being accused of murder,',function() {
				charles.wait(100,function() {
					charles.contSpeaking('of all things!');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.scale(1/1.1,1/1.1,200,null,null,false);
	charles.changeSprite('gazeindistance_speak');
	charles.speak('So much has happened in such a short time...');
}, function(){return null})
,new Frame(function(){
	charles.speak('First, Mistrassimo pulls his coup');
}, function(){return null})
,new Frame(function(){
	charles.speak('Then now, we are labeled as killers!',function() {
		brostika.displayOption([Qns]);
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('You see,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('it was not easy escaping from the castle.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(null,200);
	charles.speak('En route to Kroigren, we had our fair share of betrayals, from persons we thought were trustworthy.');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('There were countless occasions when we were almost handed to Mistrassimo by local officials or the Guards...');
}, function(){return null})
,new Frame(function(){
	charles.move(-15,null,1000,null,null,false);
	charles.changeSprite('worried_speak');
	charles.speak('It appears that Mistrassimo\'s supporters have deeply infiltrated all levels of society.',function() {
		charles.wait(400,function() {
			charles.flipHorizontally(null,200);
			charles.speak('Many whom we believed we could trust have probably received bribes or threats from Mistrassimo.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('Even if Captain Yusie is not an enemy and is simply doing her job,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('we can never be sure about her involvement in the greater scheme of things.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.move(15,null,1000,null,null,false);
	charles.speak('In fact, she might not even know if she was actually being manipulated via orders from her superior.');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('That\'s why both Princess Sophie and I have the understanding that there\'s a real and important need for us to lie low and avoid revealing our identity.');
}, function(){return null})
,new Frame(function(){
	charles.speak('Besides,',function() {
		charles.wait(150,function() {
			charles.contSpeaking('Sophie has never used her title or her position to impose her will or wishes on others.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('The princess hopes to respect the rules or the way things run as they are.');
}, function(){return null})
,new Frame(function(){
	charles.speak('She never wanted to be treated differently from others her age.');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('gazeindistance_speak');
	charles.move(15,null,1000,null,null,false);
	charles.speak('I remember hearing rumours about the princess when I first entered the castle.');
}, function(){return null})
,new Frame(function(){
	charles.speak('They spoke of an unreasonable child who would throw her title \'Princess\' around.');
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.speak('In truth, Sophie was no such girl.');
}, function(){return null})
,new Frame(function(){
	charles.flipHorizontally(null,200,null,false);
	charles.speak('She was one of the most good natured kids I\'d ever met.');
}, function(){return null})
,new Frame(function(){
	charles.speak('It turns out all this stemmed from an incident where she used her title to threaten some playmates who took her toys.');
}, function(){return null})
,new Frame(function(){
	charles.move(-15,null,1000,null,null,false);
	charles.speak('It was but a small issue but word spreads fast.',function() {
		charles.wait(400,function() {
			charles.speak('The princess soon realized many of her playmates started to distance themselves from her as though she was a monster.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('They were all scared of her,',function() {
		charles.wait(400,function() {
			charles.flipHorizontally(null,200,null,false);
			charles.speak('and stopped viewing her as a peer.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('sad_speak');
	charles.speak('The loneliness stung,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('and Sophie learnt the importance of not misusing one\'s authority.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('explain');
	charles.scale(1.1,1.1,200,null,null,false);
	charles.speak('She recognized that being a Princess can be more of a curse at times,',function() {
		charles.wait(400,function() {
			charles.contSpeaking('and that she would have to respect rules, systems and etiquette in order to get respect and goodwill in return.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.speak('I personally think she longs to be a normal person instead.',function() {
		charles.wait(400,function() {
			charles.speak('The pressure of being a royalty is not easy at all...');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.speak('That\'s why she would never reveal her identity to Captain Yusie or anyone else.');
}, function(){return null})
,new Frame(function(){
	charles.speak('She wants to be treated as normal and dignified person,',function() {
		charles.wait(400,function() {
			charles.speak('and avoid destroying protocol and legislation built because of her royalty status.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('sad_speak');
	charles.speak('That\'s why I was quite apprehensive about leaving Princess Sophie in the bastille alone,',function() {
		charles.wait(500,function() {
			charles.speak('I was worried that she might continue to conceal her identity even when times have turned critical.');
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('serious_speak');
	charles.move(1/1.1,1/1.1,200,null,null,false);
	charles.speak('I guess there\'s not much we can do except to hasten our footsteps and find Mr. Broski before any mishap can happen...');
}, function(){return null})
]);