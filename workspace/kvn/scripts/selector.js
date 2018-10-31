window.elixir = new Options('Elixir','elixir',function() {
	playScene('erithven_elixir',0);
	return true;
});
window.pre_op = new Options('Intro','pre_op',function() {
	playScene('brostika_intro',0);
	return true;
});
window.start_op = new Options('Brostika Start','start_op',function() {
	playScene('brostika_outside',0);
	return true;
});
window.alley_op = new Options('Brostika Alley','alley_op',function() {
	playScene('brostika_alley',0);
	return true;
});
window.tristan_op = new Options('Brostika Tristan','tristan_op',function() {
	playScene('brostika_tristan',0);
	return true;
});
window.constable_op = new Options('Brostika Constable','constable_op',function() {
	playScene('brostika_constable',0);
	return true;
});
window.prewinery2_op = new Options('Brostika Prewinery','prewinery2_op',function() {
	playScene('prewinery',0);
	return true;
});
window.winery_op = new Options('Brostika Winery','winery_op',function() {
	playScene('brostika_winery',0);
	return true;
});
window.constable2_op = new Options('Brostika Constable 2','constable2_op',function() {
	playScene('brostika_constable2',0);
	return true;
});
window.end_op = new Options('Brostika End','end_op',function() {
	playScene('brostika_end',0);
	return true;
});
window.start = new Options('Meet Chief','start',function() {
	playScene('boriolsis_welcome',0);
	return true;
});
window.house = new Options('Visit Chief House','house',function() {
	playScene('chief_house_1',0);
	return true;
});
window.lab = new Options('Visit Lab','lab',function() {
	playScene('boriolsis_lab',0);
	return true;
});
window.postweapon = new Options('After Weapon Built','postweapon',function() {
	playScene('boriolsis_postweapon',0);
	return true;
});
window.search = new Options('Search for June','search',function() {
	playScene('boriolsis_search',0);
	return true;
});
window.flashback1 = new Options('Flashback 1','flashback1',function() {
	playScene('boriolsis_flashback1',0);
	return true;
});
window.flashback2 = new Options('Flashback 2','flashback2',function() {
	playScene('boriolsis_flashback2',0);
	return true;
});
window.reunion = new Options('Reunion','reunion',function() {
	playScene('boriolsis_reunion',0);
	return true;
});
window.accepthelp = new Options('Accept June Help','accepthelp',function() {
	playScene('boriolsis_accepthelp',0);
	return true;
});
window.rejecthelp1 = new Options('Reject June Help & Wizard Intro','rejecthelp1',function() {
	playScene('boriolsis_rejecthelp_1',0);
	return true;
});
window.rejecthelp2 = new Options('Collect Herbs for Wizard','rejecthelp2',function() {
	playScene('boriolsis_rejecthelp_2',0);
	return true;
});
window.rejecthelp3 = new Options('Learn Ritual','rejecthelp3',function() {
	playScene('boriolsis_rejecthelp_3',0);
	return true;
});
window.rejecthelp4 = new Options('Understand Ritual','rejecthelp4',function() {
	playScene('boriolsis_rejecthelp_4',0);
	return true;
});
let selector =  new Scene("selector",
[new Frame(function(){
	erithven.display(null,null,null,function() {
		erithven.displayOptionPrecise([elixir],2.5,20,null,null,4);
	});
}, function(){return null})
]);