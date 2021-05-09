gdjs.paquimetroCode = {};
gdjs.paquimetroCode.GDMolduraObjects1= [];
gdjs.paquimetroCode.GDMolduraObjects2= [];
gdjs.paquimetroCode.GDMolduraObjects3= [];
gdjs.paquimetroCode.GDbaseReguaPacObjects1= [];
gdjs.paquimetroCode.GDbaseReguaPacObjects2= [];
gdjs.paquimetroCode.GDbaseReguaPacObjects3= [];
gdjs.paquimetroCode.GDnanioObjects1= [];
gdjs.paquimetroCode.GDnanioObjects2= [];
gdjs.paquimetroCode.GDnanioObjects3= [];
gdjs.paquimetroCode.GDpinoTopObjects1= [];
gdjs.paquimetroCode.GDpinoTopObjects2= [];
gdjs.paquimetroCode.GDpinoTopObjects3= [];
gdjs.paquimetroCode.GDblockNanioPonto0Objects1= [];
gdjs.paquimetroCode.GDblockNanioPonto0Objects2= [];
gdjs.paquimetroCode.GDblockNanioPonto0Objects3= [];
gdjs.paquimetroCode.GDXObjects1= [];
gdjs.paquimetroCode.GDXObjects2= [];
gdjs.paquimetroCode.GDXObjects3= [];
gdjs.paquimetroCode.GDYObjects1= [];
gdjs.paquimetroCode.GDYObjects2= [];
gdjs.paquimetroCode.GDYObjects3= [];

gdjs.paquimetroCode.conditionTrue_0 = {val:false};
gdjs.paquimetroCode.condition0IsTrue_0 = {val:false};
gdjs.paquimetroCode.condition1IsTrue_0 = {val:false};


gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects = Hashtable.newFrom({"blockNanioPonto0": gdjs.paquimetroCode.GDblockNanioPonto0Objects2});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects = Hashtable.newFrom({"blockNanioPonto0": gdjs.paquimetroCode.GDblockNanioPonto0Objects2});gdjs.paquimetroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("blockNanioPonto0"), gdjs.paquimetroCode.GDblockNanioPonto0Objects2);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects, runtimeScene, true, true);
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.paquimetroCode.GDXObjects2);
gdjs.copyArray(runtimeScene.getObjects("Y"), gdjs.paquimetroCode.GDYObjects2);
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.paquimetroCode.GDXObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDXObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)));
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDYObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDYObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0)));
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].activateBehavior("Draggable", true);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) >= 1400;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blockNanioPonto0"), gdjs.paquimetroCode.GDblockNanioPonto0Objects2);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects, runtimeScene, true, false);
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("X"), gdjs.paquimetroCode.GDXObjects2);
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
{for(var i = 0, len = gdjs.paquimetroCode.GDXObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDXObjects2[i].setString("tocou");
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].activateBehavior("Draggable", false);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) >= 120;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].activateBehavior("Draggable", true);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) <= 1450;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].activateBehavior("Draggable", true);
}
}}

}


};gdjs.paquimetroCode.eventsList1 = function(runtimeScene) {

{


{
}

}


{


gdjs.paquimetroCode.eventsList0(runtimeScene);
}


};

gdjs.paquimetroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.paquimetroCode.GDMolduraObjects1.length = 0;
gdjs.paquimetroCode.GDMolduraObjects2.length = 0;
gdjs.paquimetroCode.GDMolduraObjects3.length = 0;
gdjs.paquimetroCode.GDbaseReguaPacObjects1.length = 0;
gdjs.paquimetroCode.GDbaseReguaPacObjects2.length = 0;
gdjs.paquimetroCode.GDbaseReguaPacObjects3.length = 0;
gdjs.paquimetroCode.GDnanioObjects1.length = 0;
gdjs.paquimetroCode.GDnanioObjects2.length = 0;
gdjs.paquimetroCode.GDnanioObjects3.length = 0;
gdjs.paquimetroCode.GDpinoTopObjects1.length = 0;
gdjs.paquimetroCode.GDpinoTopObjects2.length = 0;
gdjs.paquimetroCode.GDpinoTopObjects3.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto0Objects1.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto0Objects2.length = 0;
gdjs.paquimetroCode.GDblockNanioPonto0Objects3.length = 0;
gdjs.paquimetroCode.GDXObjects1.length = 0;
gdjs.paquimetroCode.GDXObjects2.length = 0;
gdjs.paquimetroCode.GDXObjects3.length = 0;
gdjs.paquimetroCode.GDYObjects1.length = 0;
gdjs.paquimetroCode.GDYObjects2.length = 0;
gdjs.paquimetroCode.GDYObjects3.length = 0;

gdjs.paquimetroCode.eventsList1(runtimeScene);
return;

}

gdjs['paquimetroCode'] = gdjs.paquimetroCode;
