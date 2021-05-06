gdjs.Est1Code = {};
gdjs.Est1Code.GDPaquimetroObjects1= [];
gdjs.Est1Code.GDPaquimetroObjects2= [];
gdjs.Est1Code.GDPaquimetroObjects3= [];
gdjs.Est1Code.GDnanioReguaObjects1= [];
gdjs.Est1Code.GDnanioReguaObjects2= [];
gdjs.Est1Code.GDnanioReguaObjects3= [];
gdjs.Est1Code.GDblock2Objects1= [];
gdjs.Est1Code.GDblock2Objects2= [];
gdjs.Est1Code.GDblock2Objects3= [];
gdjs.Est1Code.GDblockObjects1= [];
gdjs.Est1Code.GDblockObjects2= [];
gdjs.Est1Code.GDblockObjects3= [];
gdjs.Est1Code.GDc2Objects1= [];
gdjs.Est1Code.GDc2Objects2= [];
gdjs.Est1Code.GDc2Objects3= [];
gdjs.Est1Code.GDc1Objects1= [];
gdjs.Est1Code.GDc1Objects2= [];
gdjs.Est1Code.GDc1Objects3= [];
gdjs.Est1Code.GDc1cObjects1= [];
gdjs.Est1Code.GDc1cObjects2= [];
gdjs.Est1Code.GDc1cObjects3= [];
gdjs.Est1Code.GDc2cObjects1= [];
gdjs.Est1Code.GDc2cObjects2= [];
gdjs.Est1Code.GDc2cObjects3= [];
gdjs.Est1Code.GDtextEstagio1Objects1= [];
gdjs.Est1Code.GDtextEstagio1Objects2= [];
gdjs.Est1Code.GDtextEstagio1Objects3= [];
gdjs.Est1Code.GDs1Objects1= [];
gdjs.Est1Code.GDs1Objects2= [];
gdjs.Est1Code.GDs1Objects3= [];
gdjs.Est1Code.GDbtAvancarEst1Objects1= [];
gdjs.Est1Code.GDbtAvancarEst1Objects2= [];
gdjs.Est1Code.GDbtAvancarEst1Objects3= [];

gdjs.Est1Code.conditionTrue_0 = {val:false};
gdjs.Est1Code.condition0IsTrue_0 = {val:false};
gdjs.Est1Code.condition1IsTrue_0 = {val:false};


gdjs.Est1Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Paquimetro"), gdjs.Est1Code.GDPaquimetroObjects1);
gdjs.copyArray(runtimeScene.getObjects("btAvancarEst1"), gdjs.Est1Code.GDbtAvancarEst1Objects1);
gdjs.copyArray(runtimeScene.getObjects("c1"), gdjs.Est1Code.GDc1Objects1);
gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Est1Code.GDc2Objects1);
gdjs.copyArray(runtimeScene.getObjects("nanioRegua"), gdjs.Est1Code.GDnanioReguaObjects1);
gdjs.copyArray(runtimeScene.getObjects("s1"), gdjs.Est1Code.GDs1Objects1);
gdjs.copyArray(runtimeScene.getObjects("textEstagio1"), gdjs.Est1Code.GDtextEstagio1Objects1);
{for(var i = 0, len = gdjs.Est1Code.GDPaquimetroObjects1.length ;i < len;++i) {
    gdjs.Est1Code.GDPaquimetroObjects1[i].rotateTowardAngle(0, 45 + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), runtimeScene);
}
}{for(var i = 0, len = gdjs.Est1Code.GDnanioReguaObjects1.length ;i < len;++i) {
    gdjs.Est1Code.GDnanioReguaObjects1[i].rotateTowardAngle(0, 45 + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), runtimeScene);
}
}{for(var i = 0, len = gdjs.Est1Code.GDPaquimetroObjects1.length ;i < len;++i) {
    gdjs.Est1Code.GDPaquimetroObjects1[i].addForceTowardPosition(984, 350, 540 + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0);
}
}{for(var i = 0, len = gdjs.Est1Code.GDnanioReguaObjects1.length ;i < len;++i) {
    gdjs.Est1Code.GDnanioReguaObjects1[i].addForceTowardPosition(978, 322, 540 + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0);
}
}{for(var i = 0, len = gdjs.Est1Code.GDc1Objects1.length ;i < len;++i) {
    gdjs.Est1Code.GDc1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est1Code.GDc2Objects1.length ;i < len;++i) {
    gdjs.Est1Code.GDc2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est1Code.GDs1Objects1.length ;i < len;++i) {
    gdjs.Est1Code.GDs1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est1Code.GDtextEstagio1Objects1.length ;i < len;++i) {
    gdjs.Est1Code.GDtextEstagio1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Est1Code.GDbtAvancarEst1Objects1.length ;i < len;++i) {
    gdjs.Est1Code.GDbtAvancarEst1Objects1[i].hide();
}
}}

}


};gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDPaquimetroObjects2Objects = Hashtable.newFrom({"Paquimetro": gdjs.Est1Code.GDPaquimetroObjects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDblockObjects2Objects = Hashtable.newFrom({"block": gdjs.Est1Code.GDblockObjects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDnanioReguaObjects2Objects = Hashtable.newFrom({"nanioRegua": gdjs.Est1Code.GDnanioReguaObjects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDblock2Objects2Objects = Hashtable.newFrom({"block2": gdjs.Est1Code.GDblock2Objects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc1Objects2Objects = Hashtable.newFrom({"c1": gdjs.Est1Code.GDc1Objects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc1cObjects2Objects = Hashtable.newFrom({"c1c": gdjs.Est1Code.GDc1cObjects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc2Objects2Objects = Hashtable.newFrom({"c2": gdjs.Est1Code.GDc2Objects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc2cObjects2Objects = Hashtable.newFrom({"c2c": gdjs.Est1Code.GDc2cObjects2});gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDbtAvancarEst1Objects1Objects = Hashtable.newFrom({"btAvancarEst1": gdjs.Est1Code.GDbtAvancarEst1Objects1});gdjs.Est1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btAvancarEst1"), gdjs.Est1Code.GDbtAvancarEst1Objects1);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDbtAvancarEst1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Est1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Est2", false);
}}

}


};gdjs.Est1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Paquimetro"), gdjs.Est1Code.GDPaquimetroObjects2);
gdjs.copyArray(runtimeScene.getObjects("block"), gdjs.Est1Code.GDblockObjects2);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDPaquimetroObjects2Objects, gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDblockObjects2Objects, false, runtimeScene, false);
}if (gdjs.Est1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est1Code.GDPaquimetroObjects2 */
gdjs.copyArray(runtimeScene.getObjects("nanioRegua"), gdjs.Est1Code.GDnanioReguaObjects2);
{for(var i = 0, len = gdjs.Est1Code.GDPaquimetroObjects2.length ;i < len;++i) {
    gdjs.Est1Code.GDPaquimetroObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.Est1Code.GDnanioReguaObjects2.length ;i < len;++i) {
    gdjs.Est1Code.GDnanioReguaObjects2[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("block2"), gdjs.Est1Code.GDblock2Objects2);
gdjs.copyArray(runtimeScene.getObjects("nanioRegua"), gdjs.Est1Code.GDnanioReguaObjects2);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDnanioReguaObjects2Objects, gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDblock2Objects2Objects, false, runtimeScene, false);
}if (gdjs.Est1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Paquimetro"), gdjs.Est1Code.GDPaquimetroObjects2);
gdjs.copyArray(runtimeScene.getObjects("c1"), gdjs.Est1Code.GDc1Objects2);
gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Est1Code.GDc2Objects2);
/* Reuse gdjs.Est1Code.GDnanioReguaObjects2 */
{for(var i = 0, len = gdjs.Est1Code.GDc1Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDc1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est1Code.GDc2Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDc2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est1Code.GDPaquimetroObjects2.length ;i < len;++i) {
    gdjs.Est1Code.GDPaquimetroObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.Est1Code.GDnanioReguaObjects2.length ;i < len;++i) {
    gdjs.Est1Code.GDnanioReguaObjects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Est1Code.GDc1Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDc1Objects2[i].addForceTowardPosition(480, 600, 250 + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0);
}
}{for(var i = 0, len = gdjs.Est1Code.GDc2Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDc2Objects2[i].addForceTowardPosition(930, 600, 250 + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c1"), gdjs.Est1Code.GDc1Objects2);
gdjs.copyArray(runtimeScene.getObjects("c1c"), gdjs.Est1Code.GDc1cObjects2);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc1Objects2Objects, gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc1cObjects2Objects, false, runtimeScene, false);
}if (gdjs.Est1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est1Code.GDc1Objects2 */
{for(var i = 0, len = gdjs.Est1Code.GDc1Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDc1Objects2[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("c2"), gdjs.Est1Code.GDc2Objects2);
gdjs.copyArray(runtimeScene.getObjects("c2c"), gdjs.Est1Code.GDc2cObjects2);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc2Objects2Objects, gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDc2cObjects2Objects, false, runtimeScene, false);
}if (gdjs.Est1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est1Code.GDc2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("s1"), gdjs.Est1Code.GDs1Objects2);
gdjs.copyArray(runtimeScene.getObjects("textEstagio1"), gdjs.Est1Code.GDtextEstagio1Objects2);
{for(var i = 0, len = gdjs.Est1Code.GDc2Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDc2Objects2[i].clearForces();
}
}{for(var i = 0, len = gdjs.Est1Code.GDtextEstagio1Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDtextEstagio1Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Est1Code.GDs1Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDs1Objects2[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("s1"), gdjs.Est1Code.GDs1Objects2);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Est1Code.GDs1Objects2.length;i<l;++i) {
    if ( gdjs.Est1Code.GDs1Objects2[i].hasAnimationEnded() ) {
        gdjs.Est1Code.condition0IsTrue_0.val = true;
        gdjs.Est1Code.GDs1Objects2[k] = gdjs.Est1Code.GDs1Objects2[i];
        ++k;
    }
}
gdjs.Est1Code.GDs1Objects2.length = k;}if (gdjs.Est1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("btAvancarEst1"), gdjs.Est1Code.GDbtAvancarEst1Objects2);
{for(var i = 0, len = gdjs.Est1Code.GDbtAvancarEst1Objects2.length ;i < len;++i) {
    gdjs.Est1Code.GDbtAvancarEst1Objects2[i].hide(false);
}
}}

}


{


gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Est1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Est1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Est1Code.eventsList3 = function(runtimeScene) {

{


{
}

}


};gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDbtAvancarEst1Objects1Objects = Hashtable.newFrom({"btAvancarEst1": gdjs.Est1Code.GDbtAvancarEst1Objects1});gdjs.Est1Code.eventsList4 = function(runtimeScene) {

{


gdjs.Est1Code.eventsList0(runtimeScene);
}


{


gdjs.Est1Code.eventsList2(runtimeScene);
}


{


gdjs.Est1Code.eventsList3(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("btAvancarEst1"), gdjs.Est1Code.GDbtAvancarEst1Objects1);

gdjs.Est1Code.condition0IsTrue_0.val = false;
{
gdjs.Est1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Est1Code.mapOfGDgdjs_46Est1Code_46GDbtAvancarEst1Objects1Objects, runtimeScene, true, false);
}if (gdjs.Est1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Est1Code.GDbtAvancarEst1Objects1 */
{for(var i = 0, len = gdjs.Est1Code.GDbtAvancarEst1Objects1.length ;i < len;++i) {
    gdjs.Est1Code.GDbtAvancarEst1Objects1[i].setAnimationFrame(2);
}
}}

}


};

gdjs.Est1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Est1Code.GDPaquimetroObjects1.length = 0;
gdjs.Est1Code.GDPaquimetroObjects2.length = 0;
gdjs.Est1Code.GDPaquimetroObjects3.length = 0;
gdjs.Est1Code.GDnanioReguaObjects1.length = 0;
gdjs.Est1Code.GDnanioReguaObjects2.length = 0;
gdjs.Est1Code.GDnanioReguaObjects3.length = 0;
gdjs.Est1Code.GDblock2Objects1.length = 0;
gdjs.Est1Code.GDblock2Objects2.length = 0;
gdjs.Est1Code.GDblock2Objects3.length = 0;
gdjs.Est1Code.GDblockObjects1.length = 0;
gdjs.Est1Code.GDblockObjects2.length = 0;
gdjs.Est1Code.GDblockObjects3.length = 0;
gdjs.Est1Code.GDc2Objects1.length = 0;
gdjs.Est1Code.GDc2Objects2.length = 0;
gdjs.Est1Code.GDc2Objects3.length = 0;
gdjs.Est1Code.GDc1Objects1.length = 0;
gdjs.Est1Code.GDc1Objects2.length = 0;
gdjs.Est1Code.GDc1Objects3.length = 0;
gdjs.Est1Code.GDc1cObjects1.length = 0;
gdjs.Est1Code.GDc1cObjects2.length = 0;
gdjs.Est1Code.GDc1cObjects3.length = 0;
gdjs.Est1Code.GDc2cObjects1.length = 0;
gdjs.Est1Code.GDc2cObjects2.length = 0;
gdjs.Est1Code.GDc2cObjects3.length = 0;
gdjs.Est1Code.GDtextEstagio1Objects1.length = 0;
gdjs.Est1Code.GDtextEstagio1Objects2.length = 0;
gdjs.Est1Code.GDtextEstagio1Objects3.length = 0;
gdjs.Est1Code.GDs1Objects1.length = 0;
gdjs.Est1Code.GDs1Objects2.length = 0;
gdjs.Est1Code.GDs1Objects3.length = 0;
gdjs.Est1Code.GDbtAvancarEst1Objects1.length = 0;
gdjs.Est1Code.GDbtAvancarEst1Objects2.length = 0;
gdjs.Est1Code.GDbtAvancarEst1Objects3.length = 0;

gdjs.Est1Code.eventsList4(runtimeScene);
return;

}

gdjs['Est1Code'] = gdjs.Est1Code;
