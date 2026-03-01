export interface BlogPost {
  id: string;
  label: string;
  title: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-and-mechanical-engineering",
    label: "AI and Mechanical Engineering",
    title: "AI and Mechanical Engineering",
    date: "2026-03-01",
    content: `I recently read the [2028 Global Intelligence crisis](https://www.citriniresearch.com/p/2028gic) memo - a scenario play out of the AI flywheel's effect on the economy and high skill white collar jobs.  I would highly recommend reading (about a 30min read).  Broad strokes are massive impacts to the white collar workforce that reverberates into blue collar work as wages are forced down, subsequent mortgage market collapse, etc.

It got me thinking a lot about how the Mechanical Engineering industry might be affected, and what sort of skill moats exist for us.  What parts of our jobs could be taken by AI?  Is there a uniqueness to mechanical engineering that would be hard to replace?

It is a broad field but for reference I am a consumer product designer in a design heavy role, most of my thoughts are within that vertical of ME.  I am also by no means an expert in how LLMs or AGI works, but I'm not a dummy either.

Some thoughts on why I think certain parts of Mechanical Engineering could be uniquely robust to the economic reset described in the memo:

**Training Data**

For software, there is so much high quality open source code easily accessible to any model wanting to train on it.  I believe this, at least early on, was a major catalyst for AI’s rapid success in coding.  Same goes for written text.

Interestingly, this does not exist for mechanical designs.  

Public repositories of 3D designs are available (GrabCAD, Thingiverse, Printables) however these designs are generally low quality.  High quality designs do exist in these repos, but not at the scale required to train a model, and are not easily found in the noise of low quality data.  For reference, a modern coding agents are fed 20+ **Billion** lines of open-source or publicly accessible code to reach their capabilities.

High quality mechanical design data (3D CAD and 2D drawings) are not available to the public for training as they are generally closely guarded intellectual property.  Some cloud CAD softwares like OnShape may be in a position to train an agent on their customers data, but this would be a dubious proposition to paying customers.  Even if a CAD software company wanted to do this it would be challenging as most PDM libraries are deployed on a companies local servers.

It is hard to imagine any AI company creating or getting access to enough high quality CAD to sufficiently train a model on good parametric design.

**Time to AI Prompt >> Time to Design**

Sometimes when I'm designing a part, I think about the way I might prompt an AI to model it for me.  To be frank, I can't think of a time that I felt it would be easier to describe the part I am looking for (using either text or voice), in the level of fidelity required to actually get the part I want compared to just modeling it myself.  I think this is unique to the parametric modeling style required from most MEs.  That said, I could see AI being very good at non-parametric modeling.  

The root of this seems more to do with our ability to transfer information about what it is we want rather than a deficiency in the AI itself.  The mouse and keyboard are high-bandwidth conduits for spatial design; text is a low-bandwidth filter that loses nuance.  Perhaps future computer brain interfaces solve this problem.

It is also possible that I am underestimating the ability of an AI to complete entire assemblies with defined functionality, but I will touch more in this in the “One Problem, Many Solutions (and Tradeoffs) section.

**The Messiness of Manufacturing**

*This section pulls very directly from my experience manufacturing consumer products overseas at mid-scale (10,000 - 1MM units per year).  I can’t say this is universally applicable.*

In software, the only thing that separates you from the built code and a working product is the deploy button.  The entirety of the work required to ship a software product is designing the code to run it.  

In physical product design, the actual design work only represents, **generously**, ~25% of what is required to bring something to market.  The mechanical “deploy” button is weeks of testing, iteration, and dealing with a messy supply chain of contractors, sub contractors, sub-sub contractors; shipping parts back and forth across the world until you finally find a result everyone can *tolerate*.

People outside the industry may imagine high tech, automated factories, but the reality is much more boring.  Barring large scale Tier 1 operations like Foxconn or Jabil, the majority of manufacturing is very low tech and un-sexy.  Think 20 year old injection mold presses, computers running Windows XP, and musty store rooms**.**  This type of manufacturing is where the vast majority of our products come from.

Any experienced engineer can also tell you about the constant back and forth with these manufacturers.  Daily exchanges of slide decks pointing out issues, requesting changes, negotiating quality standards, and the occasional complete disregard of the 2D drawing by a supplier.  With many of these suppliers unable or unwilling to collaborate on cloud tools (file sharing, task tracking) that have been available for 10+ years, it is hard to imagine a sweeping adoption of AI based product development that would displace an engineer.

At the end of the day, trust and accountability are physical commodities, just like the products we make. When a T1 sample comes back out of spec, an AI can't "walk the floor" or look a factory owner in the eye to figure out if they’re lying about their QC process.

**One Problem, Many Solutions (and Tradeoffs)**

When designing a new part, assembly, or product, and engineer has a massive list of considerations to weigh at every part of the design stage.  While I’m sure this exists in software engineering, I don’t think it exists to the same degree.  Every feature you design is a negotiation of a massive list of inputs such as:

- **Manufacturability:** Does this fit within the capabilities of the manufacturing process I’ve chosen?
- **Assemble-ability:** Can these parts actually be assembled into their final state?  Is there enough access for assembly tools?
- **Cost:** How much more will one approach cost than the other?
- **Design risk management:** If this doesn’t work, what steel safe change could I make on T2?
- **User experience:** Will that detent make a nice *click* sound?  How will the light catch that parting line? These are sensory inputs that are impossible to quantify in a prompt.
- **Regulatory compliance:** Not just "will it work," but "will it pass UL, CE, or FCC testing? Choosing a material that isn't PFAS-compliant or a wall thickness that fails a drop test can scrap a months work.

Some of these items are highly optimizable by an AI.  Geometry based load optimization is an incredible technology, however it cannot manage the plurality of these optimizations that are often conflicting.  Will it ever have the holistic logic required to work around something like: *'Make this lighter, but keep the mold cost under $20k and ensure a technician in gloves can still reach the fasteners.'*"

Because these variables are constantly in tension, there is rarely a single "correct" way to design a product.  For a complex mechanical problem, the array of possible solutions is far ranging, and two engineers given the same task may end up with wildly different, but equally valid results.  This lack of canonical solutions (that are often present in software engineering) is unique in mechanical engineering and in my mind poses a difficult optimization and training problem for AI as we know it now.

**Indirect AI effects**

Unfortunately all of my points above only present a case for why my job won’t be directly displaced by AI.  At the end of the day, I make products for people with discretionary cash.  If I lose my job, it probably won’t be because an AI tool displaced me, but rather, the AI tool displaced the person that used to buy what I made.`,
  },
];
