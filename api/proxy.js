<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#0f0900">
<title>ऋषि — Narmada Education Companion</title>
<link href="https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Hindi:ital@0;1&family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=Noto+Sans+Devanagari:wght@300;400;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{
  --bg:#0f0900;--surface:#1c1005;--surface2:#2a1a08;--border:#3d2810;
  --gold:#d4962a;--gold-dim:rgba(212,150,42,0.15);--gold-line:rgba(212,150,42,0.3);
  --cream:#f0ddb8;--muted:rgba(240,221,184,0.55);
  --green:#4caf7d;--red:#e07070;--radius:10px;
}
html,body{height:100%;background:var(--bg);color:var(--cream);font-family:'DM Sans',sans-serif;overflow:hidden}
::-webkit-scrollbar{width:3px}::-webkit-scrollbar-thumb{background:var(--border);border-radius:2px}

#app{display:flex;flex-direction:column;height:100vh}

/* TOPBAR */
#topbar{display:flex;align-items:center;justify-content:space-between;padding:.65rem 1rem;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0;z-index:20}
.logo-row{display:flex;align-items:center;gap:.6rem}
.logo{font-family:'Tiro Devanagari Hindi',serif;font-size:1.6rem;color:var(--gold);line-height:1}
.brand-title{font-size:.82rem;font-weight:600;color:var(--cream)}
.brand-sub{font-size:.5rem;color:var(--muted);letter-spacing:.8px;text-transform:uppercase;margin-top:1px}

/* MAIN SCROLL */
#main{flex:1;overflow-y:auto;padding:1rem 1rem 6rem}

/* SECTION */
.section{margin-bottom:1.25rem}
.section-label{font-size:.58rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--muted);margin-bottom:.5rem;font-weight:500;display:flex;align-items:center;gap:.4rem}
.section-label .done-badge{background:var(--green);color:#fff;font-size:.5rem;padding:.1rem .35rem;border-radius:10px;letter-spacing:.5px}
.section-label .num{width:16px;height:16px;border-radius:50%;background:var(--border);display:flex;align-items:center;justify-content:center;font-size:.55rem;color:var(--muted);flex-shrink:0}
.section-label .num.active{background:var(--gold);color:#1a0a00}

/* HORIZONTAL SCROLL ROW */
.hscroll{display:flex;gap:.5rem;overflow-x:auto;padding-bottom:.25rem;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.hscroll::-webkit-scrollbar{display:none}

/* CHIP BUTTONS */
.chip{flex-shrink:0;background:var(--surface);border:1px solid var(--border);color:var(--cream);padding:.45rem .85rem;border-radius:20px;cursor:pointer;font-size:.8rem;font-family:'Noto Sans Devanagari',sans-serif;white-space:nowrap;transition:all .2s}
.chip:hover,.chip.active{background:var(--gold-dim);border-color:var(--gold);color:var(--gold)}
.chip.board{font-size:.82rem;padding:.5rem 1.1rem;font-family:'DM Sans',sans-serif}

/* CHAPTER LIST */
.ch-list{display:flex;flex-direction:column;gap:.35rem;max-height:220px;overflow-y:auto}
.ch-item{background:var(--surface);border:1px solid var(--border);color:var(--cream);padding:.55rem .85rem;border-radius:var(--radius);cursor:pointer;font-size:.78rem;font-family:'Noto Sans Devanagari',sans-serif;text-align:left;transition:all .2s;display:flex;justify-content:space-between;align-items:center}
.ch-item:hover,.ch-item.active{background:var(--gold-dim);border-color:var(--gold);color:var(--gold)}
.ch-num{font-size:.6rem;color:var(--muted);font-family:'DM Sans',sans-serif;flex-shrink:0;margin-left:.5rem}

/* PHILOSOPHY CARDS */
.phil-scroll{display:flex;gap:.6rem;overflow-x:auto;padding-bottom:.25rem;-webkit-overflow-scrolling:touch;scrollbar-width:none}
.phil-scroll::-webkit-scrollbar{display:none}
.phil-card{flex-shrink:0;width:150px;background:var(--surface);border:1.5px solid var(--border);border-radius:var(--radius);padding:.75rem;cursor:pointer;transition:all .2s;text-align:left}
.phil-card:hover,.phil-card.active{border-color:var(--gold);background:var(--gold-dim)}
.phil-tag{font-size:.52rem;letter-spacing:.8px;text-transform:uppercase;color:var(--gold);margin-bottom:.25rem;font-family:'DM Sans',sans-serif}
.phil-name{font-family:'DM Serif Display',serif;font-size:.9rem;color:var(--cream);margin-bottom:.2rem}
.phil-desc{font-size:.62rem;color:var(--muted);line-height:1.4;font-family:'DM Sans',sans-serif}

/* LOCKED OVERLAY */
.locked{opacity:.35;pointer-events:none}
.locked-msg{font-size:.72rem;color:var(--muted);padding:.4rem 0;font-style:italic}

/* GENERATE */
#gen-bar{position:fixed;bottom:0;left:0;right:0;padding:.85rem 1rem;background:linear-gradient(to top, var(--bg) 70%, transparent);z-index:30}
.gen-btn{width:100%;background:var(--gold);color:#1a0a00;border:none;padding:.85rem;border-radius:var(--radius);font-size:1rem;font-weight:600;font-family:'DM Sans',sans-serif;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:.5rem}
.gen-btn:disabled{opacity:.3;cursor:default}
.gen-btn:not(:disabled):hover{opacity:.9}
.gen-summary{font-size:.65rem;color:var(--muted);text-align:center;margin-bottom:.4rem;min-height:1rem}

/* PLAN OUTPUT PAGE */
#plan-page{position:fixed;inset:0;background:var(--bg);z-index:50;display:none;flex-direction:column;overflow:hidden}
#plan-page.show{display:flex}
#plan-topbar{display:flex;align-items:center;justify-content:space-between;padding:.65rem 1rem;background:var(--surface);border-bottom:1px solid var(--border);flex-shrink:0}
.plan-back{background:transparent;border:1px solid var(--border);color:var(--muted);padding:.35rem .85rem;border-radius:20px;cursor:pointer;font-size:.75rem;font-family:'DM Sans',sans-serif}
.plan-title{font-size:.85rem;color:var(--cream);font-weight:600}
.plan-copy{background:var(--gold);color:#1a0a00;border:none;padding:.35rem .85rem;border-radius:20px;cursor:pointer;font-size:.75rem;font-weight:600;font-family:'DM Sans',sans-serif}
#plan-scroll{flex:1;overflow-y:auto;padding:0 0 2rem}
#plan-content{background:#fff;color:#1a1a1a;font-family:'DM Sans',sans-serif;max-width:640px;margin:0 auto}

/* PLAN STYLES */
.ph{background:#1a1a1a;color:#fff;padding:1.1rem 1.25rem;text-align:center}
.ph-title{font-family:'DM Serif Display',serif;font-size:1.3rem;text-transform:uppercase;letter-spacing:.8px}
.ph-sub{font-size:.6rem;color:rgba(255,255,255,.5);letter-spacing:2px;text-transform:uppercase;margin-top:.2rem}
.pm{display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:2px solid #1a1a1a}
.pm2{display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid #ddd}
.pmi{padding:.55rem .75rem;border-right:1px solid #ddd;font-size:.73rem}
.pmi:last-child{border-right:none}
.pml{font-size:.55rem;text-transform:uppercase;letter-spacing:.7px;color:#888;margin-bottom:.2rem}
.pmv{font-weight:600;color:#1a1a1a;font-size:.78rem}
.ps{margin:.6rem .75rem;border:1px solid #ddd;border-radius:4px;overflow:hidden}
.psh{background:#f5f5f5;padding:.45rem .7rem;font-size:.65rem;font-weight:600;text-transform:uppercase;letter-spacing:.7px;color:#444;border-bottom:1px solid #ddd}
.psb{padding:.65rem .7rem;font-size:.78rem;line-height:1.7;color:#2a2a2a;white-space:pre-wrap}
.ptable{width:calc(100% - 1.5rem);margin:.6rem .75rem;border-collapse:collapse;font-size:.75rem}
.ptable th{background:#1a1a1a;color:#fff;padding:.45rem .55rem;text-align:left;font-size:.6rem;letter-spacing:.7px;text-transform:uppercase}
.ptable td{padding:.45rem .55rem;border-bottom:1px solid #eee;vertical-align:top;line-height:1.5}
.ptable tr:nth-child(even) td{background:#f9f9f9}
.local-box{margin:.6rem .75rem;border:1px solid #d4962a;border-radius:4px;overflow:hidden}
.local-box .psh{background:#fff8ee;color:#7a4f00;border-color:#d4962a}
.local-box .psb{color:#5a3a00}
.phil-badges{display:flex;flex-wrap:wrap;gap:.25rem;margin-top:.25rem}
.pbadge{font-size:.55rem;padding:.1rem .4rem;border-radius:3px;background:#1a1a1a;color:#d4962a;font-weight:600;letter-spacing:.4px;text-transform:uppercase}
.plan-actions-bar{display:flex;gap:.5rem;padding:.75rem;border-top:1px solid #ddd;background:#fff}
.pab{flex:1;padding:.6rem;border-radius:6px;border:none;font-size:.8rem;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif}

/* LOADING */
.loading-wrap{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem;gap:1rem;background:#fff}
.ldots{display:flex;gap:6px}
.ld{width:8px;height:8px;border-radius:50%;background:#d4962a;animation:pulse 1.2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.2)}}

@media(max-width:360px){.phil-card{width:135px}}
</style>
</head>
<body>
<div id="app">
  <div id="topbar">
    <div class="logo-row">
      <span class="logo">ऋषि</span>
      <div>
        <div class="brand-title">Narmada Education Companion</div>
        <div class="brand-sub">NCERT · MP Board · Mrida Philosophy</div>
      </div>
    </div>
  </div>

  <div id="main">

    <!-- BOARD -->
    <div class="section">
      <div class="section-label"><span class="num active">1</span> Board / बोर्ड</div>
      <div class="hscroll">
        <button class="chip board" onclick="selectBoard('MP Board')">MP Board</button>
        <button class="chip board" onclick="selectBoard('NCERT')">NCERT</button>
      </div>
    </div>

    <!-- CLASS -->
    <div class="section" id="sec-class">
      <div class="section-label"><span class="num" id="num-class">2</span> Class / कक्षा</div>
      <div class="hscroll" id="class-row">
        <span class="locked-msg">पहले Board चुनें</span>
      </div>
    </div>

    <!-- SUBJECT -->
    <div class="section" id="sec-subject">
      <div class="section-label"><span class="num" id="num-subject">3</span> Subject / विषय</div>
      <div class="hscroll" id="subject-row">
        <span class="locked-msg">पहले कक्षा चुनें</span>
      </div>
    </div>

    <!-- CHAPTER -->
    <div class="section" id="sec-chapter">
      <div class="section-label"><span class="num" id="num-chapter">4</span> Chapter / अध्याय</div>
      <div class="ch-list" id="chapter-list">
        <span class="locked-msg">पहले विषय चुनें</span>
      </div>
    </div>

    <!-- PHILOSOPHY -->
    <div class="section" id="sec-phil">
      <div class="section-label"><span class="num" id="num-phil">5</span> Teaching Approach / शिक्षण दृष्टिकोण <span style="font-size:.55rem;color:var(--muted)">(एक या अधिक)</span></div>
      <div class="phil-scroll" id="phil-row"></div>
    </div>

  </div>

  <div id="gen-bar">
    <div class="gen-summary" id="gen-summary"></div>
    <button class="gen-btn" id="genBtn" disabled onclick="generatePlan()">✦ पाठ योजना बनाएं</button>
  </div>
</div>

<!-- PLAN PAGE -->
<div id="plan-page">
  <div id="plan-topbar">
    <button class="plan-back" onclick="closePlan()">← वापस</button>
    <div class="plan-title">पाठ योजना</div>
    <button class="plan-copy" onclick="copyPlan()">📋 कॉपी</button>
  </div>
  <div id="plan-scroll">
    <div id="plan-content"></div>
  </div>
</div>

<script>
var PROXY = "https://rishi-proxy.vercel.app/api/proxy";
var state = {board:null, cls:null, subject:null, chapter:null, philosophies:[]};

var SUBJECTS = {
  "1":["हिंदी","गणित","EVS"],
  "2":["हिंदी","गणित","EVS"],
  "3":["हिंदी","गणित","EVS","अंग्रेज़ी"],
  "4":["हिंदी","गणित","EVS","अंग्रेज़ी"],
  "5":["हिंदी","गणित","EVS","अंग्रेज़ी"],
  "6":["हिंदी","गणित","विज्ञान","सामाजिक विज्ञान","अंग्रेज़ी","संस्कृत"],
  "7":["हिंदी","गणित","विज्ञान","सामाजिक विज्ञान","अंग्रेज़ी","संस्कृत"],
  "8":["हिंदी","गणित","विज्ञान","सामाजिक विज्ञान","अंग्रेज़ी","संस्कृत"],
  "9":["हिंदी","गणित","विज्ञान","सामाजिक विज्ञान","अंग्रेज़ी"],
  "10":["हिंदी","गणित","विज्ञान","सामाजिक विज्ञान","अंग्रेज़ी"]
};

var CHAPTERS = {
  "1-हिंदी":["पाठ 1: झूला","पाठ 2: आम की कहानी","पाठ 3: आम की टोकरी","पाठ 4: पत्ते ही पत्ते","पाठ 5: पकौड़ी","पाठ 6: छुक-छुक गाड़ी","पाठ 7: रसोईघर","पाठ 8: चूहो! म्याऊँ सो रही है","पाठ 9: बंदर और गिलहरी","पाठ 10: पगड़ी"],
  "1-गणित":["अध्याय 1: आकृतियाँ और स्थान","अध्याय 2: नंबर एक से नौ","अध्याय 3: जोड़","अध्याय 4: घटाव","अध्याय 5: दस और उससे आगे","अध्याय 6: बीस तक के नंबर","अध्याय 7: समय","अध्याय 8: बीस से ज़्यादा","अध्याय 9: माप-तौल","अध्याय 10: रुपए और पैसे"],
  "1-EVS":["पाठ 1: मेरा घर","पाठ 2: मेरी पाठशाला","पाठ 3: परिवार","पाठ 4: खाना","पाठ 5: पेड़-पौधे","पाठ 6: पानी","पाठ 7: हवा"],
  "2-हिंदी":["पाठ 1: ऊँट चला","पाठ 2: भालू ने खेली फुटबॉल","पाठ 3: म्याऊँ म्याऊँ","पाठ 4: अधूरा काम","पाठ 5: दोस्त की मदद","पाठ 6: बहुत हुआ","पाठ 7: मेरी किताब","पाठ 8: तितली और कली","पाठ 9: बुलबुल","पाठ 10: मेरी नानी"],
  "2-गणित":["अध्याय 1: जोड़ और घटाव","अध्याय 2: लंबाई","अध्याय 3: वज़न","अध्याय 4: सौ तक के नंबर","अध्याय 5: समय","अध्याय 6: पैसे","अध्याय 7: गुणा","अध्याय 8: आकृतियाँ","अध्याय 9: पैटर्न"],
  "2-EVS":["पाठ 1: फूल-पत्ते","पाठ 2: जानवर","पाठ 3: खेत-खलिहान","पाठ 4: पानी का सफर","पाठ 5: मौसम","पाठ 6: गाँव और शहर"],
  "3-हिंदी":["पाठ 1: कक्कू","पाठ 2: शेखीबाज़ मक्खी","पाठ 3: चाँद वाली अम्मा","पाठ 4: मन करता है","पाठ 5: बहादुर बित्तो","पाठ 6: हमसे सब कहते","पाठ 7: टिपटिपवा","पाठ 8: बंदर बाँट","पाठ 9: अकेला","पाठ 10: क्योंकि"],
  "3-गणित":["अध्याय 1: जहाँ-तहाँ संख्याएँ","अध्याय 2: मज़ेदार संख्याएँ","अध्याय 3: जोड़ना सीखो","अध्याय 4: घटाना सीखो","अध्याय 5: आकृतियाँ","अध्याय 6: गुणा","अध्याय 7: समय","अध्याय 8: तरह-तरह के खेत","अध्याय 9: पैसे"],
  "3-EVS":["पाठ 1: डाल-डाल पर","पाठ 2: पौधे की कहानी","पाठ 3: पानी रे पानी","पाठ 4: हमारा खाना","पाठ 5: खाना कहाँ से आता है","पाठ 6: जानवरों की दुनिया","पाठ 7: मेरा परिवार","पाठ 8: सुरक्षा-सावधानी"],
  "3-अंग्रेज़ी":["Unit 1: Good Morning","Unit 2: Magic Garden","Unit 3: Birds Talk","Unit 4: Our Classroom","Unit 5: Sea Song","Unit 6: Helping","Unit 7: Fun with Maths"],
  "4-हिंदी":["पाठ 1: मन के भोले-भाले बादल","पाठ 2: जैसा सवाल वैसा जवाब","पाठ 3: किरमिच की गेंद","पाठ 4: पापा जब बच्चे थे","पाठ 5: दोस्त की पोशाक","पाठ 6: नाव बनाओ नाव बनाओ","पाठ 7: दान का हिसाब","पाठ 8: कौन","पाठ 9: स्वतंत्रता की ओर","पाठ 10: थप्प रोटी थप्प दाल"],
  "4-गणित":["अध्याय 1: इमारतें और नक्शे","अध्याय 2: लंबा और छोटा","अध्याय 3: गुणा करने का तरीका","अध्याय 4: टिक-टिक-टिक","अध्याय 5: तरह-तरह के पैटर्न","अध्याय 6: बड़ी संख्याएँ","अध्याय 7: भाग","अध्याय 8: आधा और पूरा","अध्याय 9: गोल-गोल"],
  "4-EVS":["पाठ 1: बीज, बाजार की यात्रा","पाठ 2: कान-कान सुनो","पाठ 3: सब का सफर","पाठ 4: नाना-नानी","पाठ 5: अनोखा खेत","पाठ 6: पानी और जंगल","पाठ 7: मकड़े का जाल","पाठ 8: बदलते परिवार"],
  "4-अंग्रेज़ी":["Unit 1: Wake Up!","Unit 2: Noses","Unit 3: Run!","Unit 4: Why","Unit 5: Don't Be Afraid of the Dark","Unit 6: Hiawatha","Unit 7: A Watering Rhyme","Unit 8: Books"],
  "5-हिंदी":["पाठ 1: राख की रस्सी","पाठ 2: फसलों के त्योहार","पाठ 3: खिलौनेवाला","पाठ 4: नन्हा फनकार","पाठ 5: जहाँ चाह वहाँ राह","पाठ 6: चिट्ठी का सफर","पाठ 7: डाकिए की कहानी","पाठ 8: वे दिन भी क्या दिन थे","पाठ 9: एक माँ की बेबसी","पाठ 10: एक दिन की बादशाहत"],
  "5-गणित":["अध्याय 1: मछली उछली","अध्याय 2: आकृतियाँ और कोण","अध्याय 3: कितना-कितना लेंगे","अध्याय 4: हिस्से और पूरे","अध्याय 5: क्षेत्रफल और घेरा","अध्याय 6: क्या तुम बता सकते हो","अध्याय 7: नक्शा","अध्याय 8: दस हजार"],
  "5-EVS":["पाठ 1: कैसे पहचाना चींटी ने दोस्त","पाठ 2: कहानी सपेरों की","पाठ 3: चखो पता लगाओ","पाठ 4: खाएँ आम बारहों महीने","पाठ 5: बीज, बीज, बीज","पाठ 6: पानी के प्रयोग","पाठ 7: डायरी","पाठ 8: खेल-खेल में"],
  "5-अंग्रेज़ी":["Unit 1: Ice-cream Man","Unit 2: Wonderful Waste","Unit 3: Teamwork","Unit 4: Flying Together","Unit 5: My Elder Brother","Unit 6: Robinson Crusoe","Unit 7: The Lazy Frog","Unit 8: Nobody's Friend"],
  "6-हिंदी":["पाठ 1: वह चिड़िया जो","पाठ 2: बचपन","पाठ 3: नादान दोस्त","पाठ 4: चाँद से थोड़ी-सी गप्पें","पाठ 5: अक्षरों का महत्व","पाठ 6: पार नज़र के","पाठ 7: साथी हाथ बढ़ाना","पाठ 8: ऐसे-ऐसे","पाठ 9: टिकट-अलबम","पाठ 10: झाँसी की रानी"],
  "6-गणित":["अध्याय 1: संख्याओं की जानकारी","अध्याय 2: पूर्ण संख्याएँ","अध्याय 3: संख्याओं के साथ खेलना","अध्याय 4: ज्यामितीय अवधारणाएँ","अध्याय 5: प्रारंभिक आकार","अध्याय 6: पूर्णांक","अध्याय 7: भिन्न","अध्याय 8: दशमलव","अध्याय 9: आँकड़ों का प्रबंधन","अध्याय 10: क्षेत्रमिति","अध्याय 11: बीजगणित","अध्याय 12: अनुपात और समानुपात"],
  "6-विज्ञान":["पाठ 1: भोजन: यह कहाँ से आता है?","पाठ 2: भोजन के घटक","पाठ 3: तंतु से वस्त्र तक","पाठ 4: वस्तुओं के समूह बनाना","पाठ 5: पदार्थों का पृथक्करण","पाठ 6: हमारे चारों ओर के परिवर्तन","पाठ 7: पौधों को जानिए","पाठ 8: शरीर में गति","पाठ 9: सजीव और उनका परिवेश","पाठ 10: गति एवं दूरियों का मापन","पाठ 11: प्रकाश-छायाएँ","पाठ 12: विद्युत तथा परिपथ","पाठ 13: चुंबकों द्वारा मनोरंजन","पाठ 14: जल","पाठ 15: वायु","पाठ 16: कचरा-संग्रहण"],
  "6-सामाजिक विज्ञान":["पाठ 1: क्या, कब, कहाँ और कैसे?","पाठ 2: आरंभिक मानव की खोज","पाठ 3: भोजन: संग्रह से उत्पादन तक","पाठ 4: आरंभिक नगर","पाठ 5: क्या बताती हैं किताबें","पाठ 6: राज्य, राजा और गणराज्य","पाठ 7: नए प्रश्न नए विचार","पाठ 8: अशोक: एक अनोखा सम्राट","पाठ 9: खुशहाल गाँव और शहर","पाठ 10: व्यापारी, राजा और तीर्थयात्री","पाठ 11: नए साम्राज्य","पाठ 12: इमारतें, चित्र और किताबें"],
  "6-अंग्रेज़ी":["Unit 1: Who Did Patrick's Homework","Unit 2: How the Dog Found a Master","Unit 3: Taro's Reward","Unit 4: An Indian-American Woman in Space","Unit 5: A Different Kind of School","Unit 6: Who I Am","Unit 7: Fair Play","Unit 8: A Game of Chance","Unit 9: Desert Animals","Unit 10: The Banyan Tree"],
  "7-हिंदी":["पाठ 1: हम पंछी उन्मुक्त गगन के","पाठ 2: दादी माँ","पाठ 3: हिमालय की बेटियाँ","पाठ 4: कठपुतली","पाठ 5: मीठाईवाला","पाठ 6: रक्त और हमारा शरीर","पाठ 7: पापा खो गए","पाठ 8: शाम-एक किसान","पाठ 9: चिड़िया की बच्ची","पाठ 10: अपूर्व अनुभव"],
  "7-गणित":["अध्याय 1: पूर्णांक","अध्याय 2: भिन्न एवं दशमलव","अध्याय 3: आँकड़ों का प्रबंधन","अध्याय 4: सरल समीकरण","अध्याय 5: रेखाएँ और कोण","अध्याय 6: त्रिभुज और उसके गुण","अध्याय 7: त्रिभुजों की सर्वांगसमता","अध्याय 8: राशियों की तुलना","अध्याय 9: परिमेय संख्याएँ","अध्याय 10: व्यावहारिक ज्यामिति","अध्याय 11: परिमाप और क्षेत्रफल","अध्याय 12: बीजीय व्यंजक","अध्याय 13: घातांक और घात","अध्याय 14: सममिति","अध्याय 15: ठोस आकारों का चित्रण"],
  "7-विज्ञान":["पाठ 1: पादपों में पोषण","पाठ 2: प्राणियों में पोषण","पाठ 3: रेशों से वस्त्र तक","पाठ 4: ऊष्मा","पाठ 5: अम्ल, क्षारक और लवण","पाठ 6: भौतिक एवं रासायनिक परिवर्तन","पाठ 7: मौसम, जलवायु तथा अनुकूलन","पाठ 8: पवन, तूफान और चक्रवात","पाठ 9: मृदा","पाठ 10: जीवों में श्वसन","पाठ 11: जंतुओं और पादप में परिवहन","पाठ 12: पादप में जनन","पाठ 13: गति एवं समय","पाठ 14: विद्युत धारा और इसके प्रभाव","पाठ 15: प्रकाश","पाठ 16: जल: एक बहुमूल्य संसाधन","पाठ 17: वन: हमारी जीवन रेखा","पाठ 18: अपशिष्ट जल की कहानी"],
  "7-सामाजिक विज्ञान":["पाठ 1: हजार वर्षों के परिवर्तन","पाठ 2: नए राजा और राज्य","पाठ 3: दिल्ली के सुलतान","पाठ 4: मुगल साम्राज्य","पाठ 5: शासक और इमारतें","पाठ 6: नगर, व्यापारी और शिल्पीजन","पाठ 7: जनजातियाँ और खानाबदोश","पाठ 8: ईश्वर से अनुराग","पाठ 9: क्षेत्रीय संस्कृतियाँ","पाठ 10: अठारहवीं शताब्दी में राजनीतिक गठन"],
  "7-अंग्रेज़ी":["Unit 1: Three Questions","Unit 2: A Gift of Chappals","Unit 3: Gopal and the Hilsa Fish","Unit 4: The Ashes That Made Trees Bloom","Unit 5: Quality","Unit 6: Expert Detectives","Unit 7: The Invention of Vita-Wonk","Unit 8: Fire: Friend and Foe","Unit 9: A Bicycle in Good Repair","Unit 10: The Story of Cricket"],
  "8-हिंदी":["पाठ 1: ध्वनि","पाठ 2: लाख की चूड़ियाँ","पाठ 3: बस की यात्रा","पाठ 4: दीवानों की हस्ती","पाठ 5: चिट्ठियों की अनूठी दुनिया","पाठ 6: भगवान के डाकिए","पाठ 7: क्या निराश हुआ जाए","पाठ 8: यह सबसे कठिन समय नहीं","पाठ 9: कबीर की साखियाँ","पाठ 10: कामचोर"],
  "8-गणित":["अध्याय 1: परिमेय संख्याएँ","अध्याय 2: एक चर वाले रैखिक समीकरण","अध्याय 3: चतुर्भुजों को समझना","अध्याय 4: आँकड़ों का प्रबंधन","अध्याय 5: वर्गमूल और घनमूल","अध्याय 6: घन और घनमूल","अध्याय 7: राशियों की तुलना","अध्याय 8: बीजीय व्यंजक","अध्याय 9: क्षेत्रमिति","अध्याय 10: घातांक और घात","अध्याय 11: सीधा और प्रतिलोम समानुपात","अध्याय 12: गुणनखंडन","अध्याय 13: आलेखों से परिचय","अध्याय 14: संख्याओं के साथ खेलना"],
  "8-विज्ञान":["पाठ 1: फसल उत्पादन और प्रबंधन","पाठ 2: सूक्ष्मजीव","पाठ 3: संश्लेषित रेशे और प्लास्टिक","पाठ 4: धातु और अधातु","पाठ 5: कोयला और पेट्रोलियम","पाठ 6: दहन और ज्वाला","पाठ 7: पौधों की संरचना","पाठ 8: कोशिका","पाठ 9: जंतुओं में जनन","पाठ 10: किशोरावस्था की ओर","पाठ 11: बल तथा दाब","पाठ 12: घर्षण","पाठ 13: ध्वनि","पाठ 14: विद्युत धारा के रासायनिक प्रभाव","पाठ 15: प्राकृतिक परिघटनाएँ","पाठ 16: प्रकाश","पाठ 17: तारे एवं सौर परिवार","पाठ 18: वायु तथा जल का प्रदूषण"],
  "8-सामाजिक विज्ञान":["पाठ 1: कैसे, कब और कहाँ","पाठ 2: व्यापार से साम्राज्य तक","पाठ 3: ग्रामीण क्षेत्र पर शासन","पाठ 4: आदिवासी, दिकु और स्वर्ण युग","पाठ 5: जब जनता बगावत करती है","पाठ 6: बुनकर, लोहा बनाने वाले और फैक्ट्री मालिक","पाठ 7: देशी जनता को सभ्य बनाना","पाठ 8: महिलाएँ, जाति एवं सुधार","पाठ 9: राष्ट्रीय आंदोलन का संघटन","पाठ 10: स्वतंत्रता के बाद"],
  "9-हिंदी":["पाठ 1: दो बैलों की कथा","पाठ 2: ल्हासा की ओर","पाठ 3: उपभोक्तावाद की संस्कृति","पाठ 4: साँवले सपनों की याद","पाठ 5: नाना साहब की पुत्री","पाठ 6: प्रेमचंद के फटे जूते","पाठ 7: मेरे बचपन के दिन","पाठ 8: एक कुत्ता और एक मैना","कविता 1: इस जल प्रलय में","कविता 2: मेघ आए"],
  "9-गणित":["अध्याय 1: संख्या प्रणाली","अध्याय 2: बहुपद","अध्याय 3: निर्देशांक ज्यामिति","अध्याय 4: दो चर वाले रैखिक समीकरण","अध्याय 5: यूक्लिड की ज्यामिति","अध्याय 6: रेखाएँ और कोण","अध्याय 7: त्रिभुज","अध्याय 8: चतुर्भुज","अध्याय 9: समांतर चतुर्भुजों के क्षेत्रफल","अध्याय 10: वृत्त","अध्याय 11: रचनाएँ","अध्याय 12: हेरोन का सूत्र","अध्याय 13: पृष्ठीय क्षेत्रफल और आयतन","अध्याय 14: सांख्यिकी","अध्याय 15: प्रायिकता"],
  "9-विज्ञान":["पाठ 1: हमारे आस-पास के पदार्थ","पाठ 2: क्या पदार्थ शुद्ध हैं","पाठ 3: परमाणु एवं अणु","पाठ 4: परमाणु की संरचना","पाठ 5: जीवन की मौलिक इकाई","पाठ 6: ऊतक","पाठ 7: जीवों में विविधता","पाठ 8: गति","पाठ 9: बल तथा गति के नियम","पाठ 10: गुरुत्वाकर्षण","पाठ 11: कार्य तथा ऊर्जा","पाठ 12: ध्वनि","पाठ 13: हम बीमार क्यों होते हैं","पाठ 14: प्राकृतिक संपदा","पाठ 15: खाद्य संसाधनों में सुधार"],
  "9-सामाजिक विज्ञान":["पाठ 1: फ्रांसीसी क्रांति","पाठ 2: यूरोप में समाजवाद","पाठ 3: नात्सीवाद और हिटलर","पाठ 4: वन्य समाज एवं उपनिवेशवाद","पाठ 5: आधुनिक विश्व में चरवाहे","पाठ 6: किसान और काश्तकार","पाठ 7: भारत में मतदाता आंदोलन","पाठ 8: किसानों की आजीविका"],
  "9-अंग्रेज़ी":["Unit 1: The Fun They Had","Unit 2: The Sound of Music","Unit 3: The Little Girl","Unit 4: A Truly Beautiful Mind","Unit 5: The Snake and the Mirror","Unit 6: My Childhood","Unit 7: Packing","Unit 8: Reach for the Top","Unit 9: The Bond of Love","Unit 10: Kathmandu"],
  "10-हिंदी":["पाठ 1: सूरदास के पद","पाठ 2: राम-लक्ष्मण-परशुराम संवाद","पाठ 3: देव के सवैये","पाठ 4: आत्मकथ्य","पाठ 5: उत्साह / अट नहीं रही","पाठ 6: यह दंतुरित मुसकान","पाठ 7: संगतकार","गद्य 1: नेताजी का चश्मा","गद्य 2: बालगोबिन भगत","गद्य 3: लखनवी अंदाज़"],
  "10-गणित":["अध्याय 1: वास्तविक संख्याएँ","अध्याय 2: बहुपद","अध्याय 3: दो चरों वाले रैखिक समीकरण","अध्याय 4: द्विघात समीकरण","अध्याय 5: समांतर श्रेढ़ियाँ","अध्याय 6: त्रिभुज","अध्याय 7: निर्देशांक ज्यामिति","अध्याय 8: त्रिकोणमिति","अध्याय 9: त्रिकोणमिति के अनुप्रयोग","अध्याय 10: वृत्त","अध्याय 11: रचनाएँ","अध्याय 12: वृत्तों से संबंधित क्षेत्रफल","अध्याय 13: पृष्ठीय क्षेत्रफल और आयतन","अध्याय 14: सांख्यिकी","अध्याय 15: प्रायिकता"],
  "10-विज्ञान":["पाठ 1: रासायनिक अभिक्रियाएँ","पाठ 2: अम्ल, क्षारक एवं लवण","पाठ 3: धातु एवं अधातु","पाठ 4: कार्बन और उसके यौगिक","पाठ 5: तत्वों का आवर्त वर्गीकरण","पाठ 6: जैव प्रक्रम","पाठ 7: नियंत्रण एवं समन्वय","पाठ 8: जीव जनन कैसे करते हैं","पाठ 9: अनुवांशिकता एवं जैव विकास","पाठ 10: प्रकाश-परावर्तन एवं अपवर्तन","पाठ 11: मानव नेत्र","पाठ 12: विद्युत","पाठ 13: विद्युत धारा के चुंबकीय प्रभाव","पाठ 14: ऊर्जा के स्रोत","पाठ 15: हमारा पर्यावरण","पाठ 16: प्राकृतिक संसाधनों का प्रबंधन"],
  "10-सामाजिक विज्ञान":["पाठ 1: यूरोप में राष्ट्रवाद का उदय","पाठ 2: भारत में राष्ट्रवाद","पाठ 3: भूमंडलीकृत विश्व","पाठ 4: औद्योगिक क्रांति","पाठ 5: मुद्रण संस्कृति","पाठ 6: संसाधन एवं विकास","पाठ 7: वन एवं वन्य जीव","पाठ 8: जल संसाधन","पाठ 9: कृषि","पाठ 10: खनिज तथा ऊर्जा संसाधन","पाठ 11: विनिर्माण उद्योग","पाठ 12: राष्ट्रीय अर्थव्यवस्था की जीवन रेखाएँ"],
  "10-अंग्रेज़ी":["Unit 1: A Letter to God","Unit 2: Nelson Mandela","Unit 3: Two Stories about Flying","Unit 4: From the Diary of Anne Frank","Unit 5: Glimpses of India","Unit 6: Mijbil the Otter","Unit 7: Madam Rides the Bus","Unit 8: The Sermon at Benares","Unit 9: The Proposal","Unit 10: A Tiger in the Zoo"]
};

var PHILS = [
  {id:"totto",name:"Totto-Chan",tag:"गरिमा",desc:"हर बच्चा अनोखा है"},
  {id:"summerhill",name:"Summerhill",tag:"स्वतंत्रता",desc:"बच्चे को चुनने दें"},
  {id:"hstp",name:"Hoshangabad",tag:"जिज्ञासा",desc:"पहले प्रयोग, फिर किताब"},
  {id:"freire",name:"Paulo Freire",tag:"संवाद",desc:"शिक्षा संवाद है"},
  {id:"mrida",name:"Mrida",tag:"संदर्भ",desc:"नर्मदा घाटी से जोड़ें"},
  {id:"hybrid",name:"सभी / Hybrid",tag:"संतुलन",desc:"सभी दृष्टिकोण मिलाएं"}
];

// BUILD PHILOSOPHY ROW
var pr = document.getElementById('phil-row');
PHILS.forEach(function(p){
  var card = document.createElement('div');
  card.className = 'phil-card';
  card.id = 'phil-'+p.id;
  card.innerHTML = '<div class="phil-tag">'+p.tag+'</div><div class="phil-name">'+p.name+'</div><div class="phil-desc">'+p.desc+'</div>';
  card.onclick = function(){
    if(p.id==='hybrid'){
      state.philosophies = PHILS.filter(function(x){return x.id!=='hybrid'}).map(function(x){return x.id});
      document.querySelectorAll('.phil-card').forEach(function(c){c.classList.add('active')});
    } else {
      var idx = state.philosophies.indexOf(p.id);
      if(idx>-1){state.philosophies.splice(idx,1);card.classList.remove('active');}
      else{state.philosophies.push(p.id);card.classList.add('active');}
      document.getElementById('phil-hybrid') && document.getElementById('phil-hybrid').classList.remove('active');
    }
    updateGen();
  };
  pr.appendChild(card);
});

function selectBoard(b){
  state.board=b; state.cls=null; state.subject=null; state.chapter=null;
  document.querySelectorAll('.chip.board').forEach(function(c){c.classList.remove('active')});
  event.target.classList.add('active');
  buildClasses();
  updateGen();
}

function buildClasses(){
  var row = document.getElementById('class-row');
  row.innerHTML = '';
  document.getElementById('num-class').classList.add('active');
  for(var i=1;i<=10;i++){
    (function(cls){
      var b = document.createElement('button');
      b.className = 'chip';
      b.textContent = 'कक्षा '+cls;
      b.onclick = function(){
        state.cls=cls; state.subject=null; state.chapter=null;
        document.querySelectorAll('#class-row .chip').forEach(function(c){c.classList.remove('active')});
        b.classList.add('active');
        buildSubjects();
        updateGen();
      };
      row.appendChild(b);
    })(i);
  }
}

function buildSubjects(){
  var row = document.getElementById('subject-row');
  row.innerHTML = '';
  document.getElementById('num-subject').classList.add('active');
  var subs = SUBJECTS[String(state.cls)] || [];
  subs.forEach(function(s){
    var b = document.createElement('button');
    b.className = 'chip';
    b.textContent = s;
    b.onclick = function(){
      state.subject=s; state.chapter=null;
      document.querySelectorAll('#subject-row .chip').forEach(function(c){c.classList.remove('active')});
      b.classList.add('active');
      buildChapters();
      updateGen();
    };
    row.appendChild(b);
  });
}

function buildChapters(){
  var list = document.getElementById('chapter-list');
  list.innerHTML = '';
  document.getElementById('num-chapter').classList.add('active');
  var key = state.cls+'-'+state.subject;
  var chs = CHAPTERS[key] || [];
  if(!chs.length){
    list.innerHTML = '<span class="locked-msg">अध्याय जल्द उपलब्ध होंगे</span>';
    return;
  }
  chs.forEach(function(ch, i){
    var b = document.createElement('button');
    b.className = 'ch-item';
    b.innerHTML = ch+'<span class="ch-num">'+(i+1)+'</span>';
    b.onclick = function(){
      state.chapter=ch;
      document.querySelectorAll('.ch-item').forEach(function(c){c.classList.remove('active')});
      b.classList.add('active');
      updateGen();
      // Scroll to philosophy
      document.getElementById('sec-phil').scrollIntoView({behavior:'smooth', block:'start'});
    };
    list.appendChild(b);
  });
}

function updateGen(){
  var btn = document.getElementById('genBtn');
  var summary = document.getElementById('gen-summary');
  var ready = state.board && state.cls && state.subject && state.chapter;
  btn.disabled = !ready;
  if(ready){
    summary.textContent = state.board+' · कक्षा '+state.cls+' · '+state.subject+' · '+state.chapter.substring(0,30)+'...';
  } else {
    summary.textContent = '';
  }
}

function generatePlan(){
  document.getElementById('plan-page').classList.add('show');
  var pc = document.getElementById('plan-content');
  pc.innerHTML = '<div class="loading-wrap"><div class="ldots"><div class="ld" style="animation-delay:0s"></div><div class="ld" style="animation-delay:.2s"></div><div class="ld" style="animation-delay:.4s"></div></div><div style="font-size:.82rem;color:#888;margin-top:.5rem">ऋषि पाठ योजना बना रहा है...</div></div>';

  var philNames = state.philosophies.length ?
    state.philosophies.map(function(pid){var p=PHILS.find(function(x){return x.id===pid});return p?p.name:'';}).join(', ') :
    'Mrida, Hoshangabad Science';

  var prompt = 'Professional bilingual lesson plan banao. Respond ONLY in valid JSON, no extra text.\n\nकक्षा: '+state.cls+'\nBोर्ड: '+state.board+'\nविषय: '+state.subject+'\nअध्याय: '+state.chapter+'\nदृष्टिकोण: '+philNames+'\n\nNarmada Valley context MUST be included: Narmada river, Satpura forests, Gond/Baiga tribal community, local market (Hoshangabad/Harda), farming (paddy/wheat/maize), fishermen, teak forests, monsoon, watershed, INRM techniques.\n\nJSON format:\n{"objective_hi":"उद्देश्य 3 points numbered","objective_en":"Objectives 3 points numbered","materials":"local materials only","teaching_aids":"aids","intro":"2-3 sentences starting with local Narmada Valley story/observation","activities":[{"point":"teaching point","interaction":"teacher-student dialogue in Hindi","activity":"hands-on activity"}],"recapitulation":"recap activity","assessment":"assessment method","followup":"homework connecting to local life","local_example":"specific Narmada Valley example for this chapter topic"}';

  fetch(PROXY, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:2000,messages:[{role:'user',content:prompt}]})
  })
  .then(function(r){return r.json();})
  .then(function(data){
    if(data.content&&data.content[0]&&data.content[0].text){
      var text=data.content[0].text;
      // Strip all possible wrappers
      text=text.replace(/^[\s\S]*?(\{)/,'$1');
      text=text.replace(/\}[\s\S]*$/,function(m){return m.match(/\}/)?'}':m;});
      text=text.trim();
      // Find first { to last }
      var start=text.indexOf('{');
      var end=text.lastIndexOf('}');
      if(start>-1&&end>-1){text=text.substring(start,end+1);}
      try{
        var plan=JSON.parse(text);
        renderPlan(plan);
      }catch(e){
        // Try to extract JSON more aggressively
        try{
          var match=text.match(/\{[\s\S]*\}/);
          if(match){var plan=JSON.parse(match[0]);renderPlan(plan);}
          else{renderRaw(data.content[0].text);}
        }catch(e2){renderRaw(data.content[0].text);}
      }
    }else{pc.innerHTML='<div style="padding:2rem;color:#e07070;text-align:center">कुछ गड़बड़ हुई। वापस जाएं और दोबारा कोशिश करें।</div>';}
  })
  .catch(function(){pc.innerHTML='<div style="padding:2rem;color:#e07070;text-align:center">कुछ गड़बड़ हुई।</div>';});
}

function renderPlan(p){
  var philBadges = (state.philosophies.length ? state.philosophies : ['mrida','hstp']).map(function(pid){
    var ph=PHILS.find(function(x){return x.id===pid});
    return ph?'<span class="pbadge">'+ph.name+'</span>':'';
  }).join('');

  var rows = '';
  if(p.activities&&p.activities.length){
    p.activities.forEach(function(a){
      rows+='<tr><td><strong>'+a.point+'</strong></td><td>'+a.interaction+'</td><td>'+a.activity+'</td></tr>';
    });
  }

  document.getElementById('plan-content').innerHTML =
    '<div class="ph"><div class="ph-title">'+state.subject+' — पाठ योजना / Lesson Plan</div><div class="ph-sub">Narmada Education Companion · ऋषि</div></div>'
    +'<div class="pm"><div class="pmi"><div class="pml">Class / कक्षा</div><div class="pmv">'+state.cls+'</div></div><div class="pmi"><div class="pml">Board</div><div class="pmv">'+state.board+'</div></div><div class="pmi"><div class="pml">Date / दिनांक</div><div class="pmv">'+new Date().toLocaleDateString('hi-IN')+'</div></div></div>'
    +'<div class="pm2"><div class="pmi" style="grid-column:1/-1"><div class="pml">Chapter / अध्याय</div><div class="pmv">'+state.chapter+'</div></div></div>'
    +'<div class="pm2"><div class="pmi" style="grid-column:1/-1"><div class="pml">Approach / दृष्टिकोण</div><div class="phil-badges">'+philBadges+'</div></div></div>'
    +'<div class="ps"><div class="psh">Learning Objectives / सीखने के उद्देश्य</div><div class="psb">'+p.objective_hi+'\n\n'+p.objective_en+'</div></div>'
    +'<div class="pm2"><div class="pmi"><div class="pml">Teaching Aids</div><div class="pmv" style="font-weight:400;font-size:.72rem">'+p.teaching_aids+'</div></div><div class="pmi"><div class="pml">Materials / सामग्री</div><div class="pmv" style="font-weight:400;font-size:.72rem">'+p.materials+'</div></div></div>'
    +'<div class="ps"><div class="psh">Introduction / प्रारंभ</div><div class="psb">'+p.intro+'</div></div>'
    +'<table class="ptable"><tr><th>Teaching Point</th><th>Student-Teacher Interaction</th><th>Activity</th></tr>'+rows+'</table>'
    +'<div class="ps"><div class="psh">Recapitulation / पुनरावृत्ति</div><div class="psb">'+p.recapitulation+'</div></div>'
    +'<div class="pm2"><div class="pmi"><div class="pml">Assessment / मूल्यांकन</div><div class="pmv" style="font-weight:400;font-size:.72rem">'+p.assessment+'</div></div><div class="pmi"><div class="pml">Follow Up / गृहकार्य</div><div class="pmv" style="font-weight:400;font-size:.72rem">'+p.followup+'</div></div></div>'
    +'<div class="local-box"><div class="psh">🌊 नर्मदा घाटी — Local Context</div><div class="psb">'+p.local_example+'</div></div>'
    +'<div class="plan-actions-bar"><button class="pab" style="background:#1a1a1a;color:#fff" onclick="copyPlan()">📋 कॉपी करें</button><button class="pab" style="background:#d4962a;color:#1a0a00" onclick="closePlan()">✦ नई योजना</button></div>'
    +'<div id="improve-section" style="background:#f9f9f9;border-top:2px solid #1a1a1a;padding:.85rem">'
    +'<div style="font-size:.65rem;text-transform:uppercase;letter-spacing:1px;color:#888;margin-bottom:.5rem;font-weight:600">Improve / सुधार करें</div>'
    +'<div id="improve-chat" style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:.5rem;max-height:200px;overflow-y:auto"></div>'
    +'<div style="display:flex;gap:.5rem">'
    +'<textarea id="improve-input" rows="2" placeholder="जैसे: गतिविधि और सरल करें, गृहकार्य बदलें..." style="flex:1;border:1px solid #ddd;border-radius:8px;padding:.5rem .75rem;font-size:.8rem;font-family:Noto Sans Devanagari,sans-serif;resize:none;outline:none;color:#1a1a1a"></textarea>'
    +'<button onclick="improvePlan()" style="background:#1a1a1a;color:#fff;border:none;border-radius:8px;width:44px;font-size:1.2rem;cursor:pointer;flex-shrink:0">→</button>'
    +'</div></div>';
}

function renderRaw(text){
  document.getElementById('plan-content').innerHTML='<div style="padding:1rem;font-size:.82rem;line-height:1.7;color:#333">'+text+'</div><div class="plan-actions-bar"><button class="pab" style="background:#d4962a;color:#1a0a00" onclick="closePlan()">← वापस</button></div>';
}

var improveMessages = [];

function closePlan(){document.getElementById('plan-page').classList.remove('show');improveMessages=[];}

function improvePlan(){
  var input = document.getElementById('improve-input');
  var chat = document.getElementById('improve-chat');
  var text = input.value.trim();
  if(!text) return;
  input.value = '';

  // Add user message
  var um = document.createElement('div');
  um.style.cssText = 'align-self:flex-end;background:#1a1a1a;color:#fff;padding:.4rem .7rem;border-radius:10px 10px 2px 10px;font-size:.75rem;max-width:85%;font-family:Noto Sans Devanagari,sans-serif';
  um.textContent = text;
  chat.appendChild(um);
  chat.scrollTop = chat.scrollHeight;

  // Loading
  var lm = document.createElement('div');
  lm.style.cssText = 'align-self:flex-start;background:#eee;color:#888;padding:.4rem .7rem;border-radius:2px 10px 10px 10px;font-size:.75rem;font-style:italic';
  lm.textContent = 'सोच रहा हूँ...';
  lm.id = 'improve-loading';
  chat.appendChild(lm);
  chat.scrollTop = chat.scrollHeight;

  var currentPlan = document.getElementById('plan-content').innerText;
  improveMessages.push({role:'user', content:'Current lesson plan:\n'+currentPlan+'\n\nTeacher request: '+text+'\n\nPlease improve/modify the lesson plan based on this request. Keep the same professional format and Narmada Valley context. Respond in Hindi.'});

  fetch(PROXY, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:1000,messages:improveMessages})
  })
  .then(function(r){return r.json();})
  .then(function(data){
    var lel = document.getElementById('improve-loading');
    if(lel) lel.remove();
    if(data.content&&data.content[0]&&data.content[0].text){
      var reply = data.content[0].text;
      improveMessages.push({role:'assistant', content:reply});
      var rm = document.createElement('div');
      rm.style.cssText = 'align-self:flex-start;background:#fff8ee;border:1px solid #d4962a;color:#3a2000;padding:.5rem .75rem;border-radius:2px 10px 10px 10px;font-size:.75rem;max-width:90%;line-height:1.6;font-family:Noto Sans Devanagari,sans-serif;white-space:pre-wrap';
      rm.textContent = reply;
      chat.appendChild(rm);
      chat.scrollTop = chat.scrollHeight;
    }
  })
  .catch(function(){
    var lel = document.getElementById('improve-loading');
    if(lel) lel.textContent = 'गड़बड़ हुई।';
  });
}

document.addEventListener('keydown', function(e){
  if(e.target.id==='improve-input'&&e.key==='Enter'&&!e.shiftKey){e.preventDefault();improvePlan();}
});

function copyPlan(){
  var el=document.createElement('textarea');
  el.value=document.getElementById('plan-content').innerText;
  el.style.cssText='position:fixed;top:0;left:0;opacity:0';
  document.body.appendChild(el);el.focus();el.select();
  document.execCommand('copy');document.body.removeChild(el);
  var btn = event.target;
  btn.textContent='✓ कॉपी हो गया';
  setTimeout(function(){btn.textContent='📋 कॉपी करें';},2000);
}
</script>
</body>
</html>
