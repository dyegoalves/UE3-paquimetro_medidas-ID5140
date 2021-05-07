gdjs.Est6Code = {};
gdjs.Est6Code.GDbtAvancarGObjects1= [];
gdjs.Est6Code.GDbtAvancarGObjects2= [];
gdjs.Est6Code.GDbtAvancarGObjects3= [];
gdjs.Est6Code.GDbtVoltarGObjects1= [];
gdjs.Est6Code.GDbtVoltarGObjects2= [];
gdjs.Est6Code.GDbtVoltarGObjects3= [];
gdjs.Est6Code.GDerroParala1Objects1= [];
gdjs.Est6Code.GDerroParala1Objects2= [];
gdjs.Est6Code.GDerroParala1Objects3= [];
gdjs.Est6Code.GDtextErrorParalaxObjects1= [];
gdjs.Est6Code.GDtextErrorParalaxObjects2= [];
gdjs.Est6Code.GDtextErrorParalaxObjects3= [];
gdjs.Est6Code.GDtx12Objects1= [];
gdjs.Est6Code.GDtx12Objects2= [];
gdjs.Est6Code.GDtx12Objects3= [];
gdjs.Est6Code.GDtx1Objects1= [];
gdjs.Est6Code.GDtx1Objects2= [];
gdjs.Est6Code.GDtx1Objects3= [];
gdjs.Est6Code.GDerrorPrx1Objects1= [];
gdjs.Est6Code.GDerrorPrx1Objects2= [];
gdjs.Est6Code.GDerrorPrx1Objects3= [];
gdjs.Est6Code.GDpiscEst6Objects1= [];
gdjs.Est6Code.GDpiscEst6Objects2= [];
gdjs.Est6Code.GDpiscEst6Objects3= [];

gdjs.Est6Code.conditionTrue_0 = {val:false};
gdjs.Est6Code.condition0IsTrue_0 = {val:false};
gdjs.Est6Code.condition1IsTrue_0 = {val:false};


gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est6Code.GDbtVoltarGObjects2});gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est6Code.GDbtAvancarGObjects1});gdjs.Est6Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Est6Code.GDbtVoltarGObjects1, gdjs.Est6Code.GDbtVoltarGObjects2);


gdjs.Est6Code.condition0IsTrue_0.val = false;
{
gdjs.Est6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est5", false);
}}

}


{

/* Reuse gdjs.Est6Code.GDbtAvancarGObjects1 */

gdjs.Est6Code.condition0IsTrue_0.val = false;
{
gdjs.Est6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est7", false);
}}

}


};gdjs.Est6Code.eventsList1 = function(runtimeScene) {

{


gdjs.Est6Code.condition0IsTrue_0.val = false;
{
gdjs.Est6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Est6Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Est6Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtVoltarGObjects1Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est6Code.GDbtVoltarGObjects1});gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est6Code.GDbtAvancarGObjects1});gdjs.Est6Code.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est6Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est6Code.GDbtVoltarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("piscEst6"), gdjs.Est6Code.GDpiscEst6Objects1);
{for(var i = 0, len = gdjs.Est6Code.GDpiscEst6Objects1.length ;i < len;++i) {
    gdjs.Est6Code.GDpiscEst6Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est6Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est6Code.GDbtAvancarGObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est6Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est6Code.GDbtVoltarGObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("errorPrx1"), gdjs.Est6Code.GDerrorPrx1Objects1);

gdjs.Est6Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est6Code.GDerrorPrx1Objects1.length;i<l;++i) {
    if ( gdjs.Est6Code.GDerrorPrx1Objects1[i].hasAnimationEnded() ) {
        gdjs.Est6Code.condition0IsTrue_0.val = true;
        gdjs.Est6Code.GDerrorPrx1Objects1[k] = gdjs.Est6Code.GDerrorPrx1Objects1[i];
        ++k;
    }
}
gdjs.Est6Code.GDerrorPrx1Objects1.length = k;}if (gdjs.Est6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("piscEst6"), gdjs.Est6Code.GDpiscEst6Objects1);
{for(var i = 0, len = gdjs.Est6Code.GDpiscEst6Objects1.length ;i < len;++i) {
    gdjs.Est6Code.GDpiscEst6Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("piscEst6"), gdjs.Est6Code.GDpiscEst6Objects1);

gdjs.Est6Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est6Code.GDpiscEst6Objects1.length;i<l;++i) {
    if ( gdjs.Est6Code.GDpiscEst6Objects1[i].hasAnimationEnded() ) {
        gdjs.Est6Code.condition0IsTrue_0.val = true;
        gdjs.Est6Code.GDpiscEst6Objects1[k] = gdjs.Est6Code.GDpiscEst6Objects1[i];
        ++k;
    }
}
gdjs.Est6Code.GDpiscEst6Objects1.length = k;}if (gdjs.Est6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est6Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est6Code.GDbtVoltarGObjects1);
{for(var i = 0, len = gdjs.Est6Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est6Code.GDbtAvancarGObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est6Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est6Code.GDbtVoltarGObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Est6Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est6Code.GDbtVoltarGObjects1);

gdjs.Est6Code.condition0IsTrue_0.val = false;
{
gdjs.Est6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtVoltarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est6Code.GDbtVoltarGObjects1 */
{for(var i = 0, len = gdjs.Est6Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est6Code.GDbtVoltarGObjects1[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est6Code.GDbtAvancarGObjects1);

gdjs.Est6Code.condition0IsTrue_0.val = false;
{
gdjs.Est6Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est6Code.mapOfGDgdjs_46Est6Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est6Code.GDbtAvancarGObjects1 */
{for(var i = 0, len = gdjs.Est6Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est6Code.GDbtAvancarGObjects1[i].setAnimationFrame(2);
}
}}

}


};

gdjs.Est6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Est6Code.GDbtAvancarGObjects1.length = 0;
gdjs.Est6Code.GDbtAvancarGObjects2.length = 0;
gdjs.Est6Code.GDbtAvancarGObjects3.length = 0;
gdjs.Est6Code.GDbtVoltarGObjects1.length = 0;
gdjs.Est6Code.GDbtVoltarGObjects2.length = 0;
gdjs.Est6Code.GDbtVoltarGObjects3.length = 0;
gdjs.Est6Code.GDerroParala1Objects1.length = 0;
gdjs.Est6Code.GDerroParala1Objects2.length = 0;
gdjs.Est6Code.GDerroParala1Objects3.length = 0;
gdjs.Est6Code.GDtextErrorParalaxObjects1.length = 0;
gdjs.Est6Code.GDtextErrorParalaxObjects2.length = 0;
gdjs.Est6Code.GDtextErrorParalaxObjects3.length = 0;
gdjs.Est6Code.GDtx12Objects1.length = 0;
gdjs.Est6Code.GDtx12Objects2.length = 0;
gdjs.Est6Code.GDtx12Objects3.length = 0;
gdjs.Est6Code.GDtx1Objects1.length = 0;
gdjs.Est6Code.GDtx1Objects2.length = 0;
gdjs.Est6Code.GDtx1Objects3.length = 0;
gdjs.Est6Code.GDerrorPrx1Objects1.length = 0;
gdjs.Est6Code.GDerrorPrx1Objects2.length = 0;
gdjs.Est6Code.GDerrorPrx1Objects3.length = 0;
gdjs.Est6Code.GDpiscEst6Objects1.length = 0;
gdjs.Est6Code.GDpiscEst6Objects2.length = 0;
gdjs.Est6Code.GDpiscEst6Objects3.length = 0;

gdjs.Est6Code.eventsList2(runtimeScene);
return;

}

gdjs['Est6Code'] = gdjs.Est6Code;
