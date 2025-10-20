import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  useTheme,
  Fade,
  Slide,
  Zoom,
  Avatar,
  Rating,
} from '@mui/material';
import {
  School,
  TrendingUp,
  Psychology,
  BusinessCenter,
  ArrowForward,
  Assessment,
  Compare,
  AttachMoney,
  Timeline,
  CheckCircle,
  FormatQuote,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroFeatures = [
    {
      icon: <School sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Adaptive Testing',
      description: 'AI-powered assessments tailored to your learning style',
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: theme.palette.success.main }} />,
      title: 'Career Insights',
      description: 'Data-driven career recommendations with real-time market analysis',
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'Stream Discovery',
      description: 'Find your perfect academic stream with confidence',
    },
    {
      icon: <BusinessCenter sx={{ fontSize: 40, color: theme.palette.warning.main }} />,
      title: 'College Matching',
      description: 'Get matched with the best colleges based on your profile',
    },
  ];

  const detailedFeatures = [
    {
      icon: <Psychology sx={{ fontSize: 48, color: theme.palette.primary.main }} />,
      title: 'AI-Powered Stream Discovery',
      description: 'Advanced algorithms analyze your interests, strengths, and academic performance to recommend the perfect stream for your future.',
      highlights: ['50-question adaptive test', 'Interest analysis', 'Strength assessment', 'Personalized recommendations'],
      color: theme.palette.primary.main,
    },
    {
      icon: <School sx={{ fontSize: 48, color: theme.palette.success.main }} />,
      title: 'Comprehensive College Matching',
      description: 'Get matched with colleges based on your entrance scores, preferences, and career goals with detailed insights.',
      highlights: ['200+ colleges', 'Real-time cutoffs', 'Quota-aware predictions', 'ROI analysis'],
      color: theme.palette.success.main,
    },
    {
      icon: <Assessment sx={{ fontSize: 48, color: theme.palette.secondary.main }} />,
      title: 'Adaptive Testing System',
      description: 'Board-specific and difficulty-adaptive tests that provide accurate assessment of your academic capabilities.',
      highlights: ['Board-specific questions', 'Difficulty adaptation', 'Real-time feedback', 'Performance analytics'],
      color: theme.palette.secondary.main,
    },
    {
      icon: <Compare sx={{ fontSize: 48, color: theme.palette.warning.main }} />,
      title: 'Smart College Comparison',
      description: 'Compare colleges side-by-side with detailed analysis of fees, placements, facilities, and admission chances.',
      highlights: ['Side-by-side comparison', 'Detailed metrics', 'What-if scenarios', 'Trade-off analysis'],
      color: theme.palette.warning.main,
    },
    {
      icon: <AttachMoney sx={{ fontSize: 48, color: theme.palette.info.main }} />,
      title: 'Scholarship & Financial Aid',
      description: 'Discover personalized scholarships and financial aid options to make quality education accessible.',
      highlights: ['50+ scholarships', 'Eligibility matching', 'Application tracking', 'Financial planning'],
      color: theme.palette.info.main,
    },
    {
      icon: <Timeline sx={{ fontSize: 48, color: theme.palette.error.main }} />,
      title: 'Career Roadmaps',
      description: 'Step-by-step career guidance with detailed roadmaps, skill requirements, and industry insights.',
      highlights: ['Detailed roadmaps', 'Skill development', 'Industry trends', 'Future-proof skills'],
      color: theme.palette.error.main,
    },
  ];

  const stats = [
    { number: '100+', label: 'Students Helped' },
    { number: '90%', label: 'Success Rate' },
    { number: '200+', label: 'Colleges' },
    { number: '150+', label: 'Scholarships' },
    { number: '24/7', label: 'AI Support' },
  ];

  const testimonials = [
    {
      name: 'Sai Krishna Reddy',
      role: 'Class 10 Student, Government High School, Vijayawada',
      avatar: '/avatars/saikrishna.jpg',
      rating: 5,
      text: 'After completing my SSC, I was totally confused between MPC and BiPC streams. CareerVista\'s 50-question adaptive test helped me understand my strengths and interests. Now I\'m confident about choosing MPC for my intermediate!',
      college: 'Choosing Intermediate College',
      stream: 'Stream Selection - MPC',
    },
    {
      name: 'Lakshmi Prasanna',
      role: 'Class 10 Student, Narayana School, Guntur',
      avatar: '/avatars/lakshmi.jpg',
      rating: 5,
      text: 'I was scared about choosing the right stream after Class 10. The career counseling showed me that BiPC suits my interest in biology and chemistry. The stream recommendations were so helpful for my future planning!',
      college: 'Selecting Junior College',
      stream: 'Stream Selection - BiPC',
    },
    {
      name: 'Venkata Ramana',
      role: 'Class 12 Student, Gayatri Educational Institutions, Vizag',
      avatar: '/avatars/ramana.jpg',
      rating: 5,
      text: 'With my EAMCET rank of 8,450, I was confused about which engineering colleges I could get. CareerVista\'s college predictor showed me all possible colleges for my rank in MPC stream. Very accurate predictions!',
      college: 'Engineering College Prediction',
      stream: 'MPC - Engineering',
    },
    {
      name: 'Anusha Kumari',
      role: 'Class 12 Student, Akash Institute, Tirupati',
      avatar: '/avatars/anusha.jpg',
      rating: 5,
      text: 'After getting my NEET rank of 15,200, I used CareerVista to predict which medical colleges I could get admission in. The rank-based predictions helped me choose the right colleges during counseling!',
      college: 'Medical College Prediction',
      stream: 'BiPC - Medicine',
    },
    {
      name: 'Kiran Kumar Yadav',
      role: 'Class 10 Student, Vignan Schools, Kakinada',
      avatar: '/avatars/kiran.jpg',
      rating: 5,
      text: 'I was interested in computers but didn\'t know which stream to choose after SSC. CareerVista\'s stream recommendation test showed me that MPC with computer science is perfect for my software engineering goals!',
      college: 'Planning Intermediate',
      stream: 'Stream Selection - MPC(CS)',
    },
    {
      name: 'Deepika Chowdary',
      role: 'Class 12 Student, Bhashyam Educational Institutions, Hyderabad',
      avatar: '/avatars/deepika.jpg',
      rating: 5,
      text: 'After completing my Class 12 in CEC stream, I was confused about which commerce colleges to choose. CareerVista\'s college predictor helped me find the best B.Com and BBA colleges in AP based on my marks and preferences!',
      college: 'Commerce College Selection',
      stream: 'CEC - Commerce',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.3,
        }}
      />
      
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Main Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                    background: 'linear-gradient(45deg, #ffffff 30%, #f0f9ff 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Discover Your
                  <br />
                  <Box component="span" sx={{ color: '#fbbf24' }}>
                    Perfect Career
                  </Box>
                </Typography>
                
                <Typography
                  variant="h5"
                  sx={{
                    mb: 3,
                    opacity: 0.9,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  AI-powered career guidance platform that helps students make informed decisions about their future
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    onClick={() => navigate('/signin')}
                    sx={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'rgba(255, 255, 255, 0.3)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigate('/about')}
                    sx={{
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: 'white',
                        background: 'rgba(255, 255, 255, 0.1)',
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>

                {/* Stats */}
                <Grid container spacing={3}>
                  {stats.map((stat, index) => (
                    <Grid size={{ xs: 6, sm: 3 }} key={index}>
                      <Slide in timeout={1200 + index * 200} direction="up">
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 800,
                              color: '#fbbf24',
                              mb: 0.5,
                            }}
                          >
                            {stat.number}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              opacity: 0.8,
                              fontSize: '0.875rem',
                            }}
                          >
                            {stat.label}
                          </Typography>
                        </Box>
                      </Slide>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Fade>
          </Grid>

          {/* Right Column - Features Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              {heroFeatures.map((feature, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Zoom in timeout={1000 + index * 200}>
                    <Card
                      sx={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          background: 'rgba(255, 255, 255, 0.15)',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box sx={{ mb: 2 }}>
                          {feature.icon}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: 'white',
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.9,
                            lineHeight: 1.6,
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>

    {/* Features Section */}
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Why Choose CareerVista?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Our comprehensive platform combines AI technology with expert insights to guide you toward the perfect career path
            </Typography>
          </Box>
        </Fade>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {detailedFeatures.map((feature, index) => (
            <Slide in timeout={1000 + index * 200} direction="up" key={index}>
              <Card
                sx={{
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1)`,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${feature.color}, ${feature.color}80)`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: '16px',
                        background: `${feature.color}15`,
                        mr: 2,
                        minWidth: 'fit-content',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                      }}
                    >
                      {feature.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {feature.highlights.map((highlight, highlightIndex) => (
                      <Box
                        key={highlightIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          bgcolor: `${feature.color}08`,
                          px: 2,
                          py: 0.5,
                          borderRadius: '20px',
                          border: `1px solid ${feature.color}20`,
                        }}
                      >
                        <CheckCircle
                          sx={{
                            fontSize: 14,
                            color: feature.color,
                            mr: 0.5,
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            color: feature.color,
                            fontWeight: 500,
                            fontSize: '0.85rem',
                          }}
                        >
                          {highlight}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          ))}
        </Box>
      </Container>
    </Box>

    {/* Testimonials Section */}
    <Box
      sx={{
        py: 8,
        background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.secondary.main}15 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: 'text.primary',
              }}
            >
              What Our Students Say
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Join thousands of successful students who found their perfect career path with CareerVista
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {/* Main Testimonial */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Slide in timeout={1000} direction="right">
              <Card
                sx={{
                  height: '100%',
                  background: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                    <FormatQuote
                      sx={{
                        fontSize: 48,
                        color: theme.palette.primary.main,
                        opacity: 0.3,
                        mr: 2,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          lineHeight: 1.6,
                          color: 'text.primary',
                        }}
                      >
                        "{testimonials[currentTestimonial].text}"
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar
                      src={testimonials[currentTestimonial].avatar}
                      sx={{
                        width: 60,
                        height: 60,
                        mr: 2,
                        border: `3px solid ${theme.palette.primary.main}`,
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 700,
                          color: 'text.primary',
                        }}
                      >
                        {testimonials[currentTestimonial].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                        }}
                      >
                        {testimonials[currentTestimonial].role}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Rating
                      value={testimonials[currentTestimonial].rating}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {testimonials[currentTestimonial].college} • {testimonials[currentTestimonial].stream}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Slide>
          </Grid>

          {/* Side Testimonials */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}>
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <Slide
                  key={index}
                  in
                  timeout={1200 + index * 200}
                  direction="left"
                >
                  <Card
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: currentTestimonial === index ? `2px solid ${theme.palette.primary.main}` : '2px solid transparent',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                      },
                    }}
                    onClick={() => setCurrentTestimonial(index)}
                  >
                    <CardContent sx={{ p: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Avatar
                          src={testimonial.avatar}
                          sx={{
                            width: 40,
                            height: 40,
                            mr: 1,
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              color: 'text.primary',
                            }}
                          >
                            {testimonial.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'text.secondary',
                            }}
                          >
                            {testimonial.college}
                          </Typography>
                        </Box>
                        <Rating
                          value={testimonial.rating}
                          readOnly
                          size="small"
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.4,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        "{testimonial.text}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Stats */}
        <Fade in timeout={1500}>
          <Box
            sx={{
              mt: 6,
              p: 4,
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 6, md: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    100+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Students Helped
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.success.main,
                      mb: 1,
                    }}
                  >
                    90%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Success Rate
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.warning.main,
                      mb: 1,
                    }}
                  >
                    200+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Colleges
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.secondary.main,
                      mb: 1,
                    }}
                  >
                    150+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Scholarships
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.info.main,
                      mb: 1,
                    }}
                  >
                    24/7
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    AI Support
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
    </>
  );
};

export default Home;


