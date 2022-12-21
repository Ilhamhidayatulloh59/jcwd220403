import {
    Box,
    Text,
    Flex,
    Center,
    Avatar,
    HStack,
    VStack,
    Heading,
    Divider,
    Button,
    FormControl,
    FormLabel,
    Input,
    Select,
    useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";

function ProfileSetting() {
    const [open, setOpen] = useState(false)
    const [isMobile] = useMediaQuery("(max-width: 481px)")

    return (
        <>
        <Center>
            {isMobile ? 
            <>
            <Box w="90vw" m="4" mb="20">
                <Box w="90vw" h="70vh">
                    <HStack justify="space-between">
                        <Box>
                            <Heading fontSize="lg">Halo, saya Ilham</Heading>
                            <Text fontSize="sm" color="gray.600">Bergabung di tahun 2022</Text>
                            <Text fontSize="sm" mt="4" as="u" _hover={{ cursor: "pointer" }} onClick={() => setOpen(true)}>Edit Profile</Text>
                        </Box>
                        <VStack>
                            <Avatar size='md' name='Segun Adebayo'/>
                            <Text _hover={{ cursor: "pointer" }} fontSize="sm">Perbarui Foto</Text>
                        </VStack>
                    </HStack>
                    <Box>
                        <Heading fontSize="lg" mb="2" mt="8">Verifikasi identitas</Heading>
                        <Text fontSize="sm">Tunjukkan keaslian identitas Anda kepada semua orang dengan lencana verifikasi identitas.</Text>
                        <Button size="sm" mt="4" mb="4">Dapatkan Lencana</Button>
                    </Box>
                    <Divider/>
                {open ? 
                <>
                    <VStack spacing={4} align="flex-start" mt="8">
                        <FormControl>
                            <FormLabel htmlFor="email">Name</FormLabel>
                                <Input defaultValue="saya" type="text" name="bio" variant="outline"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Birthday</FormLabel>
                                <Input defaultValue="2000-09-05" type="date" name="lokasi" variant="outline"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Gender</FormLabel>
                            <Select placeholder='Gender'>
                                <option value='option1'>Laki-laki</option>
                                <option value='option2'>Perempuan</option>
                            </Select>
                        </FormControl>
                    </VStack>
                    <HStack w="90vw" mt="8" justify="space-between" pb="20">
                        <Text fontWeight="bold" _hover={{ cursor: "pointer" }} onClick={() => setOpen(false)} >Batalkan</Text>
                        <Button colorScheme='teal' variant='outline' w="20vw">Edit</Button>
                    </HStack>
                </>
                : null }
                </Box>
            </Box>
            </>
            :
            <Flex justifyContent="space-evenly" w="90vw">
                <VStack w="22vw" borderRadius="xl" border="1px" borderColor="gray.400" p="4">
                    <Avatar size='2xl' name='Segun Adebayo'/>
                    <Text>Perbarui Foto</Text>
                    <Box>
                        <Heading fontSize="xl" mb="2" mt="14">Verifikasi identitas</Heading>
                        <Text>Tunjukkan keaslian identitas Anda kepada semua orang dengan lencana verifikasi identitas.</Text>
                        <Button mt="4" mb="4">Dapatkan Lencana</Button>
                    </Box>
                    <Divider/>
                </VStack>
                <Box w="50vw" h="70vh">
                    <Heading>Halo, saya Ilham</Heading>
                    <Text fontSize="sm" color="gray.600">Bergabung di tahun 2022</Text>
                    <Text fontSize="sm" mt="4" as="u" _hover={{ cursor: "pointer" }} onClick={() => setOpen(true)}>Edit Profile</Text>
                {open ? 
                <>
                    <VStack spacing={4} align="flex-start" mt="8">
                        <FormControl>
                            <FormLabel htmlFor="email">Name</FormLabel>
                                <Input defaultValue="saya" type="text" name="bio" variant="outline"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Birthday</FormLabel>
                                <Input defaultValue="2000-09-05" type="date" name="lokasi" variant="outline"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="password">Gender</FormLabel>
                            <Select placeholder='Gender'>
                                <option value='option1'>Laki-laki</option>
                                <option value='option2'>Perempuan</option>
                            </Select>
                        </FormControl>
                    </VStack>
                    <HStack w="50vw" justify="space-between" mt="10">
                        <Text fontWeight="bold" _hover={{ cursor: "pointer" }} onClick={() => setOpen(false)} >Batalkan</Text>
                        <Button colorScheme='teal' variant='outline' w="8vw">Edit</Button>
                    </HStack>
                </>
                : null }
                </Box>
            </Flex> 
            }
        </Center>
        </>
    );
}

export default ProfileSetting