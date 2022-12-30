let toolboxString = `
<xml>
<category name="Logic" colour="%{BKY_LOGIC_HUE}">
    <block type="controls_if"></block>
    <block type="logic_compare"></block>
    <block type="logic_operation"></block>
    <block type="logic_negate"></block>
    <block type="logic_boolean"></block>
</category>
<category name="Loops" colour="%{BKY_LOOPS_HUE}">
    <block type="controls_repeat_forever"/>
    <block type="controls_repeat_ext">
        <value name="TIMES">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="controls_whileUntil">
        <field name="MODE">WHILE</field>
    </block>
    <block type="controls_for">
        <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
          <value name="FROM">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
          <value name="TO">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
          <value name="BY">
            <shadow type="math_number">
              <field name="NUM">1</field>
            </shadow>
          </value>
    </block>
    <block type="controls_forEach">
        <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
    </block>
    <block type="controls_flow_statements">
        <field name="FLOW">BREAK</field>
    </block>
</category>
<category name="Math" colour="%{BKY_MATH_HUE}">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
    <block type="math_arithmetic">
      <field name="OP">ADD</field>
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="math_single">
          <field name="OP">ROOT</field>
          <value name="NUM">
            <shadow type="math_number">
              <field name="NUM">9</field>
            </shadow>
          </value>
        </block>
        <block type="math_trig">
            <field name="OP">SIN</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
        <block type="math_constant">
            <field name="CONSTANT">PI</field>
        </block>
        <block type="math_number_property">
            <mutation divisor_input="false"/>
            <field name="PROPERTY">EVEN</field>
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_round">
            <field name="OP">ROUND</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">3.1</field>
                </shadow>
            </value>
        </block>
        <block type="math_on_list">
            <mutation op="SUM"/>
            <field name="OP">SUM</field>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="math_constrain">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="LOW">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="HIGH">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_float"/>
</category>
<category name="Text" colour="%{BKY_TEXTS_HUE}">
    <block type="text"></block>
    <block type="text_length"></block>
    <block type="text_print"></block>
</category>
<category name="Lists" colour="#745ba5">
    <block type="lists_create_with">
        <mutation items="0"/>
    </block>
    <block type="lists_create_with">
        <mutation items="3"/>
    </block>
    <block type="lists_repeat">
        <value name="NUM">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="lists_length"/>
    <block type="lists_isEmpty"/>
    <block type="lists_sort"/>
    <block type="lists_reverse"/>
    <block type="lists_indexOf">
        <field name="END">FIRST</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
            </block>
        </value>
    </block>
    <block type="lists_getIndex">
        <mutation statement="false" at="true"/>
        <field name="MODE">GET</field>
        <field name="WHERE">FROM_START</field>
        <value name="VALUE">
            <block type="variables_get">
                <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
            </block>
        </value>
    </block>
    <block type="lists_setIndex">
        <mutation at="true"/>
        <field name="MODE">SET</field>
        <field name="WHERE">FROM_START</field>
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
            </block>
        </value>
    </block>
    <block type="lists_getSublist">
        <mutation at1="true" at2="true"/>
        <field name="WHERE1">FROM_START</field>
        <field name="WHERE2">FROM_START</field>
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
            </block>
        </value>
    </block>
    <block type="push_to_list">
        <value name="LIST">
            <block type="variables_get">
                <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
            </block>
        </value>
    </block>
    <block type="lists_split">
        <mutation mode="SPLIT"/>
        <field name="MODE">SPLIT</field>
        <value name="DELIM">
            <shadow type="text">
                <field name="TEXT">,</field>
            </shadow>
        </value>
    </block>
    <block type="lists_regex_list_of_matches_from_regex_on_text">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">abc</field>
            </shadow>
        </value>
    </block>
<sep gap="32"/>
</category>
<category name="Colors" colour="#a5745b">
    <block type="color_wheel_picker" />
    <block type="colour_random"/>
    <block type="color_hex">
        <value name="HEX">
            <shadow type="text">
                <field name="TEXT">#000</field>
            </shadow>
        </value>
    </block>
    <block type="colour_rgb">
      <value name="RED">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
      <value name="GREEN">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="BLUE">
          <shadow type="math_number">
              <field name="NUM">0</field>
          </shadow>
      </value>
    </block>
    <block type="colour_blend">
      <value name="COLOUR1">
        <shadow type="colour_picker">
          <field name="COLOUR">#ff0000</field>
        </shadow>
      </value>
      <value name="COLOUR2">
        <shadow type="colour_picker">
          <field name="COLOUR">#3333ff</field>
        </shadow>
      </value>
      <value name="RATIO">
        <shadow type="math_number">
          <field name="NUM">0.5</field>
        </shadow>
      </value>
    </block>
</category>
<sep css-container="sepDark"></sep>
<category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
</category>

<sep css-container="sepDark"></sep>

<category name='Base' colour='#c75bc2'>
    <block type='on_bot_code_start'/>
    <block type='bot_amount_info'/>
    <block type="bot_shutdown_stop"/>
    <block type="set_bot_game_stream"/>
    <block type="env"/>
</category>

</xml>`

export { toolboxString }