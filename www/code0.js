gdjs.Nueva_32EscenaCode = {};


gdjs.Nueva_32EscenaCode.GDTurretObjects1= [];
gdjs.Nueva_32EscenaCode.GDBulletObjects1= [];
gdjs.Nueva_32EscenaCode.GDEnemyObjects1= [];
gdjs.Nueva_32EscenaCode.GDExplosionObjects1= [];
gdjs.Nueva_32EscenaCode.GDGameOverObjects1= [];
gdjs.Nueva_32EscenaCode.GDBackgroundObjects1= [];

gdjs.Nueva_32EscenaCode.conditionTrue_0 = {val:false};
gdjs.Nueva_32EscenaCode.condition0IsTrue_0 = {val:false};
gdjs.Nueva_32EscenaCode.condition1IsTrue_0 = {val:false};
gdjs.Nueva_32EscenaCode.condition2IsTrue_0 = {val:false};

gdjs.Nueva_32EscenaCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Nueva_32EscenaCode.GDTurretObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDBulletObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDExplosionObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDGameOverObjects1.length = 0;
gdjs.Nueva_32EscenaCode.GDBackgroundObjects1.length = 0;


{

gdjs.Nueva_32EscenaCode.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDTurretObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}


{

gdjs.Nueva_32EscenaCode.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));
gdjs.Nueva_32EscenaCode.GDBulletObjects1.length = 0;

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
gdjs.Nueva_32EscenaCode.condition1IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val ) {
{
gdjs.Nueva_32EscenaCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.25, "FireRate");
}}
if (gdjs.Nueva_32EscenaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Bullet", gdjs.Nueva_32EscenaCode.GDBulletObjects1).getEventsObjectsMap(), (( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getPointX("Canon")), (( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getPointY("Canon")), "");
}{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDBulletObjects1[i].addPolarForce((( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getDirectionOrAngle()), 400, 1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FireRate");
}}

}


{

gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length = 0;

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "EnemyCreation");
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "EnemyCreation");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Enemy", gdjs.Nueva_32EscenaCode.GDEnemyObjects1).getEventsObjectsMap(), gdjs.random(800), -50, "");
}}

}


{

gdjs.Nueva_32EscenaCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.Nueva_32EscenaCode.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDEnemyObjects1[i].addForceTowardObject((gdjs.Nueva_32EscenaCode.GDTurretObjects1.length !== 0 ? gdjs.Nueva_32EscenaCode.GDTurretObjects1[0] : null), 150, 0);
}
}{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDEnemyObjects1[i].rotateTowardPosition((( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getPointX("Centre")), (( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getPointY("Centre")), 0, runtimeScene);
}
}
}


{

gdjs.Nueva_32EscenaCode.GDBulletObjects1.createFrom(runtimeScene.getObjects("Bullet"));
gdjs.Nueva_32EscenaCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.Nueva_32EscenaCode.GDExplosionObjects1.length = 0;

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Bullet", gdjs.Nueva_32EscenaCode.GDBulletObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Enemy", gdjs.Nueva_32EscenaCode.GDEnemyObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Explosion", gdjs.Nueva_32EscenaCode.GDExplosionObjects1).getEventsObjectsMap(), (( gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDEnemyObjects1[0].getPointX("")), (( gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDEnemyObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDEnemyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Nueva_32EscenaCode.GDExplosionObjects1.createFrom(runtimeScene.getObjects("Explosion"));

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nueva_32EscenaCode.GDExplosionObjects1.length;i<l;++i) {
    if ( gdjs.Nueva_32EscenaCode.GDExplosionObjects1[i].hasAnimationEnded() ) {
        gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = true;
        gdjs.Nueva_32EscenaCode.GDExplosionObjects1[k] = gdjs.Nueva_32EscenaCode.GDExplosionObjects1[i];
        ++k;
    }
}
gdjs.Nueva_32EscenaCode.GDExplosionObjects1.length = k;}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDExplosionObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Nueva_32EscenaCode.GDEnemyObjects1.createFrom(runtimeScene.getObjects("Enemy"));
gdjs.Nueva_32EscenaCode.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));
gdjs.Nueva_32EscenaCode.GDExplosionObjects1.length = 0;

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("Enemy", gdjs.Nueva_32EscenaCode.GDEnemyObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("Turret", gdjs.Nueva_32EscenaCode.GDTurretObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("Explosion", gdjs.Nueva_32EscenaCode.GDExplosionObjects1).getEventsObjectsMap(), (( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getPointX("")), (( gdjs.Nueva_32EscenaCode.GDTurretObjects1.length === 0 ) ? 0 :gdjs.Nueva_32EscenaCode.GDTurretObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDTurretObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDTurretObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "GameOver");
}}

}


{

gdjs.Nueva_32EscenaCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDGameOverObjects1[i].hide();
}
}}

}


{

gdjs.Nueva_32EscenaCode.GDGameOverObjects1.createFrom(runtimeScene.getObjects("GameOver"));
gdjs.Nueva_32EscenaCode.GDTurretObjects1.createFrom(runtimeScene.getObjects("Turret"));

gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = false;
gdjs.Nueva_32EscenaCode.condition1IsTrue_0.val = false;
{
gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(context.clearEventsObjectsMap().addObjectsToEventsMap("Turret", gdjs.Nueva_32EscenaCode.GDTurretObjects1).getEventsObjectsMap()) == 0;
}if ( gdjs.Nueva_32EscenaCode.condition0IsTrue_0.val ) {
{
gdjs.Nueva_32EscenaCode.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "GameOver");
}}
if (gdjs.Nueva_32EscenaCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.Nueva_32EscenaCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Nueva_32EscenaCode.GDGameOverObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0);
}}

}

return;
}
gdjs['Nueva_32EscenaCode']= gdjs.Nueva_32EscenaCode;
