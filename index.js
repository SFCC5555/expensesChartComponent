let chartContainer = document.querySelector(".chartContainer");

let hoy = new Date();

fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    count=0

    for (i of data) {
        count++
        chart=document.createElement("div");
        chart.setAttribute("class","chart");
        chartContainer.appendChild(chart);

        value=document.createElement("div");
        value.setAttribute("class","inactiveValue");
        value.setAttribute("id",count);
        value.innerText="$"+i.amount;
        chart.appendChild(value);

        bar=document.createElement("div");
        if (count==hoy.getDay()) {
            bar.setAttribute("class","barCurrentDay");
        }

        else {
            bar.setAttribute("class","bar");
        }
        bar.setAttribute("style",`height:${i.amount*3}px;`)
        bar.setAttribute("id",count)
        chart.appendChild(bar);

        day=document.createElement("div");
        day.setAttribute("class","day");
        day.innerText=i.day;
        chart.appendChild(day);

        bar.addEventListener("mouseover", showValue);
        bar.addEventListener("mouseout", showValue);

    }

    valueList=document.querySelectorAll(".inactiveValue");

    function showValue(evento) {
        
        for (v of valueList) {
            if (evento.target.id==v.id) {
                v.classList.toggle("value");
            }
        }
    }
  })


