let boriolsis_rejecthelp_4 =  new Scene("boriolsis_rejecthelp_4",
[new Frame(function(){
	boriolsis.bringCharacter(yusie);
	boriolsis.bringCharacter(slane);
	boriolsis.bringCharacter(charles);
	boriolsis.bringCharacter(chief);
	boriolsis.bringCharacter(halley);
	boriolsis.bringCharacter(sophie);
	boriolsis.bringCharacter(june);
	boriolsis.bringCharacter(deadBodyCG);
	boriolsis.bringCharacter(deadsophie);
	boriolsis.bringCharacter(wizard);
	yusie.setTextColor('white');
	charles.setTextColor('white');
	sophie.setTextColor('white');
	chief.setTextColor('white');
	halley.setTextColor('white');
	june.setTextColor('white');
	slane.setTextColor('white');
	slane.changeName('???');
	yusie.preMove(-70);
	yusie.setHorizontalFlip(true);
	charles.preMove(-13);
	sophie.preMove(27);
	june.preMove(-63);
	wizard.preMove(10);
	june.setHorizontalFlip(true);
	boriolsis.display(0,null,500,function() {
		boriolsis.setAnchorY(0);
		boriolsis.setAnchorX(0);
		boriolsis.scaleBackground(2,1,0,function() {
			boriolsis.changeBackground('forest',1,500,null,null,false);
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	sophie.changeSprite('curious');
	yusie.changeSprite('curious');
	june.changeSprite('serious');
	wizard.changeSprite('serious_speak');
	sophie.appear(1000);
	wizard.appear(1000);
	charles.appear(1000);
	june.appear(1000);
	yusie.appear(1000,function() {
		wizard.preSpeak(function() {
			wizard.speak('It’s a ritual that summons an immemorial legendary creature which resides in the divine realm');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.speak('But don\'t worry!',function() {
		wizard.wait(400,function() {
			wizard.speak('The summoning of the creature will not harm anyone');
		});
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('amazed');
	charles.changeSprite('mildtakenaback');
	june.changeSprite('surprised');
	yusie.changeSprite('surprised');
	wizard.speak('Because the creature lives in the divine realm, it has abilities that exceed our imaginative capacity');
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	charles.changeSprite('curious');
	sophie.changeSprite('curious');
	yusie.changeSprite('curious');
	wizard.speak('Once summoned, you can strike a deal with the creature to ask it for a favor');
}, function(){return null})
,new Frame(function(){
	wizard.speak('It was rumored that it had great powers that ranges from purging immense amounts of poison to scrying the future');
}, function(){return null})
,new Frame(function(){
	wizard.speak('However, I’m not sure if there will be any undesirable consequences that come along with the deal',function() {
		wizard.wait(400,function() {
			wizard.speak('More often than not, there\'s always an undesired byproduct');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.speak('I’ve never actually seen this legendary creature or heard of anyone summoning it before in this century');
}, function(){return null})
,new Frame(function(){
	wizard.speak('But from the text which my ancestors had handed down to me, it’s supposed to be a large flying whale');
}, function(){return null})
,new Frame(function(){
	wizard.speak('I\'m not sure if it\'s the same God that the Brostikans and Boriolsisians are praying',function() {
		wizard.wait(400,function() {
			wizard.speak('But apparently, it\'s supposed to be something like the Leviathan');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	wizard.speak('I really want to summon this legendary creature',function() {
		wizard.wait(400,function() {
			wizard.contSpeaking('so that I can pry into the future as a form of scrying',function() {
				wizard.changeSprite('serious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	june.changeSprite('surprised');
	yusie.changeSprite('surprised');
	sophie.changeSprite('amazed');
	charles.changeSprite('surprised_speak');
	charles.preSpeak(function() {
		charles.speak('Scrying the future?',function() {
			charles.wait(400,function() {
				charles.speak('Is there really such a thing?',function() {
					charles.changeSprite('curious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('awkward_speak');
	wizard.preSpeak(function() {
		wizard.speak('I know it’s unbelievable that the future is already predetermined',function() {
			wizard.wait(400,function() {
				wizard.changeSprite('serious_speak');
				wizard.speak('But trust me when my family has been practising this ritual for centuries',function() {
					wizard.changeSprite('serious');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('upset');
	june.changeSprite('serious');
	yusie.changeSprite('curious');
	sophie.changeSprite('curious');
	wizard.changeSprite('serious_speak');
	wizard.speak('Alright!',function() {
		wizard.wait(400,function() {
			wizard.speak('Any other questions?',function() {
				wizard.changeSprite('serious');
			});
		});
	});
}, function(){return null})
]);