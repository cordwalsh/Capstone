import React from 'react';
import { Link } from 'react-router-dom';
import down_arrow from './../assets/down_arrow.png';
import pooh_header from './../assets/pooh_header.jpg';
import woods from './../assets/woods.png';
import pooh_sitting from './../assets/pooh_sitting.png';
import cloud1 from './../assets/cloud1.png';
import cloud2 from './../assets/cloud2.png';
import cloud3 from './../assets/cloud3.png';
import Rellax from 'rellax';
import Parallax from 'react-rellax'
import cartoon_tree from './../assets/cartoon_tree.png';
import pooh_windy from './../assets/pooh-windy.png';
import flying_birds from './../assets/flying_birds.png';
import woods2 from './../assets/woods2.png';
import honey from './../assets/honey.png';
import honey2 from './../assets/honey2.png';
import honey3 from './../assets/honey3.png';
import dark_cloud2 from './../assets/dark_cloud2.png';
import rain from './../assets/rain.png';
import piglet_sweeping from './../assets/piglet_sweeping.png';
import hill from './../assets/hill.png';
import piglet_tree from './../assets/piglet_tree.png';
import pooh_piglet from './../assets/pooh_piglet.png';
import rain2 from './../assets/rain2.png';
import puddle from './../assets/puddle.png';
import log4 from './../assets/log4.png';
import log5 from './../assets/log5.png';
import candle from './../assets/candle.png';
import pooh_calling from './../assets/pooh_calling.gif';
import hello from './../assets/hello.png';
import pooh_yawning from './../assets/pooh_yawning.gif';
import moon from './../assets/moon.png';
import flood from './../assets/flood.jpg';
import pooh_floating from './../assets/pooh_floating.gif';
import log3 from './../assets/log3.png';
import piglet_scared from './../assets/piglet_scared.gif';
import bottle from './../assets/bottle.png';
import flood_water from './../assets/flood_water.png';
import sun from './../assets/sun.png';
import owl from './../assets/owl.png';
import piglet_note from './../assets/piglet_note.png';
import christopher_robin from './../assets/christopher_robin.gif';
import tree from './../assets/tree.png';
import pooh_piglet_rowing from './../assets/pooh_piglet_rowing.png';
import log from './../assets/log.png';
import log2 from './../assets/log2.png';
import island from './../assets/island.png';
import cloud4 from './../assets/cloud4.png';
import water_cover from './../assets/water_cover.png';
import pooh_group from './../assets/pooh_group.png';
import balloons from './../assets/balloons.png';
import piglet_house from './../assets/piglet_house.png';
import pooh_gang from './../assets/pooh_gang.gif';
import pooh_piglet_hugging from './../assets/pooh_piglet_hugging.gif';
import pooh_piglet4 from './../assets/pooh_piglet4.gif';


function Pooh() {
  return (
    <div className="story_pooh">
      <section>
        <div className="story_title">
          <h1>Winnie the Pooh</h1>
        </div>
        <div className="pooh_header_picture">
          <img src= {pooh_header} />
        </div>
        <div className="down_arrow">
          <p>SCROLL</p>
          <img src= {down_arrow} />
        </div>
        <div className="pooh_heading_background"></div>
      </section>

      <section>
        <h2>Winnie the Pooh lived with his friends in the Hundred-Acre-Wood. </h2>
        <img src= {woods} class="woods rellax" />
        <Parallax speed={3}>
          <img src= {cloud1} class ="cloud1 rellax" data-rellax-speed="7" />
        </Parallax>
        <Parallax speed={8}>
          <img src= {cloud2} class ="cloud2 rellax" data-rellax-speed="5" />
        </Parallax>
      </section>

      <section>
        <Parallax speed={3}>
          <img src= {cartoon_tree} class="cartoon_tree" />
        </Parallax>
        <h2 class="pooh-section-2"> One fine day, when Winnie the Pooh woke up, he realized the day was extremely windy.</h2>
        <Parallax speed={2}>
          <img src= {pooh_windy} class="pooh_windy" />
        </Parallax>
        <h2 class="pooh-section-3"> "I should visit my thinking spot," decided the fluffy bear. And out of his bed, Winnie flew, quickly gathering his things and marching off to his thinking spot.</h2>
      </section>

      <section>
        <Parallax speed={3}>
          <img src= {cloud3} class="cloud3" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {cloud2} class="cloud_section_3" />
        </Parallax>
        <Parallax speed={4}>
          <img src= {flying_birds} class="flying_birds" />
        </Parallax>
        <div class="section_3_background"></div>
        <h2 class="pooh-section-4"> "What a blustery day today is," he chuckled happily.</h2>
      </section>

      <section>
        <Parallax speed={3}>
          <img src= {woods2} class="woods2" />
        </Parallax>
        <h2 class="pooh-section-5">As soon as Winnie reached his spot, he quickly sat down, closed his eyes, and tried to think of something. </h2>
        <Parallax speed={1}>
          <img src= {pooh_sitting} class="pooh_sitting" />
        </Parallax>
      </section>

      <section>
        <h1 class="think">Think...</h1>
        <h1 class="think2">Think...</h1>
        <h1 class="think3">Think...</h1>
        <Parallax speed={3}>
          <img src= {honey} class="honey" />
        </Parallax>
        <Parallax speed={3}>
          <img src= {honey2} class="honey2" />
        </Parallax>
        <Parallax speed={8}>
          <img src= {honey3} class="honey3" />
        </Parallax>
        <div className="section-6-background"></div>
        <h2 class="pooh-section-6">As little pooh was busy thinking, Gopher the beaver, suddenly popped out of the ground. "If I were you, I'd quickly go back home. It's Windsday you know?"</h2>
      </section>

      <section>
        <Parallax speed={8}>
          <img src= {cloud2} class="cloud_section_7" />
        </Parallax>
        <Parallax speed={3}>
          <img src= {cloud3} class="cloud2_section_7" />
        </Parallax>
        <Parallax speed={2}>
          <img src= {cloud1} class="cloud3_section_7" />
        </Parallax>
      </section>

      <section>
        <h2 class="section_8">"Windsday?" Pooh asked. At first he was surprised, but then he finally had a brilliant thought.</h2>
        <h2 class="section_9">"I will go wish everyone a happy Windsday!"</h2>
        <Parallax speed={8}>
          <img src= {dark_cloud2} class="dark_cloud" />
        </Parallax>
        <Parallax speed={2}>
          <img src= {rain} class="rain" />
        </Parallax>
      </section>

      <section>
        <Parallax speed={3}>
          <img src= {cloud1} class ="cloud_section_10" data-rellax-speed="7" />
        </Parallax>
        <h2 class="section_10">Pooh found Piglet sweeping away the fallen leaves on this blistery day.</h2>
        <Parallax speed={3}>
          <img src= {piglet_sweeping} class ="piglet_sweeping" />
        </Parallax>
        <img src= {hill} class ="hill" />
        <Parallax speed={1}>
          <img src= {piglet_tree} class ="piglet_tree" />
        </Parallax>
        <h2 class="section_11">"Happy Windsday Piglet!" Pooh announced. Just then another strong gust of wind blew. This time it took Piglet along. "This...isn't happy for me!" poor little Piglet cried.</h2>
        <div className="section_11_background"></div>
        <Parallax speed={8}>
          <img src= {dark_cloud2} class="dark_cloud2" />
        </Parallax>
      </section>

      <section>
        <Parallax speed={5}>
          <img src= {pooh_piglet} class ="pooh_piglet" />
        </Parallax>
        <Parallax speed={2}>
          <img src= {rain2} class ="rain2" />
        </Parallax>
      </section>

      <section>
        <div className="section_12_background"></div>
        <h2 class="section_12">Then, the wind grew even stronger. And with the strongest of them all, Pooh and Piglet were thrown right at owls window.</h2>
        <h2 class="section_13">The wind continued getting stronger. And finally, the owl's house was brought down.</h2>
        <Parallax speed={5}>
          <img src= {cloud3} class ="section_12_cloud" />
        </Parallax>
        <img src= {puddle} class ="puddle" />
      </section>

      <section>
        <Parallax speed={1}>
          <img src= {log4} class ="section_12_log" />
        </Parallax>
        <Parallax speed={8}>
          <img src= {log4} class ="section_12_log2" />
        </Parallax>
        <Parallax speed={5}>
          <img src= {log5} class ="section_12_log3" />
        </Parallax>
      </section>

      <section>
        <h2 class="section_14"> Finally, the night came and it was a blustery night. Poor Pooh could not fall asleep. As much as he tried, sleep would not come. Strange noises made Pooh feel uncomfortable.</h2>
        <h2 class="section_15">Finally, Pooh got up to investigate. He opened the door with trembling hands and asked "Who's out there?" Pooh hoped whole heartedly that no one replies.</h2>
        <div className="section_15_background"></div>
        <Parallax speed={3}>
          <img src= {pooh_yawning} class ="pooh_yawning" />
        </Parallax>
        <Parallax speed={4}>
          <img src= {pooh_calling} class ="pooh_calling" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {hello} class ="hello" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {moon} class ="moon" />
        </Parallax>
        <Parallax speed={10}>
          <img src= {cloud2} class="cloud_section_15" />
        </Parallax>
      </section>

      <section>
        <div class="section_17_background"></div>
        <h2 class="section_17">The blustery night turned into a very rainy night.</h2>
        <h2 class="section_18">By the time the morning came, the Hundred-Acre-Wood was flooded!</h2>
        <h2 class="section_19">Pooh was worried all his honey would go to waste so he decided to eat them. But as soon as he turned the last pot upside down, the water took Pooh and his honeypot away.</h2>
        <img src= {flood} class="flood" />
        <Parallax speed={4}>
          <img src= {rain2} class ="rain2_section19" />
        </Parallax>
        <Parallax speed={10}>
          <img src= {cloud2} class="cloud_section_17" />
        </Parallax>
        <Parallax speed={6}>
          <img src= {cloud3} class="cloud_section_18" />
        </Parallax>
        <Parallax speed={5}>
          <img src= {cloud1} class="cloud_section_19" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {pooh_floating} class ="pooh_floating" />
        </Parallax>
      </section>

      <section>
        <div class="section_20_background"></div>
        <h2 class="section_20">Piglet was struggling at his house too. The water was flowing in through the window. Poor Piglet wrote a note for help and put it in a bottle.</h2>
        <h2 class="section_21">Then, he threw the bottle in the water. "Someone will surely come to rescue me," he hoped.</h2>
        <Parallax speed={7}>
          <img src= {sun} class ="sun" />
        </Parallax>
        <Parallax speed={10}>
          <img src= {cloud2} class ="section_20_cloud" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {flood_water} class ="flood_water" />
        </Parallax>
        <Parallax speed={7}>
          <img src= {bottle} class ="bottle" />
        </Parallax>
        <Parallax speed={6}>
          <img src= {cloud3} class="section_20_cloud2" />
        </Parallax>
        <Parallax speed={3}>
          <img src= {owl} class="owl" />
        </Parallax>
      </section>

      <section>
        <div class="section_22_background"></div>
        <h2 class="section_22">Everyone from the Hundred-Acre-Wood had gathered around Christopher Robin.</h2>
        <h2 class="section_23">Christopher Robin lived on a high hill, where the water could not reach. Soon, he found Piglet's note and sent Owl to find him. </h2>
        <Parallax speed={2}>
          <img src= {island} class="island" />
        </Parallax>
        <Parallax speed={2}>
          <img src= {cloud1} class ="section_22_cloud3" />
        </Parallax>
        <Parallax speed={6}>
          <img src= {cloud2} class ="section_22_cloud" />
        </Parallax>
        <Parallax speed={4}>
          <img src= {cloud4} class ="section_22_cloud2" />
        </Parallax>
        <Parallax speed={3}>
          <img src= {piglet_note} class="piglet_note" />
        </Parallax>
      </section>

      <section>
        <div class="section_24_background"></div>
        <h2 class="section_24">"Pooh, Piglet! Christopher Robin is planning a rescue for you two!"</h2>
        <h2 class="section_25">Pooh and Piglet finally floated to Christopher Robin's hill.</h2>
        <h2 class="section_26">"Oh Pooh! you rescued Piglet! I must throw you a hero party!"</h2>
        <Parallax speed={3}>
          <img src= {pooh_piglet_rowing} class="pooh_piglet_rowing" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {water_cover} class="water_cover" />
        </Parallax>
        <Parallax speed={5}>
          <img src= {pooh_group} class="pooh_group" />
        </Parallax>
        <Parallax speed={8}>
          <img src= {balloons} class="balloons" />
        </Parallax>
      </section>

      <section>
        <div class="section_27_background"></div>
        <h2 class="section_27">As soon as the party began, Eeyore arrived. "I have found a new house for Owl," he announced.</h2>
        <h2 class="section_29">Everyone followed Eeryore, and to their surprise, Eeyore stopped infront of Piglet's house.</h2>
        <Parallax speed={1}>
          <img src= {piglet_house} class="piglet_house" />
        </Parallax>
        <Parallax speed={6}>
          <img src= {cloud3} class="section_27_cloud" />
        </Parallax>
        <Parallax speed={1}>
          <img src= {pooh_gang} class="pooh_gang" />
        </Parallax>
        <Parallax speed={4}>
          <img src= {cloud4} class ="section_27_cloud2" />
        </Parallax>
      </section>

      <section>
        <h2 class="section_30">Before Pooh could say anything, Piglet gave up his house to Owl.</h2>
        <h2 class="section_31">"Then Piglet, you shall stay with me!" Pooh said happily.</h2>
        <Parallax speed={1}>
          <img src= {pooh_piglet_hugging} class ="pooh_piglet_hugging" />
        </Parallax>
      </section>

      <section>
        <h2 class="section_32">And so, the hero party was thrown not for one hero, but for two heroes!</h2>
        <h2 class="section_33">Pooh rescued little Piglet, who in the end saved Owl by giving him his home!</h2>
        <h2 class="section_34">The End.</h2>
        <div class="section_32_background"></div>
        <img src= {woods} class="woods_ending" />
        <Parallax speed={3}>
          <img src= {cloud1} class ="cloud1_end" />
        </Parallax>
        <Parallax speed={8}>
          <img src= {cloud2} class ="cloud2_end" />
        </Parallax>
        <img src= {pooh_piglet4} class="pooh_piglet4" />
      </section>



      <script src="https://cdnjs.cloudlflare.com/ajax/libs/rellax/1.7.1/rellax.min.js"></script>
      <script>
        const rellax = new Rellax('.rellax');
      </script>
    </div>
  )
}

export default Pooh;
