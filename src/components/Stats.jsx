import React from "react";
import "../styles/Stats.css";


const Stats = () => {


const stats = [
{
number:"10K+",
title:"Articles Checked"
},

{
number:"98%",
title:"Accuracy Rate"
},

{
number:"50+",
title:"Trusted Sources"
},

{
number:"24/7",
title:"AI Monitoring"
}

];


return (

<section className="stats">


<div className="stats_heading">

<h2>
Trusted By Numbers
</h2>

<p>
Powering a safer and more reliable information ecosystem.
</p>

</div>



<div className="stats_grid">


{
stats.map((item,index)=>(

<div className="stat_card" key={index}>


<h3>
{item.number}
</h3>


<p>
{item.title}
</p>


</div>


))
}


</div>


</section>


)

}


export default Stats;