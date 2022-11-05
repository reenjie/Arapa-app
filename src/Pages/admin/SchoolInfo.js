import React from "react";
import AdminLayout from "../../components/layouts/admin_layout";
import Sidebar from "./Sidebar";
import {
  Heading,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Badge,
  Button,
  Stack,
  SimpleGrid,
  Text,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function RenderPage() {
  return (
    <div>
      <Container mt={10} maxW="2xxl">
        <Box shadow={"md"} p="10" bg="white" mt={10} mb={20}>
          <SimpleGrid minChildWidth="300px" columns={2} spacing="10px">
            <Box>
              <Stack direction={"column"}>
                <Box bg={"blackAlpha.500"} w="100%" height="300px">
                  Map Heere
                </Box>
                <Box w="100%">
                  <Stack direction={"column"} width="100%" columns={2}>
                    <Box>
                      <Text size={"md"} fontSize="16">
                        Email Address :
                      </Text>
                    </Box>
                    <Box>
                      <Input placeholder="" size="sm" w={"100%"} />
                    </Box>
                  </Stack>

                  {/*   <Stack mt={2} direction={"row"} width="100%" columns={2}>
                    <Box width="25%">
                      <Text size={"md"} fontSize="16">
                        Password :
                      </Text>
                    </Box>
                    <Box width="80%">
                      <Input placeholder="" size="sm" w={"100%"} />
                    </Box>
                  </Stack> */}

                  <Box mt={5}>
                    <Text color={"teal.600"} mb={10} fontSize="16">
                      School IDs (For Verification)
                    </Text>
                    <Stack direction={"row"} spacing={4}>
                      <Box bg="tomato" height={"80px"} p="10"></Box>
                      <Box bg="tomato" height={"80px"} p="10"></Box>
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Box>
                <Text size={"md"} fontSize="16">
                  School Name :
                </Text>
              </Box>
              <Box mb={2}>
                <Input placeholder="" size="sm" w={"100%"} />
              </Box>

              <Box>
                <Text size={"md"} fontSize="16">
                  School Address :
                </Text>
              </Box>
              <Box mb={2}>
                <Input placeholder="" size="sm" w={"100%"} />
              </Box>
              <Box>
                <Text size={"md"} fontSize="16">
                  Website :
                </Text>
              </Box>
              <Box mb={2}>
                <Input placeholder="" size="sm" w={"100%"} />
              </Box>
              <Box>
                <Text size={"md"} fontSize="16">
                  Description :
                </Text>
              </Box>
              <Box mb={2}>
                <Textarea
                  placeholder="Type description here.."
                  resize={"none"}
                />
              </Box>

              <Box>
                <Text size={"md"} fontSize="16">
                  User Full name :
                </Text>
              </Box>
              <Box mb={2}>
                <Input placeholder="" size="sm" w={"100%"} />
              </Box>

              <Box>
                <Text size={"md"} fontSize="16">
                  Contact :
                </Text>
              </Box>
              <Box mb={2}>
                <Input placeholder="" size="sm" w={"100%"} />
              </Box>

              <Box mt={5}>
                <Text color={"teal.600"} mb={10} fontSize="16">
                  School Pictures 2-3
                </Text>
                <Stack direction={"row"} spacing={4}>
                  <Box bg="tomato" height={"80px"} p="10"></Box>
                  <Box bg="tomato" height={"80px"} p="10"></Box>
                  <Box bg="tomato" height={"80px"} p="10"></Box>
                </Stack>
              </Box>

              <Box mt="5" float={"right"}>
                <Button size={"sm"} variant={"solid"} colorScheme="teal">
                  Save
                </Button>
                <Button size={"sm"} ml={2} variant={"solid"} colorScheme="teal">
                  Back
                </Button>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  );
}
function SchoolInfo(props) {
  return (
    <>
      <AdminLayout
        Sidebar_elements={<Sidebar selected={props.selected} />}
        Page_Contents={<RenderPage />}
        Page_title="School-Info"
      />
    </>
  );
}

export default SchoolInfo;