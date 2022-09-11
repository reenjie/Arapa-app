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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function RenderPage() {
  return (
    <div>
      <Stack>
        <Box bg="white" shadow={"md"} height={"250px"} p={10} mt={10}>
          Map here
        </Box>
        <Box bg="white" mt={10}>
          <Container p={10} maxW="container.xxl">
            {/*   <Button variant={'outline'} size='sm' colorScheme={'teal'} mb={3}>Add Range</Button> */}
            <TableContainer>
              <Table variant="striped" colorScheme="facebook" size={"md"}>
                <Thead>
                  <Tr>
                    <Th>Schools</Th>
                    <Th>Location</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Western mindanao State university</Td>
                    <Td> Baliwasan road. zamboanga city</Td>
                    <Td>
                      <Link to="../Admin/Schoolinfo">
                        {" "}
                        <Button variant={"ghost"} size="sm" color={"green.500"}>
                          <i className="fas fa-edit"></i>
                        </Button>
                      </Link>
                      <Button variant={"ghost"} size="sm" color={"red.500"}>
                        <i className="fas fa-trash-can"></i>
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Table Data</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      </Stack>
    </div>
  );
}
function Schools(props) {
  return (
    <>
      <AdminLayout
        Sidebar_elements={<Sidebar selected={props.selected} />}
        Page_Contents={<RenderPage />}
        Page_title="SCHOOLS"
      />
    </>
  );
}

export default Schools;
