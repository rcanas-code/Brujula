import json
from bank_ate import ATE
from bank_edu import EDU
from bank_hab import HAB
from fix1 import FIX
from fix2 import FIX2
FIX.update(FIX2)
FB={"HAB-B-b3":{3:"La motivación sube y baja por su cuenta; lo que sí controlas es lo fácil que es empezar."}}
R={"ATE":ATE,"EDU":EDU,"HAB":HAB}
used=set()
for k,r in R.items():
  for lst in [c["q"] for c in r["concepts"]]+[r["integ"]]:
    for q in lst:
      if q[0] in FIX:
        used.add(q[0])
        for j,t in enumerate(FIX[q[0]]):
          fb=q[3+j].split("§")[1]
          if q[0] in FB and j in FB[q[0]]: fb=FB[q[0]][j]
          q[3+j]=t+"§"+fb
missing=set(FIX)-used
assert not missing, missing
json.dump(R,open("dbank.json","w"),ensure_ascii=False)
print("ok",len(used))
