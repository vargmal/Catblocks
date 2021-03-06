import Blockly from "scratch-blocks";

Blockly.Blocks['PlaySoundBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_STARTSOUND,
      "args0": [
        {
          "type": "field_input",
          "name": "sound",
          "text": "sound"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['PlaySoundAndWaitBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_STARTSOUNDANDWAIT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DROPDOWN",
          "options": [
            ["new...", "NEW"]
          ]
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['StopAllSoundsBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_STOPALLSOUNDS,
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['SetVolumeToBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SETVOLUMETO,
      "args0": [
        {
          "type": "field_number",
          "name": "VOLUME",
          "value": 60
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['ChangeVolumeByNBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_CHANGEVOLUMEBY,
      "args0": [
        {
          "type": "field_number",
          "name": "VOLUME_CHANGE",
          "value": -10
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['SpeakBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SPEAK,
      "args0": [
        {
          "type": "field_input",
          "name": "SPEAK",
          "text": "Hello!"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['SpeakAndWaitBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_SPEAKANDWAIT,
      "args0": [
        {
          "type": "field_input",
          "name": "SPEAK",
          "text": "Hello!"
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};

Blockly.Blocks['AskSpeechBrick'] = {
  init: function () {
    this.jsonInit({
      "message0": Blockly.Msg.SOUND_ASKANDSTORESPOKENANSWERIN,
      "args0": [
        {
          "type": "field_input",
          "name": "ASK_SPEECH_QUESTION",
          "text": "What's your name?"
        },
        {
          "type": "field_dropdown",
          "name": "DROPDOWN",
          "options": [
            ["new...", "NEW"]
          ]
        }
      ],
      "category": Blockly.Categories.sound,
      "extensions": ["colours_sounds", "shape_statement"]
    });
  }
};
