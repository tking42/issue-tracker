import { Flex, Text } from '@radix-ui/themes';
import React from 'react'

import { Button } from "@radix-ui/themes";

import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";

interface Props {
    itemCount: number;
    pageSize: number;
    currentPage: number;
}

const Pagination = ({itemCount, pageSize, currentPage}: Props) => {

    const pageCount = Math.ceil(itemCount / pageSize)
    if (pageCount === 1) return null

  return (
    <Flex align='center' gap='2'>
        <Text size='2'>Page {currentPage} of {pageCount}</Text>
        <Button className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === 1}><DoubleArrowLeftIcon></DoubleArrowLeftIcon></Button>
        <Button className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === 1}><ChevronLeftIcon></ChevronLeftIcon></Button>
        <Button className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === pageCount}><ChevronRightIcon></ChevronRightIcon></Button>
        <Button className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === pageCount}><DoubleArrowRightIcon></DoubleArrowRightIcon></Button>
    </Flex>
  )
}

export default Pagination
