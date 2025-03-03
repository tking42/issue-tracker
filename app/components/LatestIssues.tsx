import { prisma } from '@/prisma/client'
import { Card, Flex, Heading, Table } from '@radix-ui/themes'
import React from 'react'
import NextLink from 'next/link'
import IssueStatusBadge from './IssueStatusBadge'

const LatestIssues = async () => {

   const issues = await prisma.issue.findMany({
        orderBy: {createdAt: 'desc'},
        take: 5
    })


  return (
    <div>
        <Card>
            <Heading size='4' mb='3'>Latest Issues</Heading>
            <Table.Root>
            <Table.Body>
                {issues.map((issue) => (
                    <Table.Row key={issue.id}>
                    <Table.Cell>
                
                            <Flex direction='column' align='start' gap='2'>
                                <NextLink href={`/issues/${issue.id}`}>{issue.title}</NextLink>
                                <IssueStatusBadge status={issue.status}/>
                            </Flex>
            
                    </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
            </Table.Root>
        </Card>
     
    </div>
  )
}

export default LatestIssues
