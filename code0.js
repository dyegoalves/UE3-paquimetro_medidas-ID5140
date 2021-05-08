gdjs.paquimetroCode = {};
gdjs.paquimetroCode.GDMolduraObjects1= [];
gdjs.paquimetroCode.GDMolduraObjects2= [];
gdjs.paquimetroCode.GDbaseReguaPacObjects1= [];
gdjs.paquimetroCode.GDbaseReguaPacObjects2= [];
gdjs.paquimetroCode.GDnanioObjects1= [];
gdjs.paquimetroCode.GDnanioObjects2= [];
gdjs.paquimetroCode.GDpinoTopObjects1= [];
gdjs.paquimetroCode.GDpinoTopObjects2= [];
gdjs.paquimetroCode.GDblockNanioTopObjects1= [];
gdjs.paquimetroCode.GDblockNanioTopObjects2= [];
gdjs.paquimetroCode.GDblockNanioBotObjects1= [];
gdjs.paquimetroCode.GDblockNanioBotObjects2= [];
gdjs.paquimetroCode.GDblockNanioPonto90Objects1= [];
gdjs.paquimetroCode.GDblockNanioPonto90Objects2= [];
gdjs.paquimetroCode.GDblockNanioPonto0Objects1= [];
gdjs.paquimetroCode.GDblockNanioPonto0Objects2= [];

gdjs.paquimetroCode.conditionTrue_0 = {val:false};
gdjs.paquimetroCode.condition0IsTrue_0 = {val:false};
gdjs.paquimetroCode.condition1IsTrue_0 = {val:false};


gdjs.paquimetroCode.eventsList0 = function(runtimeScene) {

{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) <= 50;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].activateBehavior("Draggable", false);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) <= 50);
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].activateBehavior("Draggable", true);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) >= 1400;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].activateBehavior("Draggable", false);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) >= 1400);
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].activateBehavior("Draggable", true);
}
}}

}


};

gdjs.paquimetroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.paquimetroCode.GDMolduraObjects1.length = 0;
gdjs.paquimetroCode.GDMolduraObjects2.length = 0;
gdjs.paquimetroCode.GDbaseReguaPacObjects1.length = 0;
gdjs.paquimetroCode.GDbaseReguaPacObjects2.length = 0;
gdjs.paquimetroCode.GDnanioObjects1.length = 0;
gdjs.paquimetroCode.GDnanioObjects2.length = 0;
gdjs.paquimetroCode.GDpinoTopObjects1.length = 0;
gdjs.paquimetroCode.GDpinoTopObjects2.length = 0;
gdjs.paquimetroCode.GDblockNanioTopObjects1.length = 0;
gdjs.paquimetroCode.GDblockNanioTopObjects2.length = 0;
gdjs.paquimetroCode.GDblockNanioBotObjects1.length = 0;
gdjs.paquimetroCode.GDblockNanioBotObjects2.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto90Objects1.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto90Objects2.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto0Objects1.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto0Objects2.length = 0;

gdjs.paquimetroCode.eventsList0(runtimeScene);
return;

}

gdjs['paquimetroCode'] = gdjs.paquimetroCode;
