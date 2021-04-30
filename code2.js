gdjs.video66Code = {};
gdjs.video66Code.GDvideo66Objects1= [];
gdjs.video66Code.GDvideo66Objects2= [];
gdjs.video66Code.GDtxt66Objects1= [];
gdjs.video66Code.GDtxt66Objects2= [];
gdjs.video66Code.GDtxtVoltarObjects1= [];
gdjs.video66Code.GDtxtVoltarObjects2= [];
gdjs.video66Code.GDbotaoVoltarObjects1= [];
gdjs.video66Code.GDbotaoVoltarObjects2= [];

gdjs.video66Code.conditionTrue_0 = {val:false};
gdjs.video66Code.condition0IsTrue_0 = {val:false};
gdjs.video66Code.condition1IsTrue_0 = {val:false};
gdjs.video66Code.condition2IsTrue_0 = {val:false};
gdjs.video66Code.conditionTrue_1 = {val:false};
gdjs.video66Code.condition0IsTrue_1 = {val:false};
gdjs.video66Code.condition1IsTrue_1 = {val:false};
gdjs.video66Code.condition2IsTrue_1 = {val:false};


gdjs.video66Code.mapOfGDgdjs_46video66Code_46GDbotaoVoltarObjects1Objects = Hashtable.newFrom({"botaoVoltar": gdjs.video66Code.GDbotaoVoltarObjects1});gdjs.video66Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botaoVoltar"), gdjs.video66Code.GDbotaoVoltarObjects1);

gdjs.video66Code.condition0IsTrue_0.val = false;
gdjs.video66Code.condition1IsTrue_0.val = false;
{
gdjs.video66Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.video66Code.mapOfGDgdjs_46video66Code_46GDbotaoVoltarObjects1Objects, runtimeScene, true, false);
}if ( gdjs.video66Code.condition0IsTrue_0.val ) {
{
{gdjs.video66Code.conditionTrue_1 = gdjs.video66Code.condition1IsTrue_0;
gdjs.video66Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7845644);
}
}}
if (gdjs.video66Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("video66"), gdjs.video66Code.GDvideo66Objects1);
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}{gdjs.evtTools.common.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
}{for(var i = 0, len = gdjs.video66Code.GDvideo66Objects1.length ;i < len;++i) {
    gdjs.video66Code.GDvideo66Objects1[i].setCurrentTime(gdjs.video66Code.GDvideo66Objects1[i].getCurrentTime() - (11));
}
}}

}


};gdjs.video66Code.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("video66"), gdjs.video66Code.GDvideo66Objects1);
{for(var i = 0, len = gdjs.video66Code.GDvideo66Objects1.length ;i < len;++i) {
    gdjs.video66Code.GDvideo66Objects1[i].play();
}
}}

}


{


gdjs.video66Code.condition0IsTrue_0.val = false;
{
gdjs.video66Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.video66Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.video66Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.video66Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.video66Code.GDvideo66Objects1.length = 0;
gdjs.video66Code.GDvideo66Objects2.length = 0;
gdjs.video66Code.GDtxt66Objects1.length = 0;
gdjs.video66Code.GDtxt66Objects2.length = 0;
gdjs.video66Code.GDtxtVoltarObjects1.length = 0;
gdjs.video66Code.GDtxtVoltarObjects2.length = 0;
gdjs.video66Code.GDbotaoVoltarObjects1.length = 0;
gdjs.video66Code.GDbotaoVoltarObjects2.length = 0;

gdjs.video66Code.eventsList1(runtimeScene);
return;

}

gdjs['video66Code'] = gdjs.video66Code;
