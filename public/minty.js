
let key;

fetch('/api-key')
  .then((response) => response.json())
  .then((data) => {
     key = data.apiKey;
  })
  .catch((error) => console.error('Error:', error));

async function generateLessonPlan(inputs) {
  const prompt = `Create a hands-on lesson plan similar to the sample response format. It does not have to be exact and make it concise and short for faster loading time. Details:
  - Time: ${inputs.time}
  - Age group: ${inputs.ageGroup}
  - Environment: ${inputs.environment}
  - Confidence: ${inputs.confidence}
  

sample response for lesson plan:

<p><strong><span style="font-size:20pt;font-family:Poppins,sans-serif;">Flying Machines Spark: &nbsp;</span></strong></p>
<p><strong><span style="font-size:20pt;font-family:Poppins,sans-serif;">Comprehensive Educator&rsquo;s Guide</span></strong></p>
<p><br></p>
<p><br></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">One-Page Quick Start</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Build Your Confidence - Make a Flying Machine!</span></u></a></p>
<p><a href="#"><u><span style="font-size:11pt;font-family:Arial,sans-serif;">Facilitate With Confidence</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Classroom Planning</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Facilitation Tips</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">FAQ&rsquo;s</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Troubleshooting Tips</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Early Finisher / Post-Build Exploration</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Reflective / Exit Questions</span></u></a></p>
<p><a href="#"><u><span style="font-size:13.5pt;font-family:Poppins,sans-serif;">Vocabulary:</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Sample Lesson Plan - Flying Machines</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Aligned Standards and Classroom Connections:</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Next Generation Science Standards:</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">CASEL SEL Competencies:</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">ELA Connections:</span></u></a></p>
<p><a href="#"><u><span style="font-size:16.5pt;font-family:Poppins,sans-serif;">Math Connections:</span></u></a></p>
<p><br></p>
<p><br></p>
<h1 style="text-align: center;"><span style="font-size:20pt;font-family:Poppins,sans-serif;">One-Page Quick Start</span></h1>
<p><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;">What&rsquo;s the big idea?&nbsp;</span></strong></p>
<p><span style="font-size:13.5pt;font-family:Poppins,sans-serif;">Learners in grades K and up can design and build a wind-up flying machine using stored potential and released kinetic energy. &nbsp; This project takes a minimum of 10 minutes, if at an event activity station, 30 minutes in a single classroom session, or up to 60 minutes if you use our recommended extensions. &nbsp;Please refer to the full guide for details.</span></p>
<p><br></p>
<p><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;">What&rsquo;s in the kit?</span></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:13pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:13pt;font-family:Poppins,sans-serif;">Propeller</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:13pt;font-family:Poppins,sans-serif;">Two craft sticks</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:13pt;font-family:Poppins,sans-serif;">A latex-free rubber band</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:13pt;font-family:Poppins,sans-serif;">A card stock rectangle</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:13pt;font-family:Poppins,sans-serif;">Sticky strips</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:13pt;font-family:Poppins,sans-serif;">An instruction sheet</span><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;"><br></span></strong></p>
    </li>
</ul>
<p><br></p>
<p><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;">Are any extra materials needed?&nbsp;</span></strong></p>
<p><strong><span style="font-size:18pt;font-family:Poppins,sans-serif;">Yes!&nbsp;</span></strong><span style="font-size:13pt;font-family:Poppins,sans-serif;">Students will need access to&nbsp;</span><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;">scissors and markers</span></strong><span style="font-size:13pt;font-family:Poppins,sans-serif;">&nbsp;to design and create a fuselage for their flying machine. &nbsp;You may want to make additional scrap or construction paper available if they want to make an alternate &ldquo;wing&rdquo;.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Poppins,sans-serif;"><br></span></p>
<p><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;">How can I lead my students with confidence?</span></strong><strong><span style="font-size:13pt;font-family:Poppins,sans-serif;"><br></span></strong><span style="font-size:13pt;font-family:Poppins,sans-serif;">These slide decks prepare you to communicate the big ideas and pro tips for activating the materials.&nbsp;</span></p>
<p><br></p>
<p><strong><em><span style="font-size:16pt;font-family:Poppins,sans-serif;">Slides - English:</span></em></strong><a href="https://docs.google.com/presentation/d/1bivSVtEx3jR9vB8cXnLIiewoF4l_Euw3bLI127oXoWA/edit?usp=sharing"><strong><u><em><span style="font-size:16pt;font-family:Poppins,sans-serif;">Flying Machines</span></em></u></strong></a></p>
<p><strong><span style="font-size:16pt;font-family:Poppins,sans-serif;">Slides - Spanish:&nbsp;</span></strong><a href="https://docs.google.com/presentation/d/1aMlHLZOX3YcDVPcznAopFtQpMwGwUmO9jmRJQkYAo6c/edit?usp=sharing"><strong><u><span style="font-size:16pt;font-family:Poppins,sans-serif;">Flying Machines - ESP</span></u></strong></a><span style="font-size:16pt;font-family:Poppins,sans-serif;"><br><br></span></p>
<p><strong><em><span style="font-size:13pt;font-family:Poppins,sans-serif;">Flying Machines Kit - Learner No-Text Instructions:</span></em></strong><strong><span style="font-size:13pt;font-family:Poppins,sans-serif;"><br></span></strong><a href="https://drive.google.com/file/d/1fTXrIupYyFuKGJbUUqJoia3CSChaGJ8d/view?usp=sharing"><strong><u><span style="font-size:13pt;font-family:Poppins,sans-serif;">Flying Machines.pdf</span></u></strong></a><strong><span style="font-size:13pt;font-family:Poppins,sans-serif;">&nbsp;</span></strong><span style="font-size:13pt;font-family:Poppins,sans-serif;">This one-page visual guide summarizes the basic build.</span><span style="font-size:13pt;font-family:Poppins,sans-serif;"><br></span></p>
<p><br></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Build Your Confidence - Make a Flying Machine!</span></h1>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Educators are most confident and successful when they&nbsp;</span><strong><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">build an example before using it with learners</span></em></strong><strong><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">.</span></strong><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; You&rsquo;ll need about fifteen minutes to tackle this activity, and those will be minutes that you&rsquo;ll thank yourself for taking later. &nbsp;By investing in practice you&rsquo;ll learn how the project connects to your learning objectives, &nbsp;some challenges to anticipate, and develop your own pro tips to help learners know where to start based on what challenged you.&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Here&rsquo;s a text overview of the build process to help you get started. &nbsp;We encourage you to use the Flying Machines&nbsp;</span><a href="https://docs.google.com/presentation/d/1bivSVtEx3jR9vB8cXnLIiewoF4l_Euw3bLI127oXoWA/edit?usp=sharing"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">slide deck</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;as well to help with the build process.&nbsp;</span><strong><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br><br></span></strong></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">1.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Gather Materials:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Review the Spark components: 2 craft sticks, sticky foam strips, a paper clip, a propeller, a latex-free rubber band, and cardstock. You&rsquo;ll need to supply scissors and drawing materials.</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">2.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Start with Sticks:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Align the craft sticks at the center and secure them using two sticky foam strips. The foam wraps tightly around the overlap to form the main body (fuselage) of the flying machine.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">3.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Create the Engine Hook:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Bend the paper clip into an &ldquo;L&rdquo; shape. Attach it to one end of the fuselage using another foam strip. This will serve as the hook for the rubber band, acting as the engine of the flying machine.</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">4.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Attach Your Propeller:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">On the opposite end of the fuselage, attach the propeller securely. This step forms the flying machine&rsquo;s propulsion system.</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">5.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Add the Wing:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Using the cardstock, encourage learners to draw, cut, and attach a wing to the fuselage. Highlight that larger wings might add weight, affecting flight. Pro Tip: Test different wing shapes and sizes to explore aerodynamics. &nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">6.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Connect the Rubber Band:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Hook one end of the rubber band to the paper clip and the other to the small hook on the propeller. This can be challenging, so encourage patience. Pro Tip: Twist the propeller</span><strong><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span></strong><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">clockwise </span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">multiple times to tighten the rubber band, storing elastic potential energy. &nbsp;You may need to review the difference between clockwise and counterclockwise.&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">7.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Prepare for Launch:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Demonstrate the &ldquo;tick-tock technique&rdquo; to allow the propeller to generate&nbsp;</span><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">momentum and lift </span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">prior to launching your flying machine. It&rsquo;s a quick maneuver, and takes as long as it does to say &ldquo;tick-tock&rdquo;! With one hand on the propeller and the other holding near the paperclip, release the propeller (&ldquo;tick&rdquo;) to let it spin very briefly - then lightly launch the fuselage (&ldquo;tock&rdquo;). &nbsp;This takes practice, and many attempts will be required to get great results - and this is all about practicing technique. &nbsp;Lots of spins of the propeller will be used up practicing - but don&rsquo;t be discouraged! &nbsp;By practicing the tick-tock technique, learners will be more successful in allowing the propeller to spin up prior to flight, like a real flying machine!</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">8.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Test and Iterate:</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Have learners test their flying machines in a safe, open area. Encourage them to tweak wing shapes, sizes, and number of rubber band twists to observe different flight outcomes. &nbsp;Use our&nbsp;</span><a href="https://docs.google.com/document/u/0/d/10yhLicUuuxH9fSAwZoGPZ9gr6zqO4Or2FQ5DKcSmZBQ/edit"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Flying Machines Extension</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;document and its&nbsp;</span><a href="https://docs.google.com/document/d/15mse9UAr--BpgHjzxIilUaKPZyXGuj-RsWysCsAT1Cw/edit?usp=sharing"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">printable wing evolution worksheet</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;to support the testing and iteration.</span></p>
<p><br></p>
<p><br></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Facilitate With Confidence</span></h1>
<h2><span style="font-size:16pt;font-family:Poppins,sans-serif;">Classroom Planning</span></h2>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">This is a 30 minute activity, and can be extended with the use of our extension plan. Organize your workspaces with access to additional paper, tape, scissors and drawing materials if possible. Encourage experimentation by supplying extra cardstock for wing modifications. &nbsp;</span></p>
<h2><span style="font-size:16pt;font-family:Poppins,sans-serif;">Facilitation Tips</span></h2>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Reinforce the importance of letting learners take ownership of their designs, offering support without leading. Use open-ended questions to guide learners through troubleshooting, fostering a student-centered, inquiry-driven environment.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">- Promote student-led inquiry: ask learners how they might modify their wings for better flight or what changes to the rubber band tension could do.&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">- Teach SEL skills by emphasizing perseverance and teamwork, especially during the &ldquo;tick-tock&rdquo; testing phase.</span></p>
<p><br></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">FAQ&rsquo;s</span></h1>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">1.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">What if the machines just won&rsquo;t fly?</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Biggest culprit - not allowing the propeller to build momentum and lift prior to launching. &nbsp;Try adjusting the timing of the release using the &ldquo;tick-tock&rdquo; technique. &nbsp;Second biggest culprit - just not enough stored potential energy. &nbsp;Have learners turn the propeller until they can see many bumps in the rubber band.&nbsp;</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">2.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">It seems that this is for young learners. How can I adapt this project for older students?</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Incorporate the iterative design process using different wing and fuselage designs, as outlined in the&nbsp;</span><a href="https://docs.google.com/document/u/0/d/10yhLicUuuxH9fSAwZoGPZ9gr6zqO4Or2FQ5DKcSmZBQ/edit"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Flying Machines Extension</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;document and explore how each iteration impacts flight. &nbsp;Older learners are all for testing and repeating, instead of one and done!</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">3.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Is this project reusable/extendable?</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Yes! By using masking tape to attach different wing designs, learners can iterate on their designs without damaging the core fuselage, enabling a deeper exploration of the engineering design process. &nbsp;Each learner will keep their flying machine - so it&rsquo;s a perfect &ldquo;make-and-take&rdquo; activity for further playful engineering at home.&nbsp;</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">4.</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">How do I facilitate the engineering design process in this activity?</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Use the&nbsp;</span><a href="https://docs.google.com/document/u/0/d/15mse9UAr--BpgHjzxIilUaKPZyXGuj-RsWysCsAT1Cw/edit"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">wing evolution worksheet&nbsp;</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">to guide learners through an iterative process: draw a wing design, test it, analyze the results, and make improvements. This allows students to practice critical thinking and refine their flying machines using the EDP.</span></p>
<p><br></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Troubleshooting Tips</span></h1>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&bull;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">If the flying machine flies down instead of up or away, change the direction of rotation - it needs to turn clockwise to fly forward / up!</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&bull;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;Ensure the rubber band is wound tightly enough (at least 70 twists, but 100 is better!)</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&bull;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">For improved flight, experiment with the &ldquo;tick-tock&rdquo; technique to master propeller momentum before full release.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&bull;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Pro Tip: Remind students to focus on iterative testing and peer feedback.</span></p>
<p><br></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Early Finisher / Post-Build Exploration</span></h1>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Have learners experiment with new wing shapes, combining multiple designs to observe different flight patterns. Use prompts like, &ldquo;What happens if we make the wings larger?&rdquo; to spark curiosity. &nbsp;Encourage students to disassemble their flying machines and rebuild them using new designs, emphasizing the iterative nature of engineering.</span></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Reflective / Exit Questions</span></h1>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What&rsquo;s the difference between potential energy and kinetic energy? &nbsp;Give me examples.&rdquo;</span></p>
<p><br></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What challenges did you encounter, and how did you solve them?&rdquo;</span></p>
<p><br></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What changes would you make if you could, and why?&rdquo;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br><br></span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What pro tips would you offer to other learners so they&rsquo;re successful?&rdquo;</span></p>
<p><br></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;How does this project connect to something you&rsquo;ve experienced before?&rdquo;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;Are there ways your flying machine could be modified to fly longer / farther / faster?&rdquo;</span></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Vocabulary:&nbsp;</span><span style="font-size:20pt;font-family:Poppins,sans-serif;"><br><br></span></h1>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Propeller</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: A device with blades that spins to move the flying machine through the air.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: The propeller is powered by the twisted rubber band, which makes the flying machine fly.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Fuselage</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The main body of the flying machine.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: The fuselage holds all the components together and keeps the machine balanced during flight.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Elastic Potential Energy</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The energy stored when a material is stretched or twisted.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Twisting the rubber band stores elastic potential energy that is released when the propeller spins.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Kinetic Energy</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The energy of motion.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: When the rubber band is released, its stored elastic potential energy turns into kinetic energy, making the flying machine move.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Wing</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The flat surface attached to the fuselage that helps the flying machine lift off the ground</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Learners can design and modify the wings to change how the machine flies.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Iteration</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: Repeating a process to improve a design or solution.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Learners create multiple versions of their flying machine&rsquo;s wings, testing each one to see which design flies the best.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Aerodynamics</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The study of how air moves around objects.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: The shape and size of the wings affect the aerodynamics of the flying machine, determining how well it flies.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Energy Transfer</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The movement of energy from one object or system to another.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Twisting the rubber band transfers energy to the flying machine, which is then used to make the propeller spin and the machine fly.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Balance</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The even distribution of weight that allows the flying machine to fly smoothly.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Adjusting the size and placement of the wings helps balance the flying machine.</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></em></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Lift</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The force that pushes the flying machine upward, opposing gravity.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: The wings of the flying machine generate lift as air moves over and under them.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Tick-Tock Technique (Only for this project!)</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The method of releasing the propeller first (tick) before releasing the fuselage (tock) to ensure smooth flight.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Learners use the tick-tock technique to let the propeller gain momentum before launching the flying machine.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Engineering Design Process</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: A series of steps that engineers follow to come up with a solution to a problem.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: Learners follow the engineering design process to build, test, and improve their flying machines.</span></p>
<p><br></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Prototype</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: A first or early version of a project that can be improved upon.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: The initial flying machine built by learners is their prototype, which they can refine and improve through iteration.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp; &nbsp;&nbsp;</span></p>
<p><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Momentum</span></em></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Definition: The strength or force that keeps something moving.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Context: The propeller needs momentum (a spinning motion) before the flying machine is released for flight.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br><br></span></p>
<p><br></p>
<p><br></p>
<p><br></p>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Sample Lesson Plan - Flying Machines</span></h1>
<p><br></p>
<p><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Objective:</span></strong></p>
<p><span style="font-size:12pt;font-family:Poppins,sans-serif;">Build a flying machine to explore energy conversion, aerodynamic principles, and the iterative design process.</span><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br></span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Time Required:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;30 minutes without extension, up to one hour with extension.</span><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:12pt;font-family:Poppins,sans-serif;">Prep Required: Gather Sparks materials, access the</span><a href="https://docs.google.com/presentation/u/0/d/1bivSVtEx3jR9vB8cXnLIiewoF4l_Euw3bLI127oXoWA/edit"><u><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;slide deck.</span></u></a><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;</span></p>
<p><br></p>
<p><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Materials:</span></strong></p>
<p><span style="font-size:12pt;font-family:Poppins,sans-serif;">Spark kit, extra cardstock, scissors, drawing materials, masking tape or painter&rsquo;s tape.</span></p>
<p><br></p>
<p><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Activity Steps:</span></strong></p>
<p><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">1.</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Introduction:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;Begin with a discussion on energy transfer, introducing key vocabulary (propeller, fuselage).</span></p>
<p><br></p>
<p><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">2.</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Build:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;Follow the step-by-step guide to construct the flying machine.</span></p>
<p><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><span style="font-size:12pt;font-family:'Times New Roman',serif;"><br></span><span style="font-size:12pt;font-family:'Times New Roman',serif;">3.</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Test Flight:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;Have learners launch their flying machines using the &ldquo;tick-tock&rdquo; technique. Encourage them to observe and document the flight outcomes.</span></p>
<p><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><span style="font-size:12pt;font-family:'Times New Roman',serif;"><br></span><span style="font-size:12pt;font-family:'Times New Roman',serif;">4.</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Iterative Design Process:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;Introduce the &ldquo;Flying Machines Extension Doc&rdquo; suggestions. Replace sticky foam with masking tape to allow for wing modifications. Use the wing evolution worksheet to guide learners through drawing new wing designs, testing, and documenting the results for up to four iterations.</span></p>
<p><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><span style="font-size:12pt;font-family:'Times New Roman',serif;"><br></span><span style="font-size:12pt;font-family:'Times New Roman',serif;">5.</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Post-Activity Discussion:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;Facilitate a reflection session, asking learners how different wing shapes affected flight. Discuss energy conversion from elastic potential to kinetic energy.</span></p>
<p><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><span style="font-size:12pt;font-family:'Times New Roman',serif;"><br></span><span style="font-size:12pt;font-family:'Times New Roman',serif;">6.</span><span style="font-size:12pt;font-family:'Times New Roman',serif;">&nbsp;</span><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Competition:</span></strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;If time allows, organize a friendly competition based on distance or target accuracy, as suggested in the &ldquo;Flying Machines Extension Doc.&rdquo;</span></p>
<p><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br><br></span></strong></p>
<p><br></p>
<p><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Assessment:</span></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:12pt;font-family:Poppins,sans-serif;">
        <p><span style="font-size:12pt;font-family:Poppins,sans-serif;">Use a learner self-assessment in a reflective writing prompt, using the reflection &nbsp;/ exit questions:</span><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br><br></span></p>
    </li>
</ul>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What&rsquo;s the difference between potential energy and kinetic energy? &nbsp;Give me examples.&rdquo;</span></p>
<p><br></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What challenges did you encounter, and how did you solve them?&rdquo;</span></p>
<p><br></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What changes would you make if you could, and why?&rdquo;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br><br></span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;What pro tips would you offer to other learners so they&rsquo;re successful?&rdquo;</span></p>
<p><br></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;How does this project connect to something you&rsquo;ve experienced before?&rdquo;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;"><br></span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&ldquo;Are there ways your flying machine could be modified to fly longer / farther / faster?&rdquo;</span></p>
<p><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;"><br></span></strong><strong><span style="font-size:12pt;font-family:Poppins,sans-serif;">Extensions:</span></strong></p>
<p><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:12pt;font-family:Poppins,sans-serif;">For older students, explore more complex wing shapes and introduce additional constraints, such as weight limits. Use the iterative process outlined in the &ldquo;</span><a href="https://docs.google.com/document/u/0/d/10yhLicUuuxH9fSAwZoGPZ9gr6zqO4Or2FQ5DKcSmZBQ/edit"><u><span style="font-size:12pt;font-family:Poppins,sans-serif;">Flying Machines Extension Doc</span></u></a><span style="font-size:12pt;font-family:Poppins,sans-serif;">&rdquo; to deepen their engineering design experience. Use the</span><a href="https://docs.google.com/document/d/15mse9UAr--BpgHjzxIilUaKPZyXGuj-RsWysCsAT1Cw/edit?usp=sharing"><u><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;wing evolution worksheet</span></u></a><span style="font-size:12pt;font-family:Poppins,sans-serif;">&nbsp;to evaluate students&rsquo; understanding of the iterative design process and their ability to document observations and improvements.</span></p>
<p><br></p>
<h1><br></h1>
<h1><span style="font-size:20pt;font-family:Poppins,sans-serif;">Aligned Standards and Classroom Connections:&nbsp;</span></h1>
<h2><span style="font-size:16pt;font-family:Poppins,sans-serif;">Next Generation Science Standards:</span></h2>
<p><a href="#"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">PS3.B: Conservation of Energy and Energy Transfer</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;&ndash; Students explore how stored energy in a rubber band (elastic potential energy) converts into kinetic energy to propel their flying machine.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&bull;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Example: As students wind the rubber band and release the propeller, they witness the conversion of stored energy into motion, directly demonstrating how energy is conserved and transferred.</span></p>
<p><br></p>
<p><a href="#"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">ETS1.B: Developing Possible Solutions</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;&ndash; Students use iterative design by experimenting with various wing shapes and sizes, testing their flying machine&rsquo;s performance, and making adjustments to improve flight.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&bull;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;</span><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Example: Utilizing the wing evolution worksheet, learners draw different wing designs, analyze their flight, and iterate on their designs to achieve better results.</span></p>
<p><br></p>
<h2><span style="font-size:16pt;font-family:Poppins,sans-serif;">CASEL SEL Competencies:</span></h2>
<p><a href="#"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Self-Awareness &amp; Self-Management</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">: Learners experiment with wing designs, acknowledging successes and areas for improvement. Self-management skills are honed as they persevere through the iterative design process, adjusting their strategies as needed.</span></p>
<p><br></p>
<p><a href="#"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Social Awareness &amp; Relationship Skills</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">: This project encourages learners to collaborate, share ideas, and provide constructive feedback. Through this process, they learn to understand different perspectives and strengthen their relationship skills.</span></p>
<p><br></p>
<p><a href="#"><u><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Responsible Decision-Making</span></u></a><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">: By evaluating their designs&rsquo; performance, learners practice responsible decision-making, considering how changes in wing shape and size affect their flying machine&rsquo;s flight.</span></p>
<h2><span style="font-size:16pt;font-family:Poppins,sans-serif;">ELA Connections:</span></h2>
<p><a href="#"><u><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Vocabulary Development</span></em></u></a><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">:</span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;Introduce key terms like &ldquo;propeller&rdquo; and &ldquo;fuselage,&rdquo; helping students expand their vocabulary in a hands-on context.</span></p>
<p><br></p>
<p><a href="#"><u><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Active Listening and Speaking</span></em></u></a><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">:</span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;During group work, learners practice listening to peers&rsquo; ideas, providing feedback, and articulating their design decisions.</span></p>
<p><br></p>
<p><a href="#"><u><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Reflective Writing</span></em></u></a><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">:</span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;Encourage learners to document their observations, reflections, and improvements on the wing evolution worksheet, promoting critical thinking and communication skills.</span></p>
<h2><span style="font-size:16pt;font-family:Poppins,sans-serif;">Math Connections:</span></h2>
<p><a href="#"><u><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Measurement and Data (K.MD, 2.MD, 4.MD)</span></em></u></a><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">:</span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;Learners might measure wing dimensions and weight distribution, understanding how these factors impact flight performance.</span></p>
<p><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Example: Students use rulers to measure cardstock wings, adjusting their length and width to find the optimal balance for flight.</span></p>
<p><br></p>
<p><a href="#"><u><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">Geometry (3.G, 5.G)</span></em></u></a><em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">:</span></em><span style="font-size:11.5pt;font-family:Poppins,sans-serif;">&nbsp;Through the exploration of wing shapes (triangles, rectangles, organic shapes), learners apply geometric principles to optimize aerodynamics.</span></p>
<p><br></p>
<p><br></p>
<p><br></p>
  `;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ "role": "user", "content": prompt }]
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

async function generateAssessment(inputs) {
  const prompt = `Create an assessment for learners of age ${inputs.ageGroup} in a ${inputs.environment} environment.
  Follow the sample response format. make it short and concise for faster loading times.
  sample response for assessment:

<h1><span style="font-size:20pt;font-family:Arial,sans-serif;">Sample Assessment: Grade-Level Exit Tickets for Flying Machines Spark</span></h1>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Objective:</span></strong></h3>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">Develop reflective, grade-level-appropriate &quot;exit ticket&quot; questions for the&nbsp;</span><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Flying Machines Spark</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;activity. These questions will encourage learners to reflect on their experience, apply critical thinking, and connect their activity to STEM concepts such as forces, motion, and the engineering design process.</span></p>
<p><br></p>
<hr>
<p><br></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Audience:</span></strong></h3>
<p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Learners:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Kindergarten through Middle School</span></p>
<p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Educators:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Teachers and facilitators guiding learners through hands-on STEM activities</span></p>
<p><br></p>
<hr>
<p><br></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Context:</span></strong></h3>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">The Flying Machines Spark involves learners building simple flying devices and testing them. The exit tickets will serve as a quick assessment tool, prompting reflection on what learners observed and how they might improve their designs.</span></p>
<p><br></p>
<hr>
<p><br></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Guidelines for Exit Ticket Questions:</span></strong></h3>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Relevance:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Questions must connect directly to the activity (e.g., how their flying machine performed).</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Age-Appropriateness:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Use language and concepts suitable for each developmental stage.</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Reflective:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Encourage learners to think about what they learned, noticed, or can improve.</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Scaffolded Thinking:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Progress from simple observations (younger learners) to more complex analysis and application (older learners).</span></p>
    </li>
</ol>
<p><br></p>
<hr>
<p><br></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Prompts for AI Chatbot:</span></strong></h3>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">To generate these questions, use the following detailed prompt:</span></p>
<p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">AI Prompt:</span></strong></p>
<p><span style="font-size:11pt;font-family:Arial,sans-serif;">You are an expert educator and curriculum designer tasked with creating two reflective, grade-level-appropriate &quot;exit ticket&quot; questions for a hands-on STEM activity called&nbsp;</span><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Flying Machines Spark</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">. In this activity, learners build simple flying devices and test how they move through the air. The questions should help learners:</span></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Reflect on their experience.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Apply critical thinking to understand forces, motion, and design.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Consider improvements or applications for their flying machine.</span></p>
    </li>
</ul>
<p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Requirements:</span></strong></p>
<ul>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Create two questions for each grade level (Kindergarten through Middle School).</span></p>
    </li>
    <li style="list-style-type:disc;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Ensure the questions:</span></p>
        <ul>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Are age-appropriate and aligned with learners&apos; developmental abilities.</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Use simple, clear, and engaging language.</span></p>
            </li>
            <li style="list-style-type:circle;font-size:11pt;font-family:Arial,sans-serif;">
                <p><span style="font-size:11pt;font-family:Arial,sans-serif;">Scaffold thinking, becoming progressively more analytical with older learners.</span></p>
            </li>
        </ul>
    </li>
</ul>
<p><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Deliverable Format:</span></strong><span style="font-size:11pt;font-family:Arial,sans-serif;">&nbsp;Organize the questions by grade level, from Kindergarten to Middle School, and ensure clarity and structure.</span></p>
<p><br></p>
<hr>
<p><br></p>
<h3><strong><span style="font-size:13pt;font-family:Arial,sans-serif;">Example Outputs:</span></strong></h3>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Kindergarten:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What did you like most about flying your machine?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What is one thing you could try to make your machine fly better?</span></p>
    </li>
</ol>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">1st Grade:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What happened when you made your flying machine move through the air?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What is one way you could change your machine to make it fly differently?</span></p>
    </li>
</ol>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">2nd Grade:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What did you notice about how your flying machine moved through the air?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If you could make another flying machine, what would you do differently?</span></p>
    </li>
</ol>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">3rd Grade:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What did you learn about how your flying machine works?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">How could you change your machine to make it fly farther or faster?</span></p>
    </li>
</ol>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">4th Grade:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What forces (like push, pull, or air) did you notice affecting your flying machine?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">If you wanted your machine to fly farther, what would you change or add?</span></p>
    </li>
</ol>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">5th Grade:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">How did you use what you know about forces to design your flying machine?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What adjustments would you make to improve its performance?</span></p>
    </li>
</ol>
<h4><strong><span style="font-size:11pt;font-family:Arial,sans-serif;">Middle School:</span></strong></h4>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">How did the design of your flying machine impact the way it moved through the air?</span></p>
    </li>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Arial,sans-serif;">
        <p><span style="font-size:11pt;font-family:Arial,sans-serif;">What changes would you make to the design if you wanted it to fly with more stability or accuracy?</span></p>
    </li>
</ol>
<p><br></p>
<p><br></p>
  `;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ "role": "user", "content": prompt }]
      }),
  });

  const data = await response.json();
  return data.choices[0].message.content.trim();
}

function displayResults(inputs, lessonPlan, assessment) {
  document.getElementById("educatorResponses").innerHTML = `
    <ul>
      <li><strong>Time:</strong> ${inputs.time}</li>
      <li><strong>Age Group:</strong> ${inputs.ageGroup}</li>
      <li><strong>Environment:</strong> ${inputs.environment}</li>
      <li><strong>Confidence:</strong> ${inputs.confidence}</li>
      <li><strong>Assessment:</strong> ${inputs.assessment}</li>
    </ul>
  `;

  let lessonPlanHtml = formatResponse(lessonPlan);
  document.getElementById('lessonPlan').innerHTML = `<h3>Lesson Plan:</h3><p>${lessonPlanHtml}</p>`;
  document.getElementById('assessment').innerHTML = `<h3>Assessment:</h3><p>${assessment}</p>`;

}

function formatResponse(response) {
  return response
    .replace(/### (.*?)\n/g, "<h3>$1</h3>")
    .replace(/#### (.*?)\n/g, "<h4>$1</h4>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/---/g, "<hr>")
    .replace(/- (.*?)\n/g, "<li>$1</li>")
    .replace(/\n\n/g, "<br>")
    .replace(/1\. (.*?)\n/g, "<li>1. $1</li>")
    .replace(/2\. (.*?)\n/g, "<li>2. $1</li>");
}

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const form = document.getElementById("educatorForm");
  let currentQuestionIndex = 0;


  questions[currentQuestionIndex].classList.add("active");
  document.querySelectorAll(".next").forEach((button, index) => {
    button.addEventListener("click", () => {
      const input = questions[index].querySelector("textarea, select");
      if (input && !input.value) {
        alert("Please answer the question before proceeding.");
        return;
      }

      questions[index].classList.remove("active");
      currentQuestionIndex++;
      questions[currentQuestionIndex].classList.add("active");
    });
  });

  document.querySelectorAll(".back").forEach((button, index) => {
    button.addEventListener("click", () => {
      questions[index].classList.remove("active");
      currentQuestionIndex--;
      questions[currentQuestionIndex].classList.add("active");
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.getElementById('educatorForm').classList.add('hidden');
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('loader').classList.add('loaderContainer');


    const responses = {
      time: document.getElementById("time").value,
      ageGroup: document.getElementById("ageGroup").value,
      environment: document.getElementById("environment").value,
      confidence: document.getElementById("confidence").value,
      assessment: document.getElementById("assessment").value,
    };
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    updateProgressBar(20, progressBar, progressText);


    updateProgressBar(30, progressBar, progressText);
    const lessonPlan = await generateLessonPlan(responses);

    updateProgressBar(70, progressBar, progressText);
    const assessment = responses.assessment === 'Yes' ? await generateAssessment(responses) : 'No assessment needed.';
  
    updateProgressBar(100, progressBar, "Complete!");
    document.getElementById('formContainer').classList.remove('container');
    document.getElementById('formContainer1').classList.add('hidden');
    document.getElementById('formContainer').classList.add('hidden');
    document.getElementById('results').classList.remove('hidden');

    displayResults(responses, lessonPlan, assessment);
  });

  document.getElementById('startButton').addEventListener('click', () => {
    document.getElementById('start').classList.add('hidden');
    document.getElementById('educatorForm').classList.remove('hidden');
  });
});

function updateProgressBar(percent, progressBar, text ) {
  progressBar.value = percent;
  text.innerHTML = `${percent} %`;
}

