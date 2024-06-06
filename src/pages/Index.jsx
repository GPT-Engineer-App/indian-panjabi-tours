import { Container, Box, Heading, Text, VStack, HStack, Button, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box textAlign="center" py={10} bg="teal.500" color="white">
          <Heading as="h1" size="2xl">
            Explore Traditional Indian Male Panjabi
          </Heading>
          <Text fontSize="xl" mt={4}>
            Discover the elegance and heritage of traditional Indian male Panjabi attire.
          </Text>
        </Box>

        {/* Image Section */}
        <Box>
          <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMEluZGlhbiUyMG1hbGUlMjBQYW5qYWJpfGVufDB8fHx8MTcxNzY1MjUzOHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Traditional Indian Male Panjabi" borderRadius="md" />
        </Box>

        {/* About Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Our Tours
          </Heading>
          <Text fontSize="lg">Our tours offer a unique opportunity to explore the rich cultural heritage of India through its traditional male Panjabi attire. The Panjabi, a traditional Indian garment, is known for its intricate designs, vibrant colors, and exquisite craftsmanship. Join us on a journey to discover the history, cultural significance, and beauty of this timeless attire, and learn about the artisans who keep this tradition alive.</Text>
        </Box>

        {/* Call to Action Section */}
        <Box textAlign="center" py={10} bg="gray.100">
          <Heading as="h2" size="xl" mb={4}>
            Join Our Next Tour
          </Heading>
          <Text fontSize="lg" mb={6}>
            Sign up now to reserve your spot on our next tour and experience the elegance of traditional Indian male Panjabi.
          </Text>
          <Button colorScheme="teal" size="lg">
            Sign Up Now
          </Button>
        </Box>

        {/* Social Media Section */}
        <Box textAlign="center" py={4}>
          <Heading as="h2" size="lg" mb={4}>
            Follow Us
          </Heading>
          <HStack spacing={4} justify="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="twitter" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" colorScheme="pink" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
