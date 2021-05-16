gdjs.ajudaCode = {};
gdjs.ajudaCode.GDmolduraObjects1= [];
gdjs.ajudaCode.GDmolduraObjects2= [];
gdjs.ajudaCode.GDtextVoltarObjects1= [];
gdjs.ajudaCode.GDtextVoltarObjects2= [];
gdjs.ajudaCode.GDtextAjudaObjects1= [];
gdjs.ajudaCode.GDtextAjudaObjects2= [];
gdjs.ajudaCode.GDbotaoVoltarObjects1= [];
gdjs.ajudaCode.GDbotaoVoltarObjects2= [];

gdjs.ajudaCode.conditionTrue_0 = {val:false};
gdjs.ajudaCode.condition0IsTrue_0 = {val:false};
gdjs.ajudaCode.condition1IsTrue_0 = {val:false};


gdjs.ajudaCode.mapOfGDgdjs_46ajudaCode_46GDbotaoVoltarObjects1Objects = Hashtable.newFrom({"botaoVoltar": gdjs.ajudaCode.GDbotaoVoltarObjects1});gdjs.ajudaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("botaoVoltar"), gdjs.ajudaCode.GDbotaoVoltarObjects1);

gdjs.ajudaCode.condition0IsTrue_0.val = false;
{
gdjs.ajudaCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ajudaCode.mapOfGDgdjs_46ajudaCode_46GDbotaoVoltarObjects1Objects, runtimeScene, true, false);
}if (gdjs.ajudaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.ajudaCode.eventsList1 = function(runtimeScene) {

{


gdjs.ajudaCode.condition0IsTrue_0.val = false;
{
gdjs.ajudaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.ajudaCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.ajudaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.ajudaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ajudaCode.GDmolduraObjects1.length = 0;
gdjs.ajudaCode.GDmolduraObjects2.length = 0;
gdjs.ajudaCode.GDtextVoltarObjects1.length = 0;
gdjs.ajudaCode.GDtextVoltarObjects2.length = 0;
gdjs.ajudaCode.GDtextAjudaObjects1.length = 0;
gdjs.ajudaCode.GDtextAjudaObjects2.length = 0;
gdjs.ajudaCode.GDbotaoVoltarObjects1.length = 0;
gdjs.ajudaCode.GDbotaoVoltarObjects2.length = 0;

gdjs.ajudaCode.eventsList1(runtimeScene);
return;

}

gdjs['ajudaCode'] = gdjs.ajudaCode;
