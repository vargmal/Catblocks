import Blockly from "scratch-blocks";

Blockly.Blocks['WhenRaspiPinChangedBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.RASPI_WHENPINCHANGED,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "DROPDOWN",
          "options": [
            ["3", "5"]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "DROPDOWN2",
          "options": [
            ["high", "low"]
          ]
        }
      ],
      "category": Blockly.Categories.raspi,
      "extensions": ["colours_arduino", "shape_hat"]
    });
  }
};
  
Blockly.Blocks['RaspiIfLogicBeginBrick'] = {
  init: function() {
    this.jsonInit({
      "type": "IfThenLogicBeginBrick",
      "message0": Blockly.Msg.RASPI_IFLOGICBEGINIF,
      "message1": "%1",
      "message2": Blockly.Msg.RASPI_IFLOGICBEGINELSE,
      "message3": "%1",
      "args0": [
        {
          "type": "field_number",
          "name": "PIN",
          "value": 3
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.raspi,
      "extensions": ["colours_arduino", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['RaspiSendDigitalValueBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.RASPI_SENDDIGITALVALUE,
      "args0": [
        {
          "type": "field_number",
          "name": "PIN1",
          "value": 3
        },
        {
          "type": "field_number",
          "name": "PIN2",
          "value": 1
        }
      ],
      "category": Blockly.Categories.raspi,
      "extensions": ["colours_arduino", "shape_statement"]
    });
  }
};
  
Blockly.Blocks['RaspiPwmBrick'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.RASPI_PWM,
      "args0": [
        {
          "type": "field_number",
          "name": "PIN",
          "value": 3
        },
        {
          "type": "field_number",
          "name": "PERCENT",
          "value": 50
        },
        {
          "type": "field_number",
          "name": "HERTZ",
          "value": 100
        }
      ],
      "category": Blockly.Categories.raspi,
      "extensions": ["colours_arduino", "shape_statement"]
    });
  }
};
  
  