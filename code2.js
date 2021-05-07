gdjs.Est34Code = {};
gdjs.Est34Code.GDbtAvancarGObjects1= [];
gdjs.Est34Code.GDbtAvancarGObjects2= [];
gdjs.Est34Code.GDbtAvancarGObjects3= [];
gdjs.Est34Code.GDbtVoltarGObjects1= [];
gdjs.Est34Code.GDbtVoltarGObjects2= [];
gdjs.Est34Code.GDbtVoltarGObjects3= [];
gdjs.Est34Code.GDPaquimetroObjects1= [];
gdjs.Est34Code.GDPaquimetroObjects2= [];
gdjs.Est34Code.GDPaquimetroObjects3= [];
gdjs.Est34Code.GDnanioReguaObjects1= [];
gdjs.Est34Code.GDnanioReguaObjects2= [];
gdjs.Est34Code.GDnanioReguaObjects3= [];
gdjs.Est34Code.GDtextEstagio4Objects1= [];
gdjs.Est34Code.GDtextEstagio4Objects2= [];
gdjs.Est34Code.GDtextEstagio4Objects3= [];
gdjs.Est34Code.GDtextEstagio3Objects1= [];
gdjs.Est34Code.GDtextEstagio3Objects2= [];
gdjs.Est34Code.GDtextEstagio3Objects3= [];
gdjs.Est34Code.GDs1Objects1= [];
gdjs.Est34Code.GDs1Objects2= [];
gdjs.Est34Code.GDs1Objects3= [];
gdjs.Est34Code.GDsetaS2Objects1= [];
gdjs.Est34Code.GDsetaS2Objects2= [];
gdjs.Est34Code.GDsetaS2Objects3= [];
gdjs.Est34Code.GDsetaS1Objects1= [];
gdjs.Est34Code.GDsetaS1Objects2= [];
gdjs.Est34Code.GDsetaS1Objects3= [];
gdjs.Est34Code.GDblock2Objects1= [];
gdjs.Est34Code.GDblock2Objects2= [];
gdjs.Est34Code.GDblock2Objects3= [];
gdjs.Est34Code.GDblock1Objects1= [];
gdjs.Est34Code.GDblock1Objects2= [];
gdjs.Est34Code.GDblock1Objects3= [];
gdjs.Est34Code.GDps1Objects1= [];
gdjs.Est34Code.GDps1Objects2= [];
gdjs.Est34Code.GDps1Objects3= [];

gdjs.Est34Code.conditionTrue_0 = {val:false};
gdjs.Est34Code.condition0IsTrue_0 = {val:false};
gdjs.Est34Code.condition1IsTrue_0 = {val:false};


gdjs.Est34Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est34Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est34Code.GDbtVoltarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("ps1"), gdjs.Est34Code.GDps1Objects1);
gdjs.copyArray(runtimeScene.getObjects("textEstagio3"), gdjs.Est34Code.GDtextEstagio3Objects1);
gdjs.copyArray(runtimeScene.getObjects("textEstagio4"), gdjs.Est34Code.GDtextEstagio4Objects1);
{for(var i = 0, len = gdjs.Est34Code.GDtextEstagio3Objects1.length ;i < len;++i) {
    gdjs.Est34Code.GDtextEstagio3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est34Code.GDps1Objects1.length ;i < len;++i) {
    gdjs.Est34Code.GDps1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est34Code.GDtextEstagio4Objects1.length ;i < len;++i) {
    gdjs.Est34Code.GDtextEstagio4Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est34Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est34Code.GDbtAvancarGObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est34Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est34Code.GDbtVoltarGObjects1[i].hide();
}
}}

}


};gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDs1Objects2Objects = Hashtable.newFrom({"s1": gdjs.Est34Code.GDs1Objects2});gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDblock1Objects2Objects = Hashtable.newFrom({"block1": gdjs.Est34Code.GDblock1Objects2});gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDnanioReguaObjects1Objects = Hashtable.newFrom({"nanioRegua": gdjs.Est34Code.GDnanioReguaObjects1});gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDblock2Objects1Objects = Hashtable.newFrom({"block2": gdjs.Est34Code.GDblock2Objects1});gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est34Code.GDbtVoltarGObjects2});gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est34Code.GDbtAvancarGObjects1});gdjs.Est34Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Est34Code.GDbtVoltarGObjects1, gdjs.Est34Code.GDbtVoltarGObjects2);


gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est34Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est2", true);
}}

}


{

/* Reuse gdjs.Est34Code.GDbtAvancarGObjects1 */

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est34Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est5", true);
}}

}


};gdjs.Est34Code.eventsList2 = function(runtimeScene) {

{


gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Est34Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Est34Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Est34Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("s1"), gdjs.Est34Code.GDs1Objects2);

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est34Code.GDs1Objects2.length;i<l;++i) {
    if ( gdjs.Est34Code.GDs1Objects2[i].hasAnimationEnded() ) {
        gdjs.Est34Code.condition0IsTrue_0.val = true;
        gdjs.Est34Code.GDs1Objects2[k] = gdjs.Est34Code.GDs1Objects2[i];
        ++k;
    }
}
gdjs.Est34Code.GDs1Objects2.length = k;}if (gdjs.Est34Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ps1"), gdjs.Est34Code.GDps1Objects2);
/* Reuse gdjs.Est34Code.GDs1Objects2 */
gdjs.copyArray(runtimeScene.getObjects("setaS1"), gdjs.Est34Code.GDsetaS1Objects2);
gdjs.copyArray(runtimeScene.getObjects("textEstagio3"), gdjs.Est34Code.GDtextEstagio3Objects2);
{for(var i = 0, len = gdjs.Est34Code.GDsetaS1Objects2.length ;i < len;++i) {
    gdjs.Est34Code.GDsetaS1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est34Code.GDtextEstagio3Objects2.length ;i < len;++i) {
    gdjs.Est34Code.GDtextEstagio3Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est34Code.GDs1Objects2.length ;i < len;++i) {
    gdjs.Est34Code.GDs1Objects2[i].addForceTowardPosition(300, 564, 160, 0);
}
}{for(var i = 0, len = gdjs.Est34Code.GDps1Objects2.length ;i < len;++i) {
    gdjs.Est34Code.GDps1Objects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("block1"), gdjs.Est34Code.GDblock1Objects2);
gdjs.copyArray(runtimeScene.getObjects("s1"), gdjs.Est34Code.GDs1Objects2);

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDs1Objects2Objects, gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDblock1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Est34Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est34Code.GDs1Objects2 */
gdjs.copyArray(runtimeScene.getObjects("textEstagio4"), gdjs.Est34Code.GDtextEstagio4Objects2);
{for(var i = 0, len = gdjs.Est34Code.GDs1Objects2.length ;i < len;++i) {
    gdjs.Est34Code.GDs1Objects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Est34Code.GDtextEstagio4Objects2.length ;i < len;++i) {
    gdjs.Est34Code.GDtextEstagio4Objects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ps1"), gdjs.Est34Code.GDps1Objects2);

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est34Code.GDps1Objects2.length;i<l;++i) {
    if ( gdjs.Est34Code.GDps1Objects2[i].hasAnimationEnded() ) {
        gdjs.Est34Code.condition0IsTrue_0.val = true;
        gdjs.Est34Code.GDps1Objects2[k] = gdjs.Est34Code.GDps1Objects2[i];
        ++k;
    }
}
gdjs.Est34Code.GDps1Objects2.length = k;}if (gdjs.Est34Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nanioRegua"), gdjs.Est34Code.GDnanioReguaObjects2);
{for(var i = 0, len = gdjs.Est34Code.GDnanioReguaObjects2.length ;i < len;++i) {
    gdjs.Est34Code.GDnanioReguaObjects2[i].addForceTowardPosition(400, 374, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("block2"), gdjs.Est34Code.GDblock2Objects1);
gdjs.copyArray(runtimeScene.getObjects("nanioRegua"), gdjs.Est34Code.GDnanioReguaObjects1);

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDnanioReguaObjects1Objects, gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDblock2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Est34Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est34Code.GDbtAvancarGObjects1);
gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est34Code.GDbtVoltarGObjects1);
/* Reuse gdjs.Est34Code.GDnanioReguaObjects1 */
{for(var i = 0, len = gdjs.Est34Code.GDnanioReguaObjects1.length ;i < len;++i) {
    gdjs.Est34Code.GDnanioReguaObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Est34Code.GDbtVoltarGObjects1.length ;i < len;++i) {
    gdjs.Est34Code.GDbtVoltarGObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est34Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est34Code.GDbtAvancarGObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Est34Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtVoltarGObjects2Objects = Hashtable.newFrom({"btVoltarG": gdjs.Est34Code.GDbtVoltarGObjects2});gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtAvancarGObjects1Objects = Hashtable.newFrom({"btAvancarG": gdjs.Est34Code.GDbtAvancarGObjects1});gdjs.Est34Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btVoltarG"), gdjs.Est34Code.GDbtVoltarGObjects2);

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtVoltarGObjects2Objects, runtimeScene, true, false);
}if (gdjs.Est34Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est34Code.GDbtVoltarGObjects2 */
{for(var i = 0, len = gdjs.Est34Code.GDbtVoltarGObjects2.length ;i < len;++i) {
    gdjs.Est34Code.GDbtVoltarGObjects2[i].setAnimationFrame(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancarG"), gdjs.Est34Code.GDbtAvancarGObjects1);

gdjs.Est34Code.condition0IsTrue_0.val = false;
{
gdjs.Est34Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est34Code.mapOfGDgdjs_46Est34Code_46GDbtAvancarGObjects1Objects, runtimeScene, true, false);
}if (gdjs.Est34Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est34Code.GDbtAvancarGObjects1 */
{for(var i = 0, len = gdjs.Est34Code.GDbtAvancarGObjects1.length ;i < len;++i) {
    gdjs.Est34Code.GDbtAvancarGObjects1[i].setAnimationFrame(2);
}
}}

}


};gdjs.Est34Code.eventsList5 = function(runtimeScene) {

{


gdjs.Est34Code.eventsList0(runtimeScene);
}


{


gdjs.Est34Code.eventsList3(runtimeScene);
}


{


gdjs.Est34Code.eventsList4(runtimeScene);
}


};

gdjs.Est34Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Est34Code.GDbtAvancarGObjects1.length = 0;
gdjs.Est34Code.GDbtAvancarGObjects2.length = 0;
gdjs.Est34Code.GDbtAvancarGObjects3.length = 0;
gdjs.Est34Code.GDbtVoltarGObjects1.length = 0;
gdjs.Est34Code.GDbtVoltarGObjects2.length = 0;
gdjs.Est34Code.GDbtVoltarGObjects3.length = 0;
gdjs.Est34Code.GDPaquimetroObjects1.length = 0;
gdjs.Est34Code.GDPaquimetroObjects2.length = 0;
gdjs.Est34Code.GDPaquimetroObjects3.length = 0;
gdjs.Est34Code.GDnanioReguaObjects1.length = 0;
gdjs.Est34Code.GDnanioReguaObjects2.length = 0;
gdjs.Est34Code.GDnanioReguaObjects3.length = 0;
gdjs.Est34Code.GDtextEstagio4Objects1.length = 0;
gdjs.Est34Code.GDtextEstagio4Objects2.length = 0;
gdjs.Est34Code.GDtextEstagio4Objects3.length = 0;
gdjs.Est34Code.GDtextEstagio3Objects1.length = 0;
gdjs.Est34Code.GDtextEstagio3Objects2.length = 0;
gdjs.Est34Code.GDtextEstagio3Objects3.length = 0;
gdjs.Est34Code.GDs1Objects1.length = 0;
gdjs.Est34Code.GDs1Objects2.length = 0;
gdjs.Est34Code.GDs1Objects3.length = 0;
gdjs.Est34Code.GDsetaS2Objects1.length = 0;
gdjs.Est34Code.GDsetaS2Objects2.length = 0;
gdjs.Est34Code.GDsetaS2Objects3.length = 0;
gdjs.Est34Code.GDsetaS1Objects1.length = 0;
gdjs.Est34Code.GDsetaS1Objects2.length = 0;
gdjs.Est34Code.GDsetaS1Objects3.length = 0;
gdjs.Est34Code.GDblock2Objects1.length = 0;
gdjs.Est34Code.GDblock2Objects2.length = 0;
gdjs.Est34Code.GDblock2Objects3.length = 0;
gdjs.Est34Code.GDblock1Objects1.length = 0;
gdjs.Est34Code.GDblock1Objects2.length = 0;
gdjs.Est34Code.GDblock1Objects3.length = 0;
gdjs.Est34Code.GDps1Objects1.length = 0;
gdjs.Est34Code.GDps1Objects2.length = 0;
gdjs.Est34Code.GDps1Objects3.length = 0;

gdjs.Est34Code.eventsList5(runtimeScene);
return;

}

gdjs['Est34Code'] = gdjs.Est34Code;
