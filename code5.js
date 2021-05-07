gdjs.Est7Code = {};
gdjs.Est7Code.GDbtAvancarGObjects1= [];
gdjs.Est7Code.GDbtAvancarGObjects2= [];
gdjs.Est7Code.GDbtAvancarGObjects3= [];
gdjs.Est7Code.GDbtVoltarGObjects1= [];
gdjs.Est7Code.GDbtVoltarGObjects2= [];
gdjs.Est7Code.GDbtVoltarGObjects3= [];
gdjs.Est7Code.GDtextErrorParalaxObjects1= [];
gdjs.Est7Code.GDtextErrorParalaxObjects2= [];
gdjs.Est7Code.GDtextErrorParalaxObjects3= [];
gdjs.Est7Code.GDtx12Objects1= [];
gdjs.Est7Code.GDtx12Objects2= [];
gdjs.Est7Code.GDtx12Objects3= [];
gdjs.Est7Code.GDprxEst7Objects1= [];
gdjs.Est7Code.GDprxEst7Objects2= [];
gdjs.Est7Code.GDprxEst7Objects3= [];

gdjs.Est7Code.conditionTrue_0 = {val:false};
gdjs.Est7Code.condition0IsTrue_0 = {val:false};
gdjs.Est7Code.condition1IsTrue_0 = {val:false};


gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est7Code.GDbtVoltarGObjects2});gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est7Code.GDbtAvancarGObjects1});gdjs.Est7Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Est7Code.GDbtVoltarGObjects1, gdjs.Est7Code.GDbtVoltarGObjects2);


gdjs.Est7Code.condition0IsTrue_0.val = false;
{
gdjs.Est7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est6", false);
}}

}


{

/* Reuse gdjs.Est7Code.GDbtAvancarGObjects1 */

gdjs.Est7Code.condition0IsTrue_0.val = false;
{
gdjs.Est7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est8", false);
}}

}


};gdjs.Est7Code.eventsList1 = function(runtimeScene) {

{


gdjs.Est7Code.condition0IsTrue_0.val = false;
{
gdjs.Est7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Est7Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Est7Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtVoltarGObjects1Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est7Code.GDbtVoltarGObjects1});gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est7Code.GDbtAvancarGObjects1});gdjs.Est7Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est7Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est7Code.GDbtVoltarGObjects1);
{for(var i = 0, len = gdjs.Est7Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est7Code.GDbtAvancarGObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est7Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est7Code.GDbtVoltarGObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prxEst7"), gdjs.Est7Code.GDprxEst7Objects1);

gdjs.Est7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est7Code.GDprxEst7Objects1.length;i<l;++i) {
    if ( gdjs.Est7Code.GDprxEst7Objects1[i].hasAnimationEnded() ) {
        gdjs.Est7Code.condition0IsTrue_0.val = true;
        gdjs.Est7Code.GDprxEst7Objects1[k] = gdjs.Est7Code.GDprxEst7Objects1[i];
        ++k;
    }
}
gdjs.Est7Code.GDprxEst7Objects1.length = k;}if (gdjs.Est7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est7Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est7Code.GDbtVoltarGObjects1);
{for(var i = 0, len = gdjs.Est7Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est7Code.GDbtAvancarGObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est7Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est7Code.GDbtVoltarGObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Est7Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est7Code.GDbtVoltarGObjects1);

gdjs.Est7Code.condition0IsTrue_0.val = false;
{
gdjs.Est7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtVoltarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est7Code.GDbtVoltarGObjects1 */
{for(var i = 0, len = gdjs.Est7Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est7Code.GDbtVoltarGObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est7Code.GDbtAvancarGObjects1);

gdjs.Est7Code.condition0IsTrue_0.val = false;
{
gdjs.Est7Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est7Code.mapOfGDgdjs_46Est7Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est7Code.GDbtAvancarGObjects1 */
{for(var i = 0, len = gdjs.Est7Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est7Code.GDbtAvancarGObjects1[i].setAnimationFrame(2);
}
}}

}


};

gdjs.Est7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Est7Code.GDbtAvancarGObjects1.length = 0;
gdjs.Est7Code.GDbtAvancarGObjects2.length = 0;
gdjs.Est7Code.GDbtAvancarGObjects3.length = 0;
gdjs.Est7Code.GDbtVoltarGObjects1.length = 0;
gdjs.Est7Code.GDbtVoltarGObjects2.length = 0;
gdjs.Est7Code.GDbtVoltarGObjects3.length = 0;
gdjs.Est7Code.GDtextErrorParalaxObjects1.length = 0;
gdjs.Est7Code.GDtextErrorParalaxObjects2.length = 0;
gdjs.Est7Code.GDtextErrorParalaxObjects3.length = 0;
gdjs.Est7Code.GDtx12Objects1.length = 0;
gdjs.Est7Code.GDtx12Objects2.length = 0;
gdjs.Est7Code.GDtx12Objects3.length = 0;
gdjs.Est7Code.GDprxEst7Objects1.length = 0;
gdjs.Est7Code.GDprxEst7Objects2.length = 0;
gdjs.Est7Code.GDprxEst7Objects3.length = 0;

gdjs.Est7Code.eventsList2(runtimeScene);
return;

}

gdjs['Est7Code'] = gdjs.Est7Code;
