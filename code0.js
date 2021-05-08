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
gdjs.paquimetroCode.condition2IsTrue_0 = {val:false};


gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects1Objects = Hashtable.newFrom({"blockNanioPonto0": gdjs.paquimetroCode.GDblockNanioPonto0Objects1});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDnanioObjects1Objects = Hashtable.newFrom({"nanio": gdjs.paquimetroCode.GDnanioObjects1});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects1Objects = Hashtable.newFrom({"blockNanioPonto0": gdjs.paquimetroCode.GDblockNanioPonto0Objects1});gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto90Objects1Objects = Hashtable.newFrom({"blockNanioPonto90": gdjs.paquimetroCode.GDblockNanioPonto90Objects1});gdjs.paquimetroCode.eventsList0 = function(runtimeScene) {

{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("blockNanioPonto0"), gdjs.paquimetroCode.GDblockNanioPonto0Objects1);
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.paquimetroCode.GDnanioObjects1.length;i<l;++i) {
    if ( gdjs.paquimetroCode.GDnanioObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs.paquimetroCode.condition0IsTrue_0.val = true;
        gdjs.paquimetroCode.GDnanioObjects1[k] = gdjs.paquimetroCode.GDnanioObjects1[i];
        ++k;
    }
}
gdjs.paquimetroCode.GDnanioObjects1.length = k;}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects1Objects, gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDnanioObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.paquimetroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.paquimetroCode.GDnanioObjects1 */
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].clearForces();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("blockNanioPonto0"), gdjs.paquimetroCode.GDblockNanioPonto0Objects1);
gdjs.copyArray(runtimeScene.getObjects("blockNanioPonto90"), gdjs.paquimetroCode.GDblockNanioPonto90Objects1);
gdjs.copyArray(runtimeScene.getObjects("nanio"), gdjs.paquimetroCode.GDnanioObjects1);

gdjs.paquimetroCode.condition0IsTrue_0.val = false;
gdjs.paquimetroCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.paquimetroCode.GDnanioObjects1.length;i<l;++i) {
    if ( gdjs.paquimetroCode.GDnanioObjects1[i].getBehavior("Draggable").isDragged() ) {
        gdjs.paquimetroCode.condition0IsTrue_0.val = true;
        gdjs.paquimetroCode.GDnanioObjects1[k] = gdjs.paquimetroCode.GDnanioObjects1[i];
        ++k;
    }
}
gdjs.paquimetroCode.GDnanioObjects1.length = k;}if ( gdjs.paquimetroCode.condition0IsTrue_0.val ) {
{
gdjs.paquimetroCode.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto0Objects1Objects, gdjs.paquimetroCode.mapOfGDgdjs_46paquimetroCode_46GDblockNanioPonto90Objects1Objects, false, runtimeScene, false);
}}
if (gdjs.paquimetroCode.condition1IsTrue_0.val) {
/* Reuse gdjs.paquimetroCode.GDnanioObjects1 */
{for(var i = 0, len = gdjs.paquimetroCode.GDnanioObjects1.length ;i < len;++i) {
    gdjs.paquimetroCode.GDnanioObjects1[i].clearForces();
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
