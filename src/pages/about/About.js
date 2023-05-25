import React from "react";
import styles from "./About.module.css"

function About() {
    return (
        <>
            <main>
                <div className={styles.content}>
                    <h1>About "What The Beer?"</h1><p>
                    Do you ever have friends over for dinner, only to have one of them turn their nose up at your wine
                    and demand a beer instead? Well, fear not, my friend! I'm here to help you select the perfect brew
                    to pair with your meal.

                </p>  <p> Now, you might have a few beers kicking around in your fridge, but let's face it, not all
                    beers are created equal. Some are light and refreshing, while others are dark and heavy. It's like
                    choosing a partner, really. You want to find the one that complements your meal and doesn't
                    overpower it. You don't want a beer that's going to steal the show and leave your food feeling
                    neglected and unloved.
                </p><p>
                    But how do you choose the right beer for your dish? It's easy! Just think about the flavors you're
                    working with. If you're serving a light salad, go for a crisp, citrusy IPA. If you're cooking up a
                    hearty beef stew, opt for a rich, malty porter. And if you're serving fish and chips, well, you
                    can't go wrong with a classic lager.</p>
                    <p>
                        So, next time you're hosting a dinner party, don't be afraid to spice things up with a little
                        beer knowledge. Your guests will thank you, and who knows, you might just discover a new
                        favorite brew along the way. Cheers to good food, good beer, and good company!
                    </p>
                </div>
            </main>
        </>
    );
}

export default About