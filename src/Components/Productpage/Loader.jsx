import React from 'react'
import {Box,SkeletonCircle,SkeletonText} from "@chakra-ui/react"

const Loader = () => {
  return (
    <Box  padding="3" boxShadow="lg" bg="gray.50">
    <SkeletonCircle m='auto' size="20" />
    <SkeletonText
      mt="4"
      noOfLines={6}
      spacing="4"
      skeletonHeight="5"
    />
  </Box>
  )
}

export default Loader