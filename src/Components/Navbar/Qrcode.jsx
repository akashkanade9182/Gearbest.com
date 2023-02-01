import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,Button,
    PopoverCloseButton,ButtonGroup,Box,Image,Heading,Text,Flex,
  useDisclosure
  } from '@chakra-ui/react'


const Qrcode = () => {
    const { isOpen, onToggle, onClose } = useDisclosure()
  return (
    <>
      <Button mr={5} bgColor="transparent" color="white"onMouseOver={onToggle} onMouseLeave={onClose} >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-flip" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0v2ZM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11c.099 0 .197 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169 0 .003 0 .065-.13.187-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883-.228-.223-.535-.411-.882-.571ZM7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Z"/>
                    </svg>save 3$ with app <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <polyline points="6 9 12 15 18 9" />
</svg>
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
       
        <PopoverContent  w="400px" h="200px" left="30rem" top="45px" display={["none","none","none","flex"]}>
        <Heading as={'h4'} size="sm">Download App!</Heading>
                <Text>Save $3 with App & New User Only</Text>
                <Flex w="100%" justifyContent={"space-around"}>
                    <Image textAlign={'justify'} marginTop='15px' width='100px' src='https://imgs.search.brave.com/sQAGynG7zniztT33LJ-nymnJ8RdOzZpOd_TIG1JOGtw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvcXJfY29kZS9x/cl9jb2RlX1BORzYu/cG5n'></Image>
                    <Image textAlign={'justify'} marginTop='15px' width='150px' src="https://imgs.search.brave.com/1keJVoMCBk8TDk4PiQO0umNta3-XPrMg4qs4f1j-tR0/rs:fit:1200:989:1/g:ce/aHR0cHM6Ly92ZWN0/b3JpZmllZC5jb20v/aW1hZ2VzL2FwcC1z/dG9yZS1nb29nbGUt/cGxheS1pY29uLTM5/LnBuZw"></Image>
                </Flex>
         
        </PopoverContent>
      </Popover>
    </>

  )
}

export default Qrcode