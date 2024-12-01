import Head from "next/head";
import { Flex, Text, Heading, Button, Link as ChakraLink, useMediaQuery, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { canSSRAuth } from "@/utils/canSSRAuth";
import { Sidebar } from "@/components/sidebar";
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { setupAPIClient } from "@/services/api";
import { ModalInfo } from "@/components/modal";

export interface ScheduleItem {
  id: string;
  customer: string;
  haircut: {
    id: string;
    name: string;
    price: string | number;
    user_id: string;
  }
}

interface DashboardProps{
  schedule: ScheduleItem[]
}

export default function Dashboard({ schedule }: DashboardProps) {
  const [list, setList] = useState(schedule)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [service, setService] = useState<ScheduleItem>()
  
  function handleOpenModal(item: ScheduleItem) {
    setService(item)
    onOpen()
  }

  async function handleFinish(id: string) {
    try {
      const apiClient = setupAPIClient()
      await apiClient.delete('/schedule', {
        params: {
          schedule_id: id
        }
      })
      const filterItem = list.filter(item => {
        return (item?.id !== id)
      })

      setList(filterItem);
      onClose();
    } catch (error) {
      console.log(error)
      onClose()
      alert("Erro ai finalizar este serviço")
    }
  }

  return(
    <>
      <Head>
        <title>BarberPRO - Minha barbearia</title>
      </Head>
      <Sidebar>
        <Flex background="barber.900" height="100vh" direction="column" align="flex-start" justify="flex-start">
          <Flex w="100%" direction="row" align="center" justify="flex-start">
            <Heading fontSize="3xl" mt={4} mb={4} mr={4}>
              Agenda
            </Heading>
            <Link href="/new">
              <Button bg="gray.700" _hover={{ background: "gray.700" }} color="white">
                Registrar
              </Button>
            </Link>
          </Flex>
          {list.map(item => (
            <ChakraLink onClick={ () => handleOpenModal(item) } key={item?.id} w="100%" m={0} p={0} mt={1} bg="transparent" style={{ textDecoration: 'none' }}>
              <Flex direction={isMobile ? "column" : "row"} align={isMobile ? "flex-start" : "center"} rounded={4} mb={2} justify="space-between" w="100%" bg="barber.400">
                <Flex direction="row" mb={isMobile ? 2 : 0} align="center" justify="center">
                  <IoMdPerson size={28} color="#f1f1f1" />
                  <Text fontWeight="bold" ml={4} noOfLines={1}>
                    {item?.customer}
                  </Text>
                </Flex>
                <Text mb={isMobile ? 2 : 0} fontWeight="bold">
                  {item?.haircut?.name}
                </Text>
                <Text mb={isMobile ? 2 : 0} fontWeight="bold">
                  R$ {item?.haircut?.price}
                </Text>
              </Flex>
            </ChakraLink>
          ))}
        </Flex>
      </Sidebar>
      <ModalInfo
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        data={service}
        finishService={ () => handleFinish(service?.id) }
      />
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  try {
    const apiClient = setupAPIClient(ctx)
    const response = await apiClient.get('/schedule')
    return {
      props: {
        schedule: response.data
      }
    }
  } catch (error) {
    console.log(error)
    return {
      props: {
        schedule: []
      }
    }
  }

})