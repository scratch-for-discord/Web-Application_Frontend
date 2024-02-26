export default `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="M[vaD@JoJPb/1tEa6?p~">member_xp</variable>
    <variable id="+@B4vb]CdaQAcV3iYZ3L">member_level</variable>
  </variables>
  <block type="jg_unused_floating_comment" id="ly+:}oH+%Q|^?$AVEd;W" x="0" y="0">
    <field name="TEXT">Remade by Dazl :3</field>
  </block>
  <block type="s4d_login" id="|rEc6MK@B\`#CAd.0nrou" x="0" y="98">
    <value name="TOKEN">
      <block type="text" id="#-0;+I4Z4Ja.7?i1tEC#">
        <field name="TEXT">Your bot token</field>
      </block>
    </value>
  </block>
  <block type="s4d_database_create_new" id=")s7dMA)*6.PgUoQ-91a3" x="0" y="204">
    <value name="NAME">
      <shadow type="text" id="%uD-,K/:!FlB9ic@1[f]">
        <field name="TEXT">levelbase</field>
      </shadow>
    </value>
    <value name="FILE">
      <shadow type="text" id="6~g}:gjot]O)5mT%-e{)">
        <field name="TEXT">leveling</field>
      </shadow>
    </value>
  </block>
  <block type="jg_event_message_when_a_message_is_recieved_and_author_isnt_a_bot" id="syAwXey3FmJeh@+cX1]L" x="0" y="310">
    <statement name="STATEMENTS">
      <block type="jg_comments_connected_comment" id="r\`X}JXn]kbwCPcz!5h7]">
        <field name="TEXT">be sure to move this into your command handler + change the message content blocks and stuff if you're using one :)</field>
        <next>
          <block type="variables_set" id="yd#:94-U}og_)Zs%*)gw">
            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
            <value name="VALUE">
              <block type="s4d_get_data_new" id="I2J{S%poI~{.mluAZ~**">
                <value name="KEY">
                  <shadow type="text" id="A2)-jE@g]O^1oj73B@0#">
                    <field name="TEXT">hello</field>
                  </shadow>
                  <block type="text_join" id="_3]TuMP]G94d_;QYzoL*">
                    <mutation items="2"></mutation>
                    <value name="ADD0">
                      <block type="jg_text_remake_paragraph_quotes" id="8S7VSwq=eFw3cWsBCI.,">
                        <field name="TEXT">xp-</field>
                      </block>
                    </value>
                    <value name="ADD1">
                      <block type="s4d_member_id" id="[LxwCv_Sp?M_t5ee*d@,">
                        <value name="MEMBER">
                          <block type="s4d_message_author" id="i06=r=,/Pmm\`^(0BmPPY"></block>
                        </value>
                      </block>
                    </value>
                  </block>
                </value>
                <value name="NAME">
                  <shadow type="text" id="EEv^$=#pMUEw9B}AtB1_">
                    <field name="TEXT">levelbase</field>
                  </shadow>
                </value>
              </block>
            </value>
            <next>
              <block type="variables_set" id="]|*h8{vxI?5S0QP@?*8f">
                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                <value name="VALUE">
                  <block type="s4d_get_data_new" id="KvPQ9g@|3kbp,U#i)=o:">
                    <value name="KEY">
                      <shadow type="text" id="A2)-jE@g]O^1oj73B@0#">
                        <field name="TEXT">hello</field>
                      </shadow>
                      <block type="text_join" id="bhMj-DgzJW_ZLc.nXoQQ">
                        <mutation items="2"></mutation>
                        <value name="ADD0">
                          <block type="jg_text_remake_paragraph_quotes" id="iK_2:evMALxvd.LF:@vO">
                            <field name="TEXT">level-</field>
                          </block>
                        </value>
                        <value name="ADD1">
                          <block type="s4d_member_id" id="M?RaI?!E\`l33HJ\`gR*3f">
                            <value name="MEMBER">
                              <block type="s4d_message_author" id="c)gYRCnU^DgAWmj5Usc("></block>
                            </value>
                          </block>
                        </value>
                      </block>
                    </value>
                    <value name="NAME">
                      <shadow type="text" id="f-PJ+SeaP3JFGRtX[|9f">
                        <field name="TEXT">levelbase</field>
                      </shadow>
                    </value>
                  </block>
                </value>
                <next>
                  <block type="controls_if" id="yjE[ZgESkLN!yfKC^LS}">
                    <value name="IF0">
                      <block type="logic_negate" id="@lI~eI0va#50vRZM\`WON">
                        <value name="BOOL">
                          <block type="variables_get" id="EL@M$sfQwo4_kp:H[Ego">
                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                          </block>
                        </value>
                      </block>
                    </value>
                    <statement name="DO0">
                      <block type="variables_set" id="u,h(12V3!js1cM8_EsWD">
                        <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                        <value name="VALUE">
                          <block type="math_number" id="3K{AwEiQ|xzrqsTvjM*0">
                            <field name="NUM">0</field>
                          </block>
                        </value>
                      </block>
                    </statement>
                    <next>
                      <block type="controls_if" id=":\`DS^}jEXhr|bmPi,((#">
                        <value name="IF0">
                          <block type="logic_negate" id="A+S?|E)TCUMJ1pZx!8b)">
                            <value name="BOOL">
                              <block type="variables_get" id="e=tT=n0_U/M^P1eLfkcF">
                                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                              </block>
                            </value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="variables_set" id="cUH7Vt[*;{Z7wP-/TX}k">
                            <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                            <value name="VALUE">
                              <block type="math_number" id="3l8.}i{Uxvwg#cl.3ZU2">
                                <field name="NUM">0</field>
                              </block>
                            </value>
                          </block>
                        </statement>
                        <next>
                          <block type="s4d_set_data_new" id="4#;k0jb,K~/tC3w^Q1H~">
                            <value name="KEY">
                              <shadow type="text" id="2nIdl{^h/n0nBPCw^,2)">
                                <field name="TEXT">hello</field>
                              </shadow>
                              <block type="text_join" id="HYl=0;W,$?(s?M.gep~-">
                                <mutation items="2"></mutation>
                                <value name="ADD0">
                                  <block type="jg_text_remake_paragraph_quotes" id="I(|q8du%^-=v2\`pa@Ed%">
                                    <field name="TEXT">xp-</field>
                                  </block>
                                </value>
                                <value name="ADD1">
                                  <block type="s4d_member_id" id="MHZ:Cm8ADSFMARP2*hg[">
                                    <value name="MEMBER">
                                      <block type="s4d_message_author" id=":xyPOrBizemjb##gZ4}o"></block>
                                    </value>
                                  </block>
                                </value>
                              </block>
                            </value>
                            <value name="VALUE">
                              <shadow type="text" id="vfNr+gs=Np$d((MCu(mq">
                                <field name="TEXT">world</field>
                              </shadow>
                              <block type="math_arithmetic" id="kuxt+c}hYa]duvU62\`;O">
                                <field name="OP">ADD</field>
                                <value name="A">
                                  <shadow type="math_number" id="GM/dp{=o8js[D}i09\`b^">
                                    <field name="NUM">1</field>
                                  </shadow>
                                  <block type="variables_get" id="=[Z|.J]}c_7Z6lE^d}:%">
                                    <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                  </block>
                                </value>
                                <value name="B">
                                  <shadow type="math_number" id="v)65*T?^jh;\`a0DUOdf!">
                                    <field name="NUM">1</field>
                                  </shadow>
                                </value>
                              </block>
                            </value>
                            <value name="NAME">
                              <shadow type="text" id="jY?RciF5(9HG\`gHLTa%^">
                                <field name="TEXT">levelbase</field>
                              </shadow>
                            </value>
                            <next>
                              <block type="variables_set" id="g*]jKNU_bL6of_+\`5ZO(">
                                <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                <value name="VALUE">
                                  <block type="math_arithmetic" id="+kdGso7yVG!eT-\`fI$+e">
                                    <field name="OP">ADD</field>
                                    <value name="A">
                                      <shadow type="math_number" id="G.Z/,gB0qgc.{B~mOHD3">
                                        <field name="NUM">1</field>
                                      </shadow>
                                      <block type="variables_get" id="lHQul!u6iD]zPB[Xde%U">
                                        <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                      </block>
                                    </value>
                                    <value name="B">
                                      <shadow type="math_number" id="gqtTv]Y!=^ofh0u\`MA1u">
                                        <field name="NUM">1</field>
                                      </shadow>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="controls_if" id="4=PrkvY]=@zyKWc%~6zI">
                                    <value name="IF0">
                                      <block type="logic_compare" id=":-:@JQ{xuq/+pV_CR%iA">
                                        <field name="OP">GT</field>
                                        <value name="A">
                                          <block type="variables_get" id=";wEyga25,L86N5)EVBkj">
                                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                          </block>
                                        </value>
                                        <value name="B">
                                          <block type="math_number" id="XcLs]pv|oD5s38zdaFjB">
                                            <field name="NUM">100</field>
                                          </block>
                                        </value>
                                      </block>
                                    </value>
                                    <statement name="DO0">
                                      <block type="s4d_set_data_new" id="~pDeA:jDn6h;Fq..=_|Q">
                                        <value name="KEY">
                                          <shadow type="text" id=".P)_H=a=4d*(YJ?-USRe">
                                            <field name="TEXT">hello</field>
                                          </shadow>
                                          <block type="text_join" id="cykZsL\`:3T}(=h!Msv;/">
                                            <mutation items="2"></mutation>
                                            <value name="ADD0">
                                              <block type="jg_text_remake_paragraph_quotes" id="v]0:rq__gCr,yTRJ+rKW">
                                                <field name="TEXT">xp-</field>
                                              </block>
                                            </value>
                                            <value name="ADD1">
                                              <block type="s4d_member_id" id="kn0LCVcl%b[MN3^3\`~1S">
                                                <value name="MEMBER">
                                                  <block type="s4d_message_author" id=",cwj\`CEEa#no4iIB4ov#"></block>
                                                </value>
                                              </block>
                                            </value>
                                          </block>
                                        </value>
                                        <value name="VALUE">
                                          <shadow type="text" id="VI[y^X~!AEEMCaU1Hx$f">
                                            <field name="TEXT">world</field>
                                          </shadow>
                                          <block type="math_number" id="1+23h)G$;;kK?jbxJJ!p">
                                            <field name="NUM">0</field>
                                          </block>
                                        </value>
                                        <value name="NAME">
                                          <shadow type="text" id="taQ?z4-WOR7uWQ59D:0e">
                                            <field name="TEXT">levelbase</field>
                                          </shadow>
                                        </value>
                                        <next>
                                          <block type="s4d_set_data_new" id="YIv8RX\`\`1=+Ve;?,P*J}">
                                            <value name="KEY">
                                              <shadow type="text" id="-GL-q.Rc/J77jqtM9yrN">
                                                <field name="TEXT">hello</field>
                                              </shadow>
                                              <block type="text_join" id="Y;#^yoy6wMAiC+.JQ]zG">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0">
                                                  <block type="jg_text_remake_paragraph_quotes" id="#wV(/lGNe1\`/!Ilmz;6(">
                                                    <field name="TEXT">level-</field>
                                                  </block>
                                                </value>
                                                <value name="ADD1">
                                                  <block type="s4d_member_id" id="3#q{tj*$n+msN5X/mOTW">
                                                    <value name="MEMBER">
                                                      <block type="s4d_message_author" id="XOCi%OLf6o!#KW#8O]SM"></block>
                                                    </value>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="VALUE">
                                              <shadow type="text" id="t#3n(([kVcEvaya.]t4q">
                                                <field name="TEXT">world</field>
                                              </shadow>
                                              <block type="math_arithmetic" id="vBmP(-)Q@GgU?C.J/C|m">
                                                <field name="OP">ADD</field>
                                                <value name="A">
                                                  <shadow type="math_number" id="T!7!mTA?+eYaj5n2.Z,_">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                  <block type="variables_get" id="l(\`KU_cw4F;RIE#@1lzy">
                                                    <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                  </block>
                                                </value>
                                                <value name="B">
                                                  <shadow type="math_number" id="Wg9kmU+s{Gw4UKD29y\`5">
                                                    <field name="NUM">1</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </value>
                                            <value name="NAME">
                                              <shadow type="text" id=")uO%+zI%kOL3s=\`=b-}%">
                                                <field name="TEXT">levelbase</field>
                                              </shadow>
                                            </value>
                                            <next>
                                              <block type="variables_set" id="h-x{so@7guu.A3xme5,G">
                                                <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                <value name="VALUE">
                                                  <block type="math_arithmetic" id="fh5OF]}LW3poS2hZ9BGA">
                                                    <field name="OP">ADD</field>
                                                    <value name="A">
                                                      <shadow type="math_number" id="SG|Heebq5T}7}5(niE2v">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                      <block type="variables_get" id="Lf3Zjn#$p%3gReopu%A)">
                                                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                      </block>
                                                    </value>
                                                    <value name="B">
                                                      <shadow type="math_number" id=":d#c)W*}ZsfR?^2ZU,$f">
                                                        <field name="NUM">1</field>
                                                      </shadow>
                                                    </value>
                                                  </block>
                                                </value>
                                                <next>
                                                  <block type="jg_comments_connected_comment" id="a$eX%-j.F%J80FtuvTVF">
                                                    <field name="TEXT">this is the message that sends when you level up, this is interchangeable for whatever you want. you can even make a random response to send a random message of multiple you set up</field>
                                                    <next>
                                                      <block type="jg_comments_connected_comment" id="$/|LCT*$bK+Qc#b|{Y[^">
                                                        <field name="TEXT">you can even create more text spaces in a create text block within the block settings in the top left</field>
                                                        <next>
                                                          <block type="frost_real_reply" id="UT:nZZx0,Z2jW,{FuW0n">
                                                            <value name="CONTENT">
                                                              <shadow type="text" id="mSlptk.ZUiA,YQ]B|K=L">
                                                                <field name="TEXT">Hey!</field>
                                                              </shadow>
                                                              <block type="text_join" id="fXVsy5[10AVH;NW;;-E0">
                                                                <mutation items="7"></mutation>
                                                                <value name="ADD0">
                                                                  <block type="text" id="CM22jvL/3|n^C;.$C~t6">
                                                                    <field name="TEXT">Nice job, </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD1">
                                                                  <block type="s4d_message_author" id="MTDb(1DM4LkUvE!\`PUx4"></block>
                                                                </value>
                                                                <value name="ADD2">
                                                                  <block type="text" id="}+nrv!OP8_@A#^l$]G/E">
                                                                    <field name="TEXT"> you made it to </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD3">
                                                                  <block type="variables_get" id="X2lrrs%(k|bKpPl(lQz5">
                                                                    <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD4">
                                                                  <block type="jg_text_remake_paragraph_quotes" id="QLV6xR@O:0.B\`Wt7pxN_">
                                                                    <field name="TEXT">. If you keep it up, you'll be at level </field>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD5">
                                                                  <block type="math_arithmetic" id="-F3s7fQ6Yo?y2AhpNf{#">
                                                                    <field name="OP">ADD</field>
                                                                    <value name="A">
                                                                      <shadow type="math_number" id=":^@lZtMV(76d{D#t-s0n">
                                                                        <field name="NUM">1</field>
                                                                      </shadow>
                                                                      <block type="variables_get" id="D},}+@~.d5A@qRRKLmbH">
                                                                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                                      </block>
                                                                    </value>
                                                                    <value name="B">
                                                                      <shadow type="math_number" id="iNIrO36kgm7hDH!zXOx2">
                                                                        <field name="NUM">1</field>
                                                                      </shadow>
                                                                    </value>
                                                                  </block>
                                                                </value>
                                                                <value name="ADD6">
                                                                  <block type="text" id=";P@c%LV)95lVS^,l2%gT">
                                                                    <field name="TEXT"> in no time! good luck</field>
                                                                  </block>
                                                                </value>
                                                              </block>
                                                            </value>
                                                            <value name="boolean">
                                                              <shadow type="logic_boolean" id="UIalvsPh$No$Lusy.KFD">
                                                                <field name="BOOL">TRUE</field>
                                                              </shadow>
                                                            </value>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="jg_comments_connected_comment" id="b|*@7RWqkKbRCnk.z(=\`">
                                        <field name="TEXT">Oh! I almost forgot, you can interchange the respond and reply blocks with whatever you want, you can also turn the mention on and off on replies</field>
                                        <next>
                                          <block type="controls_if" id="HqfdN/iImfAuf9TXjEdN">
                                            <mutation elseif="1"></mutation>
                                            <value name="IF0">
                                              <block type="logic_compare" id="ONMcJ)p1wL$Rre+eC-s{">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="s4d_message_content" id="9)_A-z/Szn*cz2]JXJWr"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="jg_text_remake_paragraph_quotes" id="O8N@;[V.~?=Px/S~6^5y">
                                                    <field name="TEXT">!xp</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO0">
                                              <block type="frost_real_reply" id="M2IislL2hbM%Y4.Rvx2v">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="a{(GJ5biMz)vC^mB^3Vc">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="text_join" id="OE]K6*e86Z*(k),oH2ZH">
                                                    <mutation items="5"></mutation>
                                                    <value name="ADD0">
                                                      <block type="s4d_message_author" id="4u$(14@U6!nkfbVb}v.c"></block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="text" id="+vAYh,Uf:8~*nCJX0D99">
                                                        <field name="TEXT">, you need </field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="math_arithmetic" id="Z~ejM#2~$;[={V+6@46S">
                                                        <field name="OP">MINUS</field>
                                                        <value name="A">
                                                          <shadow type="math_number" id="s5(7(jHyliEFpqZQyAhZ">
                                                            <field name="NUM">100</field>
                                                          </shadow>
                                                        </value>
                                                        <value name="B">
                                                          <shadow type="math_number" id="k[[G+xVv)AoAC$7{OS?G">
                                                            <field name="NUM">100</field>
                                                          </shadow>
                                                          <block type="variables_get" id="{hc*#~kC!Q!07XIJCL,S">
                                                            <field name="VAR" id="M[vaD@JoJPb/1tEa6?p~">member_xp</field>
                                                          </block>
                                                        </value>
                                                      </block>
                                                    </value>
                                                    <value name="ADD3">
                                                      <block type="text" id="_!vmlaC_2C^ZFmpgqc.,">
                                                        <field name="TEXT"> to achieve level </field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD4">
                                                      <block type="math_arithmetic" id="9+@VA98K)Ywzb.T~~]:_">
                                                        <field name="OP">ADD</field>
                                                        <value name="A">
                                                          <shadow type="math_number" id="qw:DB*#:O-@6K*6cJIq0">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                          <block type="variables_get" id="0cAI=NMINQXa/Y])^m%l">
                                                            <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                          </block>
                                                        </value>
                                                        <value name="B">
                                                          <shadow type="math_number" id="ydq+3.U=R-,lebWJV=E%">
                                                            <field name="NUM">1</field>
                                                          </shadow>
                                                        </value>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="boolean">
                                                  <shadow type="logic_boolean" id="rC6xV[c#BZ.{083E|!r!">
                                                    <field name="BOOL">TRUE</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                            <value name="IF1">
                                              <block type="logic_compare" id="d@v237Ot7-94-WFTx6n]">
                                                <field name="OP">EQ</field>
                                                <value name="A">
                                                  <block type="s4d_message_content" id="\`]T}tgE7ZXaI0$x*A_0z"></block>
                                                </value>
                                                <value name="B">
                                                  <block type="jg_text_remake_paragraph_quotes" id="-27g$tU8u4_{9+3uD0-]">
                                                    <field name="TEXT">!level</field>
                                                  </block>
                                                </value>
                                              </block>
                                            </value>
                                            <statement name="DO1">
                                              <block type="frost_real_reply" id="G#+\`@KW4P!Ll+-vrTkpr">
                                                <value name="CONTENT">
                                                  <shadow type="text" id="a{(GJ5biMz)vC^mB^3Vc">
                                                    <field name="TEXT">Hey!</field>
                                                  </shadow>
                                                  <block type="text_join" id="(!V2FB$\`QVQIcMU1y;H~">
                                                    <mutation items="3"></mutation>
                                                    <value name="ADD0">
                                                      <block type="s4d_message_author" id=")],[{g--dMxk2MH5+?[s"></block>
                                                    </value>
                                                    <value name="ADD1">
                                                      <block type="text" id="EM3}]8^%e1jutduV1.f|">
                                                        <field name="TEXT">you are currently level </field>
                                                      </block>
                                                    </value>
                                                    <value name="ADD2">
                                                      <block type="variables_get" id="RM!_k=)IJOV2_qKObCzo">
                                                        <field name="VAR" id="+@B4vb]CdaQAcV3iYZ3L">member_level</field>
                                                      </block>
                                                    </value>
                                                  </block>
                                                </value>
                                                <value name="boolean">
                                                  <shadow type="logic_boolean" id="9^Ys4$yjf,NZ0J.g%O:k">
                                                    <field name="BOOL">TRUE</field>
                                                  </shadow>
                                                </value>
                                              </block>
                                            </statement>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`;
