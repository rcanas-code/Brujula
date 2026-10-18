import re,json,collections
import json
R0=json.load(open("dbank.json"))
ATE,EDU,HAB=R0["ATE"],R0["EDU"],R0["HAB"]
#
#
#
R={"ATE":ATE,"EDU":EDU,"HAB":HAB}
tot=0;longest=0;issues=[];ids=set();stems=set()
ABS=re.compile(r'\b(siempre|nunca|nada|todo|todos|todas|ningún|ninguna|jamás)\b',re.I)
for k,r in R.items():
  allq=[]
  for c in r["concepts"]:
    nb=sum(1 for q in c["q"] if "-b" in q[0]); no=sum(1 for q in c["q"] if "-o" in q[0])
    nt=sum(1 for q in c["q"] if "-o" in q[0] and q[1] in "th")
    print(k,c["id"],"b",nb,"o",no,"o-transf",nt, "hard" if c.get("hard") else "")
    allq+=c["q"]
  allq+=r["integ"]
  for q in allq:
    tot+=1
    assert q[0] not in ids, q[0]; ids.add(q[0])
    assert q[2] not in stems; stems.add(q[2])
    assert len(q)==7, q[0]
    opts=[o.split("§") for o in q[3:]]
    for o in opts: assert len(o)==2 and o[0].strip() and o[1].strip(), q[0]
    L=[len(o[0]) for o in opts]
    if L[0]==max(L) and L[0]>1.15*sorted(L)[-2]: longest+=1; issues.append((q[0],"correcta claramente más larga",L))
    if max(L)>2.2*min(L): issues.append((q[0],"longitudes muy dispares",L))
    for o in opts[1:]:
      if ABS.search(o[0]): issues.append((q[0],"absoluto en distractor",o[0][:60]))
print("total",tot,"correcta claramente más larga",longest)
for i in issues: print(i)
