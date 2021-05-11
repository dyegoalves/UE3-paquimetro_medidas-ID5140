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
gdjs.paquimetroCode.GDvmmtxtObjects1= [];
gdjs.paquimetroCode.GDvmmtxtObjects2= [];
gdjs.paquimetroCode.GDvmmtxtObjects3= [];
gdjs.paquimetroCode.GDmmtxtObjects1= [];
gdjs.paquimetroCode.GDmmtxtObjects2= [];
gdjs.paquimetroCode.GDmmtxtObjects3= [];
gdjs.paquimetroCode.GDYObjects1= [];
gdjs.paquimetroCode.GDYObjects2= [];
gdjs.paquimetroCode.GDYObjects3= [];
gdjs.paquimetroCode.GDfracdptxtObjects1= [];
gdjs.paquimetroCode.GDfracdptxtObjects2= [];
gdjs.paquimetroCode.GDfracdptxtObjects3= [];
gdjs.paquimetroCode.GDpdtxtObjects1= [];
gdjs.paquimetroCode.GDpdtxtObjects2= [];
gdjs.paquimetroCode.GDpdtxtObjects3= [];
gdjs.paquimetroCode.GDmedidaObjects1= [];
gdjs.paquimetroCode.GDmedidaObjects2= [];
gdjs.paquimetroCode.GDmedidaObjects3= [];
gdjs.paquimetroCode.GDbtreduzirObjects1= [];
gdjs.paquimetroCode.GDbtreduzirObjects2= [];
gdjs.paquimetroCode.GDbtreduzirObjects3= [];
gdjs.paquimetroCode.GDesquerdaObjects1= [];
gdjs.paquimetroCode.GDesquerdaObjects2= [];
gdjs.paquimetroCode.GDesquerdaObjects3= [];
gdjs.paquimetroCode.GDdiretaObjects1= [];
gdjs.paquimetroCode.GDdiretaObjects2= [];
gdjs.paquimetroCode.GDdiretaObjects3= [];
gdjs.paquimetroCode.GDAjudaObjects1= [];
gdjs.paquimetroCode.GDAjudaObjects2= [];
gdjs.paquimetroCode.GDAjudaObjects3= [];
gdjs.paquimetroCode.GDbtzoomObjects1= [];
gdjs.paquimetroCode.GDbtzoomObjects2= [];
gdjs.paquimetroCode.GDbtzoomObjects3= [];
gdjs.paquimetroCode.GDreduzitxtObjects1= [];
gdjs.paquimetroCode.GDreduzitxtObjects2= [];
gdjs.paquimetroCode.GDreduzitxtObjects3= [];
gdjs.paquimetroCode.GDajudatxtObjects1= [];
gdjs.paquimetroCode.GDajudatxtObjects2= [];
gdjs.paquimetroCode.GDajudatxtObjects3= [];
gdjs.paquimetroCode.GDcontroleRLObjects1= [];
gdjs.paquimetroCode.GDcontroleRLObjects2= [];
gdjs.paquimetroCode.GDcontroleRLObjects3= [];
gdjs.paquimetroCode.GDzoomtxtObjects1= [];
gdjs.paquimetroCode.GDzoomtxtObjects2= [];
gdjs.paquimetroCode.GDzoomtxtObjects3= [];
gdjs.paquimetroCode.GDreguaProfObjects1= [];
gdjs.paquimetroCode.GDreguaProfObjects2= [];
gdjs.paquimetroCode.GDreguaProfObjects3= [];

gdjs.paquimetroCode.conditionTrue_0 = {val:false};
gdjs.paquimetroCode.condition0IsTrue_0 = {val:false};
gdjs.paquimetroCode.condition1IsTrue_0 = {val:false};
gdjs.paquimetroCode.condition2IsTrue_0 = {val:false};
gdjs.paquimetroCode.condition3IsTrue_0 = {val:false};
gdjs.paquimetroCode.condition4IsTrue_0 = {val:false};
gdjs.paquimetroCode.conditionTrue_1 = {val:false};
gdjs.paquimetroCode.condition0IsTrue_1 = {val:false};
gdjs.paquimetroCode.condition1IsTrue_1 = {val:false};
gdjs.paquimetroCode.condition2IsTrue_1 = {val:false};
gdjs.paquimetroCode.condition3IsTrue_1 = {val:false};
gdjs.paquimetroCode.condition4IsTrue_1 = {val:false};


gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects = Hashtable.newFrom({"blockNanioPonto0": gdjs.paquimetroCode.GDblockNanioPonto0Objects2});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects = Hashtable.newFrom({"blockNanioPonto0": gdjs.paquimetroCode.GDblockNanioPonto0Objects2});gdjs.paquimetroCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("blockNanioPonto0"), gdjs.paquimetroCode.GDblockNanioPonto0Objects2);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects2Objects, runtimeScene, true, true);
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].activateBehavior("Draggable", true);
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) >= 4900;
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
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) <= 5000;
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
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
{runtimeScene.getVariables().getFromIndex(1).setString(gdjs.evtTools.string.subStr((gdjs.evtTools.common.toString(((( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointX("")) - 905.46875) / 35.7100)), 0, 4) + " mm");
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) < 9.999;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
gdjs.copyArray(runtimeScene.getObjects("vmmtxt"), gdjs.paquimetroCode.GDvmmtxtObjects2);
{for(var i = 0, len = gdjs.paquimetroCode.GDvmmtxtObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDvmmtxtObjects2[i].setString(gdjs.evtTools.string.subStr((gdjs.evtTools.common.toString(((( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointX("")) - 905.46875) / 35.7100)), 0, 4) + " mm");
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = !(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) < 9.999);
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
gdjs.copyArray(runtimeScene.getObjects("vmmtxt"), gdjs.paquimetroCode.GDvmmtxtObjects2);
{for(var i = 0, len = gdjs.paquimetroCode.GDvmmtxtObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDvmmtxtObjects2[i].setString(gdjs.evtTools.string.subStr((gdjs.evtTools.common.toString(((( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointX("")) - 905.46875) / 35.7100)), 0, 5) + " mm");
}
}}

}


{


gdjs.paquimetroCode.condition0IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) <= 0;
}if (gdjs.paquimetroCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("vmmtxt"), gdjs.paquimetroCode.GDvmmtxtObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDvmmtxtObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDvmmtxtObjects1[i].setString("0 mm");
}
}}

}


};gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDbtreduzirObjects2Objects = Hashtable.newFrom({"btreduzir": gdjs.paquimetroCode.GDbtreduzirObjects2});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDbtzoomObjects1Objects = Hashtable.newFrom({"btzoom": gdjs.paquimetroCode.GDbtzoomObjects1});gdjs.paquimetroCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btreduzir"), gdjs.paquimetroCode.GDbtreduzirObjects2);
gdjs.copyArray(runtimeScene.getObjects("btzoom"), gdjs.paquimetroCode.GDbtzoomObjects2);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
gdjs.paquimetroCode.condition2IsTrue_0.val = false;
gdjs.paquimetroCode.condition3IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDbtreduzirObjects2Objects, runtimeScene, true, false);
}if ( gdjs.paquimetroCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.paquimetroCode.GDbtzoomObjects2.length;i<l;++i) {
    if ( gdjs.paquimetroCode.GDbtzoomObjects2[i].getVariableNumber(gdjs.paquimetroCode.GDbtzoomObjects2[i].getVariables().get("countbt")) >= 1 ) {
        gdjs.paquimetroCode.condition2IsTrue_0.val = true;
        gdjs.paquimetroCode.GDbtzoomObjects2[k] = gdjs.paquimetroCode.GDbtzoomObjects2[i];
        ++k;
    }
}
gdjs.paquimetroCode.GDbtzoomObjects2.length = k;}if ( gdjs.paquimetroCode.condition2IsTrue_0.val ) {
{
{gdjs.paquimetroCode.conditionTrue_1 = gdjs.paquimetroCode.condition3IsTrue_0;
gdjs.paquimetroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7960772);
}
}}
}
}
if (gdjs.paquimetroCode.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Moldura"), gdjs.paquimetroCode.GDMolduraObjects2);
/* Reuse gdjs.paquimetroCode.GDbtreduzirObjects2 */
/* Reuse gdjs.paquimetroCode.GDbtzoomObjects2 */
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.paquimetroCode.GDMolduraObjects2.length !== 0 ? gdjs.paquimetroCode.GDMolduraObjects2[0] : null), false, "", 0);
}{for(var i = 0, len = gdjs.paquimetroCode.GDbtreduzirObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDbtreduzirObjects2[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDbtzoomObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDbtzoomObjects2[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDMolduraObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDMolduraObjects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btzoom"), gdjs.paquimetroCode.GDbtzoomObjects1);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
gdjs.paquimetroCode.condition2IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDbtzoomObjects1Objects, runtimeScene, true, false);
}if ( gdjs.paquimetroCode.condition1IsTrue_0.val ) {
{
{gdjs.paquimetroCode.conditionTrue_1 = gdjs.paquimetroCode.condition2IsTrue_0;
gdjs.paquimetroCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7962804);
}
}}
}
if (gdjs.paquimetroCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Moldura"), gdjs.paquimetroCode.GDMolduraObjects1);
gdjs.copyArray(runtimeScene.getObjects("btreduzir"), gdjs.paquimetroCode.GDbtreduzirObjects1);
/* Reuse gdjs.paquimetroCode.GDbtzoomObjects1 */
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.paquimetroCode.GDnanioObjects1.length !== 0 ? gdjs.paquimetroCode.GDnanioObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2.8, "", 0);
}{for(var i = 0, len = gdjs.paquimetroCode.GDbtzoomObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDbtzoomObjects1[i].toggleVariableBoolean(gdjs.paquimetroCode.GDbtzoomObjects1[i].getVariables().get("onoroff"));
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDbtzoomObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDbtzoomObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDbtreduzirObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDbtreduzirObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDbtzoomObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDbtzoomObjects1[i].returnVariable(gdjs.paquimetroCode.GDbtzoomObjects1[i].getVariables().get("countbt")).add(1);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDMolduraObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDMolduraObjects1[i].hide();
}
}}

}


};gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDdiretaObjects2Objects = Hashtable.newFrom({"direta": gdjs.paquimetroCode.GDdiretaObjects2});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDesquerdaObjects2Objects = Hashtable.newFrom({"esquerda": gdjs.paquimetroCode.GDesquerdaObjects2});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDnanioObjects1Objects = Hashtable.newFrom({"nanio": gdjs.paquimetroCode.GDnanioObjects1});gdjs.paquimetroCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("direta"), gdjs.paquimetroCode.GDdiretaObjects2);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDdiretaObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.paquimetroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.paquimetroCode.GDdiretaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaProf"), gdjs.paquimetroCode.GDreguaProfObjects2);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDdiretaObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDdiretaObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDreguaProfObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDreguaProfObjects2[i].setPosition((( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointX("")) + 800,(( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointY("")) - 250);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("esquerda"), gdjs.paquimetroCode.GDesquerdaObjects2);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDesquerdaObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.paquimetroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.paquimetroCode.GDesquerdaObjects2 */
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects2);
gdjs.copyArray(runtimeScene.getObjects("reguaProf"), gdjs.paquimetroCode.GDreguaProfObjects2);
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDesquerdaObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDesquerdaObjects2[i].setAnimationFrame(1);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects2[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.paquimetroCode.GDreguaProfObjects2.length ;i < len;++i) {
    gdjs.paquimetroCode.GDreguaProfObjects2[i].setPosition((( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointX("")) + 800,(( gdjs.paquimetroCode.GDnanioObjects2.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects2[0].getPointY("")) - 250);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
{
gdjs.paquimetroCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDnanioObjects1Objects, runtimeScene, true, false);
}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.paquimetroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.paquimetroCode.GDnanioObjects1 */
gdjs.copyArray(runtimeScene.getObjects("reguaProf"), gdjs.paquimetroCode.GDreguaProfObjects1);
{for(var i = 0, len = gdjs.paquimetroCode.GDreguaProfObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDreguaProfObjects1[i].setPosition((( gdjs.paquimetroCode.GDnanioObjects1.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects1[0].getPointX("")) + 800,(( gdjs.paquimetroCode.GDnanioObjects1.length === 0 ) ? 0 :gdjs.paquimetroCode.GDnanioObjects1[0].getPointY("")) - 250);
}
}}

}


};gdjs.paquimetroCode.eventsList4 = function(runtimeScene) {

{


{
}

}


{


gdjs.paquimetroCode.eventsList0(runtimeScene);
}


{


gdjs.paquimetroCode.eventsList1(runtimeScene);
}


{


gdjs.paquimetroCode.eventsList2(runtimeScene);
}


{


gdjs.paquimetroCode.eventsList3(runtimeScene);
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
gdjs.paquimetroCode.GDvmmtxtObjects1.length = 0;
gdjs.paquimetroCode.GDvmmtxtObjects2.length = 0;
gdjs.paquimetroCode.GDvmmtxtObjects3.length = 0;
gdjs.paquimetroCode.GDmmtxtObjects1.length = 0;
gdjs.paquimetroCode.GDmmtxtObjects2.length = 0;
gdjs.paquimetroCode.GDmmtxtObjects3.length = 0;
gdjs.paquimetroCode.GDYObjects1.length = 0;
gdjs.paquimetroCode.GDYObjects2.length = 0;
gdjs.paquimetroCode.GDYObjects3.length = 0;
gdjs.paquimetroCode.GDfracdptxtObjects1.length = 0;
gdjs.paquimetroCode.GDfracdptxtObjects2.length = 0;
gdjs.paquimetroCode.GDfracdptxtObjects3.length = 0;
gdjs.paquimetroCode.GDpdtxtObjects1.length = 0;
gdjs.paquimetroCode.GDpdtxtObjects2.length = 0;
gdjs.paquimetroCode.GDpdtxtObjects3.length = 0;
gdjs.paquimetroCode.GDmedidaObjects1.length = 0;
gdjs.paquimetroCode.GDmedidaObjects2.length = 0;
gdjs.paquimetroCode.GDmedidaObjects3.length = 0;
gdjs.paquimetroCode.GDbtreduzirObjects1.length = 0;
gdjs.paquimetroCode.GDbtreduzirObjects2.length = 0;
gdjs.paquimetroCode.GDbtreduzirObjects3.length = 0;
gdjs.paquimetroCode.GDesquerdaObjects1.length = 0;
gdjs.paquimetroCode.GDesquerdaObjects2.length = 0;
gdjs.paquimetroCode.GDesquerdaObjects3.length = 0;
gdjs.paquimetroCode.GDdiretaObjects1.length = 0;
gdjs.paquimetroCode.GDdiretaObjects2.length = 0;
gdjs.paquimetroCode.GDdiretaObjects3.length = 0;
gdjs.paquimetroCode.GDAjudaObjects1.length = 0;
gdjs.paquimetroCode.GDAjudaObjects2.length = 0;
gdjs.paquimetroCode.GDAjudaObjects3.length = 0;
gdjs.paquimetroCode.GDbtzoomObjects1.length = 0;
gdjs.paquimetroCode.GDbtzoomObjects2.length = 0;
gdjs.paquimetroCode.GDbtzoomObjects3.length = 0;
gdjs.paquimetroCode.GDreduzitxtObjects1.length = 0;
gdjs.paquimetroCode.GDreduzitxtObjects2.length = 0;
gdjs.paquimetroCode.GDreduzitxtObjects3.length = 0;
gdjs.paquimetroCode.GDajudatxtObjects1.length = 0;
gdjs.paquimetroCode.GDajudatxtObjects2.length = 0;
gdjs.paquimetroCode.GDajudatxtObjects3.length = 0;
gdjs.paquimetroCode.GDcontroleRLObjects1.length = 0;
gdjs.paquimetroCode.GDcontroleRLObjects2.length = 0;
gdjs.paquimetroCode.GDcontroleRLObjects3.length = 0;
gdjs.paquimetroCode.GDzoomtxtObjects1.length = 0;
gdjs.paquimetroCode.GDzoomtxtObjects2.length = 0;
gdjs.paquimetroCode.GDzoomtxtObjects3.length = 0;
gdjs.paquimetroCode.GDreguaProfObjects1.length = 0;
gdjs.paquimetroCode.GDreguaProfObjects2.length = 0;
gdjs.paquimetroCode.GDreguaProfObjects3.length = 0;

gdjs.paquimetroCode.eventsList4(runtimeScene);
return;

}

gdjs['paquimetroCode'] = gdjs.paquimetroCode;
