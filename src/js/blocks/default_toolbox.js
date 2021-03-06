import Blockly from "scratch-blocks";

Blockly.Blocks.defaultToolbox = `<xml id="toolbox-categories" style="display: none">
<category name="%{BKY_CATEGORY_ARDUINO}" id="arduino" colour="#34c8a5" secondaryColour="#31bc9c">
  <block type="ArduinoSendDigitalValueBrick"></block >
  <block type="ArduinoSendPWMValueBrick"></block >
</category>
<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">
  <block type="ForeverBrick"></block >
  <block type="WaitBrick"></block >
  <block type="NoteBrick"></block >
  <block type="IfLogicBeginBrick"></block >
  <block type="IfThenLogicBeginBrick"></block >
  <block type="WaitUntilBrick"></block >
  <block type="RepeatBrick"></block >
  <block type="RepeatUntilBrick"></block >
  <block type="SceneTransitionBrick"></block >
  <block type="SceneStartBrick"></block >
  <block type="StopScriptBrick"></block >
  <block type="CloneBrick"></block >
  <block type="DeleteThisCloneBrick"></block >
  <block type="WhenClonedScript"></block >
</category>
<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#FF6680" secondaryColour="#389438">
  <block type="SetVariableBrick"></block >
  <block type="ChangeVariableBrick"></block >
  <block type="ShowTextBrick"></block >
  <block type="ShowTextColorSizeAlignmentBrick"></block >
  <block type="DeleteItemOfUserListBrick"></block >
  <block type="AddItemToUserListBrick"></block >
  <block type="InsertItemIntoUserListBrick"></block >
  <block type="ReplaceItemInUserListBrick"></block >
  <block type="HideTextBrick"></block >
  <block type="ReadVariableFromDeviceBrick"></block >
  <block type="WriteVariableOnDeviceBrick"></block >
</category>
<category name="%{BKY_CATEGORY_DRONE}" id="drone" colour="#91d149" secondaryColour="#7bb13e">
  <block type="DroneTakeOffLandBrick"></block >
  <block type="DroneEmergencyBrick"></block >
  <block type="DroneMoveUpBrick"></block >
  <block type="DroneMoveDownBrick"></block >
  <block type="DroneMoveLeftBrick"></block >
  <block type="DroneMoveRightBrick"></block >
  <block type="DroneMoveForwardBrick"></block >
  <block type="DroneMoveBackwardBrick"></block >
  <block type="DroneTurnLeftBrick"></block >
  <block type="DroneTurnRightBrick"></block >
  <block type="DroneFlipBrick"></block >
  <block type="DronePlayLedAnimationBrick"></block >
  <block type="DroneSwitchCameraBrick"></block >
</category>
<category name="%{BKY_CATEGORY_EVENTS}" id="event" colour="#FF661A" secondaryColour="#CC9900">
  <block type="StartScript"></block >
  <block type="WhenScript"></block >
  <block type="WhenTouchDownScript"></block >
  <block type="BroadcastScript"></block >
  <block type="BroadcastBrick"></block >
  <block type="BroadcastWaitBrick"></block >
  <block type="WhenConditionScript"></block >
  <block type="WhenBounceOffScript"></block >
  <block type="WhenBackgroundChangesScript"></block >
</category>
<category name="%{BKY_CATEGORY_JUMPING_SUMO}" id="jumpingSumo" colour="#91d149" secondaryColour="#7bb13e">
  <block type="JumpingSumoMoveForwardBrick"></block >
  <block type="JumpingSumoMoveBackwardBrick"></block >
  <block type="JumpingSumoAnimationsBrick"></block >
  <block type="JumpingSumoSoundBrick"></block >
  <block type="JumpingSumoNoSoundBrick"></block >
  <block type="JumpingSumoJumpLongBrick"></block >
  <block type="JumpingSumoJumpHighBrick"></block >
  <block type="JumpingSumoRotateLeftBrick"></block >
  <block type="JumpingSumoRotateRightBrick"></block >
  <block type="JumpingSumoTurnBrick"></block >
  <block type="JumpingSumoTakingPictureBrick"></block >
</category>
<category name="%{BKY_CATEGORY_LEGO_EV3}" id="legoEV3" colour="#cbca3e" secondaryColour="#d2d140">
  <block type="LegoEv3MotorTurnAngleBrick"></block >
  <block type="LegoEv3MotorMoveBrick"></block >
  <block type="LegoEv3MotorStopBrick"></block >
  <block type="LegoEv3PlayToneBrick"></block >
  <block type="LegoEv3SetLedBrick"></block >
</category>
<category name="%{BKY_CATEGORY_LEGO_NXT}" id="legoNXT" colour="#cbca3e" secondaryColour="#d2d140">
  <block type="LegoNxtMotorTurnAngleBrick"></block >
  <block type="LegoNxtMotorStopBrick"></block >
  <block type="LegoNxtMotorMoveBrick"></block >
  <block type="LegoNxtPlayToneBrick"></block >
</category>
<category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#59C059" secondaryColour="#59C059">
  <block type="SetLookBrick"></block >
  <block type="SetLookByIndexBrick"></block >
  <block type="NextLookBrick"></block >
  <block type="PreviousLookBrick"></block >
  <block type="SetSizeToBrick"></block >
  <block type="HideBrick"></block >
  <block type="ShowBrick"></block >
  <block type="AskBrick"></block >
  <block type="SayBubbleBrick"></block >
  <block type="SayForBubbleBrick"></block >
  <block type="ThinkBubbleBrick"></block >
  <block type="ThinkForBubbleBrick"></block >
  <block type="SetTransparencyBrick"></block >
  <block type="ChangeSizeByNBrick"></block >
  <block type="ChangeTransparencyByNBrick"></block >
  <block type="SetBrightnessBrick"></block >
  <block type="ChangeBrightnessByNBrick"></block >
  <block type="SetColorBrick"></block >
  <block type="ChangeColorByNBrick"></block >
  <block type="ClearGraphicEffectBrick"></block >
  <block type="SetBackgroundBrick"></block >
  <block type="SetBackgroundByIndexBrick"></block >
  <block type="SetBackgroundAndWaitBrick"></block >
  <block type="SetBackgroundByIndexAndWaitBrick"></block >
  <block type="CameraBrick"></block >
  <block type="ChooseCameraBrick"></block >
  <block type="FlashBrick"></block >
</category>
<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">
  <block type="PlaceAtBrick"></block >
  <block type="SetXBrick"></block >
  <block type="SetYBrick"></block >
  <block type="ChangeXByNBrick"></block >
  <block type="ChangeYByNBrick"></block >
  <block type="GoToBrick"></block >
  <block type="IfOnEdgeBounceBrick"></block >
  <block type="MoveNStepsBrick"></block >
  <block type="TurnRightBrick"></block >
  <block type="TurnLeftBrick"></block >
  <block type="PointInDirectionBrick"></block >
  <block type="PointToBrick"></block >
  <block type="SetRotationStyleBrick"></block >
  <block type="GlideToBrick"></block >
  <block type="GoNStepsBackBrick"></block >
  <block type="ComeToFrontBrick"></block >
  <block type="VibrationBrick"></block >
  <block type="SetPhysicsObjectTypeBrick"></block >
  <block type="SetVelocityBrick"></block >
  <block type="TurnLeftSpeedBrick"></block >
  <block type="TurnRightSpeedBrick"></block >
  <block type="SetGravityBrick"></block >
  <block type="SetMassBrick"></block >
  <block type="SetBounceBrick"></block >
  <block type="SetFrictionBrick"></block >
</category>
<category name="%{BKY_CATEGORY_PEN}" id="pen" colour="#0fBD8C" secondaryColour="#2E8EB8">
  <block type="PenDownBrick"></block >
  <block type="PenUpBrick"></block >
  <block type="SetPenSizeBrick"></block >
  <block type="SetPenColorBrick"></block >
  <block type="StampBrick"></block >
  <block type="ClearBackgroundBrick"></block >
</category>
<category name="%{BKY_CATEGORY_PHIRO}" id="phiro" colour="#34c8a5" secondaryColour="#31bc9c">
  <block type="PhiroMotorMoveForwardBrick"></block >
  <block type="PhiroMotorMoveBackwardBrick"></block >
  <block type="PhiroMotorStopBrick"></block >
  <block type="PhiroPlayToneBrick"></block >
  <block type="PhiroRGBLightBrick"></block >
  <block type="PhiroIfLogicBeginBrick"></block >
</category>
<category name="%{BKY_CATEGORY_RASPI}" id="raspi" colour="#34c8a5" secondaryColour="#31bc9c">
  <block type="WhenRaspiPinChangedBrick"></block >
  <block type="RaspiIfLogicBeginBrick"></block >
  <block type="RaspiSendDigitalValueBrick"></block >
  <block type="RaspiPwmBrick"></block >
</category>
<category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#9966FF" secondaryColour="#9966FF">
  <block type="PlaySoundBrick"></block >
  <block type="PlaySoundAndWaitBrick"></block >
  <block type="StopAllSoundsBrick"></block >
  <block type="SetVolumeToBrick"></block >
  <block type="ChangeVolumeByNBrick"></block >
  <block type="SpeakBrick"></block >
  <block type="SpeakAndWaitBrick"></block >
  <block type="AskSpeechBrick"></block >
</category>
</xml>`;