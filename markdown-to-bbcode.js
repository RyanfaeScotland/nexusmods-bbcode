/*! For license information please see markdown-to-bbcode.js.LICENSE.txt */
!(function (t, r) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = r())
        : "function" == typeof define && define.amd
            ? define([], r)
            : "object" == typeof exports
                ? (exports.markdown_to_bbcode = r())
                : (t.markdown_to_bbcode = r());
})

(self, function () {
    return (() => {
        var t = {
            76: function (t, r, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.decodeHTML = r.decodeHTMLStrict = r.decodeXML = void 0);
                var s = i(e(7)),
                    o = i(e(802)),
                    a = i(e(228)),
                    n = i(e(26));
                function l(t) {
                    var r = Object.keys(t).join("|"),
                        e = u(t),
                        i = new RegExp("&(?:" + (r += "|#[xX][\\da-fA-F]+|#\\d+") + ");", "g");
                    return function (t) {
                        return String(t).replace(i, e);
                    };
                }
                (r.decodeXML = l(a.default)), (r.decodeHTMLStrict = l(s.default));
                var c = function (t, r) {
                    return t < r ? 1 : -1;
                };
                function u(t) {
                    return function (r) {
                        if ("#" === r.charAt(1)) {
                            var e = r.charAt(2);
                            return "X" === e || "x" === e ? n.default(parseInt(r.substr(3), 16)) : n.default(parseInt(r.substr(2), 10));
                        }
                        return t[r.slice(1, -1)];
                    };
                }
                r.decodeHTML = (function () {
                    for (var t = Object.keys(o.default).sort(c), r = Object.keys(s.default).sort(c), e = 0, i = 0; e < r.length; e++) t[i] === r[e] ? ((r[e] += ";?"), i++) : (r[e] += ";");
                    var a = new RegExp("&(?:" + r.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
                        n = u(s.default);
                    function l(t) {
                        return ";" !== t.substr(-1) && (t += ";"), n(t);
                    }
                    return function (t) {
                        return String(t).replace(a, l);
                    };
                })();
            },
            26: function (t, r, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(r, "__esModule", { value: !0 });
                var s = i(e(589));
                r.default = function (t) {
                    if ((t >= 55296 && t <= 57343) || t > 1114111) return "�";
                    t in s.default && (t = s.default[t]);
                    var r = "";
                    return t > 65535 && ((t -= 65536), (r += String.fromCharCode(((t >>> 10) & 1023) | 55296)), (t = 56320 | (1023 & t))), r + String.fromCharCode(t);
                };
            },
            322: function (t, r, e) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(r, "__esModule", { value: !0 }), (r.escape = r.encodeHTML = r.encodeXML = void 0);
                var s = l(i(e(228)).default),
                    o = c(s);
                r.encodeXML = h(s, o);
                var a = l(i(e(7)).default),
                    n = c(a);
                function l(t) {
                    return Object.keys(t)
                        .sort()
                        .reduce(function (r, e) {
                            return (r[t[e]] = "&" + e + ";"), r;
                        }, {});
                }
                function c(t) {
                    for (var r = [], e = [], i = 0, s = Object.keys(t); i < s.length; i++) {
                        var o = s[i];
                        1 === o.length ? r.push("\\" + o) : e.push(o);
                    }
                    r.sort();
                    for (var a = 0; a < r.length - 1; a++) {
                        for (var n = a; n < r.length - 1 && r[n].charCodeAt(1) + 1 === r[n + 1].charCodeAt(1);) n += 1;
                        var l = 1 + n - a;
                        l < 3 || r.splice(a, l, r[a] + "-" + r[n]);
                    }
                    return e.unshift("[" + r.join("") + "]"), new RegExp(e.join("|"), "g");
                }
                r.encodeHTML = h(a, n);
                var u = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
                function p(t) {
                    return "&#x" + t.codePointAt(0).toString(16).toUpperCase() + ";";
                }
                function h(t, r) {
                    return function (e) {
                        return e
                            .replace(r, function (r) {
                                return t[r];
                            })
                            .replace(u, p);
                    };
                }
                var f = c(s);
                r.escape = function (t) {
                    return t.replace(f, p).replace(u, p);
                };
            },
            863: (t, r, e) => {
                "use strict";
                e(76), e(322), e(322);
                var i = e(76);
                Object.defineProperty(r, "p1", {
                    enumerable: !0,
                    get: function () {
                        return i.decodeHTML;
                    },
                });
            },
            589: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}'
                );
            },
            7: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Abreve":"Ă","abreve":"ă","ac":"∾","acd":"∿","acE":"∾̳","Acirc":"Â","acirc":"â","acute":"´","Acy":"А","acy":"а","AElig":"Æ","aelig":"æ","af":"⁡","Afr":"𝔄","afr":"𝔞","Agrave":"À","agrave":"à","alefsym":"ℵ","aleph":"ℵ","Alpha":"Α","alpha":"α","Amacr":"Ā","amacr":"ā","amalg":"⨿","amp":"&","AMP":"&","andand":"⩕","And":"⩓","and":"∧","andd":"⩜","andslope":"⩘","andv":"⩚","ang":"∠","ange":"⦤","angle":"∠","angmsdaa":"⦨","angmsdab":"⦩","angmsdac":"⦪","angmsdad":"⦫","angmsdae":"⦬","angmsdaf":"⦭","angmsdag":"⦮","angmsdah":"⦯","angmsd":"∡","angrt":"∟","angrtvb":"⊾","angrtvbd":"⦝","angsph":"∢","angst":"Å","angzarr":"⍼","Aogon":"Ą","aogon":"ą","Aopf":"𝔸","aopf":"𝕒","apacir":"⩯","ap":"≈","apE":"⩰","ape":"≊","apid":"≋","apos":"\'","ApplyFunction":"⁡","approx":"≈","approxeq":"≊","Aring":"Å","aring":"å","Ascr":"𝒜","ascr":"𝒶","Assign":"≔","ast":"*","asymp":"≈","asympeq":"≍","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","awconint":"∳","awint":"⨑","backcong":"≌","backepsilon":"϶","backprime":"‵","backsim":"∽","backsimeq":"⋍","Backslash":"∖","Barv":"⫧","barvee":"⊽","barwed":"⌅","Barwed":"⌆","barwedge":"⌅","bbrk":"⎵","bbrktbrk":"⎶","bcong":"≌","Bcy":"Б","bcy":"б","bdquo":"„","becaus":"∵","because":"∵","Because":"∵","bemptyv":"⦰","bepsi":"϶","bernou":"ℬ","Bernoullis":"ℬ","Beta":"Β","beta":"β","beth":"ℶ","between":"≬","Bfr":"𝔅","bfr":"𝔟","bigcap":"⋂","bigcirc":"◯","bigcup":"⋃","bigodot":"⨀","bigoplus":"⨁","bigotimes":"⨂","bigsqcup":"⨆","bigstar":"★","bigtriangledown":"▽","bigtriangleup":"△","biguplus":"⨄","bigvee":"⋁","bigwedge":"⋀","bkarow":"⤍","blacklozenge":"⧫","blacksquare":"▪","blacktriangle":"▴","blacktriangledown":"▾","blacktriangleleft":"◂","blacktriangleright":"▸","blank":"␣","blk12":"▒","blk14":"░","blk34":"▓","block":"█","bne":"=⃥","bnequiv":"≡⃥","bNot":"⫭","bnot":"⌐","Bopf":"𝔹","bopf":"𝕓","bot":"⊥","bottom":"⊥","bowtie":"⋈","boxbox":"⧉","boxdl":"┐","boxdL":"╕","boxDl":"╖","boxDL":"╗","boxdr":"┌","boxdR":"╒","boxDr":"╓","boxDR":"╔","boxh":"─","boxH":"═","boxhd":"┬","boxHd":"╤","boxhD":"╥","boxHD":"╦","boxhu":"┴","boxHu":"╧","boxhU":"╨","boxHU":"╩","boxminus":"⊟","boxplus":"⊞","boxtimes":"⊠","boxul":"┘","boxuL":"╛","boxUl":"╜","boxUL":"╝","boxur":"└","boxuR":"╘","boxUr":"╙","boxUR":"╚","boxv":"│","boxV":"║","boxvh":"┼","boxvH":"╪","boxVh":"╫","boxVH":"╬","boxvl":"┤","boxvL":"╡","boxVl":"╢","boxVL":"╣","boxvr":"├","boxvR":"╞","boxVr":"╟","boxVR":"╠","bprime":"‵","breve":"˘","Breve":"˘","brvbar":"¦","bscr":"𝒷","Bscr":"ℬ","bsemi":"⁏","bsim":"∽","bsime":"⋍","bsolb":"⧅","bsol":"\\\\","bsolhsub":"⟈","bull":"•","bullet":"•","bump":"≎","bumpE":"⪮","bumpe":"≏","Bumpeq":"≎","bumpeq":"≏","Cacute":"Ć","cacute":"ć","capand":"⩄","capbrcup":"⩉","capcap":"⩋","cap":"∩","Cap":"⋒","capcup":"⩇","capdot":"⩀","CapitalDifferentialD":"ⅅ","caps":"∩︀","caret":"⁁","caron":"ˇ","Cayleys":"ℭ","ccaps":"⩍","Ccaron":"Č","ccaron":"č","Ccedil":"Ç","ccedil":"ç","Ccirc":"Ĉ","ccirc":"ĉ","Cconint":"∰","ccups":"⩌","ccupssm":"⩐","Cdot":"Ċ","cdot":"ċ","cedil":"¸","Cedilla":"¸","cemptyv":"⦲","cent":"¢","centerdot":"·","CenterDot":"·","cfr":"𝔠","Cfr":"ℭ","CHcy":"Ч","chcy":"ч","check":"✓","checkmark":"✓","Chi":"Χ","chi":"χ","circ":"ˆ","circeq":"≗","circlearrowleft":"↺","circlearrowright":"↻","circledast":"⊛","circledcirc":"⊚","circleddash":"⊝","CircleDot":"⊙","circledR":"®","circledS":"Ⓢ","CircleMinus":"⊖","CirclePlus":"⊕","CircleTimes":"⊗","cir":"○","cirE":"⧃","cire":"≗","cirfnint":"⨐","cirmid":"⫯","cirscir":"⧂","ClockwiseContourIntegral":"∲","CloseCurlyDoubleQuote":"”","CloseCurlyQuote":"’","clubs":"♣","clubsuit":"♣","colon":":","Colon":"∷","Colone":"⩴","colone":"≔","coloneq":"≔","comma":",","commat":"@","comp":"∁","compfn":"∘","complement":"∁","complexes":"ℂ","cong":"≅","congdot":"⩭","Congruent":"≡","conint":"∮","Conint":"∯","ContourIntegral":"∮","copf":"𝕔","Copf":"ℂ","coprod":"∐","Coproduct":"∐","copy":"©","COPY":"©","copysr":"℗","CounterClockwiseContourIntegral":"∳","crarr":"↵","cross":"✗","Cross":"⨯","Cscr":"𝒞","cscr":"𝒸","csub":"⫏","csube":"⫑","csup":"⫐","csupe":"⫒","ctdot":"⋯","cudarrl":"⤸","cudarrr":"⤵","cuepr":"⋞","cuesc":"⋟","cularr":"↶","cularrp":"⤽","cupbrcap":"⩈","cupcap":"⩆","CupCap":"≍","cup":"∪","Cup":"⋓","cupcup":"⩊","cupdot":"⊍","cupor":"⩅","cups":"∪︀","curarr":"↷","curarrm":"⤼","curlyeqprec":"⋞","curlyeqsucc":"⋟","curlyvee":"⋎","curlywedge":"⋏","curren":"¤","curvearrowleft":"↶","curvearrowright":"↷","cuvee":"⋎","cuwed":"⋏","cwconint":"∲","cwint":"∱","cylcty":"⌭","dagger":"†","Dagger":"‡","daleth":"ℸ","darr":"↓","Darr":"↡","dArr":"⇓","dash":"‐","Dashv":"⫤","dashv":"⊣","dbkarow":"⤏","dblac":"˝","Dcaron":"Ď","dcaron":"ď","Dcy":"Д","dcy":"д","ddagger":"‡","ddarr":"⇊","DD":"ⅅ","dd":"ⅆ","DDotrahd":"⤑","ddotseq":"⩷","deg":"°","Del":"∇","Delta":"Δ","delta":"δ","demptyv":"⦱","dfisht":"⥿","Dfr":"𝔇","dfr":"𝔡","dHar":"⥥","dharl":"⇃","dharr":"⇂","DiacriticalAcute":"´","DiacriticalDot":"˙","DiacriticalDoubleAcute":"˝","DiacriticalGrave":"`","DiacriticalTilde":"˜","diam":"⋄","diamond":"⋄","Diamond":"⋄","diamondsuit":"♦","diams":"♦","die":"¨","DifferentialD":"ⅆ","digamma":"ϝ","disin":"⋲","div":"÷","divide":"÷","divideontimes":"⋇","divonx":"⋇","DJcy":"Ђ","djcy":"ђ","dlcorn":"⌞","dlcrop":"⌍","dollar":"$","Dopf":"𝔻","dopf":"𝕕","Dot":"¨","dot":"˙","DotDot":"⃜","doteq":"≐","doteqdot":"≑","DotEqual":"≐","dotminus":"∸","dotplus":"∔","dotsquare":"⊡","doublebarwedge":"⌆","DoubleContourIntegral":"∯","DoubleDot":"¨","DoubleDownArrow":"⇓","DoubleLeftArrow":"⇐","DoubleLeftRightArrow":"⇔","DoubleLeftTee":"⫤","DoubleLongLeftArrow":"⟸","DoubleLongLeftRightArrow":"⟺","DoubleLongRightArrow":"⟹","DoubleRightArrow":"⇒","DoubleRightTee":"⊨","DoubleUpArrow":"⇑","DoubleUpDownArrow":"⇕","DoubleVerticalBar":"∥","DownArrowBar":"⤓","downarrow":"↓","DownArrow":"↓","Downarrow":"⇓","DownArrowUpArrow":"⇵","DownBreve":"̑","downdownarrows":"⇊","downharpoonleft":"⇃","downharpoonright":"⇂","DownLeftRightVector":"⥐","DownLeftTeeVector":"⥞","DownLeftVectorBar":"⥖","DownLeftVector":"↽","DownRightTeeVector":"⥟","DownRightVectorBar":"⥗","DownRightVector":"⇁","DownTeeArrow":"↧","DownTee":"⊤","drbkarow":"⤐","drcorn":"⌟","drcrop":"⌌","Dscr":"𝒟","dscr":"𝒹","DScy":"Ѕ","dscy":"ѕ","dsol":"⧶","Dstrok":"Đ","dstrok":"đ","dtdot":"⋱","dtri":"▿","dtrif":"▾","duarr":"⇵","duhar":"⥯","dwangle":"⦦","DZcy":"Џ","dzcy":"џ","dzigrarr":"⟿","Eacute":"É","eacute":"é","easter":"⩮","Ecaron":"Ě","ecaron":"ě","Ecirc":"Ê","ecirc":"ê","ecir":"≖","ecolon":"≕","Ecy":"Э","ecy":"э","eDDot":"⩷","Edot":"Ė","edot":"ė","eDot":"≑","ee":"ⅇ","efDot":"≒","Efr":"𝔈","efr":"𝔢","eg":"⪚","Egrave":"È","egrave":"è","egs":"⪖","egsdot":"⪘","el":"⪙","Element":"∈","elinters":"⏧","ell":"ℓ","els":"⪕","elsdot":"⪗","Emacr":"Ē","emacr":"ē","empty":"∅","emptyset":"∅","EmptySmallSquare":"◻","emptyv":"∅","EmptyVerySmallSquare":"▫","emsp13":" ","emsp14":" ","emsp":" ","ENG":"Ŋ","eng":"ŋ","ensp":" ","Eogon":"Ę","eogon":"ę","Eopf":"𝔼","eopf":"𝕖","epar":"⋕","eparsl":"⧣","eplus":"⩱","epsi":"ε","Epsilon":"Ε","epsilon":"ε","epsiv":"ϵ","eqcirc":"≖","eqcolon":"≕","eqsim":"≂","eqslantgtr":"⪖","eqslantless":"⪕","Equal":"⩵","equals":"=","EqualTilde":"≂","equest":"≟","Equilibrium":"⇌","equiv":"≡","equivDD":"⩸","eqvparsl":"⧥","erarr":"⥱","erDot":"≓","escr":"ℯ","Escr":"ℰ","esdot":"≐","Esim":"⩳","esim":"≂","Eta":"Η","eta":"η","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","euro":"€","excl":"!","exist":"∃","Exists":"∃","expectation":"ℰ","exponentiale":"ⅇ","ExponentialE":"ⅇ","fallingdotseq":"≒","Fcy":"Ф","fcy":"ф","female":"♀","ffilig":"ﬃ","fflig":"ﬀ","ffllig":"ﬄ","Ffr":"𝔉","ffr":"𝔣","filig":"ﬁ","FilledSmallSquare":"◼","FilledVerySmallSquare":"▪","fjlig":"fj","flat":"♭","fllig":"ﬂ","fltns":"▱","fnof":"ƒ","Fopf":"𝔽","fopf":"𝕗","forall":"∀","ForAll":"∀","fork":"⋔","forkv":"⫙","Fouriertrf":"ℱ","fpartint":"⨍","frac12":"½","frac13":"⅓","frac14":"¼","frac15":"⅕","frac16":"⅙","frac18":"⅛","frac23":"⅔","frac25":"⅖","frac34":"¾","frac35":"⅗","frac38":"⅜","frac45":"⅘","frac56":"⅚","frac58":"⅝","frac78":"⅞","frasl":"⁄","frown":"⌢","fscr":"𝒻","Fscr":"ℱ","gacute":"ǵ","Gamma":"Γ","gamma":"γ","Gammad":"Ϝ","gammad":"ϝ","gap":"⪆","Gbreve":"Ğ","gbreve":"ğ","Gcedil":"Ģ","Gcirc":"Ĝ","gcirc":"ĝ","Gcy":"Г","gcy":"г","Gdot":"Ġ","gdot":"ġ","ge":"≥","gE":"≧","gEl":"⪌","gel":"⋛","geq":"≥","geqq":"≧","geqslant":"⩾","gescc":"⪩","ges":"⩾","gesdot":"⪀","gesdoto":"⪂","gesdotol":"⪄","gesl":"⋛︀","gesles":"⪔","Gfr":"𝔊","gfr":"𝔤","gg":"≫","Gg":"⋙","ggg":"⋙","gimel":"ℷ","GJcy":"Ѓ","gjcy":"ѓ","gla":"⪥","gl":"≷","glE":"⪒","glj":"⪤","gnap":"⪊","gnapprox":"⪊","gne":"⪈","gnE":"≩","gneq":"⪈","gneqq":"≩","gnsim":"⋧","Gopf":"𝔾","gopf":"𝕘","grave":"`","GreaterEqual":"≥","GreaterEqualLess":"⋛","GreaterFullEqual":"≧","GreaterGreater":"⪢","GreaterLess":"≷","GreaterSlantEqual":"⩾","GreaterTilde":"≳","Gscr":"𝒢","gscr":"ℊ","gsim":"≳","gsime":"⪎","gsiml":"⪐","gtcc":"⪧","gtcir":"⩺","gt":">","GT":">","Gt":"≫","gtdot":"⋗","gtlPar":"⦕","gtquest":"⩼","gtrapprox":"⪆","gtrarr":"⥸","gtrdot":"⋗","gtreqless":"⋛","gtreqqless":"⪌","gtrless":"≷","gtrsim":"≳","gvertneqq":"≩︀","gvnE":"≩︀","Hacek":"ˇ","hairsp":" ","half":"½","hamilt":"ℋ","HARDcy":"Ъ","hardcy":"ъ","harrcir":"⥈","harr":"↔","hArr":"⇔","harrw":"↭","Hat":"^","hbar":"ℏ","Hcirc":"Ĥ","hcirc":"ĥ","hearts":"♥","heartsuit":"♥","hellip":"…","hercon":"⊹","hfr":"𝔥","Hfr":"ℌ","HilbertSpace":"ℋ","hksearow":"⤥","hkswarow":"⤦","hoarr":"⇿","homtht":"∻","hookleftarrow":"↩","hookrightarrow":"↪","hopf":"𝕙","Hopf":"ℍ","horbar":"―","HorizontalLine":"─","hscr":"𝒽","Hscr":"ℋ","hslash":"ℏ","Hstrok":"Ħ","hstrok":"ħ","HumpDownHump":"≎","HumpEqual":"≏","hybull":"⁃","hyphen":"‐","Iacute":"Í","iacute":"í","ic":"⁣","Icirc":"Î","icirc":"î","Icy":"И","icy":"и","Idot":"İ","IEcy":"Е","iecy":"е","iexcl":"¡","iff":"⇔","ifr":"𝔦","Ifr":"ℑ","Igrave":"Ì","igrave":"ì","ii":"ⅈ","iiiint":"⨌","iiint":"∭","iinfin":"⧜","iiota":"℩","IJlig":"Ĳ","ijlig":"ĳ","Imacr":"Ī","imacr":"ī","image":"ℑ","ImaginaryI":"ⅈ","imagline":"ℐ","imagpart":"ℑ","imath":"ı","Im":"ℑ","imof":"⊷","imped":"Ƶ","Implies":"⇒","incare":"℅","in":"∈","infin":"∞","infintie":"⧝","inodot":"ı","intcal":"⊺","int":"∫","Int":"∬","integers":"ℤ","Integral":"∫","intercal":"⊺","Intersection":"⋂","intlarhk":"⨗","intprod":"⨼","InvisibleComma":"⁣","InvisibleTimes":"⁢","IOcy":"Ё","iocy":"ё","Iogon":"Į","iogon":"į","Iopf":"𝕀","iopf":"𝕚","Iota":"Ι","iota":"ι","iprod":"⨼","iquest":"¿","iscr":"𝒾","Iscr":"ℐ","isin":"∈","isindot":"⋵","isinE":"⋹","isins":"⋴","isinsv":"⋳","isinv":"∈","it":"⁢","Itilde":"Ĩ","itilde":"ĩ","Iukcy":"І","iukcy":"і","Iuml":"Ï","iuml":"ï","Jcirc":"Ĵ","jcirc":"ĵ","Jcy":"Й","jcy":"й","Jfr":"𝔍","jfr":"𝔧","jmath":"ȷ","Jopf":"𝕁","jopf":"𝕛","Jscr":"𝒥","jscr":"𝒿","Jsercy":"Ј","jsercy":"ј","Jukcy":"Є","jukcy":"є","Kappa":"Κ","kappa":"κ","kappav":"ϰ","Kcedil":"Ķ","kcedil":"ķ","Kcy":"К","kcy":"к","Kfr":"𝔎","kfr":"𝔨","kgreen":"ĸ","KHcy":"Х","khcy":"х","KJcy":"Ќ","kjcy":"ќ","Kopf":"𝕂","kopf":"𝕜","Kscr":"𝒦","kscr":"𝓀","lAarr":"⇚","Lacute":"Ĺ","lacute":"ĺ","laemptyv":"⦴","lagran":"ℒ","Lambda":"Λ","lambda":"λ","lang":"⟨","Lang":"⟪","langd":"⦑","langle":"⟨","lap":"⪅","Laplacetrf":"ℒ","laquo":"«","larrb":"⇤","larrbfs":"⤟","larr":"←","Larr":"↞","lArr":"⇐","larrfs":"⤝","larrhk":"↩","larrlp":"↫","larrpl":"⤹","larrsim":"⥳","larrtl":"↢","latail":"⤙","lAtail":"⤛","lat":"⪫","late":"⪭","lates":"⪭︀","lbarr":"⤌","lBarr":"⤎","lbbrk":"❲","lbrace":"{","lbrack":"[","lbrke":"⦋","lbrksld":"⦏","lbrkslu":"⦍","Lcaron":"Ľ","lcaron":"ľ","Lcedil":"Ļ","lcedil":"ļ","lceil":"⌈","lcub":"{","Lcy":"Л","lcy":"л","ldca":"⤶","ldquo":"“","ldquor":"„","ldrdhar":"⥧","ldrushar":"⥋","ldsh":"↲","le":"≤","lE":"≦","LeftAngleBracket":"⟨","LeftArrowBar":"⇤","leftarrow":"←","LeftArrow":"←","Leftarrow":"⇐","LeftArrowRightArrow":"⇆","leftarrowtail":"↢","LeftCeiling":"⌈","LeftDoubleBracket":"⟦","LeftDownTeeVector":"⥡","LeftDownVectorBar":"⥙","LeftDownVector":"⇃","LeftFloor":"⌊","leftharpoondown":"↽","leftharpoonup":"↼","leftleftarrows":"⇇","leftrightarrow":"↔","LeftRightArrow":"↔","Leftrightarrow":"⇔","leftrightarrows":"⇆","leftrightharpoons":"⇋","leftrightsquigarrow":"↭","LeftRightVector":"⥎","LeftTeeArrow":"↤","LeftTee":"⊣","LeftTeeVector":"⥚","leftthreetimes":"⋋","LeftTriangleBar":"⧏","LeftTriangle":"⊲","LeftTriangleEqual":"⊴","LeftUpDownVector":"⥑","LeftUpTeeVector":"⥠","LeftUpVectorBar":"⥘","LeftUpVector":"↿","LeftVectorBar":"⥒","LeftVector":"↼","lEg":"⪋","leg":"⋚","leq":"≤","leqq":"≦","leqslant":"⩽","lescc":"⪨","les":"⩽","lesdot":"⩿","lesdoto":"⪁","lesdotor":"⪃","lesg":"⋚︀","lesges":"⪓","lessapprox":"⪅","lessdot":"⋖","lesseqgtr":"⋚","lesseqqgtr":"⪋","LessEqualGreater":"⋚","LessFullEqual":"≦","LessGreater":"≶","lessgtr":"≶","LessLess":"⪡","lesssim":"≲","LessSlantEqual":"⩽","LessTilde":"≲","lfisht":"⥼","lfloor":"⌊","Lfr":"𝔏","lfr":"𝔩","lg":"≶","lgE":"⪑","lHar":"⥢","lhard":"↽","lharu":"↼","lharul":"⥪","lhblk":"▄","LJcy":"Љ","ljcy":"љ","llarr":"⇇","ll":"≪","Ll":"⋘","llcorner":"⌞","Lleftarrow":"⇚","llhard":"⥫","lltri":"◺","Lmidot":"Ŀ","lmidot":"ŀ","lmoustache":"⎰","lmoust":"⎰","lnap":"⪉","lnapprox":"⪉","lne":"⪇","lnE":"≨","lneq":"⪇","lneqq":"≨","lnsim":"⋦","loang":"⟬","loarr":"⇽","lobrk":"⟦","longleftarrow":"⟵","LongLeftArrow":"⟵","Longleftarrow":"⟸","longleftrightarrow":"⟷","LongLeftRightArrow":"⟷","Longleftrightarrow":"⟺","longmapsto":"⟼","longrightarrow":"⟶","LongRightArrow":"⟶","Longrightarrow":"⟹","looparrowleft":"↫","looparrowright":"↬","lopar":"⦅","Lopf":"𝕃","lopf":"𝕝","loplus":"⨭","lotimes":"⨴","lowast":"∗","lowbar":"_","LowerLeftArrow":"↙","LowerRightArrow":"↘","loz":"◊","lozenge":"◊","lozf":"⧫","lpar":"(","lparlt":"⦓","lrarr":"⇆","lrcorner":"⌟","lrhar":"⇋","lrhard":"⥭","lrm":"‎","lrtri":"⊿","lsaquo":"‹","lscr":"𝓁","Lscr":"ℒ","lsh":"↰","Lsh":"↰","lsim":"≲","lsime":"⪍","lsimg":"⪏","lsqb":"[","lsquo":"‘","lsquor":"‚","Lstrok":"Ł","lstrok":"ł","ltcc":"⪦","ltcir":"⩹","lt":"<","LT":"<","Lt":"≪","ltdot":"⋖","lthree":"⋋","ltimes":"⋉","ltlarr":"⥶","ltquest":"⩻","ltri":"◃","ltrie":"⊴","ltrif":"◂","ltrPar":"⦖","lurdshar":"⥊","luruhar":"⥦","lvertneqq":"≨︀","lvnE":"≨︀","macr":"¯","male":"♂","malt":"✠","maltese":"✠","Map":"⤅","map":"↦","mapsto":"↦","mapstodown":"↧","mapstoleft":"↤","mapstoup":"↥","marker":"▮","mcomma":"⨩","Mcy":"М","mcy":"м","mdash":"—","mDDot":"∺","measuredangle":"∡","MediumSpace":" ","Mellintrf":"ℳ","Mfr":"𝔐","mfr":"𝔪","mho":"℧","micro":"µ","midast":"*","midcir":"⫰","mid":"∣","middot":"·","minusb":"⊟","minus":"−","minusd":"∸","minusdu":"⨪","MinusPlus":"∓","mlcp":"⫛","mldr":"…","mnplus":"∓","models":"⊧","Mopf":"𝕄","mopf":"𝕞","mp":"∓","mscr":"𝓂","Mscr":"ℳ","mstpos":"∾","Mu":"Μ","mu":"μ","multimap":"⊸","mumap":"⊸","nabla":"∇","Nacute":"Ń","nacute":"ń","nang":"∠⃒","nap":"≉","napE":"⩰̸","napid":"≋̸","napos":"ŉ","napprox":"≉","natural":"♮","naturals":"ℕ","natur":"♮","nbsp":" ","nbump":"≎̸","nbumpe":"≏̸","ncap":"⩃","Ncaron":"Ň","ncaron":"ň","Ncedil":"Ņ","ncedil":"ņ","ncong":"≇","ncongdot":"⩭̸","ncup":"⩂","Ncy":"Н","ncy":"н","ndash":"–","nearhk":"⤤","nearr":"↗","neArr":"⇗","nearrow":"↗","ne":"≠","nedot":"≐̸","NegativeMediumSpace":"​","NegativeThickSpace":"​","NegativeThinSpace":"​","NegativeVeryThinSpace":"​","nequiv":"≢","nesear":"⤨","nesim":"≂̸","NestedGreaterGreater":"≫","NestedLessLess":"≪","NewLine":"\\n","nexist":"∄","nexists":"∄","Nfr":"𝔑","nfr":"𝔫","ngE":"≧̸","nge":"≱","ngeq":"≱","ngeqq":"≧̸","ngeqslant":"⩾̸","nges":"⩾̸","nGg":"⋙̸","ngsim":"≵","nGt":"≫⃒","ngt":"≯","ngtr":"≯","nGtv":"≫̸","nharr":"↮","nhArr":"⇎","nhpar":"⫲","ni":"∋","nis":"⋼","nisd":"⋺","niv":"∋","NJcy":"Њ","njcy":"њ","nlarr":"↚","nlArr":"⇍","nldr":"‥","nlE":"≦̸","nle":"≰","nleftarrow":"↚","nLeftarrow":"⇍","nleftrightarrow":"↮","nLeftrightarrow":"⇎","nleq":"≰","nleqq":"≦̸","nleqslant":"⩽̸","nles":"⩽̸","nless":"≮","nLl":"⋘̸","nlsim":"≴","nLt":"≪⃒","nlt":"≮","nltri":"⋪","nltrie":"⋬","nLtv":"≪̸","nmid":"∤","NoBreak":"⁠","NonBreakingSpace":" ","nopf":"𝕟","Nopf":"ℕ","Not":"⫬","not":"¬","NotCongruent":"≢","NotCupCap":"≭","NotDoubleVerticalBar":"∦","NotElement":"∉","NotEqual":"≠","NotEqualTilde":"≂̸","NotExists":"∄","NotGreater":"≯","NotGreaterEqual":"≱","NotGreaterFullEqual":"≧̸","NotGreaterGreater":"≫̸","NotGreaterLess":"≹","NotGreaterSlantEqual":"⩾̸","NotGreaterTilde":"≵","NotHumpDownHump":"≎̸","NotHumpEqual":"≏̸","notin":"∉","notindot":"⋵̸","notinE":"⋹̸","notinva":"∉","notinvb":"⋷","notinvc":"⋶","NotLeftTriangleBar":"⧏̸","NotLeftTriangle":"⋪","NotLeftTriangleEqual":"⋬","NotLess":"≮","NotLessEqual":"≰","NotLessGreater":"≸","NotLessLess":"≪̸","NotLessSlantEqual":"⩽̸","NotLessTilde":"≴","NotNestedGreaterGreater":"⪢̸","NotNestedLessLess":"⪡̸","notni":"∌","notniva":"∌","notnivb":"⋾","notnivc":"⋽","NotPrecedes":"⊀","NotPrecedesEqual":"⪯̸","NotPrecedesSlantEqual":"⋠","NotReverseElement":"∌","NotRightTriangleBar":"⧐̸","NotRightTriangle":"⋫","NotRightTriangleEqual":"⋭","NotSquareSubset":"⊏̸","NotSquareSubsetEqual":"⋢","NotSquareSuperset":"⊐̸","NotSquareSupersetEqual":"⋣","NotSubset":"⊂⃒","NotSubsetEqual":"⊈","NotSucceeds":"⊁","NotSucceedsEqual":"⪰̸","NotSucceedsSlantEqual":"⋡","NotSucceedsTilde":"≿̸","NotSuperset":"⊃⃒","NotSupersetEqual":"⊉","NotTilde":"≁","NotTildeEqual":"≄","NotTildeFullEqual":"≇","NotTildeTilde":"≉","NotVerticalBar":"∤","nparallel":"∦","npar":"∦","nparsl":"⫽⃥","npart":"∂̸","npolint":"⨔","npr":"⊀","nprcue":"⋠","nprec":"⊀","npreceq":"⪯̸","npre":"⪯̸","nrarrc":"⤳̸","nrarr":"↛","nrArr":"⇏","nrarrw":"↝̸","nrightarrow":"↛","nRightarrow":"⇏","nrtri":"⋫","nrtrie":"⋭","nsc":"⊁","nsccue":"⋡","nsce":"⪰̸","Nscr":"𝒩","nscr":"𝓃","nshortmid":"∤","nshortparallel":"∦","nsim":"≁","nsime":"≄","nsimeq":"≄","nsmid":"∤","nspar":"∦","nsqsube":"⋢","nsqsupe":"⋣","nsub":"⊄","nsubE":"⫅̸","nsube":"⊈","nsubset":"⊂⃒","nsubseteq":"⊈","nsubseteqq":"⫅̸","nsucc":"⊁","nsucceq":"⪰̸","nsup":"⊅","nsupE":"⫆̸","nsupe":"⊉","nsupset":"⊃⃒","nsupseteq":"⊉","nsupseteqq":"⫆̸","ntgl":"≹","Ntilde":"Ñ","ntilde":"ñ","ntlg":"≸","ntriangleleft":"⋪","ntrianglelefteq":"⋬","ntriangleright":"⋫","ntrianglerighteq":"⋭","Nu":"Ν","nu":"ν","num":"#","numero":"№","numsp":" ","nvap":"≍⃒","nvdash":"⊬","nvDash":"⊭","nVdash":"⊮","nVDash":"⊯","nvge":"≥⃒","nvgt":">⃒","nvHarr":"⤄","nvinfin":"⧞","nvlArr":"⤂","nvle":"≤⃒","nvlt":"<⃒","nvltrie":"⊴⃒","nvrArr":"⤃","nvrtrie":"⊵⃒","nvsim":"∼⃒","nwarhk":"⤣","nwarr":"↖","nwArr":"⇖","nwarrow":"↖","nwnear":"⤧","Oacute":"Ó","oacute":"ó","oast":"⊛","Ocirc":"Ô","ocirc":"ô","ocir":"⊚","Ocy":"О","ocy":"о","odash":"⊝","Odblac":"Ő","odblac":"ő","odiv":"⨸","odot":"⊙","odsold":"⦼","OElig":"Œ","oelig":"œ","ofcir":"⦿","Ofr":"𝔒","ofr":"𝔬","ogon":"˛","Ograve":"Ò","ograve":"ò","ogt":"⧁","ohbar":"⦵","ohm":"Ω","oint":"∮","olarr":"↺","olcir":"⦾","olcross":"⦻","oline":"‾","olt":"⧀","Omacr":"Ō","omacr":"ō","Omega":"Ω","omega":"ω","Omicron":"Ο","omicron":"ο","omid":"⦶","ominus":"⊖","Oopf":"𝕆","oopf":"𝕠","opar":"⦷","OpenCurlyDoubleQuote":"“","OpenCurlyQuote":"‘","operp":"⦹","oplus":"⊕","orarr":"↻","Or":"⩔","or":"∨","ord":"⩝","order":"ℴ","orderof":"ℴ","ordf":"ª","ordm":"º","origof":"⊶","oror":"⩖","orslope":"⩗","orv":"⩛","oS":"Ⓢ","Oscr":"𝒪","oscr":"ℴ","Oslash":"Ø","oslash":"ø","osol":"⊘","Otilde":"Õ","otilde":"õ","otimesas":"⨶","Otimes":"⨷","otimes":"⊗","Ouml":"Ö","ouml":"ö","ovbar":"⌽","OverBar":"‾","OverBrace":"⏞","OverBracket":"⎴","OverParenthesis":"⏜","para":"¶","parallel":"∥","par":"∥","parsim":"⫳","parsl":"⫽","part":"∂","PartialD":"∂","Pcy":"П","pcy":"п","percnt":"%","period":".","permil":"‰","perp":"⊥","pertenk":"‱","Pfr":"𝔓","pfr":"𝔭","Phi":"Φ","phi":"φ","phiv":"ϕ","phmmat":"ℳ","phone":"☎","Pi":"Π","pi":"π","pitchfork":"⋔","piv":"ϖ","planck":"ℏ","planckh":"ℎ","plankv":"ℏ","plusacir":"⨣","plusb":"⊞","pluscir":"⨢","plus":"+","plusdo":"∔","plusdu":"⨥","pluse":"⩲","PlusMinus":"±","plusmn":"±","plussim":"⨦","plustwo":"⨧","pm":"±","Poincareplane":"ℌ","pointint":"⨕","popf":"𝕡","Popf":"ℙ","pound":"£","prap":"⪷","Pr":"⪻","pr":"≺","prcue":"≼","precapprox":"⪷","prec":"≺","preccurlyeq":"≼","Precedes":"≺","PrecedesEqual":"⪯","PrecedesSlantEqual":"≼","PrecedesTilde":"≾","preceq":"⪯","precnapprox":"⪹","precneqq":"⪵","precnsim":"⋨","pre":"⪯","prE":"⪳","precsim":"≾","prime":"′","Prime":"″","primes":"ℙ","prnap":"⪹","prnE":"⪵","prnsim":"⋨","prod":"∏","Product":"∏","profalar":"⌮","profline":"⌒","profsurf":"⌓","prop":"∝","Proportional":"∝","Proportion":"∷","propto":"∝","prsim":"≾","prurel":"⊰","Pscr":"𝒫","pscr":"𝓅","Psi":"Ψ","psi":"ψ","puncsp":" ","Qfr":"𝔔","qfr":"𝔮","qint":"⨌","qopf":"𝕢","Qopf":"ℚ","qprime":"⁗","Qscr":"𝒬","qscr":"𝓆","quaternions":"ℍ","quatint":"⨖","quest":"?","questeq":"≟","quot":"\\"","QUOT":"\\"","rAarr":"⇛","race":"∽̱","Racute":"Ŕ","racute":"ŕ","radic":"√","raemptyv":"⦳","rang":"⟩","Rang":"⟫","rangd":"⦒","range":"⦥","rangle":"⟩","raquo":"»","rarrap":"⥵","rarrb":"⇥","rarrbfs":"⤠","rarrc":"⤳","rarr":"→","Rarr":"↠","rArr":"⇒","rarrfs":"⤞","rarrhk":"↪","rarrlp":"↬","rarrpl":"⥅","rarrsim":"⥴","Rarrtl":"⤖","rarrtl":"↣","rarrw":"↝","ratail":"⤚","rAtail":"⤜","ratio":"∶","rationals":"ℚ","rbarr":"⤍","rBarr":"⤏","RBarr":"⤐","rbbrk":"❳","rbrace":"}","rbrack":"]","rbrke":"⦌","rbrksld":"⦎","rbrkslu":"⦐","Rcaron":"Ř","rcaron":"ř","Rcedil":"Ŗ","rcedil":"ŗ","rceil":"⌉","rcub":"}","Rcy":"Р","rcy":"р","rdca":"⤷","rdldhar":"⥩","rdquo":"”","rdquor":"”","rdsh":"↳","real":"ℜ","realine":"ℛ","realpart":"ℜ","reals":"ℝ","Re":"ℜ","rect":"▭","reg":"®","REG":"®","ReverseElement":"∋","ReverseEquilibrium":"⇋","ReverseUpEquilibrium":"⥯","rfisht":"⥽","rfloor":"⌋","rfr":"𝔯","Rfr":"ℜ","rHar":"⥤","rhard":"⇁","rharu":"⇀","rharul":"⥬","Rho":"Ρ","rho":"ρ","rhov":"ϱ","RightAngleBracket":"⟩","RightArrowBar":"⇥","rightarrow":"→","RightArrow":"→","Rightarrow":"⇒","RightArrowLeftArrow":"⇄","rightarrowtail":"↣","RightCeiling":"⌉","RightDoubleBracket":"⟧","RightDownTeeVector":"⥝","RightDownVectorBar":"⥕","RightDownVector":"⇂","RightFloor":"⌋","rightharpoondown":"⇁","rightharpoonup":"⇀","rightleftarrows":"⇄","rightleftharpoons":"⇌","rightrightarrows":"⇉","rightsquigarrow":"↝","RightTeeArrow":"↦","RightTee":"⊢","RightTeeVector":"⥛","rightthreetimes":"⋌","RightTriangleBar":"⧐","RightTriangle":"⊳","RightTriangleEqual":"⊵","RightUpDownVector":"⥏","RightUpTeeVector":"⥜","RightUpVectorBar":"⥔","RightUpVector":"↾","RightVectorBar":"⥓","RightVector":"⇀","ring":"˚","risingdotseq":"≓","rlarr":"⇄","rlhar":"⇌","rlm":"‏","rmoustache":"⎱","rmoust":"⎱","rnmid":"⫮","roang":"⟭","roarr":"⇾","robrk":"⟧","ropar":"⦆","ropf":"𝕣","Ropf":"ℝ","roplus":"⨮","rotimes":"⨵","RoundImplies":"⥰","rpar":")","rpargt":"⦔","rppolint":"⨒","rrarr":"⇉","Rrightarrow":"⇛","rsaquo":"›","rscr":"𝓇","Rscr":"ℛ","rsh":"↱","Rsh":"↱","rsqb":"]","rsquo":"’","rsquor":"’","rthree":"⋌","rtimes":"⋊","rtri":"▹","rtrie":"⊵","rtrif":"▸","rtriltri":"⧎","RuleDelayed":"⧴","ruluhar":"⥨","rx":"℞","Sacute":"Ś","sacute":"ś","sbquo":"‚","scap":"⪸","Scaron":"Š","scaron":"š","Sc":"⪼","sc":"≻","sccue":"≽","sce":"⪰","scE":"⪴","Scedil":"Ş","scedil":"ş","Scirc":"Ŝ","scirc":"ŝ","scnap":"⪺","scnE":"⪶","scnsim":"⋩","scpolint":"⨓","scsim":"≿","Scy":"С","scy":"с","sdotb":"⊡","sdot":"⋅","sdote":"⩦","searhk":"⤥","searr":"↘","seArr":"⇘","searrow":"↘","sect":"§","semi":";","seswar":"⤩","setminus":"∖","setmn":"∖","sext":"✶","Sfr":"𝔖","sfr":"𝔰","sfrown":"⌢","sharp":"♯","SHCHcy":"Щ","shchcy":"щ","SHcy":"Ш","shcy":"ш","ShortDownArrow":"↓","ShortLeftArrow":"←","shortmid":"∣","shortparallel":"∥","ShortRightArrow":"→","ShortUpArrow":"↑","shy":"­","Sigma":"Σ","sigma":"σ","sigmaf":"ς","sigmav":"ς","sim":"∼","simdot":"⩪","sime":"≃","simeq":"≃","simg":"⪞","simgE":"⪠","siml":"⪝","simlE":"⪟","simne":"≆","simplus":"⨤","simrarr":"⥲","slarr":"←","SmallCircle":"∘","smallsetminus":"∖","smashp":"⨳","smeparsl":"⧤","smid":"∣","smile":"⌣","smt":"⪪","smte":"⪬","smtes":"⪬︀","SOFTcy":"Ь","softcy":"ь","solbar":"⌿","solb":"⧄","sol":"/","Sopf":"𝕊","sopf":"𝕤","spades":"♠","spadesuit":"♠","spar":"∥","sqcap":"⊓","sqcaps":"⊓︀","sqcup":"⊔","sqcups":"⊔︀","Sqrt":"√","sqsub":"⊏","sqsube":"⊑","sqsubset":"⊏","sqsubseteq":"⊑","sqsup":"⊐","sqsupe":"⊒","sqsupset":"⊐","sqsupseteq":"⊒","square":"□","Square":"□","SquareIntersection":"⊓","SquareSubset":"⊏","SquareSubsetEqual":"⊑","SquareSuperset":"⊐","SquareSupersetEqual":"⊒","SquareUnion":"⊔","squarf":"▪","squ":"□","squf":"▪","srarr":"→","Sscr":"𝒮","sscr":"𝓈","ssetmn":"∖","ssmile":"⌣","sstarf":"⋆","Star":"⋆","star":"☆","starf":"★","straightepsilon":"ϵ","straightphi":"ϕ","strns":"¯","sub":"⊂","Sub":"⋐","subdot":"⪽","subE":"⫅","sube":"⊆","subedot":"⫃","submult":"⫁","subnE":"⫋","subne":"⊊","subplus":"⪿","subrarr":"⥹","subset":"⊂","Subset":"⋐","subseteq":"⊆","subseteqq":"⫅","SubsetEqual":"⊆","subsetneq":"⊊","subsetneqq":"⫋","subsim":"⫇","subsub":"⫕","subsup":"⫓","succapprox":"⪸","succ":"≻","succcurlyeq":"≽","Succeeds":"≻","SucceedsEqual":"⪰","SucceedsSlantEqual":"≽","SucceedsTilde":"≿","succeq":"⪰","succnapprox":"⪺","succneqq":"⪶","succnsim":"⋩","succsim":"≿","SuchThat":"∋","sum":"∑","Sum":"∑","sung":"♪","sup1":"¹","sup2":"²","sup3":"³","sup":"⊃","Sup":"⋑","supdot":"⪾","supdsub":"⫘","supE":"⫆","supe":"⊇","supedot":"⫄","Superset":"⊃","SupersetEqual":"⊇","suphsol":"⟉","suphsub":"⫗","suplarr":"⥻","supmult":"⫂","supnE":"⫌","supne":"⊋","supplus":"⫀","supset":"⊃","Supset":"⋑","supseteq":"⊇","supseteqq":"⫆","supsetneq":"⊋","supsetneqq":"⫌","supsim":"⫈","supsub":"⫔","supsup":"⫖","swarhk":"⤦","swarr":"↙","swArr":"⇙","swarrow":"↙","swnwar":"⤪","szlig":"ß","Tab":"\\t","target":"⌖","Tau":"Τ","tau":"τ","tbrk":"⎴","Tcaron":"Ť","tcaron":"ť","Tcedil":"Ţ","tcedil":"ţ","Tcy":"Т","tcy":"т","tdot":"⃛","telrec":"⌕","Tfr":"𝔗","tfr":"𝔱","there4":"∴","therefore":"∴","Therefore":"∴","Theta":"Θ","theta":"θ","thetasym":"ϑ","thetav":"ϑ","thickapprox":"≈","thicksim":"∼","ThickSpace":"  ","ThinSpace":" ","thinsp":" ","thkap":"≈","thksim":"∼","THORN":"Þ","thorn":"þ","tilde":"˜","Tilde":"∼","TildeEqual":"≃","TildeFullEqual":"≅","TildeTilde":"≈","timesbar":"⨱","timesb":"⊠","times":"×","timesd":"⨰","tint":"∭","toea":"⤨","topbot":"⌶","topcir":"⫱","top":"⊤","Topf":"𝕋","topf":"𝕥","topfork":"⫚","tosa":"⤩","tprime":"‴","trade":"™","TRADE":"™","triangle":"▵","triangledown":"▿","triangleleft":"◃","trianglelefteq":"⊴","triangleq":"≜","triangleright":"▹","trianglerighteq":"⊵","tridot":"◬","trie":"≜","triminus":"⨺","TripleDot":"⃛","triplus":"⨹","trisb":"⧍","tritime":"⨻","trpezium":"⏢","Tscr":"𝒯","tscr":"𝓉","TScy":"Ц","tscy":"ц","TSHcy":"Ћ","tshcy":"ћ","Tstrok":"Ŧ","tstrok":"ŧ","twixt":"≬","twoheadleftarrow":"↞","twoheadrightarrow":"↠","Uacute":"Ú","uacute":"ú","uarr":"↑","Uarr":"↟","uArr":"⇑","Uarrocir":"⥉","Ubrcy":"Ў","ubrcy":"ў","Ubreve":"Ŭ","ubreve":"ŭ","Ucirc":"Û","ucirc":"û","Ucy":"У","ucy":"у","udarr":"⇅","Udblac":"Ű","udblac":"ű","udhar":"⥮","ufisht":"⥾","Ufr":"𝔘","ufr":"𝔲","Ugrave":"Ù","ugrave":"ù","uHar":"⥣","uharl":"↿","uharr":"↾","uhblk":"▀","ulcorn":"⌜","ulcorner":"⌜","ulcrop":"⌏","ultri":"◸","Umacr":"Ū","umacr":"ū","uml":"¨","UnderBar":"_","UnderBrace":"⏟","UnderBracket":"⎵","UnderParenthesis":"⏝","Union":"⋃","UnionPlus":"⊎","Uogon":"Ų","uogon":"ų","Uopf":"𝕌","uopf":"𝕦","UpArrowBar":"⤒","uparrow":"↑","UpArrow":"↑","Uparrow":"⇑","UpArrowDownArrow":"⇅","updownarrow":"↕","UpDownArrow":"↕","Updownarrow":"⇕","UpEquilibrium":"⥮","upharpoonleft":"↿","upharpoonright":"↾","uplus":"⊎","UpperLeftArrow":"↖","UpperRightArrow":"↗","upsi":"υ","Upsi":"ϒ","upsih":"ϒ","Upsilon":"Υ","upsilon":"υ","UpTeeArrow":"↥","UpTee":"⊥","upuparrows":"⇈","urcorn":"⌝","urcorner":"⌝","urcrop":"⌎","Uring":"Ů","uring":"ů","urtri":"◹","Uscr":"𝒰","uscr":"𝓊","utdot":"⋰","Utilde":"Ũ","utilde":"ũ","utri":"▵","utrif":"▴","uuarr":"⇈","Uuml":"Ü","uuml":"ü","uwangle":"⦧","vangrt":"⦜","varepsilon":"ϵ","varkappa":"ϰ","varnothing":"∅","varphi":"ϕ","varpi":"ϖ","varpropto":"∝","varr":"↕","vArr":"⇕","varrho":"ϱ","varsigma":"ς","varsubsetneq":"⊊︀","varsubsetneqq":"⫋︀","varsupsetneq":"⊋︀","varsupsetneqq":"⫌︀","vartheta":"ϑ","vartriangleleft":"⊲","vartriangleright":"⊳","vBar":"⫨","Vbar":"⫫","vBarv":"⫩","Vcy":"В","vcy":"в","vdash":"⊢","vDash":"⊨","Vdash":"⊩","VDash":"⊫","Vdashl":"⫦","veebar":"⊻","vee":"∨","Vee":"⋁","veeeq":"≚","vellip":"⋮","verbar":"|","Verbar":"‖","vert":"|","Vert":"‖","VerticalBar":"∣","VerticalLine":"|","VerticalSeparator":"❘","VerticalTilde":"≀","VeryThinSpace":" ","Vfr":"𝔙","vfr":"𝔳","vltri":"⊲","vnsub":"⊂⃒","vnsup":"⊃⃒","Vopf":"𝕍","vopf":"𝕧","vprop":"∝","vrtri":"⊳","Vscr":"𝒱","vscr":"𝓋","vsubnE":"⫋︀","vsubne":"⊊︀","vsupnE":"⫌︀","vsupne":"⊋︀","Vvdash":"⊪","vzigzag":"⦚","Wcirc":"Ŵ","wcirc":"ŵ","wedbar":"⩟","wedge":"∧","Wedge":"⋀","wedgeq":"≙","weierp":"℘","Wfr":"𝔚","wfr":"𝔴","Wopf":"𝕎","wopf":"𝕨","wp":"℘","wr":"≀","wreath":"≀","Wscr":"𝒲","wscr":"𝓌","xcap":"⋂","xcirc":"◯","xcup":"⋃","xdtri":"▽","Xfr":"𝔛","xfr":"𝔵","xharr":"⟷","xhArr":"⟺","Xi":"Ξ","xi":"ξ","xlarr":"⟵","xlArr":"⟸","xmap":"⟼","xnis":"⋻","xodot":"⨀","Xopf":"𝕏","xopf":"𝕩","xoplus":"⨁","xotime":"⨂","xrarr":"⟶","xrArr":"⟹","Xscr":"𝒳","xscr":"𝓍","xsqcup":"⨆","xuplus":"⨄","xutri":"△","xvee":"⋁","xwedge":"⋀","Yacute":"Ý","yacute":"ý","YAcy":"Я","yacy":"я","Ycirc":"Ŷ","ycirc":"ŷ","Ycy":"Ы","ycy":"ы","yen":"¥","Yfr":"𝔜","yfr":"𝔶","YIcy":"Ї","yicy":"ї","Yopf":"𝕐","yopf":"𝕪","Yscr":"𝒴","yscr":"𝓎","YUcy":"Ю","yucy":"ю","yuml":"ÿ","Yuml":"Ÿ","Zacute":"Ź","zacute":"ź","Zcaron":"Ž","zcaron":"ž","Zcy":"З","zcy":"з","Zdot":"Ż","zdot":"ż","zeetrf":"ℨ","ZeroWidthSpace":"​","Zeta":"Ζ","zeta":"ζ","zfr":"𝔷","Zfr":"ℨ","ZHcy":"Ж","zhcy":"ж","zigrarr":"⇝","zopf":"𝕫","Zopf":"ℤ","Zscr":"𝒵","zscr":"𝓏","zwj":"‍","zwnj":"‌"}'
                );
            },
            802: (t) => {
                "use strict";
                t.exports = JSON.parse(
                    '{"Aacute":"Á","aacute":"á","Acirc":"Â","acirc":"â","acute":"´","AElig":"Æ","aelig":"æ","Agrave":"À","agrave":"à","amp":"&","AMP":"&","Aring":"Å","aring":"å","Atilde":"Ã","atilde":"ã","Auml":"Ä","auml":"ä","brvbar":"¦","Ccedil":"Ç","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","COPY":"©","curren":"¤","deg":"°","divide":"÷","Eacute":"É","eacute":"é","Ecirc":"Ê","ecirc":"ê","Egrave":"È","egrave":"è","ETH":"Ð","eth":"ð","Euml":"Ë","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","GT":">","Iacute":"Í","iacute":"í","Icirc":"Î","icirc":"î","iexcl":"¡","Igrave":"Ì","igrave":"ì","iquest":"¿","Iuml":"Ï","iuml":"ï","laquo":"«","lt":"<","LT":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","Ntilde":"Ñ","ntilde":"ñ","Oacute":"Ó","oacute":"ó","Ocirc":"Ô","ocirc":"ô","Ograve":"Ò","ograve":"ò","ordf":"ª","ordm":"º","Oslash":"Ø","oslash":"ø","Otilde":"Õ","otilde":"õ","Ouml":"Ö","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","QUOT":"\\"","raquo":"»","reg":"®","REG":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","THORN":"Þ","thorn":"þ","times":"×","Uacute":"Ú","uacute":"ú","Ucirc":"Û","ucirc":"û","Ugrave":"Ù","ugrave":"ù","uml":"¨","Uuml":"Ü","uuml":"ü","Yacute":"Ý","yacute":"ý","yen":"¥","yuml":"ÿ"}'
                );
            },
            228: (t) => {
                "use strict";
                t.exports = JSON.parse('{"amp":"&","apos":"\'","gt":">","lt":"<","quot":"\\""}');
            },
            729: (t) => {
                "use strict";
                var r = {};
                function e(t, i, s) {
                    var o,
                        a,
                        n,
                        l,
                        c,
                        u = "";
                    for (
                        "string" != typeof i && ((s = i), (i = e.defaultChars)),
                        void 0 === s && (s = !0),
                        c = (function (t) {
                            var e,
                                i,
                                s = r[t];
                            if (s) return s;
                            for (s = r[t] = [], e = 0; e < 128; e++) (i = String.fromCharCode(e)), /^[0-9a-z]$/i.test(i) ? s.push(i) : s.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
                            for (e = 0; e < t.length; e++) s[t.charCodeAt(e)] = t[e];
                            return s;
                        })(i),
                        o = 0,
                        a = t.length;
                        o < a;
                        o++
                    )
                        if (((n = t.charCodeAt(o)), s && 37 === n && o + 2 < a && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3)))) (u += t.slice(o, o + 3)), (o += 2);
                        else if (n < 128) u += c[n];
                        else if (n >= 55296 && n <= 57343) {
                            if (n >= 55296 && n <= 56319 && o + 1 < a && (l = t.charCodeAt(o + 1)) >= 56320 && l <= 57343) {
                                (u += encodeURIComponent(t[o] + t[o + 1])), o++;
                                continue;
                            }
                            u += "%EF%BF%BD";
                        } else u += encodeURIComponent(t[o]);
                    return u;
                }
                (e.defaultChars = ";/?:@&=+$,-_.!~*'()#"), (e.componentChars = "-_.!~*'()"), (t.exports = e);
            },
            822: () => {
                String.prototype.repeat ||
                    (function () {
                        "use strict";
                        var t = (function () {
                            try {
                                var t = {},
                                    r = Object.defineProperty,
                                    e = r(t, t, t) && r;
                            } catch (t) { }
                            return e;
                        })(),
                            r = function (t) {
                                if (null == this) throw TypeError();
                                var r = String(this),
                                    e = t ? Number(t) : 0;
                                if ((e != e && (e = 0), e < 0 || e == 1 / 0)) throw RangeError();
                                for (var i = ""; e;) e % 2 == 1 && (i += r), e > 1 && (r += r), (e >>= 1);
                                return i;
                            };
                        t ? t(String.prototype, "repeat", { value: r, configurable: !0, writable: !0 }) : (String.prototype.repeat = r);
                    })();
            },
        },
            r = {};
        function e(i) {
            var s = r[i];
            if (void 0 !== s) return s.exports;
            var o = (r[i] = { exports: {} });
            return t[i].call(o.exports, o, o.exports, e), o.exports;
        }
        (e.d = (t, r) => {
            for (var i in r) e.o(r, i) && !e.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: r[i] });
        }),
            (e.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
            (e.r = (t) => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            });
        var i = {};
        return (
            (() => {
                "use strict";
                e.r(i), e.d(i, { BBCodeRenderer: () => A });
                const { replace: t } = "",
                    r = /[&<>'"]/g,
                    s = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" },
                    o = (t) => s[t],
                    a = (e) => t.call(e, r, o);
                function n(t) {
                    switch (t._type) {
                        case "document":
                        case "block_quote":
                        case "list":
                        case "item":
                        case "paragraph":
                        case "heading":
                        case "emph":
                        case "strong":
                        case "link":
                        case "image":
                        case "custom_inline":
                        case "custom_block":
                            return !0;
                        default:
                            return !1;
                    }
                }
                var l = function (t, r) {
                    (this.current = t), (this.entering = !0 === r);
                },
                    c = function () {
                        var t = this.current,
                            r = this.entering;
                        if (null === t) return null;
                        var e = n(t);
                        return (
                            r && e
                                ? t._firstChild
                                    ? ((this.current = t._firstChild), (this.entering = !0))
                                    : (this.entering = !1)
                                : t === this.root
                                    ? (this.current = null)
                                    : null === t._next
                                        ? ((this.current = t._parent), (this.entering = !1))
                                        : ((this.current = t._next), (this.entering = !0)),
                            { entering: r, node: t }
                        );
                    },
                    u = function (t) {
                        return { current: t, root: t, entering: !0, next: c, resumeAt: l };
                    },
                    p = function (t, r) {
                        (this._type = t),
                            (this._parent = null),
                            (this._firstChild = null),
                            (this._lastChild = null),
                            (this._prev = null),
                            (this._next = null),
                            (this._sourcepos = r),
                            (this._lastLineBlank = !1),
                            (this._lastLineChecked = !1),
                            (this._open = !0),
                            (this._string_content = null),
                            (this._literal = null),
                            (this._listData = {}),
                            (this._info = null),
                            (this._destination = null),
                            (this._title = null),
                            (this._isFenced = !1),
                            (this._fenceChar = null),
                            (this._fenceLength = 0),
                            (this._fenceOffset = null),
                            (this._level = null),
                            (this._onEnter = null),
                            (this._onExit = null);
                    },
                    h = p.prototype;
                Object.defineProperty(h, "isContainer", {
                    get: function () {
                        return n(this);
                    },
                }),
                    Object.defineProperty(h, "type", {
                        get: function () {
                            return this._type;
                        },
                    }),
                    Object.defineProperty(h, "firstChild", {
                        get: function () {
                            return this._firstChild;
                        },
                    }),
                    Object.defineProperty(h, "lastChild", {
                        get: function () {
                            return this._lastChild;
                        },
                    }),
                    Object.defineProperty(h, "next", {
                        get: function () {
                            return this._next;
                        },
                    }),
                    Object.defineProperty(h, "prev", {
                        get: function () {
                            return this._prev;
                        },
                    }),
                    Object.defineProperty(h, "parent", {
                        get: function () {
                            return this._parent;
                        },
                    }),
                    Object.defineProperty(h, "sourcepos", {
                        get: function () {
                            return this._sourcepos;
                        },
                    }),
                    Object.defineProperty(h, "literal", {
                        get: function () {
                            return this._literal;
                        },
                        set: function (t) {
                            this._literal = t;
                        },
                    }),
                    Object.defineProperty(h, "destination", {
                        get: function () {
                            return this._destination;
                        },
                        set: function (t) {
                            this._destination = t;
                        },
                    }),
                    Object.defineProperty(h, "title", {
                        get: function () {
                            return this._title;
                        },
                        set: function (t) {
                            this._title = t;
                        },
                    }),
                    Object.defineProperty(h, "info", {
                        get: function () {
                            return this._info;
                        },
                        set: function (t) {
                            this._info = t;
                        },
                    }),
                    Object.defineProperty(h, "level", {
                        get: function () {
                            return this._level;
                        },
                        set: function (t) {
                            this._level = t;
                        },
                    }),
                    Object.defineProperty(h, "listType", {
                        get: function () {
                            return this._listData.type;
                        },
                        set: function (t) {
                            this._listData.type = t;
                        },
                    }),
                    Object.defineProperty(h, "listTight", {
                        get: function () {
                            return this._listData.tight;
                        },
                        set: function (t) {
                            this._listData.tight = t;
                        },
                    }),
                    Object.defineProperty(h, "listStart", {
                        get: function () {
                            return this._listData.start;
                        },
                        set: function (t) {
                            this._listData.start = t;
                        },
                    }),
                    Object.defineProperty(h, "listDelimiter", {
                        get: function () {
                            return this._listData.delimiter;
                        },
                        set: function (t) {
                            this._listData.delimiter = t;
                        },
                    }),
                    Object.defineProperty(h, "onEnter", {
                        get: function () {
                            return this._onEnter;
                        },
                        set: function (t) {
                            this._onEnter = t;
                        },
                    }),
                    Object.defineProperty(h, "onExit", {
                        get: function () {
                            return this._onExit;
                        },
                        set: function (t) {
                            this._onExit = t;
                        },
                    }),
                    (p.prototype.appendChild = function (t) {
                        t.unlink(), (t._parent = this), this._lastChild ? ((this._lastChild._next = t), (t._prev = this._lastChild), (this._lastChild = t)) : ((this._firstChild = t), (this._lastChild = t));
                    }),
                    (p.prototype.prependChild = function (t) {
                        t.unlink(), (t._parent = this), this._firstChild ? ((this._firstChild._prev = t), (t._next = this._firstChild), (this._firstChild = t)) : ((this._firstChild = t), (this._lastChild = t));
                    }),
                    (p.prototype.unlink = function () {
                        this._prev ? (this._prev._next = this._next) : this._parent && (this._parent._firstChild = this._next),
                            this._next ? (this._next._prev = this._prev) : this._parent && (this._parent._lastChild = this._prev),
                            (this._parent = null),
                            (this._next = null),
                            (this._prev = null);
                    }),
                    (p.prototype.insertAfter = function (t) {
                        t.unlink(), (t._next = this._next), t._next && (t._next._prev = t), (t._prev = this), (this._next = t), (t._parent = this._parent), t._next || (t._parent._lastChild = t);
                    }),
                    (p.prototype.insertBefore = function (t) {
                        t.unlink(), (t._prev = this._prev), t._prev && (t._prev._next = t), (t._next = this), (this._prev = t), (t._parent = this._parent), t._prev || (t._parent._firstChild = t);
                    }),
                    (p.prototype.walker = function () {
                        return new u(this);
                    }),
                    e(729),
                    e(863);
                var f =
                    (new RegExp(
                        "^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>]|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|[<][?][\\s\\S]*?[?][>]|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"
                    ),
                        "[!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]"),
                    g = (new RegExp("\\\\" + f + "|&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});", "gi"), new RegExp('[&<>"]', "g")),
                    d = function (t) {
                        switch (t) {
                            case "&":
                                return "&amp;";
                            case "<":
                                return "&lt;";
                            case ">":
                                return "&gt;";
                            case '"':
                                return "&quot;";
                            default:
                                return t;
                        }
                    },
                    b = function (t) {
                        return g.test(t) ? t.replace(g, d) : t;
                    };
                if (String.fromCodePoint);
                else String.fromCharCode, Math.floor;
                e(822);
                var m = f,
                    v = "\\\\" + m;
                function y() { }
                new RegExp('^(?:"(' + v + '|[^"\\x00])*"|\'(' + v + "|[^'\\x00])*'|\\((" + v + "|[^()\\x00])*\\))"),
                    new RegExp("^" + m),
                    new RegExp("^&(?:#x[a-f0-9]{1,6}|#[0-9]{1,7}|[a-z][a-z0-9]{1,31});", "i"),
                    new RegExp("^(?:<[A-Za-z][A-Za-z0-9-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\x00-\\x20]+|'[^']*'|\"[^\"]*\"))?)*\\s*/?>|</[A-Za-z][A-Za-z0-9-]*\\s*[>])\\s*$", "i"),
                    (y.prototype.render = function (t) {
                        var r,
                            e,
                            i = t.walker();
                        for (this.buffer = "", this.lastOut = "\n"; (r = i.next());) this[(e = r.node.type)] && this[e](r.node, r.entering);
                        return this.buffer;
                    }),
                    (y.prototype.out = function (t) {
                        this.lit(t);
                    }),
                    (y.prototype.lit = function (t) {
                        (this.buffer += t), (this.lastOut = t);
                    }),
                    (y.prototype.cr = function () {
                        "\n" !== this.lastOut && this.lit("\n");
                    }),
                    (y.prototype.esc = function (t) {
                        return t;
                    });
                const q = y;
                var w = /^javascript:|vbscript:|file:|data:/i,
                    x = /^data:image\/(?:png|gif|jpeg|webp)/i,
                    _ = function (t) {
                        return w.test(t) && !x.test(t);
                    };
                function k(t) {
                    ((t = t || {}).softbreak = t.softbreak || "\n"), (this.disableTags = 0), (this.lastOut = "\n"), (this.options = t);
                }
                (k.prototype = Object.create(q.prototype)),
                    (k.prototype.text = function (t) {
                        this.out(t.literal);
                    }),
                    (k.prototype.html_inline = function (t) {
                        this.options.safe ? this.lit("\x3c!-- raw HTML omitted --\x3e") : this.lit(t.literal);
                    }),
                    (k.prototype.html_block = function (t) {
                        this.cr(), this.options.safe ? this.lit("\x3c!-- raw HTML omitted --\x3e") : this.lit(t.literal), this.cr();
                    }),
                    (k.prototype.softbreak = function () {
                        this.lit(this.options.softbreak);
                    }),
                    (k.prototype.linebreak = function () {
                        this.tag("br", [], !0), this.cr();
                    }),
                    (k.prototype.link = function (t, r) {
                        var e = this.attrs(t);
                        r ? ((this.options.safe && _(t.destination)) || e.push(["href", this.esc(t.destination)]), t.title && e.push(["title", this.esc(t.title)]), this.tag("a", e)) : this.tag("/a");
                    }),
                    (k.prototype.image = function (t, r) {
                        r
                            ? (0 === this.disableTags && (this.options.safe && _(t.destination) ? this.lit('<img src="" alt="') : this.lit('<img src="' + this.esc(t.destination) + '" alt="')), (this.disableTags += 1))
                            : ((this.disableTags -= 1), 0 === this.disableTags && (t.title && this.lit('" title="' + this.esc(t.title)), this.lit('" />')));
                    }),
                    (k.prototype.emph = function (t, r) {
                        this.tag(r ? "em" : "/em");
                    }),
                    (k.prototype.strong = function (t, r) {
                        this.tag(r ? "strong" : "/strong");
                    }),
                    (k.prototype.paragraph = function (t, r) {
                        var e = t.parent.parent,
                            i = this.attrs(t);
                        (null !== e && "list" === e.type && e.listTight) || (r ? (this.cr(), this.tag("p", i)) : (this.tag("/p"), this.cr()));
                    }),
                    (k.prototype.heading = function (t, r) {
                        var e = "h" + t.level,
                            i = this.attrs(t);
                        r ? (this.cr(), this.tag(e, i)) : (this.tag("/" + e), this.cr());
                    }),
                    (k.prototype.code = function (t) {
                        this.tag("code"), this.out(t.literal), this.tag("/code");
                    }),
                    (k.prototype.code_block = function (t) {
                        var r = t.info ? t.info.split(/\s+/) : [],
                            e = this.attrs(t);
                        r.length > 0 && r[0].length > 0 && e.push(["class", "language-" + this.esc(r[0])]), this.cr(), this.tag("pre"), this.tag("code", e), this.out(t.literal), this.tag("/code"), this.tag("/pre"), this.cr();
                    }),
                    (k.prototype.thematic_break = function (t) {
                        var r = this.attrs(t);
                        this.cr(), this.tag("hr", r, !0), this.cr();
                    }),
                    (k.prototype.block_quote = function (t, r) {
                        var e = this.attrs(t);
                        r ? (this.cr(), this.tag("blockquote", e), this.cr()) : (this.cr(), this.tag("/blockquote"), this.cr());
                    }),
                    (k.prototype.list = function (t, r) {
                        var e = "bullet" === t.listType ? "ul" : "ol",
                            i = this.attrs(t);
                        if (r) {
                            var s = t.listStart;
                            null !== s && 1 !== s && i.push(["start", s.toString()]), this.cr(), this.tag(e, i), this.cr();
                        } else this.cr(), this.tag("/" + e), this.cr();
                    }),
                    (k.prototype.item = function (t, r) {
                        var e = this.attrs(t);
                        r ? this.tag("li", e) : (this.tag("/li"), this.cr());
                    }),
                    (k.prototype.custom_inline = function (t, r) {
                        r && t.onEnter ? this.lit(t.onEnter) : !r && t.onExit && this.lit(t.onExit);
                    }),
                    (k.prototype.custom_block = function (t, r) {
                        this.cr(), r && t.onEnter ? this.lit(t.onEnter) : !r && t.onExit && this.lit(t.onExit), this.cr();
                    }),
                    (k.prototype.esc = b),
                    (k.prototype.out = function (t) {
                        this.lit(this.esc(t));
                    }),
                    (k.prototype.tag = function (t, r, e) {
                        if (!(this.disableTags > 0)) {
                            if (((this.buffer += "<" + t), r && r.length > 0)) for (var i, s = 0; void 0 !== (i = r[s]);) (this.buffer += " " + i[0] + '="' + i[1] + '"'), s++;
                            e && (this.buffer += " /"), (this.buffer += ">"), (this.lastOut = ">");
                        }
                    }),
                    (k.prototype.attrs = function (t) {
                        var r = [];
                        if (this.options.sourcepos) {
                            var e = t.sourcepos;
                            e && r.push(["data-sourcepos", String(e[0][0]) + ":" + String(e[0][1]) + "-" + String(e[1][0]) + ":" + String(e[1][1])]);
                        }
                        return r;
                    });
                var E = /\<[^>]*\>/;
                function S(t) {
                    (t = t || {}), (this.disableTags = 0), (this.lastOut = "\n"), (this.indentLevel = 0), (this.indent = "  "), (this.options = t);
                }
                (S.prototype = Object.create(q.prototype)),
                    (S.prototype.render = function (t) {
                        var r, e;
                        this.buffer = "";
                        var i,
                            s,
                            o,
                            a,
                            n,
                            l,
                            c = t.walker(),
                            u = this.options;
                        for (u.time && console.time("rendering"), this.buffer += '<?xml version="1.0" encoding="UTF-8"?>\n', this.buffer += '<!DOCTYPE document SYSTEM "CommonMark.dtd">\n'; (i = c.next());)
                            if (((o = i.entering), (l = (s = i.node).type), (a = s.isContainer), (n = "thematic_break" === l || "linebreak" === l || "softbreak" === l), (e = l.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase()), o)) {
                                switch (((r = []), l)) {
                                    case "document":
                                        r.push(["xmlns", "http://commonmark.org/xml/1.0"]);
                                        break;
                                    case "list":
                                        null !== s.listType && r.push(["type", s.listType.toLowerCase()]),
                                            null !== s.listStart && r.push(["start", String(s.listStart)]),
                                            null !== s.listTight && r.push(["tight", s.listTight ? "true" : "false"]);
                                        var p = s.listDelimiter;
                                        if (null !== p) {
                                            var h;
                                            (h = "." === p ? "period" : "paren"), r.push(["delimiter", h]);
                                        }
                                        break;
                                    case "code_block":
                                        s.info && r.push(["info", s.info]);
                                        break;
                                    case "heading":
                                        r.push(["level", String(s.level)]);
                                        break;
                                    case "link":
                                    case "image":
                                        r.push(["destination", s.destination]), r.push(["title", s.title]);
                                        break;
                                    case "custom_inline":
                                    case "custom_block":
                                        r.push(["on_enter", s.onEnter]), r.push(["on_exit", s.onExit]);
                                }
                                if (u.sourcepos) {
                                    var f = s.sourcepos;
                                    f && r.push(["sourcepos", String(f[0][0]) + ":" + String(f[0][1]) + "-" + String(f[1][0]) + ":" + String(f[1][1])]);
                                }
                                if ((this.cr(), this.out(this.tag(e, r, n)), a)) this.indentLevel += 1;
                                else if (!a && !n) {
                                    var g = s.literal;
                                    g && this.out(this.esc(g)), this.out(this.tag("/" + e));
                                }
                            } else (this.indentLevel -= 1), this.cr(), this.out(this.tag("/" + e));
                        return u.time && console.timeEnd("rendering"), (this.buffer += "\n"), this.buffer;
                    }),
                    (S.prototype.out = function (t) {
                        this.disableTags > 0 ? (this.buffer += t.replace(E, "")) : (this.buffer += t), (this.lastOut = t);
                    }),
                    (S.prototype.cr = function () {
                        if ("\n" !== this.lastOut) {
                            (this.buffer += "\n"), (this.lastOut = "\n");
                            for (var t = this.indentLevel; t > 0; t--) this.buffer += this.indent;
                        }
                    }),
                    (S.prototype.tag = function (t, r, e) {
                        var i = "<" + t;
                        if (r && r.length > 0) for (var s, o = 0; void 0 !== (s = r[o]);) (i += " " + s[0] + '="' + this.esc(s[1]) + '"'), o++;
                        return e && (i += " /"), i + ">";
                    }),
                    (S.prototype.esc = b);
                var D = /^javascript:|vbscript:|file:|data:/i,
                    L = /^data:image\/(?:png|gif|jpeg|webp)/i,
                    T = function (t) {
                        return D.test(t) && !L.test(t);
                    };
                function A(t) {
                    ((t = t || {}).softbreak = t.softbreak || "\n"), (t.newline_after_heading = t.newline_after_heading || !0), (this.esc = t.esc || a), (this.disableTags = 0), (this.lastOut = "\n"), (this.options = t);
                }
                (A.prototype = Object.create(q.prototype)),
                    (A.prototype.text = function (t) {
                        this.out(t.literal);
                    }),
                    (A.prototype.html_inline = function (t) {
                        this.options.safe ? this.lit("\x3c!-- raw HTML omitted --\x3e") : this.lit(t.literal);
                    }),
                    (A.prototype.html_block = function (t) {
                        this.cr(), this.options.safe ? this.lit("\x3c!-- raw HTML omitted --\x3e") : this.lit(t.literal), this.cr();
                    }),
                    (A.prototype.softbreak = function () {
                        this.lit(this.options.softbreak);
                    }),
                    (A.prototype.linebreak = function () {
                        this.cr();
                    }),
                    (A.prototype.link = function (t, r) {
                        this.attrs(t), r ? ((this.options.safe && T(t.destination)) || this.tag("url=" + this.esc(t.destination)), t.title && this.text(t.title)) : this.tag("/url");
                    }),
                    (A.prototype.image = function (t, r) {
                        r
                            ? (0 === this.disableTags && (this.options.safe && T(t.destination) ? this.lit("[img]") : this.lit("[img]" + this.esc(t.destination))), (this.disableTags += 1))
                            : ((this.disableTags -= 1), 0 === this.disableTags && (t.title && this.lit('" title="' + this.esc(t.title)), this.lit("[/img]")));
                    }),
                    (A.prototype.emph = function (t, r) {
                        this.tag(r ? "i" : "/i");
                    }),
                    (A.prototype.strong = function (t, r) {
                        this.tag(r ? "b" : "/b");
                    }),
                    (A.prototype.paragraph = function (t, r) {
                        var e = t.parent.parent;
                        this.attrs(t), (null !== e && "list" === e.type && e.listTight) || this.softbreak();
                    }),
                    (A.prototype.heading = function (t, r) {
                        r ? (this.softbreak(), this.tag("b"), this.tag("u"), this.tag("size=" + (6 - t.level))) : (this.tag("/size"), this.tag("/u"),this.tag("/b"), this.softbreak(), this.options.newline_after_heading && this.linebreak());
                    }),
                    (A.prototype.code = function (t) {
                        var r = this.attrs(t);
                        r.push(["tag_value", "monospace"]), this.tag("font", r), this.out(t.literal), this.tag("/font");
                    }),
                    (A.prototype.code_block = function (t) {
                        var r = t.info ? t.info.split(/\s+/) : [],
                            e = this.attrs(t);
                        r.length > 0 && r[0].length > 0 && e.push(["tag_value", this.esc(r[0])]), this.cr(), this.tag("pre"), this.tag("code", e), this.out(t.literal), this.tag("/code"), this.tag("/pre"), this.cr();
                    }),
                    (A.prototype.thematic_break = function (t) {
                        this.attrs(t), this.cr(), this.softbreak();
                    }),
                    (A.prototype.block_quote = function (t, r) {
                        var e = this.attrs(t);
                        r ? (this.cr(), this.tag("quote", e), this.cr()) : (this.cr(), this.tag("/quote"), this.cr());
                    }),
                    (A.prototype.list = function (t, r) {
                        var e = this.attrs(t);
                        if (("ordered" === t.listType && e.push(["tag_value", 1]), r)) {
                            var i = t.listStart;
                            null !== i && 1 !== i && e.push(["start", i.toString()]), this.softbreak(), this.tag("list", e), this.cr();
                        } else this.cr(), this.tag("/list"), this.cr();
                    }),
                    (A.prototype.item = function (t, r) {
                        var e = this.attrs(t);
                        r ? this.tag("*", e) : this.cr();
                    }),
                    (A.prototype.custom_inline = function (t, r) {
                        r && t.onEnter ? this.lit(t.onEnter) : !r && t.onExit && this.lit(t.onExit);
                    }),
                    (A.prototype.custom_block = function (t, r) {
                        this.cr(), r && t.onEnter ? this.lit(t.onEnter) : !r && t.onExit && this.lit(t.onExit), this.cr();
                    }),
                    (A.prototype.esc = a),
                    (A.prototype.out = function (t) {
                        this.lit(this.esc(t));
                    }),
                    (A.prototype.tag = function (t, r, e) {
                        if (!(this.disableTags > 0)) {
                            if (((this.buffer += "[" + t), r && r.length > 0)) for (var i, s = 0; void 0 !== (i = r[s]);) "tag_value" == i[0] ? (this.buffer += "=" + i[1]) : (this.buffer += " " + i[0] + '="' + i[1] + '"'), s++;
                            e && (this.buffer += " /"), (this.buffer += "]"), (this.lastOut = "]");
                        }
                    }),
                    (A.prototype.attrs = function (t) {
                        var r = [];
                        if (this.options.sourcepos) {
                            var e = t.sourcepos;
                            e && r.push(["data-sourcepos", String(e[0][0]) + ":" + String(e[0][1]) + "-" + String(e[1][0]) + ":" + String(e[1][1])]);
                        }
                        return r;
                    });
            })(),
            i
        );
    })();
});
