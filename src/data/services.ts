export interface ServiceData {
    slug: string;
    title: string;
    challenge: string;
    solution: string;
    processSteps: string[];
    metric?: {
        value: string;
        label: string;
    };
    testimonial?: {
        quote: string;
        author: string;
    };
}

export const services: ServiceData[] = [
    {
        slug: 'ivf',
        title: 'In Vitro Fertilization (IVF)',
        challenge: "Conceiving naturally isn't always possible, and the journey can feel overwhelming. Blocked tubes, endometriosis, or unexplained infertility shouldn't be the end of your dream.",
        solution: "IVF is our most advanced fertility treatment, offering the highest success rates by fertilizing eggs outside the body. We use personalized protocols tailored to your unique hormonal profile to maximize your chances of a healthy pregnancy.",
        processSteps: [
            "Ovarian Stimulation: Hormone injections to produce multiple eggs.",
            "Egg Retrieval: A minor procedure to collect mature eggs.",
            "Fertilization: Eggs are fertilized with sperm in our advanced lab.",
            "Embryo Culture: Monitoring embryo development for 3-5 days.",
            "Embryo Transfer: Placing the best embryo into the uterus."
        ],
        metric: {
            value: "950+ Babies",
            label: "Born via IVF"
        },
        testimonial: {
            quote: "We had lost hope after 3 years. Dr. Sharma's personalized IVF protocol gave us our twin boys.",
            author: "Priya & Rahul"
        }
    },
    {
        slug: 'iui',
        title: 'Intrauterine Insemination (IUI)',
        challenge: "Sometimes, sperm just needs a little help reaching the egg. Mild male factor infertility or hostile cervical mucus can create invisible barriers to conception.",
        solution: "IUI is a less invasive first-line treatment where prepared sperm is placed directly into the uterus around the time of ovulation, bypassing the cervix to increase the number of sperm reaching the egg.",
        processSteps: [
            "Ovulation Monitoring: Tracking your cycle via ultrasound.",
            "Sperm Preparation: Washing and concentrating the healthiest sperm.",
            "Insemination: Painless placement of sperm into the uterus.",
            "Luteal Support: Hormonal support to aid implantation."
        ],
        metric: {
            value: "15 Years",
            label: "of IUI Expertise"
        },
        testimonial: {
            quote: "It was so much simpler than we thought. IUI worked for us on the second try!",
            author: "Anjali R."
        }
    },
    {
        slug: 'frozen-embryo-transfer',
        title: 'Frozen Embryo Transfer (FET)',
        challenge: "Having extra embryos from a previous cycle is a blessing, but the wait to use them can be filled with anxiety about timing and readiness.",
        solution: "FET allows us to transfer embryos from a previous IVF cycle into a perfectly prepped uterus. This often yields higher success rates as the body has recovered from stimulation medication.",
        processSteps: [
            "Uterine Preparation: Estrogen and progesterone to thicken the lining.",
            "Monitoring: Ensuring the endometrium is receptive.",
            "Thawing: Carefully warming the vitrified embryo.",
            "Transfer: Placing the embryo into the uterus."
        ]
    },
    {
        slug: 'icsi',
        title: 'Intracytoplasmic Sperm Injection (ICSI)',
        challenge: "Severe male factor infertility can make standard IVF ineffective. When sperm count or motility is very low, natural fertilization in the lab might fail.",
        solution: "ICSI is a specialized form of IVF where a single healthy sperm is injected directly into an egg. This bypasses almost all barriers to fertilization related to sperm quality.",
        processSteps: [
            "Sperm Selection: Identifying the single best sperm.",
            "Immobilization: Preparing the sperm for injection.",
            "Injection: Delicate insertion of sperm into the egg.",
            "Incubation: Watching for signs of fertilization."
        ]
    },
    {
        slug: 'egg-freezing',
        title: 'Egg Freezing',
        challenge: "Biological clocks are real, but so are career goals and life circumstances. The pressure to conceive before you're ready can be immense.",
        solution: "Egg freezing empowers you to preserve your fertility. We use vitrification technology to flash-freeze your eggs, keeping them as young as you are today for future use.",
        processSteps: [
            "Ovarian Stimulation: Medication to mature multiple eggs.",
            "Monitoring: Regular scans to time the retrieval.",
            "Retrieval: Collecting the eggs under sedation.",
            "Vitrification: Rapid freezing for long-term storage."
        ]
    },
    {
        slug: 'sperm-freezing',
        title: 'Sperm Freezing',
        challenge: "Medical treatments like chemotherapy or upcoming surgeries can threaten male fertility. Preserving your future fatherhood shouldn't be a gamble.",
        solution: "Sperm banking is a simple, effective way to preserve fertility. Samples are analyzed, processed, and frozen in liquid nitrogen for use whenever you are ready.",
        processSteps: [
            "Screening: Infectious disease testing.",
            "Collection: Providing a semen sample.",
            "Analysis: Checking count and motility.",
            "Freezing: Cryopreservation in liquid nitrogen."
        ]
    },
    {
        slug: 'embryo-freezing',
        title: 'Embryo Freezing',
        challenge: "After a successful IVF cycle, you may have high-quality embryos remaining. Discarding them is often not an option for families who want more children later.",
        solution: "Cryopreserving embryos gives you the option to grow your family in the future without undergoing full ovarian stimulation again. It's a safety net for your fertility.",
        processSteps: [
            "Selection: Choosing high-quality blastocysts.",
            "Vitrification: Flash-freezing technique.",
            "Storage: Secure maintenance in cryobanks.",
            "Thawing: Warming when ready for transfer."
        ]
    },
    {
        slug: 'pesa',
        title: 'PESA (Percutaneous Epididymal Sperm Aspiration)',
        challenge: "A diagnosis of azoospermia (zero sperm in ejaculate) due to blockage can be devastating. It feels like the door to biological fatherhood is closed.",
        solution: "PESA is a minimally invasive procedure to retrieve sperm directly from the epididymis. It requires no incision and is often performed under local anesthesia.",
        processSteps: [
            "Preparation: Local anesthesia is applied.",
            "Aspiration: A fine needle extracts fluid from the epididymis.",
            "Analysis: Immediate check for sperm presence.",
            "ICSI: Retrieved sperm is used for IVF-ICSI."
        ]
    },
    {
        slug: 'tesa',
        title: 'TESA (Testicular Sperm Aspiration)',
        challenge: "When sperm isn't found in the epididymis or production is very low, standard retrieval methods aren't enough.",
        solution: "TESA involves retrieving sperm directly from the testicular tissue. It is a gentle procedure used for non-obstructive azoospermia or failed PESA.",
        processSteps: [
            "Anesthesia: Local anesthesia for comfort.",
            "Aspiration: Fine needle retrieval from testes.",
            "Processing: Tissue is processed to find sperm.",
            "ICSI: Viable sperm are used for fertilization."
        ]
    },
    {
        slug: 'ovulation-induction',
        title: 'Ovulation Induction',
        challenge: "Irregular periods or anovulation (not releasing an egg) is a common cause of infertility. It's frustrating when you can't even try to conceive.",
        solution: "We use oral or injectable medications to stimulate your ovaries to release mature eggs, timed perfectly with intercourse or IUI.",
        processSteps: [
            "Baseline Scan: Checking ovarian status.",
            "Medication: Clomiphene or Letrozole to stimulate follicles.",
            "Monitoring: Ultrasounds to track follicle growth.",
            "Trigger: Injection to induce ovulation."
        ]
    },
    {
        slug: 'semen-analysis',
        title: 'Semen Analysis',
        challenge: "Male factor contributes to 40-50% of infertility cases, yet it's often the last thing checked. Uncertainty about sperm health causes unnecessary delay.",
        solution: "A comprehensive semen analysis is the first step in male fertility evaluation. We check count, motility, and morphology to give you a clear picture.",
        processSteps: [
            "Collection: Sample provided in a private room.",
            "Macroscopic Exam: Volume and pH check.",
            "Microscopic Exam: Count and movement analysis.",
            "Report: Detailed discussion with a specialist."
        ]
    },
    {
        slug: 'pgt',
        title: 'Preimplantation Genetic Testing (PGT)',
        challenge: "Recurrent miscarriages or known genetic disorders in the family create fear about the health of a future baby.",
        solution: "PGT allows us to screen embryos for genetic abnormalities before transfer. This significantly reduces miscarriage rates and ensures a healthy start.",
        processSteps: [
            "Biopsy: Few cells taken from the blastocyst.",
            "Freezing: Embryos are frozen while awaiting results.",
            "Analysis: Genetic screening of the cells.",
            "Transfer: Selecting a genetically normal embryo."
        ]
    },
    {
        slug: 'antenatal-care',
        title: 'Antenatal Care',
        challenge: "Pregnancy after infertility is precious and can be anxiety-inducing. You need more than just standard care; you need reassurance.",
        solution: "Our high-risk pregnancy care ensures both mother and baby are monitored closely. We provide nutritional guidance, scans, and medical support throughout.",
        processSteps: [
            "Early Scans: Confirming viability and heartbeat.",
            "Regular Checkups: Monitoring BP and growth.",
            "Screening: Tests for fetal anomalies.",
            "Delivery Planning: Preparing for a safe birth."
        ]
    },
    {
        slug: 'hysteroscopy',
        title: 'Hysteroscopy',
        challenge: "Uterine abnormalities like polyps, fibroids, or septum can prevent implantation, causing repeated IVF failures or miscarriages.",
        solution: "Hysteroscopy is a gold-standard diagnostic and operative procedure to visualize and correct uterine issues, improving your chances of conception.",
        processSteps: [
            "Visualization: Thin camera inserted via cervix.",
            "Diagnosis: Identifying any abnormalities.",
            "Correction: Removing polyps or adhesions if found.",
            "Recovery: Quick recovery with minimal discomfort."
        ]
    }
];
