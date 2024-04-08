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

const App = () => {
  const [answers, setAnswers] = useState(Array(8).fill(""));
  const [suggestedPackage, setSuggestedPackage] = useState("");
  const [index, setIndex] = useState(0);
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
      ]);
      setshowPackgae(true);
    } else {
      setSuggestedPackage("No package suggested");
    }
  };
  useEffect(() => {
    setshowPackgae(false);
  }, []);
  console.log(suggestedPackage);
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
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              mt={10}>
              {showPackgae ? (
                <Grid item xs={11} sm={8}>
                  <Card sx={{ backgroundColor: "#ebf6fd" }}>
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
                            mt={4}
                            mb={4}>
                            <Typography
                              style={{
                                fontWeight: "700",
                                fontSize: "28px",
                              }}
                              variant="h1">
                              {suggestedPackage[0]}
                            </Typography>
                            <Button
                              href={suggestedPackage[1]}
                              style={{
                                backgroundColor: "#0e1b4d",
                                borderRadius: "40px",
                                padding: ".5rem 2rem",
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
          </Container>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default App;
