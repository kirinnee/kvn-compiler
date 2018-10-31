let boriolsis_rejecthelp_3 =  new Scene("boriolsis_rejecthelp_3",
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
	wizard.changeSprite('surprised_speak');
	sophie.appear(1000);
	wizard.appear(1000);
	charles.appear(1000);
	june.appear(1000);
	yusie.appear(1000,function() {
		wizard.preSpeak(function() {
			wizard.speak('I see...',function() {
				wizard.wait(400,function() {
					wizard.contSpeaking('You’re interested in the ritual');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.wait(800,function() {
		wizard.speak('Alright then');
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	wizard.speak('I\'ll share with you how to perform the ritual');
}, function(){return null})
,new Frame(function(){
	wizard.speak('But do pay attention to the steps required');
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.speak('After all...',function() {
		wizard.wait(500,function() {
			wizard.speak('Knowledge transcends time, doesn\'t it?');
			charles.changeSprite('speechless');
			yusie.changeSprite('stone');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('You\'ll never know when you\'ll need it');
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious_speak');
	wizard.speak('First, you’ve got to collect all these ingredients written on this note',function() {
		charles.changeSprite('curious');
		sophie.changeSprite('curious');
		june.changeSprite('worried');
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('Then, you\'ll boil all of them in a single black cauldron under strong flames for five hours',function() {
		charles.changeSprite('thinking');
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('Take note that the cauldron must be matte black',function() {
		wizard.changeSprite('surprised');
		charles.changeSprite('thinking_speak');
		charles.interupt(function() {
			charles.speak('Because the more light it absorbs, the more effective the ritual will become?',function() {
				charles.changeSprite('curious');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.preSpeak(function() {
		wizard.speak('Exactly');
	});
}, function(){return null})
,new Frame(function(){
	charles.changeSprite('curious');
	wizard.changeSprite('serious_speak');
	wizard.speak('Also, the flames must not die off at any point of time during the five hours');
}, function(){return null})
,new Frame(function(){
	wizard.speak('Subsequently, you will then feed a deer with the concoction from the cauldron.');
}, function(){return null})
,new Frame(function(){
	wizard.speak('The catch is that the feeding must be done at the old temples either at Boriolsis or Brostika',function() {
		wizard.changeSprite('serious');
	});
}, function(){return null})
,new Frame(function(){
	sophie.changeSprite('amazed');
	sophie.preSpeak(function() {
		sophie.speak('Woahhh',function() {
			sophie.wait(400,function() {
				sophie.speak('There seems to be a lot of conditions to be fulfilled',function() {
					sophie.changeSprite('surprised');
				});
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('smile_speak');
	wizard.preSpeak(function() {
		wizard.speak('It\'s actually a relatively easy ritual',function() {
			wizard.wait(400,function() {
				wizard.speak('The only restrictive factor is the location requirement');
			});
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.changeSprite('serious');
	charles.changeSprite('serious');
	wizard.changeSprite('serious_speak');
	wizard.speak('Anyways, that\'s all',function() {
		wizard.wait(400,function() {
			wizard.speak('And the ritual is considered complete');
		});
	});
}, function(){return null})
,new Frame(function(){
	wizard.speak('Any other questions?',function() {
		wizard.changeSprite('serious');
	});
}, function(){return null})
]);