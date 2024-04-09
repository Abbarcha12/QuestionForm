import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./assets/logo.png";
import ImageOne from "./assets/1.png";
import ImageTwo from "./assets/2.png";
import ImageThree from "./assets/3.png";
import ImageFour from "./assets/1.png";
import ImageFive from "./assets/5.jpg";
import ImageSix from "./assets/6.jpg";
import pack1 from "./assets/pack1.png";
import pack2 from "./assets/pack2.png";
import pack3 from "./assets/pack3.png";
import pack4 from "./assets/pack4.png";
import pack5 from "./assets/pack5.png";
import pack6 from "./assets/pack6.png";
import pack7 from "./assets/pack7.png";
import pack8 from "./assets/pack8.png";
import pack9 from "./assets/pack9.png";

const App = () => {
  const [answers, setAnswers] = useState(Array(8).fill(""));
  const [suggestedPackage, setSuggestedPackage] = useState("");
  const [index, setIndex] = useState(-1);
  const [showPackgae, setshowPackgae] = useState(true);

  const backgroundImages = [
    ImageOne,
    ImageFour,
    ImageFive,
    ImageSix,
    ImageTwo,
    ImageThree,
    ImageFour,
    ImageSix,
  ];

  const questions = [
    "How do you usually show support for your friends/loved ones during hard times or if they are sick?",
    "What factors do you consider when choosing a gift for a friend?",
    "What's your favorite way to relax between study sessions?",
    "What’s your favourite part about studying?",
    "What’s your favourite special occasion you enjoy celebrating most with your friends?",
    "Do you prefer gift giving or planning fun activities for other people?",
    "Who is your most favourite person to spend time with?",
    "What’s a perfect Saturday night in winter look like to you?",
  ];

  const packages = [
    {
      name: "Exam and Midterm Package",
      Link: "https://mydormstore.ca/products/exam-care-kit",
      img: pack1,
      keywords: [
        "group study",
        "studying together",
        "studying",
        "studying sessions",
        "motivation",
        "positivity",
        "encouragement",
        "sleepovers",
        "gifts",
        "giving",
        "being there for them",
      ],
    },
    {
      name: "Thinking of You Care Package",
      img: pack7,
      Link: "https://mydormstore.ca/products/thinking-of-you-care-package",
      keywords: [
        "empathy",
        "compassion",
        "support",
        "comforting",
        "encouragement",
        "thoughtful gestures",
        "spending time together",
        "gifts",
        "well wishes",
      ],
    },
    {
      name: "Under the Weather Package",
      img: pack8,
      Link: "https://mydormstore.ca/products/get-well-soon-care-kit",
      keywords: [
        "sickness",
        "illness",
        "recovery",
        "comfort",
        "warmth",
        "rest",
        "herbal tea",
        "cozy socks",
        "soothing remedies",
        "care and concern",
      ],
    },
    {
      name: "Build Your Own Care Package",
      img: pack9,
      Link: "https://mydormstore.ca/products/build-your-own-care-package",
      keywords: [
        "hobbies",
        "interests",
        "preferences",
        "personalization",
        "thoughtfulness",
        "uniqueness",
        "custom gifts",
        "tailored selections",
      ],
    },
    {
      name: "Sleep Well Care Package",
      Link: "https://mydormstore.ca/products/sleep-well-care-package",
      img: pack6,
      keywords: [
        "relaxation",
        "sleep",
        "music",
        "meditation",
        "cozy blankets",
        "aromatherapy",
        "bedtime rituals",
        "comfortable sleepwear",
      ],
    },
    {
      name: "Birthday Care Package",
      Link: "https://mydormstore.ca/products/birthday-care-package",
      img: pack2,
      keywords: [
        "birthdays",
        "celebrations",
        "cake",
        "presents",
        "surprises",
        "joy",
        "laughter",
        "memories",
      ],
    },
    {
      name: "Valentine's Package",
      Link: "https://mydormstore.ca/products/valentines-day-care-package",
      img: pack3,
      keywords: [
        "Valentine's Day",
        "friendship",
        "love",
        "appreciation",
        "romantic gestures",
        "heartfelt expressions",
      ],
    },
    {
      name: "Easter Package",
      img: pack5,
      Link: "https://mydormstore.ca/products/easter-care-package",
      keywords: [
        "Easter",
        "holiday",
        "family gatherings",
        "egg hunts",
        "festive meals",
        "religious observances",
      ],
    },
    {
      name: "Super Bowl Care Package",
      img: pack4,
      Link: "https://mydormstore.ca/products/super-bowl-care-package",
      keywords: [
        "Super Bowl",
        "sports",
        "game nights",
        "party planning",
        "snacks",
        "entertainment",
        "team spirit",
        "camaraderie",
      ],
    },
  ];

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setIndex((prevIndex) => prevIndex - 1);
  };

  const suggestPackage = () => {
    let maxMatchCount = 0;
    let suggestedPackageIndex = -1;

    packages.forEach((packageItem, index) => {
      let matchCount = 0;
      answers.forEach((answer) => {
        const keywords = packageItem.keywords;
        const words = answer.split(" ");
        words.forEach((word) => {
          if (keywords.includes(word.toLowerCase())) {
            matchCount++;
          }
        });
      });

      if (matchCount > maxMatchCount) {
        maxMatchCount = matchCount;
        suggestedPackageIndex = index;
      }
    });

    if (suggestedPackageIndex !== -1) {
      setSuggestedPackage([
        packages[suggestedPackageIndex].name,
        packages[suggestedPackageIndex].Link,
        packages[suggestedPackageIndex].img,
      ]);
      setshowPackgae(true);
    } else {
      setSuggestedPackage("No package suggested");
      setshowPackgae(false);
    }
    console.log(suggestedPackage);
  };
  useEffect(() => {
    setshowPackgae(false);
  }, []);
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 1 }}>
      <Box
        style={{
          backgroundImage: `url(${backgroundImages[index]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          padding: "0px",
          margin: "0px",
        }}>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 1 }}>
          <img src={Logo} className="Logo" alt="Logo" />
          <Container>
            {index == -1 ? (
              <Grid
                container
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
                mt={10}>
                <Grid item xs={11} sm={5} md={4}>
                  <Card sx={{ backgroundColor: "#ebf6fd", height: "300px" }}>
                    <CardContent>
                      <AnimatePresence>
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2 }}>
                          <Box
                            display="flex"
                            justifyContent={"space-between"}
                            justifyItems={"center"}
                            alignItems={"center"}
                            textAlign={"center"}>
                            <h1 className="title">Dorm Room</h1>
                            <Typography
                              mb={4}
                              style={{
                                fontSize: "18px",
                              }}
                              variant="h1">
                              Find your personalized dorm room packages
                            </Typography>
                            <Button
                              href={suggestedPackage[1]}
                              style={{
                                backgroundColor: "#0e1b4d",
                                borderRadius: "40px",
                                padding: ".2rem 1rem",
                                textAlign: "center",
                                width: "50%",
                                color: "#fff",
                                textTransform: "capitalize",
                                fontSize: "16px",
                              }}
                              onClick={handleNext}>
                              Starts
                            </Button>
                          </Box>
                        </motion.div>
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            ) : (
              <Grid
                container
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}>
                {showPackgae ? (
                  <Grid item xs={11} sm={8} md={4}>
                    <Card sx={{ backgroundColor: "#ffffff" }}>
                      <CardContent>
                        <AnimatePresence>
                          <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.2 }}>
                            <Box
                              display="flex"
                              justifyContent={"space-between"}
                              flexDirection={"column"}
                              justifyItems={"center"}
                              textAlign={"center"}
                              mb={4}>
                              <img
                                src={suggestedPackage[2]}
                                alt="product"
                                className="productimage"
                              />
                              <Typography
                                style={{
                                  margin: "20px 0px",
                                  fontWeight: "700",
                                  fontSize: "24px",
                                }}
                                variant="h1">
                                {suggestedPackage[0]}
                              </Typography>
                              <Button
                                href={suggestedPackage[1]}
                                style={{
                                  backgroundColor: "#0e1b4d",
                                  borderRadius: "40px",
                                  padding: ".2rem 0rem",
                                  color: "#fff",

                                  textTransform: "capitalize",
                                  fontSize: "18px",
                                }}>
                                Add to cart
                              </Button>
                            </Box>
                          </motion.div>
                        </AnimatePresence>
                      </CardContent>
                    </Card>
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={10} key={index}>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 2 }}>
                      <Card sx={{ backgroundColor: "#ebf6fd" }}>
                        <CardContent>
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            position={"relative"}
                            mb={1}>
                            <Typography
                              style={{ color: "#0e1b4d", fontSize: "18px" }}>
                              {questions[index]}
                            </Typography>
                          </Box>
                          <AnimatePresence>
                            <motion.div
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -10, opacity: 0 }}
                              transition={{ duration: 0.2 }}>
                              <TextField
                                placeholder="Your Answer"
                                size="medium"
                                fullWidth
                                sx={{
                                  backgroundColor: "#ebf6fd",
                                  marginTop: "10px",
                                  "& input::placeholder": {
                                    color: "#0e1b4d",
                                  },
                                }}
                                value={answers[index]}
                                onChange={(e) =>
                                  handleAnswer(index, e.target.value)
                                }
                              />
                            </motion.div>
                          </AnimatePresence>
                          <Box
                            mt={6}
                            justifyContent={"space-between"}
                            display={"flex"}>
                            <Button
                              style={{
                                backgroundColor:
                                  index === 0 ? "#878787dd" : "#0e1b4d",
                                borderRadius: "40px",
                                padding: ".5rem 2rem",
                                color: "#fff",
                                textTransform: "capitalize",
                              }}
                              onClick={handleBack}
                              disabled={index === 0}>
                              Back
                            </Button>
                            {index === questions.length - 1 ? (
                              <Button
                                style={{
                                  backgroundColor: "#0e1b4d",
                                  borderRadius: "40px",
                                  padding: ".5rem 2rem",
                                  color: "#fff",
                                  textTransform: "capitalize",
                                }}
                                onClick={suggestPackage}>
                                Suggest Package
                              </Button>
                            ) : (
                              <Button
                                style={{
                                  backgroundColor: "#0e1b4d",
                                  borderRadius: "40px",
                                  padding: ".5rem 2rem",
                                  color: "#fff",
                                  textTransform: "capitalize",
                                }}
                                onClick={handleNext}
                                disabled={index === questions.length - 1}>
                                Next
                              </Button>
                            )}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                )}
              </Grid>
            )}
          </Container>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default App;
