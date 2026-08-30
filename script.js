document.addEventListener("DOMContentLoaded", () => {

    /* =================================
       CAKE POPUP
    ================================= */

    const cake = document.getElementById("cake");

    const modal = document.getElementById("cakeModal");

    const closeModal =
        document.getElementById("closeModal");


    if (cake && modal) {

        cake.addEventListener("click", () => {

            modal.classList.add("open");

            modal.setAttribute(
                "aria-hidden",
                "false"
            );

            createConfetti();
        });


        if (closeModal) {

            closeModal.addEventListener(
                "click",
                () => {

                    modal.classList.remove(
                        "open"
                    );

                    modal.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                }
            );

        }


        modal.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === modal
                ) {

                    modal.classList.remove(
                        "open"
                    );

                }

            }
        );

    }



    /* =================================
       CONFETTI
    ================================= */

    function createConfetti() {

        const symbols = [
            "✦",
            "♡",
            "✧",
            "•"
        ];


        for (
            let i = 0;
            i < 35;
            i++
        ) {

            const particle =
                document.createElement("span");


            particle.innerText =
                symbols[
                    Math.floor(
                        Math.random()
                        * symbols.length
                    )
                ];


            particle.style.position =
                "fixed";

            particle.style.left =
                "50%";

            particle.style.top =
                "45%";

            particle.style.zIndex =
                "200";

            particle.style.pointerEvents =
                "none";

            particle.style.fontSize =
                (10 +
                Math.random() * 18)
                + "px";

            particle.style.color =
                "#ffd0c9";


            const x =
                (Math.random() * 2 - 1)
                * 420;

            const y =
                (Math.random() * 2 - 1)
                * 330;


            particle.animate(

                [
                    {
                        transform:
                            "translate(-50%,-50%) scale(.3)",

                        opacity: 1
                    },

                    {
                        transform:
                            `translate(
                                calc(-50% + ${x}px),
                                calc(-50% + ${y}px)
                            )
                            scale(1.2)`,

                        opacity: 0
                    }
                ],

                {
                    duration:
                        1000 +
                        Math.random() * 900,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)"
                }

            );


            document.body.appendChild(
                particle
            );


            setTimeout(
                () => particle.remove(),
                2100
            );

        }

    }



    /* =================================
       MEMORIES
    ================================= */

    const memoryImage =
        document.getElementById(
            "memoryImage"
        );

    const memoryCaption =
        document.getElementById(
            "memoryCaption"
        );

    const memoryCard =
        document.getElementById(
            "memoryCard"
        );

    const nextMemory =
        document.getElementById(
            "nextMemory"
        );

    const previousMemory =
        document.getElementById(
            "previousMemory"
        );

    const progress =
        document.getElementById(
            "progress"
        );


    if (
        memoryImage &&
        memoryCaption &&
        memoryCard
    ) {

        const memories = [

            {
                image:
                    "assets/memory1.jpg",

                caption:
                    "A beautiful moment to remember ♡"
            },

            {
                image:
                    "assets/memory2.jpg",

                caption:
                    "One of those little moments that became special ✨"
            },

            {
                image:
                    "assets/memory3.jpg",

                caption:
                    "A memory worth keeping forever 💕"
            },

            {
                image:
                    "assets/memory4.jpg",

                caption:
                    "Another beautiful memory..."
            },

            {
                image:
                    "assets/memory5.jpg",

                caption:
                    "And many more memories to come ♡"
            }

        ];


        let current =
            0;


        function showMemory(index) {

            current =
                (index +
                memories.length)
                % memories.length;


            const memory =
                memories[current];


            memoryCard.classList.remove(
                "show"
            );


            setTimeout(() => {

                memoryImage.src =
                    memory.image;


                memoryImage.alt =
                    memory.caption;


                memoryCaption.innerText =
                    memory.caption;


                progress.innerText =
                    `Memory ${current + 1}
                     of ${memories.length}`;


                memoryImage.style.display =
                    "block";


                memoryImage.onerror =
                    () => {

                        memoryImage.style.display =
                            "none";

                        memoryCaption.innerText =
                            `Add your photo as
                             ${memory.image}`;

                    };


                memoryCard.classList.add(
                    "show"
                );

            }, 250);

        }


        if (nextMemory) {

            nextMemory.addEventListener(
                "click",
                () => {

                    showMemory(
                        current + 1
                    );

                }
            );

        }


        if (previousMemory) {

            previousMemory.addEventListener(
                "click",
                () => {

                    showMemory(
                        current - 1
                    );

                }
            );

        }


        showMemory(0);

    }



    /* =================================
       ENVELOPE
    ================================= */

    const envelope =
        document.getElementById(
            "envelope"
        );


    if (envelope) {

        envelope.addEventListener(
            "click",
            () => {

                envelope.classList.toggle(
                    "open"
                );

            }
        );

    }

});