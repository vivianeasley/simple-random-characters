const traits = ["Kind","Rude","Humble","Arrogant","Gentle","Cruel","Polite","Blunt","Outgoing","Reserved","Cheerful","Brooding","Sensitive","Callous","Easygoing","Aggressive","Energetic","Quiet","Patient","Rash","Open-Minded", "Prejudice", "Creative", "Cunning", "Decisive", "Indecisive", "Wise", "Naive", "Sincere", "Sarcastic", "Orderly", "Messy", "Hardworking", "Lazy", "Mature", "Immature", "Modest", "Vain", "Persistent", "Meek","Intelligent","Ignorant","Assertive","Hesitant","Spoiled","Cautious","Reasonable","Stubborn","Emotional","Apathetic","Funny","Serious","Charming","Moody","Independent","Dependent","Determined","Petty","Pious","Paranoid","Loyal","Two-Faced","Brave","Cowardly","Honest","Liar","Generous","Selfish","Diligent","Careless","Responsible","Unreliable","Shy","Impulsive","Attentive","Reckless","Frugal","Extravagant","Mischievous","Obedient","able", "accountable", "active", "adaptable", "adventurous", "affable", "affected", "affectionate", "afraid", "aggressive", "altruistic", "ambitious", "amiable", "angry", "animated", "annoyed", "anxious", "appreciative", "argumentative", "arrogant", "artificial", "astonished", "attentive", "available", "awkward", "babyish", "bashful", "bewildered", "blasé", "bold", "boorish", "bored", "bossy", "brave", "bright", "brilliant", "busy", "calm", "candid", "capable", "carefree", "careful", "caring", "caustic", "cautious", "challenge-loving", "charismatic", "charming", "cheerful", "childish", "clever", "clumsy", "coarse", "cold-hearted", "committed", "communicative", "compassionate", "complacent", "conceited", "concerned", "confident", "confused", "conscientious", "considerate", "consistent", "content", "cooperative", "courageous", "coward", "crafty", "creative", "critical", "cross", "crude", "cruel", "cultured", "curious", "dainty", "dangerous", "daring", "dark", "dauntless", "decisive", "dedicated", "deference", "demanding", "dependable", "depressed", "despondent", "determined", "devoted", "dignified", "diligent", "disaffected", "disagreeable", "discerning", "discouraged", "discreet", "discrete", "dishonest", "disillusioned", "dismayed", "disorganized", "disparaging", "disrespectful", "dissatisfied", "distressed", "domineering", "doubtful", "dreamer", "dutiful", "eager", "easygoing", "effervescent", "efficient", "eloquent", "embarrassed", "encouraging", "energetic", "engaged", "enthusiastic", "equitable", "exacting", "exaggerated", "excitable", "excited", "expert", "exuberant", "facetious", "fair", "faithful", "fanciful", "fancy", "fearless", "fidgety", "fierce", "fighter", "finicky", "flexible", "focused", "foolish", "forgiving", "formal", "fortunate", "frank", "friendly", "frightened", "frugal", "frustrated", "fun-loving", "funny", "furious", "garrulous", "generous", "gentle", "giddy", "giving", "glamorous", "gloomy", "glum", "good citizen", "grateful", "greedy", "gregarious", "grouchy", "grumpy", "gullible", "handsome", "happy", "hard-working", "hardy", "harried", "harsh", "hateful", "haughty", "helpful", "hesitant", "honest", "hopeful", "hopeless", "hospitable", "humble", "humorous", "ignorant", "ill-bred", "imaginative", "immaculate", "immature", "impartial", "impatient", "impolite", "impudent", "impulsive", "inactive", "independent", "industrious", "innocent", "innovative", "inquisitive", "insipid", "insistent", "insolent", "intelligent", "intrepid", "inventive", "jealous", "jovial", "joyful", "keen", "kind", "lackadaisical", "languid", "lazy", "leader", "light", "light-hearted", "lively", "logical", "lonely", "loquacious", "lovable", "loving", "loyal", "malicious", "mannerly", "mature", "mean", "meek", "merciful", "messy", "meticulous", "mischievous", "moody", "mysterious", "naive", "neat", "negligent", "nervous", "noisy", "obedient", "obliging", "obnoxious", "obsequious", "observant", "obstinate", "open", "open-minded", "opinionated", "optimistic", "organized", "pandemonious", "patient", "patriotic", "peaceful", "pensive", "persevering", "persistent", "persuasive", "pessimistic", "petulant", "picky", "pitiful", "plain", "pleasant", "pleasing", "polite", "pompous", "poor", "popular", "positive", "precise", "pretentious", "pretty", "prim", "prompt", "proper", "proud", "provident", "prudence", "prudent", "punctilious", "punctual", "purpose", "puzzled", "quarrelsome", "quick", "quiet", "quixotic", "rambunctious", "rash", "rational", "refined", "reliable", "relieved", "religious", "reserved", "resourceful", "respectful", "responsible", "responsive", "restless", "restrained", "retiring", "rich", "risk-taking", "rowdy", "rude", "sad", "safe", "sarcastic", "satisfied", "saucy", "saving", "scared", "scheming", "scornful", "secretive", "secure", "sedate", "self-centered", "self-confident", "self-controlled", "self-disciplined", "selfish", "self-reliant", "sense of humour", "sensitive", "serious", "short", "shrewd", "shy", "silly", "simple", "simple-minded", "sincere", "skilful", "slovenly", "sly", "smart", "sneaky", "snobbish", "sober", "sociable", "sparing", "steady", "stingy", "stolid", "strange", "strict", "strong", "stubborn", "studious", "stupid", "suave", "submissive", "successful", "sullen", "supercilious", "superstitious", "supportive", "surly", "suspicious", "sweet", "taciturn", "tactful", "talented", "talkative", "tasteful", "team player", "tenacious", "tense", "terrified", "thankful", "thorough", "thoughtful", "thrifty", "thrilling", "timid", "tireless", "tolerant", "touchy", "trusting", "trustworthy", "truthful", "ugly", "uncontrolled", "uncouth", "unfriendly", "ungraceful", "unnatural", "unrefined", "unruly", "unscrupulous", "unselfish", "upright", "upset", "useful", "valiant", "versatile", "virtue", "visionary", "vivacious", "vulgar", "warm", "warm-hearted", "weak", "whimsical", "wild", "wise", "witty", "worried", "adventurous", "conventional", "substance-free", "substance-abuse (alcoholdrug)", "alert", "dull", "aware of opportunities", "ignorant of opportunities", "calm", "excitable", "nervous", "clean [ep to 9 levels]", "dirty", "unkempt", "clear goals", "lack of", "jumbled goals; directionless", "clear thoughts", "muddled thoughts", "confused", "completes", "leaves hanging", "doesn't complete", "comprehends", "doesn't comprehend", "conscious", "unconscious", "conscious of one's weaknesses", "unconscious of one's strengths", "constructive", "destructive", "complaining", "content-oriented", "outer", "surface", "form-oriented", "creative", "uncreative", "delegates", "tries to do everything", "deliberative", "reckless", "detail-oriented", "scrimps on details", "develops mental capabilities", "directed", "has direction", "directionless", "unfocused", "disciplined", "dissipating", "dynamic", "passive", "educated", "uneducated", "education exceed previous generation", "education not exceed previous generation", "education greater than present level of achievement", "education less than present level of achievement", "education greater than previous generation", "education less than previous generation", "efficient", "inefficient", "effort taking", "lack of effort", "effort achieves results", "effort wasted", "energetic", "listless", "enterprising", "enterprising", "not", "entrepreneurial", "entrepreneurial", "not", "envisions the unseen", "visionless", "experienced (in area)", "inexperienced (in area)", "fatigue-free", "tired", "fatigued", "focused", "unfocused", "addled", "scattered", "goal-oriented", "goalless", "directionless", "good", "evil", "graceful", "clumsy", "has enough time", "never has enough time", "health robust", "strong constitution", "poor health", "weak constitution", "high goals", "low", "no goals", "higher social interests", "lower", "no social interests", "idea-driven", "ideas don't motivate to act", "imaginative", "unimaginative", "improves self", "stays the same", "in rapidly expanding field of work", "in static or declining field", "initiates (has initiative)", "lacks initiative", "innovative", "conservative", "insightful", "lacks insight", "blind to", "ignorant of", "intelligent", "stupid", "knowledgeable", "ignorant", "uniformed", "knowledgeable in a particular area", "no knowledge in a particular area", "leads others", "submits", "yields to others", "lives from the depths of life ", "lives on the surface of life", "superficial", "lucky; things go your way", "unlucky", "money circulated for improvement", "money hoarded for security", "motivated", "unmotivated", "nerves strong", "nerves weak", "objective", "subjective", "biased", "observant", "blind to", "oblivious to", "organized", "disorganized", "patient", "impatient", "expectant", "personable", "non-engaging", "distant", "cold", "physical stamina", "lack of stamina", "polite", "mannered", "impolite", "ill mannered", "rude", "previous success in family life", "previous failure in family life", "previous success in school", "previous failure in school", "previous success in work", "previous failure in work", "productive interactions with others", "chit-chatting", "professional (acts)", "amateurish (acts)", "professional qualification achieved", "no professional qualification", "punctual", "late", "regular", "irregular", "erratic", "relationship with other(s) positive", "relationship with other(s) negative", "resourceful", "unresourceful", "helpless", "responsible", "irresponsible", "results-oriented", "does for doing's sake", "being merely occupied", "risk-taker", "averse to risk", "sees the whole picture", "seeing only parts of the picture", "seeks improvement", "self-satisfied", "spiritual", "inner connection", "lacks any spiritual", "inner connection", "stamina", "lack of stamina", "strong; physically", "weak; physically", "strong; psychologically", "weak; psychologically", "stress-free", "relaxed", "stressed", "tense", "(has had) supportive family or friends", "(has had) indifferent", "uncaring family or friends", "systematic", "unsystematic", "disorganized", "disorderly", "random", "tough", "weak", "soft", "trustworthy", "untrustworthy", "wealthy", "impoverished", "wealth in present generation", "poverty in present generation", "well-behaved", "ill behaved", "work is in harmony with personal life", "work is in conflict with personal life", "affectionate family upbringing", "indifferent", "hostile family upbringing", "high mental abilities in family", "poor mental abilities in family", "parents attained high social status", "parents have low social status", "parents motivated", "gave direction", "parents demotivated", "gave no direction", "parents rose & accomplished", "parents remained in same position", "(inheritance) physical attributes are fine", "(inheritance) physical attributes are poor", "(had) previous success (in school", "work", "family life)", "(had) previous failure (in school", "work", "family life)", "prosperity in family upbringing", "poverty in family upbringing", "psychological health and well-being", "psychological problems", "prosperity in surrounding society", "poverty in surrounding society", "supportive social environment", "indifferent social environment", "capacity to judge others", "unable to judge others", "careful", "graceful with objects", "careless", "clumsy", "communication skills", "communication skills", "lack of(can) exercise authority", "cannot exercise authority", "delegation skills", "delegation skills", "lack of leadership skills", "leadership skills", "lack of listening skills", "listening skills", "lack of management skills", "management skills", "lack of motivating skills", "motivating skills", "lack of negotiating skills", "negotiating skills", "lack of organization skills", "organization skills", "lacks planning skills", "planning skills", "lack of problem-solving skills", "problem-solving skills", "lack of public speaking skills", "public speaking skills", "lack of", "reconciling problems", "conflicts at higher level skills", "reconciling problems", "conflicts at higher level skills", "talented exceptionally in particular area", "not skilled ", "speaking skills", "lack of teamwork skills", "teamwork skills", "lack of technical work skills", "technical work skills", "lack of", "time management skills", "time management skills", "lack of verbal skills", "verbal skills", "lack of writing skills", "writing skills", "lack of", "Paranoid", "Vain", "Lecherous", "Gruff/Curt", "Sexist", "Racist", "Insecure", "Arrogant/Conceited", "Speaks in rhymes", "Loves lymericks", "Kleptomaniac", "Pathological liar", "Pathological non-conformist", "Vegan", "Idealistic/Naive", "Competitive", "Complex about mother", "Tuneless whistler", "Speech impediment (stutters, lisp, etc)", "Hates sleeping", "Snores", "Abhors violence", "Fails to recognize danger", "One-track mind", "Overly Protective", "Amnesiac", "O.C.D.", "Can't say 'no'", "accepts authority", "loyal", "devoted", "rebellious", "accepts what's given", "ignores", "rejects what's given", "affectionate", "distant", "cold", "aloof", "aspiring", "ambitious", "motivated", "self-satisfied", "unmotivated", "candid", "closed", "guarded", "secretive", "caring", "uncaring", "unfeeling", "callous", "change; accepts embraces-rejects change", "cheerful", "cheerless", "gloomy", "sour", "grumpy", "considerate", "thoughtful", "inconsiderate", "thoughtless", "cooperative", "uncooperative", "unhelpful", "combative", "courageous", "cowering", "fearful", "courteous", "rude", "impolite", "decisive", "indecisive", "devoted", "uncommitted", "uncaring", "hostile", "determined", "indecisive", "unsure", "does what is necessary", "right", "does what is convenient", "perseveres", "endures", "relents", "gives up", "enthusiastic", "unenthusiastic", "apathetic", "indifferent", "expansive", "kept back", "tight", "constricting", "faith in life", "life can't be trusted", "faith in oneself", "lack of faith in self", "faith in others", "others can't be relied on", "flexible", "inflexible", "rigid", "unbending", "stubborn", "forgiving", "unforgiving", "resentful", "spiteful", "focused", "unfocused", "scattered", "freedom given to others", "authoritarian", "controlling", "friendly", "unfriendly", "distant", "aloof", "hostile", "frugal", "thrifty", "wasteful", "spendthrift", "generous", "stingy", "miserly", "selfish", "goodwill", "ill-will", "malice", "hatred", "grateful", "ungrateful", "unappreciative", "hard-working", "lazy", "honest", "dishonest", "deceiving", "lying", "humble", "arrogant", "conceited", "ego-centric", "interested", "indifferent", "uncaring", "involved", "complacent", "indifferent", "jealous", "not", "jealous", "envious", "covetous", "kind", "unkind", "uncaring", "cruel", "mean", "mature", "immature", "modest", "vain", "open-minded", "tolerant", "narrow", "close", "small-minded", "intolerant", "optimistic", "pessimistic", "perfects ", "allows imperfection", "persistent", "sustaining", "flagging", "fleeting", "unsustaining", "positive", "negative", "practical", "impractical", "not viable", "punctual", "late", "not on time", "realistic", "unrealist", "impractical", "reliable", "unreliable", "undependable", "respectful", "disrespectful", "rude", "impolite", "responsibility; takes-", "blames others", "responsible [ep to 9 levels]", "unreliable", "undependable", "responsive", "unresponsive", "unreceptive", "self-confident", "lack of self confidence", "insecure", "self-directed", "directed by externals ", "self-disciplined", "undisciplined", "unrestrained", "indulgent", "self-esteem", "high", "self-esteem", "confidence - low", "self-giving", "self-centered", "self-reliant", "dependent", "selfless", "selfish", "sensitive", "Insensitive", "indifferent", "serious", "frivolous", "silly", "trivial", "sincere", "insincere", "dishonest", "social independence", "social approval required", "sympathetic", "unsympathetic", "unfeeling", "systematic", "unsystematic", "disorganized", "disorderly", "random", "takes others point of view", "insists on own view", "thoughtful towards others", "thoughtless", "inconsiderate", "callous", "trusting", "suspicious", "mistrusting", "unpretentious", "pretentious", "affected", "ostentatious", "unselfish", "selfish", "willing does", "willingness ", "unwilling", "reluctant", "recalcitrant", "work-oriented", "convenience first", "Show-off", "Prankster/Practical Joker", "Superstitious", "Over-confidant", "Passive-aggressive", "Bad with names; gets names mixed up", "No short term memory", "Never gets seasick", "Always keeps their cool", "Mooch", "Anal Retentive", "Narcissistic/Self-absorbed/shallow", "Pompous", "Promiscuous", "Alcoholic", "Depressed", "Masochist", "Will do anything for attention", "Obsesses", "Adaptability", "Aggressiveness", "Agreeableness", "Altruism", "Androgyny", "Assertiveness", "Authoritarianism", "Conformity", "Conscientiousness", "Conservatism", "Courage", "Creativity", "Cruelty", "Curiosity", "Cynicism", "Defensiveness", "Dependency", "Dishonesty", "Dogmatism", "Egalitarianism", "Egotism", "Emotional immaturity", "Emotional inferiority", "Emotional instability", "Emotional maturity", "Emotional stability", "Emotional superiority", "Emotionality", "Empathy", "Extraversion", "Femininity", "Gregariousness", "Hardiness", "Honesty", "Humility", "Hypnotic susceptibility", "Impulsivity", "Independence", "Initiative", "Integrity", "Introversion", "Irritability", "Liberalism", "Likability", "Loyalty", "Machiavelianism", "Masculinity", "Misanthropy", "Moodiness", "Narcissism", "Need for approval", "Need for cognition", "Negativism", "Nervousness", "Neuroticism", "Nonconformity", "Nurturance", "Obedience", "Objectivity", "Omnipotence", "Openmindedness", "Openess to experience", "Optimism", "Paranoia", "Passiveness", "Perseptiveness", "Perfectionism", "Persistance", "Pessimism", "Positivism", "Psychoticism", "Rebelliousness", "Resilience", "Rigidity", "Risk taking", "Self control", "Selfishness", "Sensation seeking", "Sensitivity", "Seriousness", "Sincerity", "Sociability", "Subjectivity", "Suggestibility", "Timidity", "Tolerance", "Charisma", "Codependency", "Cognitive style", "Coronary prone behavior", "Egocentrism", "Emotional security", "Five Factor Model", "Instrumentality", "Internal external locus of control", "Leadership qualities", "Sexuality", "Repression sensitization", "Accountable", "Active", "Adaptable", "Adventurous", "Affable", "Affectionate", "Agreeable ", "Alert", "Altruistic", "Analytical", "Appropriate", "Articulate", "Artistic ", "Assertive", "Astute", "Athletic", "Attentive ", "Attractive", "Aware", "Balanced", "Brave", "Brilliant", "Calm", "Candid", "Captivating", "Careful", "Caring", "Charming", "Cheerful", "Circumspect", "Clean", "Clearheaded", "Clever", "Collaborative", "Comfortable", "Commanding", "Committed", "Compassionate", "Competitive", "Concise", "Confident", "Conscious", "Considerate", "Constructive", "Content", "Cooperative", "Coordinated", "Courageous", "Courteous", "Creative", "Curious", "Decisive", "Dedicated", "Dependable", "Determined", "Devoted", "Direct", "Disarming", "Disciplined", "Driven", "Dynamic", "Eager", "Educated", "Efficient", "Egalitarian", "Elegant", "Eloquent", "Empathetic", "Encouraging", "Energetic", "Engaged", "Enterprising", "Enthusiastic", "Entrepreneurial", "Erudite", "Evenhanded", "Expressive", "Fair", "Faithful", "Flexible", "Fluent", "Focused", "Forgiving", "Friendly", "Fun ", "Funny", "Generous", "Genius", "Gentle", "Giving", "Good", "Graceful", "Grateful", "Gregarious", "Hard-working", "Hardy", "Healthy", "Helpful", "Honest", "Humble", "Imaginative", "Independent", "Industrious", "Influential", "Informed", "Innovative", "Insightful", "Inspired", "Inspiring", "Intelligent", "Intelligent", "Interested", "Intuitive", "Involved", "Joyful", "Just", "Kind", "Leader", "Likable", "Logical", "Loving", "Loyal", "Mannered", "Masculine", "Mature", "Methodical", "Moderate", "Modest", "Motivated", "Motivating", "Neat", "Noble", "Nuanced", "Nurturance", "Nurturing", "Obedient", "Objective", "Observant", "Open", "Open-minded", "Optimistic", "Orderly", "Organized", "Original", "Passionate", "Patient", "Perceptive", "Personable", "Poised", "Polite", "Positive", "Practical", "Precise ", "Productive", "Professional", "Punctual", "Quick", "Realistic", "Receptive", "Relaxed", "Reliable", "Resourceful", "Respectful", "Responsible", "Responsive", "Result-oriented", "Secure", "Self-aware", "Self-controlled", "Self-directed", "Self-disciplined", "Selfish", "Selfless", "Self-reliant", "Self-starter", "Sensitive", "Sensual", "Serious", "Shrewd", "Simple", "Sincere", "Skilled", "Sober", "Sociable", "Social independence", "Socially conscious", "Spiritual", "Steady", "Stoic", "Striving", "Strong", "Subtle", "Surprising", "Sweet", "Sympathetic", "Systematic", "Talented", "Tenacious", "Thorough", "Tolerant", "Trusting", "Trustworthy", "Unflappable", "Un-intimidated", "Unpretentious", "Unselfish", "Upstanding", "Versatile", "Visionary", "Willing"];