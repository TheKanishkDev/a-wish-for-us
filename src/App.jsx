import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Heart, 
  Volume2, 
  VolumeX, 
  MessageCircle, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  X, 
  PhoneCall, 
  Send, 
  ChevronDown, 
  Bookmark, 
  Play, 
  Pause,
  Share2,
  Lock,
  Unlock,
  Radio,
  Eye,
  CornerDownRight,
  Upload,
  Image as ImageIcon
} from 'lucide-react';

/**
 * ==============================================================================
 * CURATED REAL PHOTO ARCHIVE (Direct high-fidelity visual representations)
 * Replaces disconnected local file names with direct visual representations
 * of every single memory you shared.
 * ==============================================================================
 */
const PHOTO_VAULT = {
  // First time at her house - cheek kiss & cuddle
  firstHouseKiss: "image3.jpg",
  firstHouseWink: "image6.jpg",
  
  // First makeout, hug, kiss (sitting on floor in black hoodies)
  firstHugKiss: "image4.jpg",
  
  // Meeting halfway: maths notes & barf ka gola
  halfwayGola: "image2.jpg",
  
  // Endless video calls (late night 1:57 AM, neckbands, sleepy smiles, festive WhatsApp call)
  callLateNight: "image9.jpg",
  callWaving: "image7.jpg",
  callGreenTee: "image8.jpg",
  callFestive: "image5.jpg",
  
  // Pouts when mad at her
  poutHandOnCheek: "image10.jpg",
  poutYellowTee: "image19.jpg",
  mybaby: "image21.jpg",
  
  // Surprises & Eyes
  herEyesWorld: "image18.jpg",
  heartFrameDec: "image1.jpg",
  heartFrameMole: "image20.jpg",
  pillowMorningKiss: "image16.jpg",
  
  // Outfits trials
  outfitRedDress: "image17.jpg",
  outfitBlueTank: "image15.jpg",
  outfitBlackGown: "image13.jpg",
  outfitShimmerSkirt: "image14.jpg",
  outfitTealLehenga: "image12.jpg",
  outfitSkyBlueLehenga: "image11.jpg",
};

/**
 * ==============================================================================
 * PERSONALIZATION CONFIGURATION (MY CUTE LIL PUP & KANISHK)
 * ==============================================================================
 */
const DATA_CONFIG = {
  herAffectionateName: "My cute lil pup",
  herPetName: "My baby",
  myName: "Kanishk",
  relationshipStartDate: "2022-11-17T00:00:00", // 17th November 2022
  specialDateText: "11:11",
  dateSubtitle: "11/11 • A Wish For Us",
  
  contactLinks: {
    whatsapp: "https://wa.me/?text=Hey%20Kanishk...%20I%20saw%20what%20you%20built%20for%20me.",
    instagram: "https://instagram.com",
    phone: "tel:"
  },

  // Timeline Milestones
  timeline: [
    {
      id: 1,
      tag: "THE SANCTUARY",
      date: "First Time At Her House",
      title: "Quiet moments I never want to forget",
      description: "The very first time I stepped into your room. The quiet warmth of being near you, kissing your cheek while you smiled that sweet, bashful smile.",
      reflection: "Being wrapped in your presence felt safer than anywhere else in this entire world.",
      fileName: "image3.jpg",
      imgSrc: PHOTO_VAULT.firstHouseKiss,
      themeColor: "from-purple-950/40 to-pink-950/30"
    },
    {
      id: 2,
      tag: "THE PROMISE",
      date: "Maths Exam • Halfway Point",
      title: "Notes, promises & barf ka gola",
      description: "It was exam time and I promised to give you my math notes. You traveled halfway, I traveled halfway, and for those few minutes, all stress disappeared over paper cups of barf ka gola.",
      reflection: "Meeting each other halfway has always been who we are. That's the promise I never want to break.",
      fileName: "image2.jpg",
      imgSrc: PHOTO_VAULT.halfwayGola,
      themeColor: "from-rose-950/40 to-purple-950/40"
    },
    {
      id: 3,
      tag: "OUR SACRED FIRST",
      date: "First Hug & First Kiss",
      title: "When time completely froze",
      description: "Our very first real hug, our first kiss, our first make-out, sitting on the floor and holding you so close that neither of us wanted the world outside to exist.",
      reflection: "You wrapped your arms around me in that black hoodie, and every doubt I ever carried melted away.",
      fileName: "image4.jpg",
      imgSrc: PHOTO_VAULT.firstHugKiss,
      themeColor: "from-rose-950/50 to-red-950/40"
    },
    {
      id: 4,
      tag: "LATE NIGHTS",
      date: "1:57 AM, 10:35 PM, 1:10 AM...",
      title: "Endless screen glows & sleepy smiles",
      description: "Hours upon hours of video calls where phone batteries drained to 8% before we ever ran out of things to say. Dressed up for festivals or sleepy in bed.",
      reflection: "Falling asleep listening to you breathe on the other end of the line was the only peace I needed.",
      fileName: "image8.jpg",
      imgSrc: PHOTO_VAULT.callFestive,
      themeColor: "from-emerald-950/30 to-zinc-950/60"
    }
  ],

  // Categorized Photo Vaults for Scrapbook
  photoCategories: [
    { id: "all", label: "All Memories" },
    { id: "firsts", label: "Our Firsts" },
    { id: "videocalls", label: "Endless Calls" },
    { id: "pouts", label: "Her Pouts" },
    { id: "outfits", label: "Her Outfits" },
    { id: "surprises", label: "Little Surprises" }
  ],

  photos: [
    {
      id: "p1",
      category: "firsts",
      fileName: "image4.jpg",
      imgSrc: PHOTO_VAULT.firstHugKiss,
      caption: "Our Very First Everything",
      date: "First hug, first kiss",
      note: "Our first make-out, our first warm hug, our first kiss. Sitting on the floor holding you so tight—my heart still races every time I remember it.",
      accent: "rose"
    },
    {
      id: "p2",
      category: "firsts",
      fileName: "image3.jpg",
      imgSrc: PHOTO_VAULT.firstHouseKiss,
      caption: "First Time At Her House",
      date: "Quiet cheek kiss",
      note: "That gentle kiss on your cheek while you grinned. Delicate, pure moments that I keep guarded in the safest corner of my soul.",
      accent: "amber"
    },
    {
      id: "p3",
      category: "firsts",
      fileName: "image6.jpg",
      imgSrc: PHOTO_VAULT.firstHouseWink,
      caption: "The Wink & The Grin",
      date: "Pure joy",
      note: "You scrunching up your face and winking while I held you close. No pretense, just my cute lil pup and me being completely happy.",
      accent: "rose"
    },
    {
      id: "p5",
      category: "firsts",
      fileName: "image5.jpg",
      imgSrc: PHOTO_VAULT.halfwayGola,
      caption: "Meeting Halfway (Notes & Barf ka Gola)",
      date: "Exam season",
      note: "I promised to bring you my math notes. You traveled halfway, I traveled halfway, and we shared barf ka gola with straws under the trees.",
      accent: "emerald"
    },
    {
      id: "p6",
      category: "surprises",
      fileName: "image18.jpg",
      imgSrc: PHOTO_VAULT.herEyesWorld,
      caption: "Her Eyes — My Entire World",
      date: "Those deep brown eyes",
      note: "I could look into those eyes forever and never ask for anything else. My whole universe lives quietly right there.",
      accent: "purple"
    },
    {
      id: "p7",
      category: "videocalls",
      fileName: "image8.jpg",
      imgSrc: PHOTO_VAULT.callLateNight,
      caption: "1:57 AM Video Calls",
      date: "Endless late nights",
      note: "Phone at 8% battery, neckband on, both of us refusing to hang up even though tomorrow was right around the corner.",
      accent: "rose"
    },
    {
      id: "p8",
      category: "videocalls",
      fileName: "image7.jpg",
      imgSrc: PHOTO_VAULT.callWaving,
      caption: "Waving Through The Screen",
      date: "Afternoon smiles",
      note: "Lying in bed, watching you wave your hand and tell me about every little detail of your day. Distance felt like nothing.",
      accent: "blue"
    },
    {
      id: "p9",
      category: "videocalls",
      fileName: "image8.jpg",
      imgSrc: PHOTO_VAULT.callGreenTee,
      caption: "01:10 AM Goofiness",
      date: "Silly smiles",
      note: "That silly smile you gave the camera in your green polo tee. You always knew how to make my heaviest burdens disappear in a second.",
      accent: "emerald"
    },
    {
      id: "p10",
      category: "videocalls",
      fileName: "image5.jpg",
      imgSrc: PHOTO_VAULT.callFestive,
      caption: "Festive Video Date",
      date: "Dressed up for each other",
      note: "Both of us dressed in traditional clothes, smiling through WhatsApp. You looked so stunning in that green suit, my baby.",
      accent: "amber"
    },
    {
      id: "p11",
      category: "pouts",
      fileName: "image10.jpg",
      imgSrc: PHOTO_VAULT.poutHandOnCheek,
      caption: "When I Was Mad At Her (Part 1)",
      date: "The quiet pout",
      note: "Hand resting on your cheek, earphone in, giving me that quiet remorseful pout that made it impossible for me to stay upset with you.",
      accent: "rose"
    },
    {
      id: "p12",
      category: "pouts",
      fileName: "image19.jpg",
      imgSrc: PHOTO_VAULT.poutYellowTee,
      caption: "When I Was Mad At Her (Part 2)",
      date: "The puffed cheeks",
      note: "Yellow tee, puffed lips, staring at me on WhatsApp call until I couldn't help but crack a smile. You always won my heart.",
      accent: "yellow"
    },
    {
      id: "p13",
      category: "surprises",
      fileName: "image13.jpg",
      imgSrc: PHOTO_VAULT.heartFrameDec,
      caption: "Heart Frame Surprise (Dec 2022)",
      date: "December 2022",
      note: "Those sweet heart-framed snaps that made my lockscreen light up and gave me butterflies every single time.",
      accent: "rose"
    },
    {
      id: "p14",
      category: "surprises",
      fileName: "image14.jpg",
      imgSrc: PHOTO_VAULT.heartFrameMole,
      caption: "Framed In Love",
      date: "That little mole",
      note: "Floral print, the heart frame, and that little mole on your chin. A quiet reminder of how effortlessly beautiful you are to me.",
      accent: "pink"
    },
    {
      id: "p15",
      category: "surprises",
      fileName: "image15.jpg",
      imgSrc: PHOTO_VAULT.pillowMorningKiss,
      caption: "Pillow Kisses From Bed",
      date: "Spontaneous mornings",
      note: "Resting on your pillow sending me cute pouty faces to wake me up. The purest, most honest love I miss so deeply.",
      accent: "rose"
    },
    {
      id: "p16",
      category: "outfits",
      fileName: "image16.jpg",
      imgSrc: PHOTO_VAULT.outfitRedDress,
      caption: "The Red Dress",
      date: "Innocent outfit check",
      note: "Standing against the white wall in that red corset dress, shyly asking me how you looked. You looked like an absolute goddess.",
      accent: "red"
    },
    {
      id: "p17",
      category: "outfits",
      fileName: "image17.jpg",
      imgSrc: PHOTO_VAULT.outfitBlueTank,
      caption: "Trial Room Mirror Selfie",
      date: "Blue top & denim",
      note: "Price tag still hanging from the blue ribbed top, sending me the trial room picture to get my approval before buying it.",
      accent: "blue"
    },
    {
      id: "p18",
      category: "outfits",
      fileName: "image18.jpg",
      imgSrc: PHOTO_VAULT.outfitBlackGown,
      caption: "The Elegant Black Gown",
      date: "Trial room grace",
      note: "Ruffled shoulders, elegant long black gown, and you hiding your shy smile behind the phone. Pure elegance.",
      accent: "zinc"
    },
    {
      id: "p19",
      category: "outfits",
      fileName: "image19.jpg",
      imgSrc: PHOTO_VAULT.outfitShimmerSkirt,
      caption: "The Sparkle & Skirt",
      date: "Trying new styles",
      note: "Grey shimmer top, black skirt, socks on the trial room floor. You always had this innocent excitement whenever you tried something new.",
      accent: "purple"
    },
    {
      id: "p20",
      category: "outfits",
      fileName: "image20.jpg",
      imgSrc: PHOTO_VAULT.outfitTealLehenga,
      caption: "The Teal Lehenga",
      date: "Wedding festive vibes",
      note: "The glittering teal lehenga in the elevator mirror. Elegant, poised, and utterly breathtaking.",
      accent: "emerald"
    },
    {
      id: "p21",
      category: "outfits",
      fileName: "image21.jpg",
      imgSrc: PHOTO_VAULT.outfitSkyBlueLehenga,
      caption: "Sky Blue Elegance",
      date: "Sweet shy smile",
      note: "That sky blue pleated lehenga, phone hiding your shy smile. My heart skipped so many beats seeing you in this.",
      accent: "sky"
    }
  ],

  // Real Chat Snippets
  messages: [
    {
      id: "m1",
      date: "Late Night",
      context: "When calls never wanted to end",
      her: "Kanishk... you're still awake? Please don't stay up working, go to sleep ❤️",
      him: "I was just staring at your photo. My baby, do you have any idea how much I love you?",
      note: "The effortless tenderness that carried us through hundreds of quiet nights."
    },
    {
      id: "m2",
      date: "Exam Morning",
      context: "Maths notes & promise",
      her: "You really brought the notes all the way? You didn't have to travel so far for me...",
      him: "I promised you. And getting to share barf ka gola with my cute lil pup was worth every single step.",
      note: "We always met each other halfway."
    },
    {
      id: "m3",
      date: "After a silly fight",
      context: "Those irresistible pouts",
      her: "Look at my face... are you really still going to stay mad at your pup? 🥺",
      him: "How am I supposed to stay mad when you look at me like that? You know you win my heart every single time.",
      note: "No matter how big the disagreement, your softness always won."
    }
  ],

  // Interactive "Little Things"
  littleThings: [
    {
      id: "lt1",
      title: "The Signature Pout",
      preview: "Whenever I was upset with you...",
      revealed: "How you would rest your chin in your palm, puff your cheeks, and stare quietly at the camera until my stubborn anger completely melted into a smile."
    },
    {
      id: "lt2",
      title: "The Outfit Approvals",
      preview: "From every single trial room...",
      revealed: "How you never bought an outfit without showing me first—the red dress, the black gown, the sky-blue lehenga. You always wanted my eyes to be the first to approve."
    },
    {
      id: "lt3",
      title: "Your Deep Brown Eyes",
      preview: "Where my entire world lives...",
      revealed: "The way your eyes look up close. Honest, warm, and carrying a quiet innocence that made me feel like the most fortunate boy on earth."
    },
    {
      id: "lt4",
      title: "Meeting Me Halfway",
      preview: "The maths notes and the gola...",
      revealed: "That exam day when we both traveled to meet in the middle, sharing barf ka gola with plastic straws under the afternoon trees. It was simple, but it was everything."
    },
    {
      id: "lt5",
      title: "Endless Video Calls",
      preview: "Past 1:57 AM...",
      revealed: "Leaving our phones plugged in by the bed, talking until words turned into soft breathing, waking up knowing my baby was right there on the screen."
    },
    {
      id: "lt6",
      title: "Since 17 November 2022",
      preview: "Not a single day without you...",
      revealed: "Every single day for the past years was lived with you in my heart. Even when we were quiet, you were the center around which my life orbited."
    }
  ],

  // Principles for rebuilding
  principles: [
    {
      title: "No More Silence as a Shield",
      sub: "Speaking instead of withdrawing",
      desc: "I will never block you or shut you out again. Running away into silence when hurt was immature and wrong. I will stay, listen, and talk."
    },
    {
      title: "Meeting Halfway",
      sub: "Just like that barf ka gola afternoon",
      desc: "Neither of us carrying the weight alone. Both of us taking steps toward the center, meeting where love is easy."
    },
    {
      title: "Understanding Over Ego",
      sub: "Remembering we are on the same team",
      desc: "I never want to 'win' an argument against you. I only want us to understand each other and keep each other safe."
    },
    {
      title: "Patience with Emotions",
      sub: "Taking a breath before reacting",
      desc: "Learning to regulate my fear and overwhelm without letting them spill over into hurting the person I love most."
    },
    {
      title: "Honoring Our Time",
      sub: "Quality over pressure",
      desc: "Not demanding every minute of your busy life, but cherishing the moments we do have together with full warmth."
    },
    {
      title: "Choosing You Daily",
      sub: "Just like we have since 17 Nov 2022",
      desc: "Knowing that genuine love isn't just feelings on easy days, but conscious commitment through the heavy ones."
    }
  ],

  // Memory Wall
  memoryWall: [
    { type: "quote", text: "Since 17 November 2022, not a single day has felt complete without you.", author: "Kanishk" },
    { type: "note", text: "11/11 • Today is meant for wishes. My only wish is our peace." },
    { type: "quote", text: "The way you used to puff your cheeks on video calls just to make me smile.", author: "My cute lil pup" },
    { type: "place", text: "That halfway spot where we shared barf ka gola before exams." },
    { type: "quote", text: "Your eyes. Truly my whole world.", author: "Always" },
    { type: "note", text: "Our first hug in that black hoodie—I still remember the feeling of holding you." }
  ]
};

/**
 * Procedural Soft Ambient Music Engine (Web Audio API)
 * Synthesizes a warm, melancholic romantic piano/synth soundscape without requiring external audio files.
 */
class AmbientMusicEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  playSoftChime(freq = 440) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.03, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 1.8);
  }

  playChord(notes, duration = 5) {
    if (!this.ctx || this.ctx.state !== 'running') return;
    const now = this.ctx.currentTime;
    notes.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, now);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + duration);
    });
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // F minor9 / Db major7 / Ab progression
    const chords = [
      [174.61, 261.63, 311.13, 392.00], 
      [138.59, 207.65, 261.63, 311.13], 
      [220.00, 261.63, 329.63, 392.00], 
      [130.81, 196.00, 246.94, 293.66]  
    ];
    let index = 0;

    this.playChord(chords[0]);
    this.interval = setInterval(() => {
      index = (index + 1) % chords.length;
      this.playChord(chords[index], 5.2);
    }, 4800);
  }

  stop() {
    this.isPlaying = false;
    if (this.interval) clearInterval(this.interval);
  }
}

export default function App() {
  // Navigation & Stage States
  const [hasEntered, setHasEntered] = useState(false);
  const [openingPhase, setOpeningPhase] = useState(0);
  const [unlockProgress, setUnlockProgress] = useState(0);
  const [isPressingUnlock, setIsPressingUnlock] = useState(false);
  
  // Custom uploaded images cache: Map of fileName -> Object URL
  const [uploadedPhotos, setUploadedPhotos] = useState({});
  const fileInputRef = useRef(null);

  // Audio state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioEngineRef = useRef(null);

  // Filter state for Photo Scrapbook
  const [selectedPhotoCategory, setSelectedPhotoCategory] = useState("all");

  // Easter Egg States
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [showEasterEggModal, setShowEasterEggModal] = useState(false);

  // Modals & General Interaction
  const [activePhotoModal, setActivePhotoModal] = useState(null);
  const [showTalkModal, setShowTalkModal] = useState(false);
  const [finalChoiceMade, setFinalChoiceMade] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  // Live Counter State
  const [elapsed, setElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Handle local image file selections
  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    const newMap = { ...uploadedPhotos };
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      newMap[file.name] = url;
    });
    setUploadedPhotos(newMap);
  };

  // Helper to resolve an image source:
  // 1. Uploaded object URL
  // 2. Direct embedded source from PHOTO_VAULT
  // 3. Fallback to filename
  const resolvePhotoSrc = (photoOrName) => {
    if (typeof photoOrName === 'object' && photoOrName !== null) {
      if (uploadedPhotos[photoOrName.fileName]) return uploadedPhotos[photoOrName.fileName];
      if (photoOrName.imgSrc) return photoOrName.imgSrc;
      return photoOrName.fileName;
    }
    if (uploadedPhotos[photoOrName]) return uploadedPhotos[photoOrName];
    // Check if filename matches any entry in DATA_CONFIG.photos
    const found = DATA_CONFIG.photos.find(p => p.fileName === photoOrName);
    if (found && found.imgSrc) return found.imgSrc;
    return photoOrName;
  };

  // Filtered photos
  const filteredPhotos = useMemo(() => {
    if (selectedPhotoCategory === "all") return DATA_CONFIG.photos;
    return DATA_CONFIG.photos.filter(p => p.category === selectedPhotoCategory);
  }, [selectedPhotoCategory]);

  // Canvas Ref for Ambient Ember/Star Particles in Chapter 1
  const canvasRef = useRef(null);

  // Initialize Audio Engine
  useEffect(() => {
    audioEngineRef.current = new AmbientMusicEngine();
    return () => {
      if (audioEngineRef.current) audioEngineRef.current.stop();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioEngineRef.current) return;
    if (isPlayingAudio) {
      audioEngineRef.current.stop();
      setIsPlayingAudio(false);
    } else {
      audioEngineRef.current.start();
      setIsPlayingAudio(true);
    }
  };

  // Canvas Animation for Chapter 1
  useEffect(() => {
    if (hasEntered) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle drifting starlight particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.4,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: -Math.random() * 0.35 - 0.05,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 180, 195, ${Math.max(0.1, Math.min(0.8, p.opacity))})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(244, 63, 94, 0.4)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasEntered]);

  // Robust Unlock Handler - ensures immediate transition on completion or click
  const triggerEntry = () => {
    if (audioEngineRef.current) {
      audioEngineRef.current.playSoftChime(523.25);
    }
    setUnlockProgress(100);
    setTimeout(() => {
      setHasEntered(true);
    }, 250);
  };

  // Unlock Button Press-and-Hold Logic (Chapter 1)
  useEffect(() => {
    let interval = null;
    if (isPressingUnlock && !hasEntered) {
      interval = setInterval(() => {
        setUnlockProgress((prev) => {
          if (prev >= 95) {
            clearInterval(interval);
            triggerEntry();
            return 100;
          }
          return prev + 3;
        });
      }, 30);
    } else if (!isPressingUnlock && unlockProgress > 0 && unlockProgress < 100 && !hasEntered) {
      interval = setInterval(() => {
        setUnlockProgress((prev) => {
          if (prev <= 4) {
            clearInterval(interval);
            return 0;
          }
          return prev - 8;
        });
      }, 20);
    }
    return () => clearInterval(interval);
  }, [isPressingUnlock, unlockProgress, hasEntered]);

  // Live Relationship Time Counter
  useEffect(() => {
    const start = new Date(DATA_CONFIG.relationshipStartDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, now - start);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Easter Egg Handler
  const handleEasterEgg = (e) => {
    e.stopPropagation();
    const next = easterEggClicks + 1;
    setEasterEggClicks(next);
    if (next >= 3) {
      setShowEasterEggModal(true);
      setEasterEggClicks(0);
    }
  };

  const toggleCard = (id) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="relative min-h-screen bg-[#050609] text-[#f4efe8] font-sans antialiased selection:bg-rose-950/60 selection:text-rose-200 overflow-x-hidden">
      
      {/* Universal Ambient Deep Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-b from-rose-950/20 via-purple-950/10 to-transparent blur-[160px] rounded-full" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[700px] h-[600px] bg-gradient-to-t from-red-950/15 via-zinc-950/20 to-transparent blur-[180px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:28px_28px] opacity-70" />
      </div>

      {/* Persistent Audio Controller */}
      <aside aria-label="Soundtrack" className="fixed top-6 right-6 sm:top-8 sm:right-8 z-50">
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-3 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-500 backdrop-blur-md border ${
            isPlayingAudio 
              ? 'bg-rose-950/40 border-rose-500/40 text-rose-200 shadow-[0_0_30px_rgba(244,63,94,0.3)]' 
              : 'bg-zinc-900/60 border-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
          }`}
          title="Toggle peaceful ambient soundtrack"
        >
          {isPlayingAudio ? (
            <>
              <div className="flex items-center gap-1 h-3">
                <span className="w-0.5 h-3 bg-rose-400 animate-pulse rounded-full" />
                <span className="w-0.5 h-2 bg-rose-400 animate-bounce rounded-full delay-75" />
                <span className="w-0.5 h-3.5 bg-rose-400 animate-pulse rounded-full delay-150" />
              </div>
              <span className="text-[11px]">OUR SONG</span>
              <Volume2 className="w-3.5 h-3.5 text-rose-300 ml-0.5" />
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
              <span className="text-[11px]">MUSIC • OFF</span>
            </>
          )}
        </button>
      </aside>

      {/* Discrete 11:11 Easter Egg In Top Left */}
      <div className="fixed top-6 left-6 sm:top-8 sm:left-8 z-50">
        <button
          onClick={handleEasterEgg}
          className="text-xs font-mono tracking-[0.25em] text-zinc-600 hover:text-rose-300 transition-colors py-1 px-3 rounded-full border border-zinc-900 hover:border-zinc-800 bg-zinc-950/50 backdrop-blur-sm cursor-pointer select-none"
          title="11:11"
        >
          11:11
        </button>
      </div>

      {/* =========================================================================
          CHAPTER 1: THE CINEMATIC OPENING (EXTREME OVERHAUL)
          An atmospheric, interactive memory capsule with breathing particle canvas,
          3-phase poetic unfolding, and a tactile "Hold to Step Inside" unlocker.
         ========================================================================= */}
      {!hasEntered && (
        <section className="fixed inset-0 z-50 bg-[#040508] flex flex-col justify-between p-6 sm:p-12 overflow-hidden select-none">
          {/* Living Particle Canvas */}
          <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

          {/* Top Info Bar */}
          <header className="relative z-10 flex justify-between items-center text-xs font-mono text-zinc-500 tracking-widest uppercase">
            <span>MEM_ID // 1111</span>
            <span className="text-rose-400/80">{DATA_CONFIG.dateSubtitle}</span>
          </header>

          {/* Central Interactive Monolith */}
          <div className="relative z-10 max-w-2xl mx-auto w-full my-auto text-center flex flex-col items-center">
            
            {/* The Glowing 11:11 Touchstone */}
            <div 
              onClick={() => {
                if (audioEngineRef.current) audioEngineRef.current.playSoftChime(440);
                setOpeningPhase((prev) => (prev + 1) % 4);
              }}
              className="relative cursor-pointer group mb-10 transition-transform duration-700 hover:scale-105"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-rose-600/20 via-purple-600/15 to-rose-600/20 rounded-full blur-2xl group-hover:blur-3xl opacity-80 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
              
              <div className="relative px-8 py-3.5 rounded-full border border-rose-500/30 group-hover:border-rose-400/60 bg-zinc-950/60 backdrop-blur-xl shadow-[0_0_35px_rgba(244,63,94,0.25)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping" />
                <span className="text-3xl sm:text-4xl font-mono tracking-[0.35em] text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-zinc-300">
                  {DATA_CONFIG.specialDateText}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider pl-1">TAP</span>
              </div>
            </div>

            {/* Dynamic Phase Text Sequence */}
            <div className="min-h-[140px] flex flex-col items-center justify-center space-y-4 px-4">
              {openingPhase === 0 && (
                <div className="space-y-3 animate-fadeIn">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-light tracking-tight">
                    My baby, the silence between us has been the loudest thing I've ever felt.
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-400 font-light font-serif italic max-w-lg mx-auto">
                    Today is 11/11. Since 17 November 2022, not a single day has passed without you in my life.
                  </p>
                </div>
              )}

              {openingPhase === 1 && (
                <div className="space-y-3 animate-fadeIn">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-rose-200 font-light tracking-tight">
                    "Remember how effortlessly you used to drive me crazy?"
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-300 font-light font-serif italic max-w-lg mx-auto">
                    Those teasing snaps right in the middle of studying, the innocent looks hiding pure mischief, the playful seduction that only my cute lil pup knew how to pull off.
                  </p>
                </div>
              )}

              {openingPhase === 2 && (
                <div className="space-y-3 animate-fadeIn">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-rose-100 font-light tracking-tight">
                    "I walked away when I should have held you."
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-400 font-light font-serif italic max-w-lg mx-auto">
                    I let my hurt turn into silence. I blocked you everywhere because I was overwhelmed, but all I did was leave my cute lil pup in the cold.
                  </p>
                </div>
              )}

              {openingPhase === 3 && (
                <div className="space-y-3 animate-fadeIn">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-light tracking-tight">
                    This isn't an excuse. It's just my heart.
                  </h2>
                  <p className="text-sm sm:text-base text-rose-200/90 font-serif italic max-w-lg mx-auto">
                    I built this personally for you, my love. Not to force you back, but because you deserve to know what you mean to me.
                  </p>
                </div>
              )}
            </div>

            {/* Interactive Tactile "Hold to Step Inside" Control */}
            <div className="mt-12 flex flex-col items-center space-y-3">
              <div
                onClick={triggerEntry}
                onMouseDown={() => setIsPressingUnlock(true)}
                onMouseUp={() => setIsPressingUnlock(false)}
                onMouseLeave={() => setIsPressingUnlock(false)}
                onTouchStart={() => setIsPressingUnlock(true)}
                onTouchEnd={() => setIsPressingUnlock(false)}
                className="relative select-none cursor-pointer group"
                role="button"
                tabIndex={0}
              >
                {/* Visual fill ring behind button */}
                <div 
                  className="absolute inset-0 rounded-full bg-rose-600/30 blur-md transition-opacity duration-300"
                  style={{ opacity: unlockProgress / 100 }}
                />

                <div className="relative px-8 py-4 rounded-full border border-zinc-700 group-hover:border-rose-500/60 bg-zinc-950/80 backdrop-blur-md overflow-hidden flex items-center gap-3 transition-all">
                  {/* Dynamic progress bar fill */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-rose-950/80 to-purple-950/80 pointer-events-none transition-all duration-75"
                    style={{ width: `${unlockProgress}%` }}
                  />

                  <div className="relative z-10 flex items-center gap-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-zinc-300">
                    {unlockProgress >= 95 ? (
                      <>
                        <Unlock className="w-4 h-4 text-rose-300 animate-spin" />
                        <span className="text-rose-200">Entering...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4 text-zinc-500 group-hover:text-rose-400 transition-colors" />
                        <span>Hold or tap to step inside</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono text-zinc-500 tracking-wider">
                  {unlockProgress > 0 ? `${Math.round(unlockProgress)}%` : "Tap to open instantly or hold"}
                </span>
                <button
                  onClick={triggerEntry}
                  className="text-[11px] font-mono text-rose-400/80 hover:text-rose-300 underline underline-offset-4 cursor-pointer"
                >
                  (Skip →)
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Phase Indicators */}
          <footer className="relative z-10 flex justify-center gap-2 items-center">
            {[0, 1, 2, 3].map((step) => (
              <button
                key={step}
                onClick={() => setOpeningPhase(step)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  openingPhase === step ? 'w-8 bg-rose-400' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                }`}
                title={`Go to slide ${step + 1}`}
              />
            ))}
          </footer>
        </section>
      )}

      {/* =========================================================================
          MAIN STORYBOARD
         ========================================================================= */}
      <main className={`relative z-10 transition-all duration-1000 ${hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* =========================================================================
            CHAPTER 2: THE FIRST MESSAGE (CLEAN, DIRECT & INTIMATE)
           ========================================================================= */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-28 relative">
          
          <div className="max-w-2xl w-full mx-auto relative bg-[#090b10]/90 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
            
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800/60">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                BEFORE YOU LOOK THROUGH OUR MEMORIES
              </span>
              <span className="text-xs font-mono text-rose-400/90 tracking-wider">
                11:11
              </span>
            </div>

            <div className="pt-8 pb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white font-light leading-snug">
                My baby, I just need you to read this first.
              </h1>
            </div>

            <div className="space-y-5 text-zinc-300 font-serif text-base sm:text-lg leading-relaxed pt-2">
              <p>
                I don't know where you are or how you feel right now. You might be upset, tired, or guarded—and you have every right to be.
              </p>
              
              <p>
                When I blocked you and removed you from everywhere, I reacted out of pain and panic. I handled things poorly, and I left my cute lil pup in the cold when you deserved patience and understanding.
              </p>

              {/* The Playful, Teasing Moments */}
              <div className="p-5 my-3 rounded-2xl bg-zinc-950/80 border border-rose-500/30 space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase block">
                  THAT SWEET TROUBLE
                </span>
                <p className="text-zinc-200 text-sm sm:text-base italic font-serif leading-relaxed">
                  "I was sitting here remembering how you used to tease me. I'd be trying to study or focus, and you'd send me those random snaps—showing off your legs in bed with notebooks open, resting by your pillow with that seductive little smirk. You loved knowing how easily you could make my heart race, and you're the only one who ever had that power over me."
                </p>
              </div>

              <p className="text-rose-200 font-medium italic border-l-2 border-rose-500/50 pl-4 py-1">
                "Not a single day has passed without you since 17 November 2022. You are my whole world."
              </p>

              <p>
                I'm not here to force anything or pretend mistakes didn't happen. I built this because if there is still a small corner of us left in your heart, I refuse to let our story end in silence.
              </p>

              <p className="text-zinc-400 text-sm italic">
                Scroll slowly. Everything here belongs to us.
              </p>
            </div>

            <div className="mt-10 pt-6 border-t border-zinc-900/80 flex items-center justify-between text-xs font-mono text-zinc-500">
              <span>OUR STORY BELOW</span>
              <ChevronDown className="w-4 h-4 animate-bounce text-zinc-500" />
            </div>

          </div>
        </section>

        {/* =========================================================================
            CHAPTER 3: OUR STORY (TIMELINE)
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Chapter 01</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              Since 17 November 2022
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
              How two lives became one shared heartbeat.
            </p>
          </div>

          <div className="relative border-l border-zinc-800/80 ml-4 sm:ml-36 md:ml-44 space-y-20">
            {DATA_CONFIG.timeline.map((item) => (
              <div key={item.id} className="relative pl-6 sm:pl-12 group">
                {/* Milestone Node on Timeline */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-rose-500/80 group-hover:border-rose-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(244,63,94,0.5)]" />

                {/* Date Marker (visible on desktop to the left) */}
                <div className="sm:absolute sm:-left-36 md:-left-44 top-1 text-xs font-mono text-zinc-500 mb-2 sm:mb-0">
                  <span className="text-rose-400/90 font-medium">{item.date}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-rose-400 bg-rose-950/40 border border-rose-900/50 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                    {item.title}
                  </h3>

                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="relative rounded-xl overflow-hidden mb-6 border border-zinc-800/60 aspect-[16/9] max-h-72 bg-gradient-to-br from-zinc-900 to-black">
                    <img 
                      src={resolvePhotoSrc(item)} 
                      alt={item.title} 
                      className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-700" 
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-70 pointer-events-none" />
                  </div>

                  <blockquote className="border-l-2 border-rose-500/50 pl-4 italic text-sm text-zinc-400 font-serif">
                    "{item.reflection}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 4: OUR PHOTOS (INTERACTIVE SCRAPBOOK & LIGHTBOX)
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-6xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Chapter 02</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              The Digital Scrapbook
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
              Every pout, every video call, every outfit check, and every quiet hug. Tap any picture to open the memory inside.
            </p>

            {/* In-Browser Photo Loader Tray */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <input
                type="file"
                multiple
                accept="image/*"
                ref={fileInputRef}
                onChange={handlePhotoUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700/80 hover:border-rose-400 text-xs font-mono tracking-wider text-zinc-300 hover:text-white transition-all shadow-md cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5 text-rose-400" />
                <span>{Object.keys(uploadedPhotos).length > 0 ? `${Object.keys(uploadedPhotos).length} Photos Loaded` : "Load Photos from Device"}</span>
              </button>
              <span className="text-[11px] font-mono text-zinc-500">
                (Click to display all your snaps in high-def)
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
            {DATA_CONFIG.photoCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedPhotoCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  selectedPhotoCategory === cat.id
                    ? 'bg-rose-950/70 border border-rose-500/60 text-rose-200 shadow-[0_0_20px_rgba(244,63,94,0.3)]'
                    : 'bg-zinc-900/40 border border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, i) => {
              const tilts = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2', 'rotate-0'];
              const tilt = tilts[i % tilts.length];
              const resolvedSrc = resolvePhotoSrc(photo);

              return (
                <div
                  key={photo.id}
                  onClick={() => setActivePhotoModal(photo)}
                  className={`bg-[#0d0f16] p-4 rounded-2xl border border-zinc-800/80 shadow-2xl hover:border-rose-500/40 transition-all duration-500 transform ${tilt} hover:rotate-0 hover:scale-[1.02] cursor-pointer group`}
                >
                  <div className="overflow-hidden rounded-xl aspect-[4/5] bg-zinc-950 relative">
                    <img
                      src={resolvedSrc}
                      alt={photo.caption}
                      className="w-full h-full object-cover filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                      <span className="text-xs font-mono text-rose-200 tracking-wider">Open memory →</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-base font-serif text-zinc-200 group-hover:text-rose-200 transition-colors">
                        {photo.caption}
                      </h4>
                      <p className="text-xs font-mono text-zinc-500">{photo.date}</p>
                    </div>
                    <Heart className="w-4 h-4 text-zinc-700 group-hover:text-rose-500 transition-colors" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 5: OUR MESSAGES
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Chapter 03</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              Conversations in the Dark
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-lg mx-auto">
              The sweet late-night chats, the silly pouts, and the ways we always found our way back to laughter.
            </p>
          </div>

          <div className="space-y-12">
            {DATA_CONFIG.messages.map((chat) => (
              <div key={chat.id} className="bg-zinc-950/70 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-zinc-900 pb-3 text-xs font-mono text-zinc-500">
                  <span>{chat.context}</span>
                  <span>{chat.date}</span>
                </div>

                {/* Her bubble */}
                <div className="flex flex-col items-start max-w-[85%] sm:max-w-[75%] space-y-1">
                  <span className="text-[10px] font-mono text-rose-300/80 ml-2">My baby</span>
                  <div className="bg-zinc-800/70 border border-zinc-700/60 text-zinc-200 px-5 py-3.5 rounded-3xl rounded-tl-sm text-sm sm:text-base leading-relaxed">
                    {chat.her}
                  </div>
                </div>

                {/* Kanishk's bubble */}
                <div className="flex flex-col items-end max-w-[85%] sm:max-w-[75%] ml-auto space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 mr-2">Kanishk</span>
                  <div className="bg-gradient-to-r from-rose-950/70 to-purple-950/70 border border-rose-800/40 text-rose-100 px-5 py-3.5 rounded-3xl rounded-tr-sm text-sm sm:text-base leading-relaxed">
                    {chat.him}
                  </div>
                </div>

                <p className="text-xs text-zinc-500 italic pt-2 border-t border-zinc-900">
                  {chat.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 6: THE LITTLE THINGS
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Chapter 04</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              The Little Things About My Girl
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
              Tap any card to uncover the details I quietly kept safe in my heart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {DATA_CONFIG.littleThings.map((thing) => {
              const isFlipped = flippedCards[thing.id];
              return (
                <div
                  key={thing.id}
                  onClick={() => toggleCard(thing.id)}
                  className="group relative h-60 p-6 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-rose-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-rose-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                  
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block mb-2">
                      Memory Cache
                    </span>
                    <h3 className="text-lg font-serif font-medium text-white">
                      {thing.title}
                    </h3>
                  </div>

                  <div className="relative text-sm text-zinc-400 font-light leading-relaxed my-2">
                    {isFlipped ? (
                      <p className="text-rose-200/90 font-serif italic animate-fadeIn">
                        "{thing.revealed}"
                      </p>
                    ) : (
                      <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {thing.preview}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-600 pt-3 border-t border-zinc-900">
                    <span>{isFlipped ? "Tap to close" : "Tap to reveal"}</span>
                    <Sparkles className={`w-3.5 h-3.5 transition-colors ${isFlipped ? 'text-rose-400' : 'text-zinc-700'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 7: OUR TIME TOGETHER (LIVE COUNTER)
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-4xl mx-auto text-center">
          <div className="space-y-3 mb-16">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Chapter 05</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              Since 17 November 2022
            </h2>
            <p className="text-sm text-zinc-400 font-light">
              Not a single day spent without you in my thoughts.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-10">
            {[
              { label: "DAYS", val: elapsed.days },
              { label: "HOURS", val: elapsed.hours },
              { label: "MINUTES", val: elapsed.minutes },
              { label: "SECONDS", val: elapsed.seconds }
            ].map((slot) => (
              <div 
                key={slot.label} 
                className="bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center shadow-lg"
              >
                <span className="text-4xl sm:text-6xl font-mono font-light text-rose-100 tracking-wider">
                  {slot.val}
                </span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-500 mt-3">
                  {slot.label}
                </span>
              </div>
            ))}
          </div>

          <div className="max-w-xl mx-auto space-y-3 text-zinc-300/80 font-serif italic text-base sm:text-lg leading-relaxed pt-6">
            <p>That is hundreds of days of laughing, talking, fighting, growing, and sharing our lives.</p>
            <p className="text-rose-200">And through every single tick, my cute lil pup, you were my whole world.</p>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 8: I KNOW I MESSED UP (VULNERABILITY)
           ========================================================================= */}
        <section className="py-32 px-6 sm:px-10 bg-[#040507] border-y border-zinc-900">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-500 uppercase">Accountability</span>
            
            <h2 className="text-3xl sm:text-5xl font-serif text-white font-light tracking-tight">
              I know I messed up, my baby.
            </h2>

            <div className="w-8 h-[1px] bg-rose-500/40 mx-auto" />

            <div className="space-y-6 text-zinc-300 font-serif text-base sm:text-lg leading-relaxed text-left sm:text-center">
              <p>
                When things got complicated and heavy, I let my frustration and panic take over.
              </p>
              <p>
                Blocking you and cutting you off everywhere was cowardly. You didn't deserve that silence. You deserved patience, understanding, and a partner who stands firm even when emotions run high.
              </p>
              <p>
                I made you feel like you were alone in the fight, when all I ever wanted was for us to feel close.
              </p>
              <p className="text-rose-200 font-medium italic">
                I am not making this website to say 'forgive me immediately'. I am making it because I want to take full responsibility. Loving you means being mature enough to fix my flaws.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 10: A LETTER TO HER
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-3xl mx-auto">
          <div className="bg-[#0b0d13] border border-rose-950/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-40">
              <span className="font-mono text-xs text-rose-400 tracking-widest border border-rose-800/50 px-2.5 py-1 rounded">
                11:11
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif text-white font-light mb-8">
              To my cute lil pup, my whole world,
            </h3>

            <div className="space-y-6 text-zinc-300 font-serif text-base sm:text-lg leading-relaxed">
              <p>
                I don't know what thoughts are running through your mind as you read this. Maybe you are tired. Maybe you feel exhausted from everything that happened.
              </p>
              <p>
                I understand completely. I am not here to rush you or ask you to pretend nothing happened.
              </p>
              <p>
                I just want you to remember that behind the mistakes, the anger, and the stupid defense mechanisms, there is Kanishk—the boy who genuinely loves you with everything in his soul.
              </p>
              <p className="text-rose-200 italic">
                I still love you, my baby. I still choose you. Every single day since 17 November 2022, and today on 11/11, it has always been you.
              </p>
              <p>
                If we ever give each other another chance, I don't want us to repeat the old cycles. I want us to listen better, communicate gently, and never let silence become a weapon.
              </p>
              <p className="pt-2 text-zinc-400">
                Slowly. Properly. Together.
              </p>
            </div>

            <div className="pt-10 border-t border-zinc-900 mt-8 flex justify-between items-center text-xs font-mono text-zinc-500">
              <span>Always yours,</span>
              <span>Kanishk</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 11: "I'M NOT ASKING FOR FOREVER TODAY"
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-4xl mx-auto text-center">
          <div className="space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">One Simple Step</span>
            
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
              I'm not asking for forever today.
            </h2>

            <p className="text-base sm:text-xl text-zinc-300 font-serif leading-relaxed pt-2">
              I am just asking for one honest conversation with you.
            </p>

            <div className="py-4 text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              <p>No fighting. No ego. No accusations.</p>
              <p className="text-zinc-200 italic mt-2">Just you and me, like we used to be.</p>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setShowTalkModal(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white text-sm font-medium tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(244,63,94,0.35)] hover:shadow-[0_0_45px_rgba(244,63,94,0.5)] active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Let's talk, my baby</span>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 12: THE "MORE TIME" SECTION
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-3xl mx-auto border-t border-zinc-900">
          <div className="space-y-6 text-center sm:text-left">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Honesty</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-zinc-100 font-light">
              Just a corner of your world.
            </h3>

            <div className="space-y-5 text-zinc-300 font-serif text-base sm:text-lg leading-relaxed">
              <p>
                I don't need every minute of your day, my love. I never wanted to become another stressful responsibility on your shoulders.
              </p>
              <p>
                I know life gets busy. You have your own dreams, family, college, responsibilities, and days when you feel drained. I have mine too.
              </p>
              <p>
                Even while managing everything on my side, I always find time for you because you are my priority. And sometimes, all my heart was wishing for was to feel met halfway.
              </p>
              <p className="text-rose-200/90 italic">
                Not all day. Not every minute. Just enough to remind each other: 'We are still each other's person.'
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 13: "IF WE TRY AGAIN" (PILLARS)
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Rebuilding</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              If We Try Again...
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
              The promises I want to make to our future.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA_CONFIG.principles.map((p, i) => (
              <div 
                key={i} 
                className="bg-zinc-950/60 border border-zinc-800/80 rounded-3xl p-6 sm:p-7 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-rose-400">0{i + 1}</span>
                  <h3 className="text-xl font-serif text-white font-medium mt-1 mb-1">{p.title}</h3>
                  <p className="text-xs font-serif italic text-rose-200/80 mb-3">"{p.sub}"</p>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 14: MEMORY WALL
           ========================================================================= */}
        <section className="py-28 px-6 sm:px-10 max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-20">
            <span className="text-xs font-mono tracking-[0.25em] text-rose-400 uppercase">Memory Wall</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-zinc-100">
              The Sticky Notes We Left Behind
            </h2>
            <p className="text-sm text-zinc-400 font-light max-w-md mx-auto">
              Memories of a love that was, and remains, completely real.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {DATA_CONFIG.memoryWall.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0e1017] p-6 rounded-3xl border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-md"
              >
                <Bookmark className="w-4 h-4 text-rose-500/70 mb-4" />
                <p className="text-zinc-200 text-sm font-serif leading-relaxed mb-4">
                  "{item.text}"
                </p>
                {item.author && (
                  <span className="text-[11px] font-mono text-zinc-500">
                    — {item.author}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CHAPTER 15: THE FINAL HORIZON
           ========================================================================= */}
        <section className="min-h-screen py-32 px-6 sm:px-10 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-[#050609] via-[#030406] to-black">
          <div className="max-w-xl mx-auto space-y-8">
            
            {/* The Central Portrait: The first warm hug */}
            <div className="w-52 h-52 sm:w-60 sm:h-60 mx-auto rounded-full overflow-hidden border-2 border-rose-500/30 shadow-[0_0_60px_rgba(244,63,94,0.3)] bg-zinc-950 flex items-center justify-center relative">
              <img
                src={PHOTO_VAULT.mybaby}
                alt="Us"
                className="w-full h-full object-cover filter brightness-95 hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="space-y-4 text-zinc-300 font-serif text-base sm:text-lg leading-relaxed">
              <p>I don't know what happens after you close this page.</p>
              <p>I don't know if things can instantly go back to how they were.</p>
              <p className="text-zinc-400 text-sm">
                But I know I will never regret loving you, my cute lil pup, and I will never regret fighting for us.
              </p>
            </div>

            <div className="pt-6 space-y-4">
              <p className="text-rose-200 text-lg sm:text-xl font-serif italic">
                "If there is still a small corner in your chest that holds a place for me..."
              </p>
              <p className="text-xl sm:text-2xl font-serif text-white">
                Come back. I'll meet you halfway.
              </p>
            </div>

            {/* Final Action Button */}
            <div className="pt-8">
              {!finalChoiceMade ? (
                <button
                  onClick={() => setFinalChoiceMade(true)}
                  className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-rose-950/80 via-rose-900/60 to-purple-950/80 hover:from-rose-900 hover:to-purple-900 text-rose-100 text-sm font-medium tracking-widest uppercase transition-all duration-500 border border-rose-500/40 shadow-[0_0_35px_rgba(244,63,94,0.3)] hover:shadow-[0_0_60px_rgba(244,63,94,0.5)] active:scale-95 cursor-pointer"
                >
                  <Heart className="w-4 h-4 text-rose-400 fill-rose-500/40 group-hover:scale-125 transition-transform" />
                  <span>One more chance?</span>
                </button>
              ) : (
                <div className="p-8 rounded-3xl bg-zinc-950/90 border border-rose-500/30 max-w-md mx-auto space-y-3 animate-fadeIn">
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-500/50 mx-auto" />
                  <h4 className="text-lg font-serif text-white">Thank you for hearing me, my baby.</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-serif leading-relaxed">
                    Whatever you decide, I will always be thankful to have loved you since November 17, 2022.
                  </p>
                  <p className="text-xs font-mono text-rose-300/80 pt-2">
                    Maybe this isn't the end.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setShowTalkModal(true)}
                      className="text-xs underline text-zinc-400 hover:text-white"
                    >
                      Talk to me whenever you're ready →
                    </button>
                  </div>
                </div>
              )}
            </div>

            <footer className="pt-24 text-xs font-mono text-zinc-600">
              Built with all my love for my cute lil pup • Kanishk • 11/11
            </footer>
          </div>
        </section>

      </main>

      {/* =========================================================================
          MODALS & LIGHTBOXES
         ========================================================================= */}
      {/* 1. PHOTO LIGHTBOX */}
      {activePhotoModal && (
        <div 
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0d0f16] border border-zinc-800 max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <button
              onClick={() => setActivePhotoModal(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] min-h-[260px] overflow-hidden bg-black flex items-center justify-center relative">
              <img
                src={resolvePhotoSrc(activePhotoModal)}
                alt={activePhotoModal.caption}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-serif text-white font-medium">{activePhotoModal.caption}</h3>
                <span className="text-xs font-mono text-zinc-500">{activePhotoModal.date}</span>
              </div>
              <p className="text-sm sm:text-base text-zinc-300 font-serif italic leading-relaxed pt-2">
                "{activePhotoModal.note}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. "LET'S TALK" MODAL */}
      {showTalkModal && (
        <div 
          onClick={() => setShowTalkModal(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-6 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0d0f16] border border-zinc-800 max-w-md w-full rounded-3xl p-8 shadow-2xl text-center space-y-6 relative"
          >
            <button
              onClick={() => setShowTalkModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-full bg-rose-950/50 border border-rose-800/40 text-rose-300 flex items-center justify-center mx-auto">
              <MessageCircle className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif text-white">Whenever you're ready, my baby.</h3>
              <p className="text-xs font-mono text-zinc-400 tracking-wider">
                No pressure. No accusations. Just us.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={DATA_CONFIG.contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 px-4 rounded-xl bg-zinc-900 border border-zinc-700/60 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-zinc-200 text-sm font-medium transition-all"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Message Kanishk on WhatsApp</span>
              </a>

              <a
                href={DATA_CONFIG.contactLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3.5 px-4 rounded-xl bg-zinc-900 border border-zinc-700/60 hover:border-pink-500/50 hover:bg-pink-950/20 text-zinc-200 text-sm font-medium transition-all"
              >
                <Share2 className="w-4 h-4 text-pink-400" />
                <span>Instagram Direct</span>
              </a>

              <a
                href={DATA_CONFIG.contactLinks.phone}
                className="flex items-center justify-center gap-3 w-full py-3.5 px-4 rounded-xl bg-zinc-900 border border-zinc-700/60 hover:border-rose-500/50 hover:bg-rose-950/20 text-zinc-200 text-sm font-medium transition-all"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                <span>Direct Call</span>
              </a>
            </div>

            <p className="text-[11px] text-zinc-500">
              Take all the time you need. I'm right here.
            </p>
          </div>
        </div>
      )}

      {/* 3. 11:11 SECRET WISH MODAL */}
      {showEasterEggModal && (
        <div 
          onClick={() => setShowEasterEggModal(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="text-center space-y-6 max-w-sm"
          >
            <div className="text-5xl font-mono text-rose-300 tracking-widest drop-shadow-[0_0_25px_rgba(244,63,94,0.5)]">
              11:11
            </div>
            
            <p className="text-zinc-400 font-serif text-lg italic">
              Make a wish, my baby.
            </p>

            <div className="space-y-1 pt-4 border-t border-zinc-800">
              <p className="text-sm font-light text-zinc-500">I already made mine.</p>
              <p className="text-2xl font-serif text-rose-200 font-medium">Us.</p>
            </div>

            <button
              onClick={() => setShowEasterEggModal(false)}
              className="mt-6 px-6 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}