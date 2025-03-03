'use client'

import { Flex, Text } from '@radix-ui/themes';
import React from 'react'

import { Button } from "@radix-ui/themes";

import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { useSearchParams, useRouter } from 'next/navigation';

interface Props {
    itemCount: number;
    pageSize: number;
    currentPage: number;
}

const Pagination = ({itemCount, pageSize, currentPage}: Props) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const pageCount = Math.ceil(itemCount / pageSize)
    if (pageCount === 1) return null

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', page.toString())
        router.push('?' + params.toString())
    }

  return (
    <Flex align='center' gap='2'>
        <Text size='2'>Page {currentPage} of {pageCount}</Text>
        <Button onClick={() => changePage(1)} className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === 1}><DoubleArrowLeftIcon></DoubleArrowLeftIcon></Button>
        <Button onClick={() => changePage(currentPage - 1)} className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === 1}><ChevronLeftIcon></ChevronLeftIcon></Button>
        <Button onClick={() => changePage(currentPage + 1)} className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === pageCount}><ChevronRightIcon></ChevronRightIcon></Button>
        <Button onClick={() => changePage(pageCount)} className="hover:cursor-pointer" color="gray" variant="soft" disabled={currentPage === pageCount}><DoubleArrowRightIcon></DoubleArrowRightIcon></Button>
    </Flex>
  )
}

export default Pagination
