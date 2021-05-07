gdjs.Est2Code = {};
gdjs.Est2Code.GDbtAvancarGObjects1= [];
gdjs.Est2Code.GDbtAvancarGObjects2= [];
gdjs.Est2Code.GDbtAvancarGObjects3= [];
gdjs.Est2Code.GDbtVoltarGObjects1= [];
gdjs.Est2Code.GDbtVoltarGObjects2= [];
gdjs.Est2Code.GDbtVoltarGObjects3= [];
gdjs.Est2Code.GDPaquimetroObjects1= [];
gdjs.Est2Code.GDPaquimetroObjects2= [];
gdjs.Est2Code.GDPaquimetroObjects3= [];
gdjs.Est2Code.GDnanioReguaObjects1= [];
gdjs.Est2Code.GDnanioReguaObjects2= [];
gdjs.Est2Code.GDnanioReguaObjects3= [];
gdjs.Est2Code.GDtextEstagio1Objects1= [];
gdjs.Est2Code.GDtextEstagio1Objects2= [];
gdjs.Est2Code.GDtextEstagio1Objects3= [];
gdjs.Est2Code.GDs1Objects1= [];
gdjs.Est2Code.GDs1Objects2= [];
gdjs.Est2Code.GDs1Objects3= [];
gdjs.Est2Code.GDsetaS2Objects1= [];
gdjs.Est2Code.GDsetaS2Objects2= [];
gdjs.Est2Code.GDsetaS2Objects3= [];
gdjs.Est2Code.GDsetaS1Objects1= [];
gdjs.Est2Code.GDsetaS1Objects2= [];
gdjs.Est2Code.GDsetaS1Objects3= [];

gdjs.Est2Code.conditionTrue_0 = {val:false};
gdjs.Est2Code.condition0IsTrue_0 = {val:false};
gdjs.Est2Code.condition1IsTrue_0 = {val:false};


gdjs.Est2Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est2Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est2Code.GDbtVoltarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("setaS1"), gdjs.Est2Code.GDsetaS1Objects1);
gdjs.copyArray(runtimeScene.getObjects("setaS2"), gdjs.Est2Code.GDsetaS2Objects1);
{for(var i = 0, len = gdjs.Est2Code.GDsetaS1Objects1.length ;i < len;++i) {
    gdjs.Est2Code.GDsetaS1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est2Code.GDsetaS2Objects1.length ;i < len;++i) {
    gdjs.Est2Code.GDsetaS2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est2Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est2Code.GDbtAvancarGObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est2Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est2Code.GDbtVoltarGObjects1[i].hide();
}
}}

}


};gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est2Code.GDbtVoltarGObjects2});gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est2Code.GDbtAvancarGObjects1});gdjs.Est2Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Est2Code.GDbtVoltarGObjects1, gdjs.Est2Code.GDbtVoltarGObjects2);


gdjs.Est2Code.condition0IsTrue_0.val = false;
{
gdjs.Est2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est1", true);
}}

}


{

/* Reuse gdjs.Est2Code.GDbtAvancarGObjects1 */

gdjs.Est2Code.condition0IsTrue_0.val = false;
{
gdjs.Est2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est34", true);
}}

}


};gdjs.Est2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Est2Code.condition0IsTrue_0.val = false;
{
gdjs.Est2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Est2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Est2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Est2Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("s1"), gdjs.Est2Code.GDs1Objects2);

gdjs.Est2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est2Code.GDs1Objects2.length;i<l;++i) {
    if ( gdjs.Est2Code.GDs1Objects2[i].hasAnimationEnded() ) {
        gdjs.Est2Code.condition0IsTrue_0.val = true;
        gdjs.Est2Code.GDs1Objects2[k] = gdjs.Est2Code.GDs1Objects2[i];
        ++k;
    }
}
gdjs.Est2Code.GDs1Objects2.length = k;}if (gdjs.Est2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("setaS1"), gdjs.Est2Code.GDsetaS1Objects2);
{for(var i = 0, len = gdjs.Est2Code.GDsetaS1Objects2.length ;i < len;++i) {
    gdjs.Est2Code.GDsetaS1Objects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("setaS1"), gdjs.Est2Code.GDsetaS1Objects2);

gdjs.Est2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est2Code.GDsetaS1Objects2.length;i<l;++i) {
    if ( gdjs.Est2Code.GDsetaS1Objects2[i].hasAnimationEnded() ) {
        gdjs.Est2Code.condition0IsTrue_0.val = true;
        gdjs.Est2Code.GDsetaS1Objects2[k] = gdjs.Est2Code.GDsetaS1Objects2[i];
        ++k;
    }
}
gdjs.Est2Code.GDsetaS1Objects2.length = k;}if (gdjs.Est2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("setaS2"), gdjs.Est2Code.GDsetaS2Objects2);
{for(var i = 0, len = gdjs.Est2Code.GDsetaS2Objects2.length ;i < len;++i) {
    gdjs.Est2Code.GDsetaS2Objects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("setaS2"), gdjs.Est2Code.GDsetaS2Objects1);

gdjs.Est2Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est2Code.GDsetaS2Objects1.length;i<l;++i) {
    if ( gdjs.Est2Code.GDsetaS2Objects1[i].hasAnimationEnded() ) {
        gdjs.Est2Code.condition0IsTrue_0.val = true;
        gdjs.Est2Code.GDsetaS2Objects1[k] = gdjs.Est2Code.GDsetaS2Objects1[i];
        ++k;
    }
}
gdjs.Est2Code.GDsetaS2Objects1.length = k;}if (gdjs.Est2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est2Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est2Code.GDbtVoltarGObjects1);
{for(var i = 0, len = gdjs.Est2Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est2Code.GDbtVoltarGObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est2Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est2Code.GDbtAvancarGObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Est2Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est2Code.GDbtVoltarGObjects2});gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est2Code.GDbtAvancarGObjects1});gdjs.Est2Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est2Code.GDbtVoltarGObjects2);

gdjs.Est2Code.condition0IsTrue_0.val = false;
{
gdjs.Est2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est2Code.GDbtVoltarGObjects2 */
{for(var i = 0, len = gdjs.Est2Code.GDbtVoltarGObjects2.length ;i < len;++i) {
    gdjs.Est2Code.GDbtVoltarGObjects2[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est2Code.GDbtAvancarGObjects1);

gdjs.Est2Code.condition0IsTrue_0.val = false;
{
gdjs.Est2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est2Code.mapOfGDgdjs_46Est2Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est2Code.GDbtAvancarGObjects1 */
{for(var i = 0, len = gdjs.Est2Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est2Code.GDbtAvancarGObjects1[i].setAnimationFrame(2);
}
}}

}


};gdjs.Est2Code.eventsList5 = function(runtimeScene) {

{


gdjs.Est2Code.eventsList0(runtimeScene);
}


{


gdjs.Est2Code.eventsList3(runtimeScene);
}


{


gdjs.Est2Code.eventsList4(runtimeScene);
}


};

gdjs.Est2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Est2Code.GDbtAvancarGObjects1.length = 0;
gdjs.Est2Code.GDbtAvancarGObjects2.length = 0;
gdjs.Est2Code.GDbtAvancarGObjects3.length = 0;
gdjs.Est2Code.GDbtVoltarGObjects1.length = 0;
gdjs.Est2Code.GDbtVoltarGObjects2.length = 0;
gdjs.Est2Code.GDbtVoltarGObjects3.length = 0;
gdjs.Est2Code.GDPaquimetroObjects1.length = 0;
gdjs.Est2Code.GDPaquimetroObjects2.length = 0;
gdjs.Est2Code.GDPaquimetroObjects3.length = 0;
gdjs.Est2Code.GDnanioReguaObjects1.length = 0;
gdjs.Est2Code.GDnanioReguaObjects2.length = 0;
gdjs.Est2Code.GDnanioReguaObjects3.length = 0;
gdjs.Est2Code.GDtextEstagio1Objects1.length = 0;
gdjs.Est2Code.GDtextEstagio1Objects2.length = 0;
gdjs.Est2Code.GDtextEstagio1Objects3.length = 0;
gdjs.Est2Code.GDs1Objects1.length = 0;
gdjs.Est2Code.GDs1Objects2.length = 0;
gdjs.Est2Code.GDs1Objects3.length = 0;
gdjs.Est2Code.GDsetaS2Objects1.length = 0;
gdjs.Est2Code.GDsetaS2Objects2.length = 0;
gdjs.Est2Code.GDsetaS2Objects3.length = 0;
gdjs.Est2Code.GDsetaS1Objects1.length = 0;
gdjs.Est2Code.GDsetaS1Objects2.length = 0;
gdjs.Est2Code.GDsetaS1Objects3.length = 0;

gdjs.Est2Code.eventsList5(runtimeScene);
return;

}

gdjs['Est2Code'] = gdjs.Est2Code;
