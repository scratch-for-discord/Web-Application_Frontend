let toolboxString = {
    "kind": "flyoutToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Logic",
            "colour": "%{BKY_LOGIC_HUE}",
            "contents": [
                {
                    "type": "controls_if",
                    "kind": "block"
                },
                {
                    "type": "logic_compare",
                    "kind": "block"
                },
                {
                    "type": "logic_operation",
                    "kind": "block"
                },
                {
                    "type": "logic_negate",
                    "kind": "block"
                },
                {
                    "type": "logic_boolean",
                    "kind": "block"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "colour": "%{BKY_LOOPS_HUE}",
            "contents": [
                {
                    "type": "controls_repeat_ext",
                    "kind": "block",
                    "inputs": {
                        "TIMES": {
                            "block": {
                                "type": "math_number",
                                "fields": {
                                    "NUM": "10"
                                }
                            }
                        }
                    }
                },
                {
                    "type": "controls_whileUntil",
                    "kind": "block"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "colour": "%{BKY_MATH_HUE}",
            "contents": [
                {
                    "type": "math_number",
                    "kind": "block",
                    "fields": {
                        "NUM": "123"
                    }
                },
                {
                    "type": "math_arithmetic",
                    "kind": "block"
                },
                {
                    "type": "math_single",
                    "kind": "block"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Text",
            "colour": "%{BKY_TEXTS_HUE}",
            "contents": [
                {
                    "type": "text",
                    "kind": "block"
                },
                {
                    "type": "text_length",
                    "kind": "block"
                },
                {
                    "type": "text_print",
                    "kind": "block"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Variables",
            "colour": "%{BKY_VARIABLES_HUE}"
        },
        {
            "kind": "sep"
        },
        {
            "kind": "category",
            "name": "Base",
            "colour": "#c75bc2",
            "contents": [
                {
                    "type": "on_bot_code_start",
                    "kind": "block"
                },
                {
                    "type": "bot_amount_info",
                    "kind": "block"
                },
                {
                    "type": "bot_shutdown_stop",
                    "kind": "block"
                },
                {
                    "type": "set_bot_game_stream",
                    "kind": "block"
                },
                {
                    "type": "env",
                    "kind": "block"
                }
            ]
        }
    ]
}

export { toolboxString }