gdjs.Est8Code = {};
gdjs.Est8Code.GDbtAvancarGObjects1= [];
gdjs.Est8Code.GDbtAvancarGObjects2= [];
gdjs.Est8Code.GDbtAvancarGObjects3= [];
gdjs.Est8Code.GDbtVoltarGObjects1= [];
gdjs.Est8Code.GDbtVoltarGObjects2= [];
gdjs.Est8Code.GDbtVoltarGObjects3= [];
gdjs.Est8Code.GDtextErrorParalaxObjects1= [];
gdjs.Est8Code.GDtextErrorParalaxObjects2= [];
gdjs.Est8Code.GDtextErrorParalaxObjects3= [];
gdjs.Est8Code.GDtx12Objects1= [];
gdjs.Est8Code.GDtx12Objects2= [];
gdjs.Est8Code.GDtx12Objects3= [];
gdjs.Est8Code.GDprxEst7Objects1= [];
gdjs.Est8Code.GDprxEst7Objects2= [];
gdjs.Est8Code.GDprxEst7Objects3= [];
gdjs.Est8Code.GDVoltarAoInicioObjects1= [];
gdjs.Est8Code.GDVoltarAoInicioObjects2= [];
gdjs.Est8Code.GDVoltarAoInicioObjects3= [];

gdjs.Est8Code.conditionTrue_0 = {val:false};
gdjs.Est8Code.condition0IsTrue_0 = {val:false};
gdjs.Est8Code.condition1IsTrue_0 = {val:false};


gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est8Code.GDbtVoltarGObjects2});gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDVoltarAoInicioObjects1Objects = Hashtable.newFrom({"VoltarAoInicio": gdjs.Est8Code.GDVoltarAoInicioObjects1});gdjs.Est8Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Est8Code.GDbtVoltarGObjects1, gdjs.Est8Code.GDbtVoltarGObjects2);


gdjs.Est8Code.condition0IsTrue_0.val = false;
{
gdjs.Est8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est7", false);
}}

}


{

/* Reuse gdjs.Est8Code.GDVoltarAoInicioObjects1 */

gdjs.Est8Code.condition0IsTrue_0.val = false;
{
gdjs.Est8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDVoltarAoInicioObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est1", false);
}}

}


};gdjs.Est8Code.eventsList1 = function(runtimeScene) {

{


gdjs.Est8Code.condition0IsTrue_0.val = false;
{
gdjs.Est8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Est8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Est8Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDbtVoltarGObjects1Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est8Code.GDbtVoltarGObjects1});gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDVoltarAoInicioObjects1Objects = Hashtable.newFrom({"VoltarAoInicio": gdjs.Est8Code.GDVoltarAoInicioObjects1});gdjs.Est8Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("VoltarAoInicio"), gdjs.Est8Code.GDVoltarAoInicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est8Code.GDbtVoltarGObjects1);
{for(var i = 0, len = gdjs.Est8Code.GDVoltarAoInicioObjects1.length ;i < len;++i) {
    gdjs.Est8Code.GDVoltarAoInicioObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est8Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est8Code.GDbtVoltarGObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prxEst7"), gdjs.Est8Code.GDprxEst7Objects1);

gdjs.Est8Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est8Code.GDprxEst7Objects1.length;i<l;++i) {
    if ( gdjs.Est8Code.GDprxEst7Objects1[i].hasAnimationEnded() ) {
        gdjs.Est8Code.condition0IsTrue_0.val = true;
        gdjs.Est8Code.GDprxEst7Objects1[k] = gdjs.Est8Code.GDprxEst7Objects1[i];
        ++k;
    }
}
gdjs.Est8Code.GDprxEst7Objects1.length = k;}if (gdjs.Est8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VoltarAoInicio"), gdjs.Est8Code.GDVoltarAoInicioObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est8Code.GDbtVoltarGObjects1);
{for(var i = 0, len = gdjs.Est8Code.GDVoltarAoInicioObjects1.length ;i < len;++i) {
    gdjs.Est8Code.GDVoltarAoInicioObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est8Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est8Code.GDbtVoltarGObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Est8Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est8Code.GDbtVoltarGObjects1);

gdjs.Est8Code.condition0IsTrue_0.val = false;
{
gdjs.Est8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDbtVoltarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est8Code.GDbtVoltarGObjects1 */
{for(var i = 0, len = gdjs.Est8Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est8Code.GDbtVoltarGObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("VoltarAoInicio"), gdjs.Est8Code.GDVoltarAoInicioObjects1);

gdjs.Est8Code.condition0IsTrue_0.val = false;
{
gdjs.Est8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est8Code.mapOfGDgdjs_46Est8Code_46GDVoltarAoInicioObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est8Code.GDVoltarAoInicioObjects1 */
{for(var i = 0, len = gdjs.Est8Code.GDVoltarAoInicioObjects1.length ;i < len;++i) {
    gdjs.Est8Code.GDVoltarAoInicioObjects1[i].setAnimationFrame(2);
}
}}

}


};

gdjs.Est8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Est8Code.GDbtAvancarGObjects1.length = 0;
gdjs.Est8Code.GDbtAvancarGObjects2.length = 0;
gdjs.Est8Code.GDbtAvancarGObjects3.length = 0;
gdjs.Est8Code.GDbtVoltarGObjects1.length = 0;
gdjs.Est8Code.GDbtVoltarGObjects2.length = 0;
gdjs.Est8Code.GDbtVoltarGObjects3.length = 0;
gdjs.Est8Code.GDtextErrorParalaxObjects1.length = 0;
gdjs.Est8Code.GDtextErrorParalaxObjects2.length = 0;
gdjs.Est8Code.GDtextErrorParalaxObjects3.length = 0;
gdjs.Est8Code.GDtx12Objects1.length = 0;
gdjs.Est8Code.GDtx12Objects2.length = 0;
gdjs.Est8Code.GDtx12Objects3.length = 0;
gdjs.Est8Code.GDprxEst7Objects1.length = 0;
gdjs.Est8Code.GDprxEst7Objects2.length = 0;
gdjs.Est8Code.GDprxEst7Objects3.length = 0;
gdjs.Est8Code.GDVoltarAoInicioObjects1.length = 0;
gdjs.Est8Code.GDVoltarAoInicioObjects2.length = 0;
gdjs.Est8Code.GDVoltarAoInicioObjects3.length = 0;

gdjs.Est8Code.eventsList2(runtimeScene);
return;

}

gdjs['Est8Code'] = gdjs.Est8Code;
