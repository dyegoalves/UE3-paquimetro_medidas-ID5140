gdjs.video69Code = {};
gdjs.video69Code.GDvideo69Objects1= [];
gdjs.video69Code.GDvideo69Objects2= [];
gdjs.video69Code.GDtext69Objects1= [];
gdjs.video69Code.GDtext69Objects2= [];
gdjs.video69Code.GDtxtVoltarObjects1= [];
gdjs.video69Code.GDtxtVoltarObjects2= [];
gdjs.video69Code.GDbotaoVoltarObjects1= [];
gdjs.video69Code.GDbotaoVoltarObjects2= [];

gdjs.video69Code.conditionTrue_0 = {val:false};
gdjs.video69Code.condition0IsTrue_0 = {val:false};
gdjs.video69Code.condition1IsTrue_0 = {val:false};
gdjs.video69Code.condition2IsTrue_0 = {val:false};
gdjs.video69Code.conditionTrue_1 = {val:false};
gdjs.video69Code.condition0IsTrue_1 = {val:false};
gdjs.video69Code.condition1IsTrue_1 = {val:false};
gdjs.video69Code.condition2IsTrue_1 = {val:false};


gdjs.video69Code.mapOfGDgdjs_46video69Code_46GDbotaoVoltarObjects1Objects = Hashtable.newFrom({"botaoVoltar": gdjs.video69Code.GDbotaoVoltarObjects1});gdjs.video69Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botaoVoltar"), gdjs.video69Code.GDbotaoVoltarObjects1);

gdjs.video69Code.condition0IsTrue_0.val = false;
gdjs.video69Code.condition1IsTrue_0.val = false;
{
gdjs.video69Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.video69Code.mapOfGDgdjs_46video69Code_46GDbotaoVoltarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.video69Code.condition0IsTrue_0.val ) {
{
{gdjs.video69Code.conditionTrue_1 = gdjs.video69Code.condition1IsTrue_0;
gdjs.video69Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7805844);
}
}}
if (gdjs.video69Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("video69"), gdjs.video69Code.GDvideo69Objects1);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}{for(var i = 0, len = gdjs.video69Code.GDvideo69Objects1.length ;i < len;++i) {
    gdjs.video69Code.GDvideo69Objects1[i].setCurrentTime(gdjs.video69Code.GDvideo69Objects1[i].getCurrentTime() - (8));
}
}}

}


};gdjs.video69Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("video69"), gdjs.video69Code.GDvideo69Objects1);
{for(var i = 0, len = gdjs.video69Code.GDvideo69Objects1.length ;i < len;++i) {
    gdjs.video69Code.GDvideo69Objects1[i].play();
}
}}

}


{


gdjs.video69Code.condition0IsTrue_0.val = false;
{
gdjs.video69Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.video69Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.video69Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.video69Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.video69Code.GDvideo69Objects1.length = 0;
gdjs.video69Code.GDvideo69Objects2.length = 0;
gdjs.video69Code.GDtext69Objects1.length = 0;
gdjs.video69Code.GDtext69Objects2.length = 0;
gdjs.video69Code.GDtxtVoltarObjects1.length = 0;
gdjs.video69Code.GDtxtVoltarObjects2.length = 0;
gdjs.video69Code.GDbotaoVoltarObjects1.length = 0;
gdjs.video69Code.GDbotaoVoltarObjects2.length = 0;

gdjs.video69Code.eventsList1(runtimeScene);
return;

}

gdjs['video69Code'] = gdjs.video69Code;
